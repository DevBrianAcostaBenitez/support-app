package com.F5.supportapp.repositories;

import com.F5.supportapp.models.Request;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RequestRepository extends JpaRepository<Request,Long>{
    
}
