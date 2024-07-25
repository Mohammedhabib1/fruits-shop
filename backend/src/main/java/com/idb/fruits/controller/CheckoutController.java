package com.idb.fruits.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.idb.fruits.dto.Response;
import com.idb.fruits.model.Checkout;
import com.idb.fruits.service.CheckoutService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("api/checkout")
@RequiredArgsConstructor
public class CheckoutController {

    private final CheckoutService checkoutService;

    @PostMapping
    public ResponseEntity<Response<?>> save(@RequestBody Checkout checkout) {
        return ResponseEntity.ok(checkoutService.save(checkout));
    }

    @GetMapping
    public ResponseEntity<Response<?>> findAll() {
        return ResponseEntity.ok(checkoutService.findAll());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Response<?>> deleteById(@PathVariable Long id) {
        return ResponseEntity.ok(checkoutService.deleteById(id));
    }

}
