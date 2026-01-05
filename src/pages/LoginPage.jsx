import { useNavigate } from "react-router-dom";
import SignIn from "../components/SignIn";

const LoginPage = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const handleAuthSuccess = async () => {
    setIsAuth(true);
    navigate("/");
  };

  return <SignIn setIsAuth={setIsAuth} onAuthSuccess={handleAuthSuccess} />;
};

export default LoginPage;
