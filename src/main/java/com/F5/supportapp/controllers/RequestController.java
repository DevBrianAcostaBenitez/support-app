package com.F5.supportapp.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.F5.supportapp.models.Request;
import com.F5.supportapp.services.RequestService;

@RestController
public class RequestController {
    RequestService service;
    public RequestController(RequestService service){
        this.service = service;
    }
     @GetMapping(path = "/requests")
    public List<Request>  index(){        
        List<Request> requests = this.service.getAll();
        return requests;
    }
}
