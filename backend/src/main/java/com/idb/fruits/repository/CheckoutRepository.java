package com.idb.fruits.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.idb.fruits.model.Checkout;

@Repository
public interface CheckoutRepository extends JpaRepository<Checkout, Long> {

    
} 