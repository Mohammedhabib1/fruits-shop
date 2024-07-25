package com.idb.fruits.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.idb.fruits.dto.Response;
import com.idb.fruits.model.Payment;
import com.idb.fruits.service.PaymentService;

import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("/api/payment")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;

    @PostMapping
    public ResponseEntity<Response<?>> save(@RequestBody Payment payment) {
        return ResponseEntity.ok(paymentService.save(payment));
    }
}
