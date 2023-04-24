package com.endava.stocks.api.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Entity
@Table(name = "stocks")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class StockItem {

    public StockItem(String title, String description, String director, Integer year) {
        this.title = title;
        this.description = description;
        this.director = director;
        this.year = year;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull(message = "title should not be null")
    @NotEmpty(message = "title should not be empty")
    @Column(name = "title")
    private String title;

    @NotNull(message = "description should not be null")
    @NotEmpty(message = "description should not be empty")
    @Column(name = "description")
    private String description;

    @NotNull(message = "director should not be null")
    @NotEmpty(message = "director should not be empty")
    @Column(name = "director")
    private String director;

    @NotNull(message = "year should not be null")
    @Min(value = 1950, message = "year should be greater than 1950")
    @Column(name = "year")
    private Integer year;
}
