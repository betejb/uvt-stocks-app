package com.endava.stocks.api.exception;

public class StockNotFoundException extends StockItemException {
    public StockNotFoundException(String message) {
        super(message);
    }
}
