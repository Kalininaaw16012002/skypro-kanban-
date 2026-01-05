import axios from 'axios';

const API_URL = "https://wedev-api.sky.pro/api/user";

export async function signIn({ login, password }, setIsAuth) {
  try {
    const response = await axios.post(`${API_URL}/login`, { login, password }, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
    const token = response.data.user.token;
    localStorage.setItem('authToken', token); 
    setIsAuth(true);
    return response.data.user;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      throw new Error(error.response.data.error);
    }
    throw new Error('Ошибка авторизации');
  }
}

export async function signUp({ name, login, password }) {
  try {
    const response = await axios.post(API_URL, { name, login, password}, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
    return response.data.user;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      throw new Error(error.response.data.error);
    }
    throw new Error('Ошибка регистрации');
  }
}