package com.leoni.billing.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class UpdateUserRequest {
    @NotBlank private String firstName;
    @NotBlank private String lastName;
    @Email @NotBlank private String email;
    private String department;
    @Size(min = 8)
    private String newPassword;
}
