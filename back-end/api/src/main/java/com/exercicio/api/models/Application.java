package com.exercicio.api.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.NoArgsConstructor;

import com.exercicio.api.dtos.ApplicationDTO;

import jakarta.persistence.Column;


@Entity
@Table(name = "applications")
@NoArgsConstructor
public class Application {

  public Application(ApplicationDTO req) {
    this.name = req.name();
    this.whatsappString = req.whatsappString();
    this.frontEndExp = req.frontEndExp().getDescription();
    this.frontEndExpYears = req.frontEndExpYears();
    this.backEndExp = req.backEndExp().getDescription();
    this.backEndExpYears = req.backEndExpYears();
    this.dbExp = req.dbExp().getDescription();
    this.dbExpYears = req.dbExpYears();
    this.camundaExp = req.camundaExp();
    this.healthcareExp = req.healthcareExp();
    this.comments = req.comments();
  }

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id", updatable = false, nullable = false)
  private long id;

  @Column(name = "name", length = 255, nullable = false)
  private String name;

  @Column(name = "whatsappString", length = 16, nullable = false)
  private String whatsappString;

  @Column(name = "frontEndExp", length = 255, nullable = false)
  private String frontEndExp;

  @Column(name = "frontEndExpYears", nullable = false)
  private int frontEndExpYears;

  @Column(name = "backEndExp", length = 255, nullable = false)
  private String backEndExp;

  @Column(name = "backEndExpYears", nullable = false)
  private int backEndExpYears;

  @Column(name = "dbExp", length = 255, nullable = false)
  private String dbExp;

  @Column(name = "dbExpYears", nullable = false)
  private int dbExpYears;

  @Column(name = "camundaExp", nullable = false)
  private boolean camundaExp;

  @Column(name = "healthcareExp", nullable = false)
  private boolean healthcareExp;

  @Column(name = "comments", length = 511, nullable = false)
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

  public String getDbExp() {
    return dbExp;
  }

  public void setDbExp(String dbEndExp) {
    this.dbExp = dbEndExp;
  }

  public int getDbExpYears() {
    return dbExpYears;
  }

  public void setDbExpYears(int dbEndExpYears) {
    this.dbExpYears = dbEndExpYears;
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
