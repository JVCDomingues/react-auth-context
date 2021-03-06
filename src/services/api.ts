import axios from 'axios';
import { getToken } from './AuthService';

const api = axios.create({
  baseURL: 'http://localhost:4000'
});

api.defaults.headers.common = {'Authorization': `Bearer ${getToken()}`}

export default api; 