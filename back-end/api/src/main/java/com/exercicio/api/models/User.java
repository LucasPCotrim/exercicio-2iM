package com.exercicio.api.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User {

  public User(Long id, String name, String whatsappString) {
    this.id = id;
    this.name = name;
    this.whatsappString = whatsappString;
  }

  
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private Long id;

  @Column(length = 255, nullable = false)
  private String name;

  @Column(length = 16, nullable = false)
  private String whatsappString;


  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getWhatsappString() {
    return whatsappString;
  }

  public void setWhatsappString(String whatsappString) {
    this.whatsappString = whatsappString;
  }

}

