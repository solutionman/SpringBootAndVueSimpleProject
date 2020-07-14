package com.example.demo;

import lombok.Data;

@Data
public class Customer {
    private int id;
    private String name;
    private String surname;

    public Customer(int id, String name, String surname) {
        super();
        this.id = id;
        this.name = name;
        this.surname = surname;
    }

}
