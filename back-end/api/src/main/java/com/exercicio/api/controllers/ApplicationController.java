package com.exercicio.api.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.exercicio.api.dtos.ApplicationDTO;
import com.exercicio.api.models.Application;
import com.exercicio.api.services.ApplicationService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/applications")
public class ApplicationController {
  
  @Autowired
  private ApplicationService applicationService;

  @GetMapping
  @CrossOrigin
  public ResponseEntity<List<Application>> getAll() {
    return ResponseEntity.ok(applicationService.findAll());
  }

  @GetMapping("/{id}")
  @CrossOrigin
	public ResponseEntity<Optional<Application>> getById(@PathVariable Long id) {
		return ResponseEntity.ok(applicationService.findById(id));
	}

  @PostMapping
  @CrossOrigin
  @ResponseStatus(value = HttpStatus.CREATED)
  public void create(@RequestBody @Valid ApplicationDTO req) {
    applicationService.create(new Application(req));
  }

  @PutMapping("/{id}")
  @CrossOrigin
  public void update(@PathVariable Long id, @RequestBody @Valid ApplicationDTO req) {
    applicationService.update(id, req);
  }

  @DeleteMapping("/{id}")
  @CrossOrigin
  @ResponseStatus(value = HttpStatus.NO_CONTENT)
  public void delete(@PathVariable Long id) {
    applicationService.deleteById(id);
  }
}
