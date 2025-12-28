import { useEffect, useState } from "react";
import { fetchTasks } from "../services/api";
import { TaskContext } from "./TaskContext";

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const token = localStorage.getItem('authToken');
    if (token) {
      try {
        const data = await fetchTasks(token);
        setTasks(data);
      } catch (err) {
        console.error("Ошибка при загрузке задач:", err);
      }
    }
  };

  const addTask = (taskData) => {
    setTasks(prev => [...prev, taskData]);
  };

  const updateTaskInState = (updatedTask) => {
    setTasks(prev => prev.map(task => (task._id === updatedTask._id ? updatedTask : task)));
  };

  const deleteTaskFromState = (taskId) => {
    setTasks(prev => prev.filter(task => task._id !== taskId));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        addTask,
        updateTaskInState,
        deleteTaskFromState,
        loadTasks,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};