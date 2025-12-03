import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import EditTaskPage from '../pages/EditTaskPage';
import AddTaskPage from '../pages/AddTaskPage';
import NotFound from '../pages/NotFound';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import PrivateRoute from './PrivateRoute';
import { useEffect, useState } from 'react';


function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);
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
        <Route path="/exit" element={<MainPage setIsAuth={setIsAuth} loading={loading} />} />
    </Route>

      <Route path="/sign-in" element={<LoginPage setIsAuth = {setIsAuth}/>} />
      <Route path="/sign-up" element={<RegisterPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;