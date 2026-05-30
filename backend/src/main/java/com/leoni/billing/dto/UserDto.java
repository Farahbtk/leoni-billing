package com.leoni.billing.dto;

import com.leoni.billing.entity.User;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
public class UserDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String role;
    private String status;
    private String department;
    private String jobTitle;
    private String phone;
    private LocalDateTime createdAt;

    public static UserDto from(User user) {
        return UserDto.builder()
                .id(user.getId())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .role(user.getRole().name())
                .status(user.getStatus().name())
                .department(user.getDepartment())
                .jobTitle(user.getJobTitle())
                .phone(user.getPhone())
                .createdAt(user.getCreatedAt())
                .build();
    }
}
