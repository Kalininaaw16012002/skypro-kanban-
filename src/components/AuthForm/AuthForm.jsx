import { Link, useNavigate } from "react-router-dom";
import BaseButton from "./Button";
import BaseInput from "./Input";
import { SBg, SFormGroup, SFormGroupP, SInputWrapper, SModal, STitle, SWrapper } from "./AuthForm.styled";
import { useContext, useState } from "react";
import { signIn, signUp } from "../../services/auth";
import { AuthContext } from "../../context/AuthContext";

const AuthForm = ({ isSignUp, setIsAuth, onAuthSuccess }) => {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext); 

  // состояние полей
  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  // ошибки полей
  const [errors, setErrors] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // функция валидации
  const validateForm = () => {
    const newErrors = { name: "", login: "", password: "" };
    let isValid = true;

    if (isSignUp && !formData.name.trim()) {
      newErrors.name = "Пожалуйста, заполните имя";
      isValid = false;
    }

    if (!formData.login.trim()) {
      newErrors.login = "Пожалуйста, заполните электронную почту";
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Пожалуйста, введите пароль";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // обработчик изменения поля
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" })); // очищаем ошибку при изменении
  };

  // отправка формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; // если валидация не прошла, не продолжаем
    }
    setIsLoading(true); 
    setError("");
    try {
      const data = isSignUp
        ? await signUp({ name: formData.name, login: formData.login, password: formData.password })
        : await signIn({ login: formData.login, password: formData.password }, setIsAuth);

      if (data) {
        setUser(data);
        localStorage.setItem("userInfo", JSON.stringify(data));
        if (onAuthSuccess) {
          onAuthSuccess(); 
        } else {
          navigate("/"); 
        }
      }
    } catch (err) {
      setError(err.message);
    }finally {
      setIsLoading(false); 
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
                  disabled={isLoading}
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
                disabled={isLoading}
              />
              <BaseInput
                error={errors.password}
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
                disabled={isLoading}
              />
            </SInputWrapper>
            {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            {errors.login && <p style={{ color: "red" }}>{errors.login}</p>}
            {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <BaseButton
              type="secondary"
              fullWidth={true}
              text={isSignUp ? "Зарегистрироваться" : "Войти"}
              disabled={isLoading}
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
