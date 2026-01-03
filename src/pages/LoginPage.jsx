import { useNavigate } from "react-router-dom";
import SignIn from "../components/SignIn";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const LoginPage = ({ setIsAuth }) => {
  const { loadTasks } = useContext(TaskContext);
  const navigate = useNavigate();

  const handleAuthSuccess = async () => {
    await loadTasks();
    setIsAuth(true);
    navigate("/");
  };

  return <SignIn setIsAuth={setIsAuth} onAuthSuccess={handleAuthSuccess} />;
};

export default LoginPage;
