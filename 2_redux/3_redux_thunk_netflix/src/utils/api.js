import axios from 'axios';

// yapılacak bütün api siteklerinde ortak olarak kullanılcak base url header ve params'ların önden ayarlı olduğu bir axios örneği oloşuturalım

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
  },
  params: {
    language: 'tr-TR',
  },
});

export default api;
