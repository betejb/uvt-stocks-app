package com.endava.stocks.api.response;

import lombok.Builder;
import lombok.Getter;
import org.springframework.http.HttpStatus;

import java.util.List;

@Getter
@Builder
public class ApiResponse<T> {
    private Integer status;
    private String message;
    private List<T> data;

    public ApiResponse(Integer status, String message, List<T> data) {
        this.status = status;
        this.message = message;
        this.data = data;
    }

    public ApiResponse(String message, List<T> data) {
        this.status = HttpStatus.OK.value();
        this.message = message;
        this.data = data;
    }
}
