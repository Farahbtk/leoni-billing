package com.leoni.billing.service;

import com.leoni.billing.entity.Client;
import com.leoni.billing.repository.ClientRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ClientService {

    private final ClientRepository repo;

    public ClientService(ClientRepository repo) {
        this.repo = repo;
    }

    @Transactional(readOnly = true)
    public List<Client> findAll() {
        return repo.findAll();
    }

    @Transactional(readOnly = true)
    public Client findById(Long id) {
        return repo.findById(id).orElseThrow(() -> new RuntimeException("Client not found: " + id));
    }

    public Client save(Client client) {
        return repo.save(client);
    }

    public Client update(Long id, Client updated) {
        Client existing = findById(id);
        existing.setName(updated.getName());
        existing.setCountry(updated.getCountry());
        existing.setIndustry(updated.getIndustry());
        existing.setStatus(updated.getStatus());
        existing.setCollaborationSince(updated.getCollaborationSince());
        existing.setCollaborationState(updated.getCollaborationState());
        existing.setContactEmail(updated.getContactEmail());
        existing.setContactPhone(updated.getContactPhone());
        existing.setCreditLimit(updated.getCreditLimit());
        existing.setPaymentTermsDays(updated.getPaymentTermsDays());
        existing.setRiskProfile(updated.getRiskProfile());
        existing.setAverageDso(updated.getAverageDso());
        return repo.save(existing);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
