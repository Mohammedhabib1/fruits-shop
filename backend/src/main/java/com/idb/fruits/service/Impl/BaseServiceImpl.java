package com.idb.fruits.service.Impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;

import com.idb.fruits.constants.ResponseStatus;
import com.idb.fruits.dto.Response;
import com.idb.fruits.service.BaseService;

public abstract class BaseServiceImpl<T, ID> implements BaseService<T, ID> {

    @Autowired
    protected JpaRepository<T, ID> repository;

    public Response<?> save(T entity) {
        Response<T> response =(Response<T>) this.validate(entity);
        if(response.getStatus().equals(ResponseStatus.SUCCESS)) {
            response.setData(repository.save(entity));
        }
        return response;
    }

    public Response<List<T>> findAll() {
        List<T> list = repository.findAll();
        return new Response<>(ResponseStatus.SUCCESS, null, list);
    }

    public Response<T> findById(ID id) {
        Optional<T> data = repository.findById(id);
        if(data.isPresent()) {
            return new Response<T>(ResponseStatus.SUCCESS, null, data.get());
        } else {
            return new Response<T>(ResponseStatus.ERROR, "No data found for id " + id, null);
        }
    }

    public Response<?> deleteById(ID id) {
        repository.deleteById(id);
        return new Response<>(ResponseStatus.SUCCESS, "Data deleted successfully");
    }

    public Response<?> validate(T entity) {
        throw new UnsupportedOperationException("Unimplemented method 'validate'");
    }
}
