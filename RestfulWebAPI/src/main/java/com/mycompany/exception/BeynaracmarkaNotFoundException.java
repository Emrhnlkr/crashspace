package com.mycompany.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "AraçMarka Not Found")
public class BeynaracmarkaNotFoundException extends RuntimeException {

}