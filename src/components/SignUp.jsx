import { useNavigate } from "react-router-dom";
import AuthForm from "./AuthForm/AuthForm";

const SignUp = () => {
  const navigate = useNavigate();

  const handleAuthSuccess = () => {
    navigate("/sign-in");
  };

  return <AuthForm isSignUp={true} setIsAuth={() => {}} onAuthSuccess={handleAuthSuccess} />;
};

export default SignUp;