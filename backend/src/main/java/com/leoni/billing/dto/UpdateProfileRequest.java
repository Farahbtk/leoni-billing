package com.leoni.billing.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class UpdateProfileRequest {
    @NotBlank private String firstName;
    @NotBlank private String lastName;
    @Email @NotBlank private String email;
    private String department;
    private String jobTitle;
    private String phone;
}
