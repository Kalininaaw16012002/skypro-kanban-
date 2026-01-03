import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { checkLs } from "../utils/checkLs";

// В виде пропса children
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let storedUser = null;
    try {
      const data = localStorage.getItem("userInfo");
      if (data && data !== "undefined") {
        storedUser = JSON.parse(data);
      }
    } catch (error) {
      console.error("Ошибка при загрузке данных из localStorage:", error);
      localStorage.removeItem("userInfo");
    }
    setUser(storedUser);
  }, []);

   // Обновляем данные о пользователе и сохраняем в лс
   const updateUserInfo = (userData) => {
      setUser(userData);
      if (userData) {
         localStorage.setItem("userInfo", JSON.stringify(userData));
      } else {
         localStorage.removeItem("userInfo");
      }
   };

   const login = (loginData) => {
      updateUserInfo(loginData);
      return true;
   };

   const logout = () => {
      updateUserInfo(null);
      return true;
   };
   // В сам провайдер нужно обязательно прокинуть те значения,
   // которые мы хотим использовать в разных частях приложения
   return (
      <AuthContext.Provider value={{ user, login, logout, updateUserInfo }}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;