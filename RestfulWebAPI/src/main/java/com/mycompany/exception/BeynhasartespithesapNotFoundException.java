package com.mycompany.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "HasarTespitHesap Not Found")
public class BeynhasartespithesapNotFoundException extends RuntimeException {
}
