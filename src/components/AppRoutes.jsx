import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import EditTaskPage from '../pages/EditTaskPage';
import AddTaskPage from '../pages/AddTaskPage';
import NotFound from '../pages/NotFound';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import PrivateRoute from './PrivateRoute';
import { useContext, useEffect, useState } from 'react';
import ExitPage from '../pages/ExitPage';
import { TaskContext } from '../context/TaskContext';


function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const { loadTasks } = useContext(TaskContext);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Routes>
    <Route element={<PrivateRoute isAuth = {isAuth} />}>
        <Route path="/" element={<MainPage loading={loading}/>} />     
        <Route path="/add-task" element={<AddTaskPage />} />
        <Route path="/edit-task/:id" element={<EditTaskPage />} />
        <Route path="/exit/:action" element={<ExitPage setIsAuth={setIsAuth} />} />
    </Route>

      <Route path="/sign-in" element={<LoginPage setIsAuth = {setIsAuth} loadTasks={loadTasks}/>} />
      <Route path="/sign-up" element={<RegisterPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes; 