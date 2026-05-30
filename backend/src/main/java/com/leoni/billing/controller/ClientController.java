package com.leoni.billing.controller;

import com.leoni.billing.entity.Client;
import com.leoni.billing.service.ClientService;
import jakarta.validation.Valid;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.nio.charset.StandardCharsets;
import java.util.List;

@RestController
@RequestMapping("/api/clients")
public class ClientController {

    private final ClientService clientService;

    public ClientController(ClientService clientService) {
        this.clientService = clientService;
    }

    @GetMapping
    public ResponseEntity<List<Client>> getAll() {
        return ResponseEntity.ok(clientService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Client> getById(@PathVariable Long id) {
        return ResponseEntity.ok(clientService.findById(id));
    }

    @PostMapping
    public ResponseEntity<Client> create(@Valid @RequestBody Client client) {
        return ResponseEntity.ok(clientService.save(client));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Client> update(@PathVariable Long id, @Valid @RequestBody Client client) {
        return ResponseEntity.ok(clientService.update(id, client));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        clientService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/export")
    public ResponseEntity<byte[]> exportCsv() {
        List<Client> clients = clientService.findAll();
        StringBuilder csv = new StringBuilder("ID,Name,Code,Country,Industry,Status,Collaboration Since,Collaboration State\n");
        for (Client c : clients) {
            csv.append(String.join(",",
                String.valueOf(c.getId()),
                "\"" + c.getName() + "\"",
                c.getCode() != null ? c.getCode() : "",
                c.getCountry() != null ? c.getCountry() : "",
                c.getIndustry() != null ? c.getIndustry() : "",
                c.getStatus().name(),
                c.getCollaborationSince() != null ? c.getCollaborationSince().toString() : "",
                c.getCollaborationState() != null ? c.getCollaborationState().name() : ""
            )).append("\n");
        }
        byte[] bytes = csv.toString().getBytes(StandardCharsets.UTF_8);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_TYPE, "text/csv; charset=UTF-8")
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=clients.csv")
                .contentLength(bytes.length)
                .body(bytes);
    }
}
