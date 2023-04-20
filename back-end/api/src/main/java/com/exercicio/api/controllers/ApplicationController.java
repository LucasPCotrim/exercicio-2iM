package com.exercicio.api.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exercicio.api.models.Application;
import com.exercicio.api.services.ApplicationService;

@RestController
@RequestMapping("/applications")
public class ApplicationController {
  
  @Autowired
  private ApplicationService applicationService;

  @GetMapping
  public ResponseEntity<List<Application>> getAll() {
    return ResponseEntity.ok(applicationService.findAll());
  }

  @GetMapping("/{id}")
	public ResponseEntity<Optional<Application>> getById(@PathVariable Long id) {
		return ResponseEntity.ok(applicationService.findById(id));
	}
}
