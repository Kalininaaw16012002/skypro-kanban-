import '../App.css';
import Main from '../components/Main/Main.jsx'
import Header from '../components/Header/Header.jsx'
import PopNewCard from '../components/PopNewCard/PopNewCard.jsx'
import PopBrowse from '../components/PopBrowse/PopBrowse.jsx'
import { SWrapper } from '../App.styled.js'
import { useEffect, useState } from 'react';

function MainPage({}) {
  // состояние для управления видимостью popups, например
  const [isPopBrowseOpen, setPopBrowseOpen] = useState(true);
  const [tasks, setTasks] = useState([]);

  // функция закрытия PopBrowse
  const handleClose = () => {
    setPopBrowseOpen(false);
  };

  // функция получения задач
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

  // можно вызвать fetchTasks один раз при загрузке компонента
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <SWrapper>
        {isPopBrowseOpen && (
          <PopBrowse onClose={handleClose} refreshTasks={fetchTasks} />
        )}
        <Header />
        <Main tasks={tasks} />		
      </SWrapper>
      <script src="js/script.js"></script>
    </>
  );
}

export default MainPage;