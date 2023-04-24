package com.endava.stocks.api.exception;

public abstract class StockItemException extends ApplicationException {
    public StockItemException(String message) {
        super(message);
    }
}
