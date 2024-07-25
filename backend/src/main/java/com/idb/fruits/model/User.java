package com.idb.fruits.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
@Table(name = "users")
public class User extends BaseEntity {
    @Column(name = "user_name", nullable = true, columnDefinition = "varchar(100)")
    private String name;
    @Column(name = "user_email", nullable = true, unique = true)
    private String email;
    @Column(name = "user_phone", nullable = true, columnDefinition = "varchar(20)")
    private String phone;
    @Column(name = "user_address", nullable = true, columnDefinition = "text")
    private String address;
    @Column(name = "username", nullable = false, unique = true)
    private String username;
    @Column(name = "password", nullable = false)
    private String password;
}
