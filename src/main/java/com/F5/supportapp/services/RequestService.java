package com.F5.supportapp.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.F5.supportapp.models.Request;
import com.F5.supportapp.repositories.RequestRepository;

@Service
public class RequestService {
    RequestRepository repository;
    public RequestService(RequestRepository repository){
        this.repository = repository;
    }
    public List<Request> getAll(){
        List<Request> requests = this.repository.findAll();
        return requests;
    }
    public Request save(Request request){
        this.repository.save(request);
        return request;
    }
}
