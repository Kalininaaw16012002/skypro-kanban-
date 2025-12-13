import { Link, useNavigate } from "react-router-dom";
import BaseButton from "./Button";
import BaseInput from "./Input";
import { SBg, SFormGroup, SFormGroupP, SInputWrapper, SModal, STitle, SWrapper } from "./AuthForm.styled";
import { useState } from "react";
import { signIn, signUp } from "../../services/auth";


const AuthForm = ({ isSignUp, setIsAuth }) => {
   const navigate = useNavigate();

   // состояние полей
   const [formData, setFormData] = useState({
      name: "",
      login: "",
      password: "",
   });

   // состояние ошибок
   const [errors, setErrors] = useState({
      name: "",
      login: "",
      password: "",
   });

   // состояние текста ошибки, чтобы показать её пользователю
   const [error, setError] = useState("");

  // функция валидации
const validateForm = () => {
  const newErrors = { name: "", login: "", password: "" };
  let isValid = true;

  if (isSignUp && !formData.name.trim()) {
    newErrors.name = "Пожалуйста, заполните имя";
    setError("Заполните все поля");
    isValid = false;
  }

  if (!formData.login.trim()) {
    newErrors.login = "Пожалуйста, заполните электронную почту";
    setError("Заполните все поля");
    isValid = false;
  }

  if (!formData.password.trim()) {
    newErrors.password = "Пожалуйста, введите пароль";
    setError("Заполните все поля");
    isValid = false;
  }

  setErrors(newErrors);
  setError("");
  return isValid;
};

// функция, которая отслеживает изменение
const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" }));
    setError("");
};

   // функция отправки формы
   const handleSubmit = async (e) => {
      e.preventDefault();
      if (!validateForm()) {
         // если у нас форма не прошла валидацию, то дальше не продолжаем
         return;
      }
   try { 
       const data = isSignUp
        ? await signUp({ name: formData.name, login: formData.login, password: formData.password })
        : await signIn({ login: formData.login, password: formData.password });

      if (data) {
         setIsAuth(true);
         localStorage.setItem("userInfo", JSON.stringify(data));
         navigate("/");
      }
      } catch (err) {
         setError(err.message);
      }
   };
  return (
    <SBg>
      <SModal>
        <SWrapper>
          <STitle>{isSignUp ? "Регистрация" : "Вход"}</STitle>
          <form className="form" id="form" onSubmit={handleSubmit}>
            <SInputWrapper>
              {isSignUp && (
                <BaseInput
                  error={errors.name}
                  type="text"
                  name="name"
                  id="formname"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={handleChange}
                />
              )}
              <BaseInput
                error={errors.login}
                  type="text"
                  name="login"
                  id="formlogin"
                  placeholder="Эл. почта"
                  value={formData.login}
                  onChange={handleChange}
              />
              <BaseInput
                error={errors.password}
                  type="password"
                  name="password"
                  id="formpassword"
                  placeholder="Пароль"
                  value={formData.password}
                  onChange={handleChange}
              />
            </SInputWrapper>
            <p style={{ color: "red" }}>{error}</p>
            <BaseButton
              type="secondary"
              fullWidth={true}
              text={isSignUp ? "Зарегистрироваться" : "Войти"}
            />

            {!isSignUp && (
              <SFormGroup>
                <SFormGroupP>Нужно зарегистрироваться?</SFormGroupP>
                <Link to="/sign-up" style={{ color: "#94a6be66", fontSize: "14px"}}>Регистрируйтесь здесь</Link>
              </SFormGroup>
            )}
            {isSignUp && (
              <SFormGroup>
                <SFormGroupP>
                  Уже есть аккаунт? <Link to="/sign-in" style={{ color: "#94a6be66"}}>Войдите здесь</Link>
                </SFormGroupP>
              </SFormGroup>
            )}
          </form>
        </SWrapper>
      </SModal>
    </SBg>
  );
};

export default AuthForm;