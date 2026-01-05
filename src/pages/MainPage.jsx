import '../App.css';
import Main from '../components/Main/Main.jsx'
import Header from '../components/Header/Header.jsx'
import { SWrapper } from '../App.styled.js'
import { useContext, useEffect} from 'react';
import { TaskContext } from '../context/TaskContext.js';
import { Outlet } from 'react-router-dom';

function MainPage() {
const { loadTasks } = useContext(TaskContext);

  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <SWrapper>
      <Header />
      <Main />
      <Outlet />
    </SWrapper>
  );
}

export default MainPage;