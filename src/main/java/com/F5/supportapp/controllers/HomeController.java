package com.F5.supportapp.controllers;
import java.sql.Date;
import java.util.Calendar;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.F5.supportapp.models.Request;
//import com.F5.supportapp.repositories.RequestRepository;

@RestController
public class HomeController {
    //RequestRepository repository;
    @GetMapping(path = "/requests")
    public Request index(){
        Calendar currenttime = Calendar.getInstance();              
        Date sqldate = new Date((currenttime.getTime()).getTime());       
        Request request = new Request(1L,"lola",sqldate,"pc fail","lorem");
        return request;

    }
}
