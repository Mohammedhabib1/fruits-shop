package com.idb.fruits.service.Impl;

import org.springframework.stereotype.Service;

import com.idb.fruits.constants.ResponseStatus;
import com.idb.fruits.dto.Response;
import com.idb.fruits.model.Product;
import com.idb.fruits.service.ProductService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ProductServiceImpl extends BaseServiceImpl<Product, Long> implements ProductService {
    @Override
    public Response<?> validate(Product entity) {
        return new Response<>(ResponseStatus.SUCCESS, null, entity);
    }

}