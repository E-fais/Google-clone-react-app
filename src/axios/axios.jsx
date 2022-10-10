import axios from "axios";
export const instance = axios.create({
    baseURL: 'https://google-search3.p.rapidapi.com/api/v1',

    headers: {'X-User-Agent': 'desktop',
    'X-Proxy-Location': 'IN',
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'}
  });
