import axios from 'axios';
import { getToken } from './AuthService';

const api = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Authorization': `Bearer ${getToken()}`
  }
});

export default api; 