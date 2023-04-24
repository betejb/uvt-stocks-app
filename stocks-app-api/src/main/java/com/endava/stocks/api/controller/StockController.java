package com.endava.stocks.api.controller;

import com.endava.stocks.api.model.StockItem;
import com.endava.stocks.api.response.ApiResponse;
import com.endava.stocks.api.response.StockResponse;
import com.endava.stocks.api.service.StockService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
public class StockController {

    private final StockService stockService;

    public StockController(StockService stockService) {
        this.stockService = stockService;
    }

    @GetMapping(path = "/getAllByTitle/{title}")
    public ApiResponse getAllBy(@PathVariable String title) {
        return new ApiResponse(HttpStatus.OK.value(), "Un string", stockService.findAllBy(title));
    }

    @GetMapping(path = "/getAllByYear/{year}")
    public ApiResponse getAllByYear(@PathVariable int year) {
        return new ApiResponse(HttpStatus.OK.value(), "Un string", stockService.findByYearGreaterThan(year));
    }

    @PostMapping(path = "/stock")
    public ApiResponse sendMovie(@Valid @RequestBody StockItem movie) {
        System.out.println("Sending new movie to the database...");
        return ApiResponse.<StockResponse>builder()
                .status(HttpStatus.OK.value())
                .message("Movie added to the database")
                .data(stockService.sendMovie(movie))
                .build();
    }

    @PutMapping(path = "/movie/{id}")
    public ApiResponse updateMovie(@PathVariable Long id, @RequestBody StockItem movie) {
        System.out.println("Updating movie with " + id + " in the database... ");
        return ApiResponse.<StockResponse>builder()
                .status(HttpStatus.OK.value())
                .message("Movie updated successfully!")
                .data(stockService.updateMovie(id, movie))
                .build();
    }

    @DeleteMapping(path = "/movie/{id}")
    public ApiResponse deleteMovie(@PathVariable Long id) {
        System.out.println("Deleting movie with "+ id + " from the database...");
        return ApiResponse.<StockResponse>builder()
                .status(HttpStatus.OK.value())
                .message("Movie deleted successfully!")
                .data(stockService.deleteMovie(id))
                .build();
    }

    @GetMapping(path = "/movie")
    public ApiResponse loadMovies() {
        System.out.println("Getting the list of movies from the database...");
        return ApiResponse.<StockResponse>builder()
                .status(HttpStatus.OK.value())
                .message("Getting the list of movies from the database...")
                .data(stockService.loadMovies())
                .build();
    }
}
