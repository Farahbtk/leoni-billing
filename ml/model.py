"""
Risk prediction model for LEONI Billing.

In production this module loads a trained XGBoost model from disk.
For development/demo it runs a deterministic rule-based scorer that
mimics XGBoost output and produces SHAP-style feature attributions.
"""

import os
import numpy as np

# ── Optional: load a real XGBoost model if one exists ────────────────────────
_MODEL = None
_MODEL_PATH = os.path.join(os.path.dirname(__file__), 'xgboost_risk_model.pkl')

try:
    import pickle
    if os.path.exists(_MODEL_PATH):
        with open(_MODEL_PATH, 'rb') as f:
            _MODEL = pickle.load(f)
        print(f"[ML] Loaded XGBoost model from {_MODEL_PATH}")
    else:
        print("[ML] No saved model found — using rule-based fallback scorer")
except Exception as e:
    print(f"[ML] Could not load model ({e}) — using rule-based fallback scorer")


# ── Public API ────────────────────────────────────────────────────────────────

def predict_risk(invoice: dict) -> dict:
    """
    Return risk prediction for a single invoice dict.

    Expected keys:
        invoice_id, amount, payment_terms, days_overdue,
        client_avg_dso, client_overdue_count, client_risk_profile
    """
    if _MODEL is not None:
        return _predict_xgboost(invoice)
    return _predict_rules(invoice)


# ── XGBoost path ──────────────────────────────────────────────────────────────

def _predict_xgboost(invoice: dict) -> dict:
    import pandas as pd
    profile_map = {'LOW': 0, 'MEDIUM': 1, 'HIGH': 2}
    features = pd.DataFrame([{
        'days_overdue':          float(invoice.get('days_overdue', 0)),
        'payment_terms':         float(invoice.get('payment_terms', 30)),
        'client_avg_dso':        float(invoice.get('client_avg_dso', 30)),
        'client_overdue_count':  float(invoice.get('client_overdue_count', 0)),
        'amount':                float(invoice.get('amount', 0)),
        'client_risk_profile':   profile_map.get(
                                     invoice.get('client_risk_profile', 'LOW'), 0),
    }])

    risk_score = float(_MODEL.predict_proba(features)[0][1])
    risk_level = _score_to_level(risk_score)

    shap_factors = _shap_explanation(invoice, risk_score)
    return _build_result(invoice.get('invoice_id'), risk_score, risk_level, shap_factors)


# ── Rule-based fallback ───────────────────────────────────────────────────────

def _predict_rules(invoice: dict) -> dict:
    days_overdue        = float(invoice.get('days_overdue', 0))
    payment_terms       = float(invoice.get('payment_terms', 30))
    client_avg_dso      = float(invoice.get('client_avg_dso', 30))
    client_overdue_cnt  = float(invoice.get('client_overdue_count', 0))
    amount              = float(invoice.get('amount', 0))
    profile             = invoice.get('client_risk_profile', 'LOW')

    base              = 0.10
    overdue_impact    = min(0.40, days_overdue * 0.013)
    dso_ratio         = client_avg_dso / max(payment_terms, 1)
    dso_impact        = min(0.20, (dso_ratio - 1.0) * 0.15) if dso_ratio > 1 else 0.0
    history_impact    = min(0.15, client_overdue_cnt * 0.02)
    profile_impact    = {'LOW': 0.02, 'MEDIUM': 0.10, 'HIGH': 0.20}.get(profile, 0.05)
    amount_norm       = min(1.0, amount / 500_000)
    amount_impact     = amount_norm * 0.05
    terms_impact      = min(0.05, max(0.0, (payment_terms - 30) * 0.001))

    risk_score  = float(np.clip(
        base + overdue_impact + dso_impact + history_impact
        + profile_impact + amount_impact + terms_impact,
        0.0, 1.0
    ))
    risk_level  = _score_to_level(risk_score)

    shap_factors = sorted([
        {'feature': 'Days Overdue',        'value': days_overdue,       'impact': round(overdue_impact, 4)},
        {'feature': 'Client Risk Profile', 'value': profile_impact,     'impact': round(profile_impact, 4)},
        {'feature': 'Client Average DSO',  'value': client_avg_dso,     'impact': round(dso_impact, 4)},
        {'feature': 'Overdue History',     'value': client_overdue_cnt, 'impact': round(history_impact, 4)},
        {'feature': 'Invoice Amount',      'value': round(amount_norm, 4), 'impact': round(amount_impact, 4)},
        {'feature': 'Payment Terms',       'value': payment_terms,      'impact': round(terms_impact, 4)},
        {'feature': 'Base Risk',           'value': 1.0,                'impact': round(base, 4)},
    ], key=lambda x: x['impact'], reverse=True)

    return _build_result(invoice.get('invoice_id'), risk_score, risk_level, shap_factors)


# ── helpers ───────────────────────────────────────────────────────────────────

def _score_to_level(score: float) -> str:
    if score >= 0.70:
        return 'HIGH'
    if score >= 0.40:
        return 'MEDIUM'
    return 'LOW'


def _shap_explanation(invoice: dict, risk_score: float) -> list:
    """Placeholder SHAP values when using the real model without SHAP installed."""
    return [
        {'feature': 'Risk Score', 'value': round(risk_score, 4), 'impact': round(risk_score, 4)},
    ]


def _build_result(invoice_id, risk_score: float, risk_level: str, shap_factors: list) -> dict:
    return {
        'invoiceId':   invoice_id,
        'riskScore':   round(risk_score, 4),
        'riskLevel':   risk_level,
        'shapFactors': shap_factors,
    }
