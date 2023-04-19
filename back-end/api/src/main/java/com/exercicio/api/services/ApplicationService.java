package com.exercicio.api.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import com.exercicio.api.models.Application;
import com.exercicio.api.repository.ApplicationRepository;

@Service
public class ApplicationService {

  @Autowired
  private ApplicationRepository applicationRepository;

  public List<Application> findAll() {
    return applicationRepository.findAll();
  }

  public Optional<Application> findById(Long id){
    return applicationRepository.findById(id);
  }
}
