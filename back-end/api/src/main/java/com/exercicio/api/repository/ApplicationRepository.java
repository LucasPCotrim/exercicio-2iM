package com.exercicio.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.exercicio.api.models.Application;

@Repository
public interface ApplicationRepository extends JpaRepository<Application, Long> {
  
}
