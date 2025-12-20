import axios from 'axios';

const API_URL = "https://wedev-api.sky.pro/api/kanban";

let authToken = null;

const savedToken = localStorage.getItem('authToken');
if (savedToken) {
  authToken = savedToken;
}

function getAuthHeaders(authToken) {
  return authToken ? { Authorization: `Bearer ${authToken}` } : {};
}

// Получить список задач
export async function fetchTasks(authToken) {
  console.log('Текущий токен:', authToken);
  try {
    const response = await axios.get(API_URL, {
      headers: getAuthHeaders(authToken),
    });
    return response.data.tasks;
  } catch (error) {
    throw new Error('Ошибка при получении задач');
  }
}

// Получить задачу по id
export const fetchTaskById = async (id) => {
  if (!id) {
  console.error('ID задачи не передан');
  // Обработайте ошибку или отобразите сообщение пользователю
  return;
}
  const response = await fetch(`https://wedev-api.sky.pro/api/kanban/${id}`);
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error('Задача не найдена');
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
    description: taskData.description || '',
    date: taskData.date || new Date().toISOString(),
  };

  try {
    const response = await axios.post(API_URL, data, {
      headers: {
        'Content-Type': 'text/plain',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
      },
    });
    // Возвращаем обновленный список задач или только новую задачу
    return response.data.tasks; // согласно API
  } catch (error) {
    if (error.response && error.response.status === 400) {
      throw new Error('Некорректные данные для задачи');
    }
    throw new Error('Ошибка при добавлении задачи');
  }
}

// Обновить задачу по id
export async function updateTask(id, taskData) {
  try {
    const response = await axios.put(`${API_URL}/${id}`, taskData, {
      headers: {
        ...getAuthHeaders(),
        'Content-Type': 'application/json',
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
    throw new Error('Ошибка при удалении задачи');
  }
}