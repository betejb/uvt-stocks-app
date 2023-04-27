package com.endava.stocks.api.controller;

import com.endava.stocks.api.model.UserItem;
import com.endava.stocks.api.response.ApiResponse;
import com.endava.stocks.api.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import java.util.Arrays;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(path = "/register")
    public ApiResponse registerUser(@Valid @RequestBody UserItem userItem) {
        System.out.println("registerUser URL called...");
        return ApiResponse.builder()
                .status(HttpStatus.OK.value())
                .message("User registered successfully!")
                .data(Arrays.asList(userService.registerUser(userItem)))
                .build();
    }

    @PostMapping(path = "/login")
    public ApiResponse loginUser(@RequestBody UserItem userItem) {
        System.out.println("loginUser URL called...");
        return ApiResponse.builder()
                .status(HttpStatus.OK.value())
                .message("User successfully logged in!")
                .data(Arrays.asList(userService.loginUser(userItem)))
                .build();
    }
}
