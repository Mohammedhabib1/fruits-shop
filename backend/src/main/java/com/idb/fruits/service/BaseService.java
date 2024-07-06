package com.idb.fruits.service;

import java.util.List;

import com.idb.fruits.dto.Response;

public interface BaseService<ENTITY, ID> {
    Response<?> save(ENTITY entity);
    Response<List<ENTITY>> findAll();
    Response<ENTITY> findById(ID id);
    Response<?> deleteById(ID id);
    Response<?> validate(ENTITY entity);
}
