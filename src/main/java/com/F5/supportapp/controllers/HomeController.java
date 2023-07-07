package com.F5.supportapp.controllers;
import java.sql.Date;
import java.util.Calendar;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.F5.supportapp.models.Request;
import com.F5.supportapp.repositories.RequestRepository;

@RestController
public class HomeController {
    RequestRepository repository;
    public  HomeController(RequestRepository repo){
        this.repository = repo;
    }
   
        // Calendar currenttime = Calendar.getInstance();              
        // Date sqldate = new Date((currenttime.getTime()).getTime());       
        // Request request = new Request(1L,"lola",sqldate,"pc fail","lorem");
        // return request;
   
}
