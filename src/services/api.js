import axios from 'axios';

const API_URL = "https://wedev-api.sky.pro/api/kanban";

function getAuthHeaders() {
  const token = localStorage.getItem('authToken');
  return token ? { Authorization: `Bearer ${token}` } : {};
}

// Получить список задач
export async function fetchTasks() {
  try {
    const response = await axios.get(API_URL, {
      headers: getAuthHeaders(),
    });
    return response.data.tasks;
  } catch (error) {
    throw new Error('Ошибка при получении задач');
  }}

// Получить задачу по id
export const fetchTaskById = async (id) => {
  if (!id) {
    console.error('ID задачи не передан');
    return;
  }

  const idToUse = typeof id === 'string' ? id : id?.id; 

  const response = await fetch(`https://wedev-api.sky.pro/api/kanban/${idToUse}`, {
    headers: getAuthHeaders()
  });

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Задача не найдена');
    } else if (response.status === 401) {
      throw new Error('Не авторизован. Проверьте токен');
    }
    throw new Error('Ошибка загрузки задачи');
  }

  const data = await response.json();
  return data.task;
};

// Добавить новую задачу
export async function addTask(taskData) {
  const data = {
    title: taskData.title || 'Новая задача',
    topic: taskData.topic || 'Research',
    status: taskData.status || 'Без статуса',
        description: taskData.description && taskData.description.trim() !== '' ? taskData.description : 'Нет описания', 
    date: taskData.date || new Date().toISOString(),
  };

  try {
    const response = await axios.post(API_URL, data, {
      headers: {
        'Content-Type': 'text/plain', 
        ...getAuthHeaders(),
      },
    });
    return response.data.tasks; 
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new Error('Некорректные данные для задачи');
    }
    throw new Error('Ошибка при добавлении задачи');
  }
}


// Изменить задачу
export async function updateTask(id, taskData) {
  try {
    const response = await axios.put(`${API_URL}/${id}`, taskData, {
      headers: {
        ...getAuthHeaders(),
        'Content-Type': 'text/plain',
      },
    });
    return response.data.tasks;
  } catch (error) {
    throw new Error('Ошибка при обновлении задачи');
  }
}

// Удалить задачу по id
export async function deleteTask(id) {
  try {
    const response = await axios.delete(`${API_URL}/${id}`, {
      headers: getAuthHeaders(),
    });
    return response.data.tasks;
  } catch (error) {
    console.error('Ошибка при удалении задачи:', error);
    if (error.response) {
      console.error('Ответ сервера:', error.response);
    }
    throw new Error('Ошибка при удалении задачи');
  }
}