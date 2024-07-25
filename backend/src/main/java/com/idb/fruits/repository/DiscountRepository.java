package com.idb.fruits.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.idb.fruits.model.Discount;

public interface DiscountRepository extends JpaRepository<Discount, Long> {
}
