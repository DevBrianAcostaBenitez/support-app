package com.F5.supportapp.services;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    public Request findById(Long id) {
        Request request = repository.findById(id).orElseThrow();
        return request;
    }

    public Map<String, String> delete(Long id) {
        Request request = repository.findById(id).orElseThrow();
        repository.deleteById(request.getId());

        Map<String,String> msg = new HashMap<>();
        msg.put("message", "Country " + request.getName() + " successfully deleted!");

        return msg;

    }
}
