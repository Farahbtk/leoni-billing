package com.leoni.billing.service;

import com.leoni.billing.dto.ChangePasswordRequest;
import com.leoni.billing.dto.UpdateProfileRequest;
import com.leoni.billing.dto.UserDto;
import com.leoni.billing.dto.UserStatsDto;
import com.leoni.billing.entity.User;
import com.leoni.billing.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
@Transactional
public class UserProfileService {

    private final UserRepository userRepo;
    private final PasswordEncoder passwordEncoder;

    public UserProfileService(UserRepository userRepo, PasswordEncoder passwordEncoder) {
        this.userRepo        = userRepo;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional(readOnly = true)
    public UserDto getUserProfile(String email) {
        return UserDto.from(findByEmail(email));
    }

    public UserDto updateProfile(String email, UpdateProfileRequest req) {
        User user = findByEmail(email);
        if (!user.getEmail().equalsIgnoreCase(req.getEmail()) &&
                userRepo.existsByEmail(req.getEmail())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Email already in use");
        }
        user.setFirstName(req.getFirstName());
        user.setLastName(req.getLastName());
        user.setEmail(req.getEmail());
        user.setDepartment(req.getDepartment());
        user.setJobTitle(req.getJobTitle());
        user.setPhone(req.getPhone());
        return UserDto.from(userRepo.save(user));
    }

    public void changePassword(String email, ChangePasswordRequest req) {
        User user = findByEmail(email);
        if (!passwordEncoder.matches(req.getCurrentPassword(), user.getPassword())) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Current password is incorrect");
        }
        if (passwordEncoder.matches(req.getNewPassword(), user.getPassword())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "New password must be different from current password");
        }
        user.setPassword(passwordEncoder.encode(req.getNewPassword()));
        userRepo.save(user);
    }

    @Transactional(readOnly = true)
    public UserStatsDto getStats() {
        List<User> managers = userRepo.findByRole(User.Role.BILLING_MANAGER);
        long active   = managers.stream().filter(u -> u.getStatus() == User.Status.ACTIVE).count();
        long inactive = managers.stream().filter(u -> u.getStatus() == User.Status.INACTIVE).count();
        String lastLogin = LocalDateTime.now()
                .format(DateTimeFormatter.ofPattern("dd MMM yyyy, HH:mm"));
        return UserStatsDto.builder()
                .total(managers.size())
                .active(active)
                .inactive(inactive)
                .lastLogin(lastLogin)
                .build();
    }

    private User findByEmail(String email) {
        return userRepo.findByEmail(email)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
    }
}
