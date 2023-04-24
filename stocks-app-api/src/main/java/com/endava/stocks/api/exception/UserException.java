package com.endava.stocks.api.exception;

public abstract class UserException extends ApplicationException {
    public UserException(String message) {
        super(message);
    }
}
