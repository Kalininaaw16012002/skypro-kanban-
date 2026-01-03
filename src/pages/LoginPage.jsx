import { useNavigate } from "react-router-dom";
import SignIn from "../components/SignIn";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const LoginPage = ({ setIsAuth, loadTasks }) => {
  const navigate = useNavigate();
  const handleAuthSuccess = async () => {
    await loadTasks();
    setIsAuth(true);
    navigate("/");
  };

  return <SignIn setIsAuth={setIsAuth} onAuthSuccess={handleAuthSuccess} />;
};

export default LoginPage;
