import axios from 'axios';

export const BuscaCepApi = axios.create({
  baseURL: 'https://servicodados.ibge.gov.br/api/v1/localidades/',
  headers: {
    'Content-type': 'application-json'
  }
});

export const ViaCepApi = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
  headers: {
    'Content-type': 'application-json'
  }
});