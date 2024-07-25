package com.idb.fruits.service;

import com.idb.fruits.dto.Response;
import com.idb.fruits.model.User;

public interface UserService extends BaseService<User, Long> {

    Response<User> login(User user);
    Response<?> persist(User user);
    Response<?> merge(User user);
}
