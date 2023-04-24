package com.endava.stocks.api.service;

import com.endava.stocks.api.ApplicationConstants;
import com.endava.stocks.api.exception.StockAlreadyExistsException;
import com.endava.stocks.api.exception.StockNotFoundException;
import com.endava.stocks.api.model.StockItem;
import com.endava.stocks.api.repository.StockRepository;
import com.endava.stocks.api.response.StockResponse;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class StockService {
    private final StockRepository stockRepository;

    public StockService(StockRepository stockRepository) {
        this.stockRepository = stockRepository;
    }

    public List<StockResponse> sendMovie(StockItem movie) {
        Optional<StockItem> movieFoundInDb = stockRepository.findOneByTitle(movie.getTitle());

        if (movieFoundInDb.isPresent()) {
            throw new StockAlreadyExistsException(ApplicationConstants.STOCK_ALREADY_EXISTS);
        }

        stockRepository.save(movie);
        return loadMovies();
    }

    public List<StockResponse> updateMovie(Long id, StockItem movie) {
        Optional<StockItem> movieToBeUpdated = stockRepository.findById(id);

        if (!movieToBeUpdated.isPresent()) {
            throw new StockNotFoundException(ApplicationConstants.STOCK_DOES_NOT_EXISTS);
        }

        movie.setId(id);
        stockRepository.save(movie);
        return loadMovies();
    }

    public List<StockResponse> deleteMovie(Long id) {
        Optional<StockItem> movieToBeDeleted = stockRepository.findById(id);

        if (!movieToBeDeleted.isPresent()) {
            throw new StockNotFoundException("Stock does not exist in the database!");
        }

        stockRepository.deleteById(id);
        return loadMovies();
    }

    public List<StockResponse> loadMovies() {
        List<StockItem> movies = stockRepository.findAll();

        return movies.stream()
                .filter(m -> m.getTitle() != null && !m.getTitle().isEmpty())
                .map(m -> StockResponse.builder()
                        .id(m.getId())
                        .title(m.getTitle())
                        .description(m.getDescription())
                        .director(m.getDirector())
                        .year(m.getYear())
                        .build())
                .collect(Collectors.toUnmodifiableList());
    }

    public List<StockItem> findAllBy(String title) {
        return stockRepository.findAllByTitle(title);
    }

    public List<StockItem> findByYearGreaterThan(int year) {
        return stockRepository.findByYearGreaterThan(year);
    }
}
