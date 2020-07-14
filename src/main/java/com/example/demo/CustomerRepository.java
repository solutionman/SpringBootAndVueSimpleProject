package com.example.demo;

import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Component
public class CustomerRepository {
    List<Customer> customerList = new ArrayList<Customer>();

    @PostConstruct
    public void init(){
        customerList.add(new Customer(1, "Arnold","Schwarzenegger"));
        customerList.add(new Customer(2, "Silvester","Stallone"));
        customerList.add(new Customer(3, "YourName","YourFamilyName"));
    }
    public List<Customer> getData() {
        return customerList;
    }
}
