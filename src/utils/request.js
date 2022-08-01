import axios from "axios";
import React from "react";

export const baseUrl = " https://f8b4-115-246-244-26.in.ngrok.io/";
// export const baseUrl = 'http://192.168.10.199:8000/api/';

export const loginCall = (email, password) => {
  const URL = baseUrl + "ad_login";
  return axios(URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
    data: {
      email: email,
      password: password,
    },
  })
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
