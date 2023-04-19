package com.exercicio.api.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;

@Entity
@Table(name = "application")
public class Application {

  public Application(long id, String name, String whatsappString, String frontEndExp, int frontEndExpYears,
    String backEndExp, int backEndExpYears, String dbEndExp, int dbEndExpYears, boolean camundaExp,
    boolean healthcareExp, String comments) {
    this.id = id;
    this.name = name;
    this.whatsappString = whatsappString;
    this.frontEndExp = frontEndExp;
    this.frontEndExpYears = frontEndExpYears;
    this.backEndExp = backEndExp;
    this.backEndExpYears = backEndExpYears;
    this.dbEndExp = dbEndExp;
    this.dbEndExpYears = dbEndExpYears;
    this.camundaExp = camundaExp;
    this.healthcareExp = healthcareExp;
    this.comments = comments;
  }

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  @Column(length = 255, nullable = false)
  private String name;

  @Column(length = 16, nullable = false)
  private String whatsappString;

  @Column(length = 255, nullable = false)
  private String frontEndExp;

  @Column(nullable = false)
  private int frontEndExpYears;

  @Column(length = 255, nullable = false)
  private String backEndExp;

  @Column(nullable = false)
  private int backEndExpYears;

  @Column(length = 255, nullable = false)
  private String dbEndExp;

  @Column(nullable = false)
  private int dbEndExpYears;

  @Column(nullable = false)
  private boolean camundaExp;

  @Column(nullable = false)
  private boolean healthcareExp;

  @Column(length = 511, nullable = false)
  private String comments;



  // Getters and Setters

  public long getId() {
    return id;
  }

  public void setId(long id) {
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

  public String getFrontEndExp() {
    return frontEndExp;
  }

  public void setFrontEndExp(String frontEndExp) {
    this.frontEndExp = frontEndExp;
  }

  public int getFrontEndExpYears() {
    return frontEndExpYears;
  }

  public void setFrontEndExpYears(int frontEndExpYears) {
    this.frontEndExpYears = frontEndExpYears;
  }

  public String getBackEndExp() {
    return backEndExp;
  }

  public void setBackEndExp(String backEndExp) {
    this.backEndExp = backEndExp;
  }

  public int getBackEndExpYears() {
    return backEndExpYears;
  }

  public void setBackEndExpYears(int backEndExpYears) {
    this.backEndExpYears = backEndExpYears;
  }

  public String getDbEndExp() {
    return dbEndExp;
  }

  public void setDbEndExp(String dbEndExp) {
    this.dbEndExp = dbEndExp;
  }

  public int getDbEndExpYears() {
    return dbEndExpYears;
  }

  public void setDbEndExpYears(int dbEndExpYears) {
    this.dbEndExpYears = dbEndExpYears;
  }

  public boolean isCamundaExp() {
    return camundaExp;
  }

  public void setCamundaExp(boolean camundaExp) {
    this.camundaExp = camundaExp;
  }

  public boolean isHealthcareExp() {
    return healthcareExp;
  }

  public void setHealthcareExp(boolean healthcareExp) {
    this.healthcareExp = healthcareExp;
  }

  public String getComments() {
    return comments;
  }

  public void setComments(String comments) {
    this.comments = comments;
  }

}
