import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.gbonassina.com.br',
  // baseURL: 'http://localhost:3001',
});
