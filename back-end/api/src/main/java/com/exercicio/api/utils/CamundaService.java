package com.exercicio.api.utils;

import org.springframework.web.reactive.function.client.WebClient.ResponseSpec;

import com.exercicio.api.models.Application;

import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.reactive.function.BodyInserters;
import org.springframework.web.reactive.function.client.WebClient;

public class CamundaService {
  String url = "http://35.215.196.4:8088/engine-rest/process-definition/key/ProcessoSeletivo/start";

  WebClient client = WebClient.create();

  public void postApplication(Application data) {
    MultiValueMap<String, String> bodyValues = new LinkedMultiValueMap<>();
    bodyValues.add("name", data.getName());
    bodyValues.add("whatsappString", data.getWhatsappString());
    bodyValues.add("frontEndExp", data.getFrontEndExp());
    bodyValues.add("frontEndExpYears", String.valueOf(data.getFrontEndExpYears()));
    bodyValues.add("backEndExp", data.getBackEndExp());
    bodyValues.add("backEndExpYears", String.valueOf(data.getBackEndExpYears()));
    bodyValues.add("dbExp", data.getDbExp());
    bodyValues.add("dbExpYears", String.valueOf(data.getDbExpYears()));
    bodyValues.add("camundaExp", String.valueOf(data.isCamundaExp()));
    bodyValues.add("healthcareExp", String.valueOf(data.isHealthcareExp()));
    bodyValues.add("comments", data.getComments());

    ResponseSpec response = client.post().uri(url).body(BodyInserters.fromFormData(bodyValues)).retrieve();
    System.out.println(response);
  }

  public CamundaService() {
  }

  

}