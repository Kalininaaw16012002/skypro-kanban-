import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm/AuthForm";


const SignIn = ({ setIsAuth, onAuthSuccess }) => {
  const navigate = useNavigate();

  const handleAuthSuccess = async () => {
    if (onAuthSuccess) {
      await onAuthSuccess();
    }
    navigate("/"); // перенаправление после авторизации
  };

  return <AuthForm setIsAuth={setIsAuth} isSignUp={false} onAuthSuccess={handleAuthSuccess} />;
};

export default SignIn;