package com.exercicio.api.dtos;

import com.exercicio.api.models.ExpLevel;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import jakarta.validation.constraints.Size;

public record ApplicationDTO(
  @NotNull @Size(min = 2, max = 30) String name,
  @NotNull @NotBlank @Size(min = 9, max = 16) String whatsappString,
  @NotNull ExpLevel frontEndExp,
  @NotNull @Positive int frontEndExpYears,
  @NotNull ExpLevel backEndExp,
  @NotNull @Positive int backEndExpYears,
  @NotNull ExpLevel dbExp,
  @NotNull @Positive int dbExpYears,
  @NotNull boolean camundaExp,
  @NotNull boolean healthcareExp,
  String comments
) {
}