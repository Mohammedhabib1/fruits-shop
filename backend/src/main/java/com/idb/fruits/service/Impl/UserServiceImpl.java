package com.idb.fruits.service.Impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.idb.fruits.constants.ResponseStatus;
import com.idb.fruits.dto.Response;
import com.idb.fruits.model.User;
import com.idb.fruits.repository.UserRepository;
import com.idb.fruits.service.UserService;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Value("${spring.application.name:myapp}")
    private String appName;

   
    public Response<?> persist(User user) {
        boolean usernameExists = userRepository.existsByUsername(user.getUsername());
        if (usernameExists) {
            return new Response<>(ResponseStatus.ERROR, "Username already exists");
        }
        boolean emailExists = userRepository.existsByEmail(user.getEmail());
        if (emailExists) {
            return new Response<>(ResponseStatus.ERROR, "Email already exists");
        }
        userRepository.save(user);
        return new Response<>(ResponseStatus.SUCCESS, "User saved successfully");
    }

   
    public Response<?> merge(User user) {
        if (!user.hasId()) {
            return new Response<>(ResponseStatus.ERROR, "ID required");
        }
        User olUser = userRepository.findById(user.getId()).orElse(null);
        if (olUser == null) {
            return new Response<>(ResponseStatus.ERROR, "User not found");
        }
        if (!olUser.getEmail().equals(user.getEmail())) {
            if (userRepository.existsByEmail(user.getEmail())) {
                return new Response<>(ResponseStatus.ERROR, "User email already exists");
            }
        }

        userRepository.save(user);
        return new Response<>(ResponseStatus.SUCCESS, "User updated successfully");
    }

    
    public Response<List<User>> findAll() {
        List<User> users = userRepository.findAll();
        return new Response<>(ResponseStatus.SUCCESS, null, users);
    }

    
    public Response<?> deleteById(Long id) {
        // userRepository.deleteById(id);
        return new Response<>(ResponseStatus.ERROR, "User deletion not allowed");
    }

   
    public Response<User> findById(Long id) {
        User user = userRepository.findById(id).orElse(null);
        return new Response<>(ResponseStatus.SUCCESS, null, user);
    }
    public Response<User> login(User user) {
        User olUser = userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword());
        if (olUser == null) {
            return new Response<User>(ResponseStatus.ERROR, "Invalid username or password", null);
        }
        return new Response<User>(ResponseStatus.SUCCESS, "Login successful", olUser);
    }


    @Override
    public Response<?> save(User entity) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'save'");
    }


    @Override
    public Response<?> validate(User entity) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'validate'");
    }

}
