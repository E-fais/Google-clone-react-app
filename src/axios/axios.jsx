import axios from "axios";
export const instance = axios.create({
    baseURL: 'https://google-search3.p.rapidapi.com/api/v1',

    headers: {'X-User-Agent': 'desktop',
    'X-Proxy-Location': 'IN',
    'X-RapidAPI-Key': '34a99fc479mshd4f5dd6442d9f7ep11beb5jsnc9afc1660582',
    'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'}
  });