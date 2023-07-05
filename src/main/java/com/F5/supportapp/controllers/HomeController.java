package com.F5.supportapp.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {
    @GetMapping(path = "/requests")
    public String index(){
        return "Hello";
    }
}
