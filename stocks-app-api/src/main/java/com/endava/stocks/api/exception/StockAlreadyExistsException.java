package com.endava.stocks.api.exception;

public class StockAlreadyExistsException extends StockItemException {
    public StockAlreadyExistsException(String message) {
        super(message);
    }
}
