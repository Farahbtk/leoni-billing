package com.leoni.billing.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserStatsDto {
    private long total;
    private long active;
    private long inactive;
    private String lastLogin;
}
