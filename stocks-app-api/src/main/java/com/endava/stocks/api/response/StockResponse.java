package com.endava.stocks.api.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Builder
public class StockResponse {
    private Long id;
    private String title;
    private String description;
    private String director;
    private Integer year;
}
