import axios from 'axios';

const API_URL = "https://wedev-api.sky.pro/api/user";

let authToken = null;

function getAuthHeaders() {
  return authToken ? { Authorization: `Bearer ${authToken}` } : {};
}

export async function signIn({ login, password }) {
  try {
    const response = await axios.post(`${API_URL}/login`,{login, password}, {
      headers: {
        'Content-Type': 'text/plain',
      },
    });
    authToken = response.data.user.token;
    localStorage.setItem('authToken', authToken);
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

export async function getUsers() {
  try {
    const response = await axios.get(API_URL, {
      headers: getAuthHeaders(), 
    });
    return response.data.users;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      throw new Error(error.response.data.error);
    }
    throw new Error('Ошибка при получении списка пользователей');
  }
}

