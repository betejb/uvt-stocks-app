package com.endava.stocks.api.service;

import com.endava.stocks.api.exception.BadCredentialsException;
import com.endava.stocks.api.exception.UserAlreadyExistsException;
import com.endava.stocks.api.model.UserItem;
import com.endava.stocks.api.repository.UserRepository;
import com.endava.stocks.api.response.UserResponse;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserResponse registerUser(UserItem userItem) {
        Optional<UserItem> userFoundInDb = userRepository.findOneByEmail(userItem.getEmail());

        if (userFoundInDb.isPresent()) {
            throw new UserAlreadyExistsException("User already exists in the database!");
        }

        UserItem registeredUser = userRepository.save(userItem);
        return UserResponse.builder()
                .id(registeredUser.getId())
                .email(registeredUser.getEmail())
                .username(registeredUser.getUsername())
                .build();
    }

    public UserResponse loginUser(UserItem userItem) {
        System.out.println("login user");
        Optional<UserItem> userFoundInDb = userRepository.findOneByEmail(userItem.getEmail());

        if (userFoundInDb.isPresent()) {
            if (userFoundInDb.get().getEmail().equals(userItem.getEmail()) &&
                    userFoundInDb.get().getPassword().equals(userItem.getPassword())) {

                UserItem user = userFoundInDb.get();
                return UserResponse.builder()
                        .id(user.getId())
                        .email(user.getEmail())
                        .username(user.getUsername())
                        .roles(Arrays.asList("DEFAULT", "ADMIN"))
                        .passwordExpiryDate("31.12.2023")
                        .build();
            }
        }

        throw new BadCredentialsException("Bad credentials!");
    }
}
