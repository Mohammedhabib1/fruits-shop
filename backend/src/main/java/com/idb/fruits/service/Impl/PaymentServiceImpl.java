package com.idb.fruits.service.Impl;

import org.springframework.stereotype.Service;

import com.idb.fruits.constants.ResponseStatus;
import com.idb.fruits.dto.Response;
import com.idb.fruits.model.Payment;
import com.idb.fruits.service.PaymentService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PaymentServiceImpl extends BaseServiceImpl <Payment, Long> implements PaymentService {

    @Override
    public Response<?> validate(Payment entity) {
        return new Response<>(ResponseStatus.SUCCESS, null, entity);
    
}
}