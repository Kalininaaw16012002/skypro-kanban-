import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { checkLs } from "../utils/checkLs";

// В виде пропса children
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('userInfo');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuth(true);
      } catch (error) {
        console.error('Ошибка парсинга user из localStorage:', error);
        setUser(null);
        setIsAuth(false);
      }
    }
    setIsLoading(false);
  }, []);

  // Обновляем данные о пользователе и сохраняем в localStorage
  const updateUserInfo = (userData) => {
    if (userData) {
      setUser(userData);
      localStorage.setItem("userInfo", JSON.stringify(userData));
      setIsAuth(true);
    } else {
      setUser(null);
      localStorage.removeItem("userInfo");
      localStorage.removeItem("authToken");
      setIsAuth(false);
    }
  };

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('userInfo', JSON.stringify(userData));
    setIsAuth(true); 
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userInfo');
    localStorage.removeItem('authToken');
    setIsAuth(false);
  };

  // Пока идет загрузка, можно показывать null или спиннер
  if (isLoading) {
    return null; // или любой компонент-заглушка
  }
   // В сам провайдер нужно обязательно прокинуть те значения,
   // которые мы хотим использовать в разных частях приложения
   return (
      <AuthContext.Provider value={{ user, setUser, login, logout, updateUserInfo, isAuth, setIsAuth }}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;