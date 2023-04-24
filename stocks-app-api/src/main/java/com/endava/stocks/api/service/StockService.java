package com.endava.stocks.api.service;

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

    public List<StockResponse> sendStock(StockItem stockItem) {
        Optional<StockItem> stockFoundInDb = stockRepository.findOneByTitle(stockItem.getTitle());

        if (stockFoundInDb.isPresent()) {
            throw new StockAlreadyExistsException("Stock already exists in the database!");
        }

        stockRepository.save(stockItem);
        return loadStocks();
    }

    public List<StockResponse> updateStock(Long id, StockItem stockItem) {
        Optional<StockItem> stockItemToBeUpdated = stockRepository.findById(id);

        if (!stockItemToBeUpdated.isPresent()) {
            throw new StockNotFoundException("Stock does not exist in the database!");
        }

        stockItem.setId(id);
        stockRepository.save(stockItem);
        return loadStocks();
    }

    public List<StockResponse> deleteStock(Long id) {
        Optional<StockItem> stockToBeDeleted = stockRepository.findById(id);

        if (!stockToBeDeleted.isPresent()) {
            throw new StockNotFoundException("Stock does not exist in the database!");
        }

        stockRepository.deleteById(id);
        return loadStocks();
    }

    public List<StockResponse> loadStocks() {
        List<StockItem> stocks = stockRepository.findAll();

        return stocks.stream()
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
