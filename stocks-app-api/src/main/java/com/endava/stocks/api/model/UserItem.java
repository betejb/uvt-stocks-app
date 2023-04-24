package com.endava.stocks.api.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "user")
public class UserItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @NotEmpty
    @Email(message = "Email should be valid")
    @Column(name = "email")
    private String email;

    @NotNull
    @NotEmpty
    @Column(name = "password")
    private String password;

    @NotNull
    @NotEmpty
    @Column(name="username")
    private String username;
}
