package com.endava.stocks.api.repository;

import com.endava.stocks.api.model.StockItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface StockRepository extends JpaRepository<StockItem, Long> {
    List<StockItem> findAllByTitle(String title);

    List<StockItem> findByYearGreaterThan(int year);

    Optional<StockItem> findOneByTitle(String title);
}
