package com.mycompany.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND, reason = "Hesap Turu Not Found")
public class BeynhesapturuNotFoundException extends RuntimeException {

}
