package com.idb.fruits.service.Impl;

import org.springframework.stereotype.Service;

import com.idb.fruits.constants.ResponseStatus;
import com.idb.fruits.dto.Response;
import com.idb.fruits.model.Checkout;
import com.idb.fruits.service.CheckoutService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CheckoutServiceImpl extends BaseServiceImpl<Checkout, Long> implements CheckoutService{

    @Override
    public Response<?> validate(Checkout entity) {
        return new Response<>(ResponseStatus.SUCCESS, null, entity);
    }
    
}