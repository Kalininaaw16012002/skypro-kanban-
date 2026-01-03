import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../context/TaskContext";
import { AuthContext } from "../context/AuthContext";

const ExitPage = ({ setIsAuth }) => {
  const { setTasks } = useContext(TaskContext);
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuth(false);
    localStorage.removeItem("userInfo");
    localStorage.removeItem("authToken"); // удаляем токен
    setTasks([]); // очищаем задачи
    navigate("/sign-in");
  }, []);

  return null;
};

export default ExitPage;