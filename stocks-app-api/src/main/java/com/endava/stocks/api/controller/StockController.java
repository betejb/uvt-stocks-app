package com.endava.stocks.api.controller;

import com.endava.stocks.api.model.StockItem;
import com.endava.stocks.api.response.ApiResponse;
import com.endava.stocks.api.response.StockResponse;
import com.endava.stocks.api.service.StockService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/stocks")
@CrossOrigin(origins = "http://localhost:4200")
public class StockController {

    private final StockService stockService;

    public StockController(StockService stockService) {
        this.stockService = stockService;
    }

    @GetMapping(path = "/getAllByName/{name}")
    public ApiResponse getAllBy(@PathVariable String name) {
        return new ApiResponse(HttpStatus.OK.value(), "Un string", stockService.findAllBy(name));
    }

    @GetMapping(path = "/getAllByYear/{year}")
    public ApiResponse getAllByYear(@PathVariable int year) {
        return new ApiResponse(HttpStatus.OK.value(), "Un string", stockService.findByYearGreaterThan(year));
    }

    @PostMapping(path = "/stock")
    public ApiResponse sendStock(@Valid @RequestBody StockItem stockItem) {
        System.out.println("Sending new movie to the database...");
        return ApiResponse.<StockResponse>builder()
                .status(HttpStatus.OK.value())
                .message("Stock item added to the database")
                .data(stockService.sendMovie(stockItem))
                .build();
    }

    @PutMapping(path = "/stock/{id}")
    public ApiResponse updateMovie(@PathVariable Long id, @RequestBody StockItem stockItem) {
        System.out.println("Updating stock item with " + id + " in the database... ");
        return ApiResponse.<StockResponse>builder()
                .status(HttpStatus.OK.value())
                .message("Stock item updated successfully!")
                .data(stockService.updateMovie(id, stockItem))
                .build();
    }

    @DeleteMapping(path = "/stock/{id}")
    public ApiResponse deleteMovie(@PathVariable Long id) {
        System.out.println("Deleting stock item with "+ id + " from the database...");
        return ApiResponse.<StockResponse>builder()
                .status(HttpStatus.OK.value())
                .message("Stock item deleted successfully!")
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
