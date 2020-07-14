package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CustomerController {
    @Autowired
    CustomerRepository repository;

    @RequestMapping("/list")
    public List<Customer> findAll(){
        String debug = "";
        return repository.getData();
    }

    @RequestMapping("/one/{id}")
    public Customer findOne(@PathVariable int id){
        return repository.getData().get(id);

    }
}
