package com.leoni.billing.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class JwtResponse {
    private String token;
    private Long   id;
    private String firstName;
    private String lastName;
    private String email;
    private String role;
}
