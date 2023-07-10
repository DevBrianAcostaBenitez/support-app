package com.F5.supportapp.services;

import java.util.List;

import org.springframework.http.HttpStatusCode;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

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
    // public Request save(Request request){
    //     this.repository.save(request);
    //     return request;
    // }
    public Request save(Request request){
        if (request.getName() == "") {
            throw new ResponseStatusException(HttpStatusCode.valueOf(400), "name empty");
        }

        Request requestSaved = repository.save(request);
        return requestSaved;
    }
}
