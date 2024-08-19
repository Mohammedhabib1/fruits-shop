package com.idb.fruits.service.Impl;

import org.springframework.stereotype.Service;

import com.idb.fruits.constants.ResponseStatus;
import com.idb.fruits.dto.Response;
import com.idb.fruits.model.Order;
import com.idb.fruits.service.OrderService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl extends BaseServiceImpl<Order, Long> implements OrderService{

    @Override
    public Response<?> validate(Order entity) {
        return new Response<>(ResponseStatus.SUCCESS, null, entity);
    }
    
}