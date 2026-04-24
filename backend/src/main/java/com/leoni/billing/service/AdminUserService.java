package com.leoni.billing.service;

import com.leoni.billing.dto.CreateUserRequest;
import com.leoni.billing.dto.UpdateUserRequest;
import com.leoni.billing.dto.UserDto;
import com.leoni.billing.entity.User;
import com.leoni.billing.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class AdminUserService {

    private final UserRepository userRepo;
    private final PasswordEncoder passwordEncoder;

    public AdminUserService(UserRepository userRepo, PasswordEncoder passwordEncoder) {
        this.userRepo = userRepo;
        this.passwordEncoder = passwordEncoder;
    }

    @Transactional(readOnly = true)
    public List<UserDto> getAllManagers() {
        return userRepo.findByRole(User.Role.BILLING_MANAGER)
                .stream().map(UserDto::from).collect(Collectors.toList());
    }

    public UserDto createManager(CreateUserRequest req) {
        if (userRepo.existsByEmail(req.getEmail())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Email already in use");
        }
        User user = User.builder()
                .firstName(req.getFirstName())
                .lastName(req.getLastName())
                .email(req.getEmail())
                .password(passwordEncoder.encode(req.getPassword()))
                .role(User.Role.BILLING_MANAGER)
                .status(User.Status.ACTIVE)
                .department(req.getDepartment())
                .build();
        return UserDto.from(userRepo.save(user));
    }

    public UserDto updateManager(Long id, UpdateUserRequest req) {
        User user = findManagerById(id);
        // Check email uniqueness if it changed
        if (!user.getEmail().equalsIgnoreCase(req.getEmail()) &&
                userRepo.existsByEmail(req.getEmail())) {
            throw new ResponseStatusException(HttpStatus.CONFLICT, "Email already in use");
        }
        user.setFirstName(req.getFirstName());
        user.setLastName(req.getLastName());
        user.setEmail(req.getEmail());
        user.setDepartment(req.getDepartment());
        return UserDto.from(userRepo.save(user));
    }

    public UserDto toggleStatus(Long id) {
        User user = findManagerById(id);
        user.setStatus(user.getStatus() == User.Status.ACTIVE
                ? User.Status.INACTIVE : User.Status.ACTIVE);
        return UserDto.from(userRepo.save(user));
    }

    public void deleteManager(Long id) {
        User user = findManagerById(id);
        userRepo.delete(user);
    }

    private User findManagerById(Long id) {
        User user = userRepo.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
        if (user.getRole() == User.Role.ADMIN) {
            throw new ResponseStatusException(HttpStatus.FORBIDDEN, "Cannot modify admin accounts");
        }
        return user;
    }
}
