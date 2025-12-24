import '../App.css';
import Main from '../components/Main/Main.jsx'
import Header from '../components/Header/Header.jsx'
import { SWrapper } from '../App.styled.js'
import { useEffect, useState } from 'react';

function MainPage() {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch('https://wedev-api.sky.pro/api/kanban', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
      });
      const data = await response.json();
      setTasks(data.tasks);
    } catch (error) {
      console.error('Ошибка при получении задач:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // функция для открытия PopBrowse с конкретным id
 const handleOpenPopBrowse = (taskId) => {
};

  return (
    <SWrapper>
      <Header />
      <Main tasks={tasks} onTaskClick={handleOpenPopBrowse} />
    </SWrapper>
  );
}

export default MainPage;