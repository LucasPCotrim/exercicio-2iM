package com.exercicio.api.models;

public enum ExpLevel {
	NENHUMA_EXPERIENCIA("Nenhuma experiência"),
	ALGUMA_EXPERIENCIA("Alguma experiência"),
	EXPERIENTE("Experiente"),
  MUITO_EXPERIENTE("Muito experiente");

	private String description;

	ExpLevel(String description) {
		this.description = description;
	}

	public String getDescription() {
		return description;
	}
}