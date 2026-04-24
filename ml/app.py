from flask import Flask, request, jsonify
from flask_cors import CORS
from model import predict_risk

app = Flask(__name__)
CORS(app)


@app.route('/health', methods=['GET'])
def health():
    return jsonify({'status': 'ok', 'service': 'leoni-billing-ml'})


@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json(force=True)
    if not data or 'invoices' not in data:
        return jsonify({'error': 'Missing invoices payload'}), 400

    results = [predict_risk(inv) for inv in data['invoices']]
    return jsonify(results)


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)
