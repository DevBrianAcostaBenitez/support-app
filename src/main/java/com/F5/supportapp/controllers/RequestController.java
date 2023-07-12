package com.F5.supportapp.controllers;

import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.F5.supportapp.models.Request;
import com.F5.supportapp.services.RequestService;

@RestController
public class RequestController {
    RequestService service;
    public RequestController(RequestService service){
        this.service = service;
    }
    @CrossOrigin(origins="http://localhost:4200")
     @GetMapping(path = "/requests")
    public List<Request>  index(){        
        List<Request> requests = this.service.getAll();
        return requests;
    }
    @CrossOrigin(origins="http://localhost:4200")
     @GetMapping(path = "/requests/{id}")
    public Request show(@PathVariable("id") Long id) {
        Request request = service.findById(id);
        return request;
    }
    @PostMapping(path = "/requests")
    public ResponseEntity<Request> store(@RequestBody Request request){
        Request requestSaved = this.service.save(request);
        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(requestSaved);

    }
   @DeleteMapping(path = "/requests/{id}")
    public Map<String, String> destroy(@PathVariable("id") Long id) {
        Map<String, String> msg = service.delete(id);
        return msg;
    }
}
