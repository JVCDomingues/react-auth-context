import api from './api';

import { UserData } from '../models/User';

interface LoginData {
  email: string;
  password: string;
}

type Token = string;

export function login(credentials: LoginData) {
  return api.post<UserData & { token: Token }>('/auth/authenticate', credentials)
            .then(res => res.data)
}

export function logout() {
  window.localStorage.removeItem('token');
}

export function getToken() {
  return window.localStorage.getItem('token');
}

export function setToken(token: string) {
  window.localStorage.setItem('token', token);
}