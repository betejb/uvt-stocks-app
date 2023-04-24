package com.endava.stocks.api.response;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class UserResponse {
    private Long id;

    private String email;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private List<String> roles;

    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String passwordExpiryDate;
}
