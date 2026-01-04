import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

const ExitPage = ({ setIsAuth }) => {
  const { logout } = useContext(AuthContext);

  useEffect(() => {
    logout();
  }, []);

  return <div>Вы вышли из системы</div>;
};

export default ExitPage;