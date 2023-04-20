package com.exercicio.api.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

import com.exercicio.api.dtos.ApplicationDTO;
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

  public void create(Application data) {
		applicationRepository.save(data);
	}

  public void update(Long id, ApplicationDTO data) {
    applicationRepository.findById(id).map(r -> {
      r.setName(data.name());
      r.setWhatsappString(data.whatsappString());
      r.setFrontEndExp(data.frontEndExp().getDescription());
      r.setFrontEndExpYears(data.frontEndExpYears());
      r.setBackEndExp(data.backEndExp().getDescription());
      r.setBackEndExpYears(data.backEndExpYears());
      r.setDbExp(data.dbExp().getDescription());
      r.setDbExpYears(data.dbExpYears());
      r.setCamundaExp(data.camundaExp());
      r.setHealthcareExp(data.healthcareExp());
      r.setComments(data.comments());

      return applicationRepository.save(r);
    });
  }

  public void deleteById(Long id) {
    applicationRepository.deleteById(id);
  };

}
