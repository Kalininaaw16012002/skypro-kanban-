import '../App.css';
import Main from '../components/Main/Main.jsx'
import Header from '../components/Header/Header.jsx'
import PopNewCard from '../components/PopNewCard/PopNewCard.jsx'
import PopBrowse from '../components/PopBrowse/PopBrowse.jsx'
import { SWrapper } from '../App.styled.js'
import { useEffect, useState } from 'react';

function MainPage() {
  const [isPopBrowseOpen, setPopBrowseOpen] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [currentTaskId, setCurrentTaskId] = useState(null); // новое состояние

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
  if (taskId) {
    setCurrentTaskId(taskId);
    setPopBrowseOpen(true);
  } else {
    console.warn('taskId отсутствует');
  }
};

  const handleClose = () => {
    setPopBrowseOpen(false);
  };

  return (
    <SWrapper>
      {isPopBrowseOpen && (
        <PopBrowse taskId={currentTaskId} onClose={handleClose} refreshTasks={fetchTasks} />
      )}
      <Header />
      {/* Передайте handleOpenPopBrowse в компонент Main, чтобы он мог вызывать */}
      <Main tasks={tasks} onTaskClick={handleOpenPopBrowse} />
    </SWrapper>
  );
}

export default MainPage;