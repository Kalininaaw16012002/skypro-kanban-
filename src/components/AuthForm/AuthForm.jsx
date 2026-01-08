import { Link, useNavigate } from "react-router-dom";
import BaseButton from "./Button";
import BaseInput from "./Input";
import { SBg, SFormGroup, SFormGroupP, SInputWrapper, SModal, STitle, SWrapper } from "./AuthForm.styled";
import { useContext, useState } from "react";
import { signIn, signUp } from "../../services/auth";
import { AuthContext } from "../../context/AuthContext";
import { useTheme } from "styled-components";

const AuthForm = ({ isSignUp, setIsAuth, onAuthSuccess }) => {
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext); 

  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const isFormInvalid = Object.values(errors).some(err => err !== "") || Boolean(error);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: "" })); 
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return; 
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
    <SBg $isDark={isDark}>
      <SModal>
        <SWrapper $isDark={isDark}>
          <STitle $isDark={isDark}>{isSignUp ? "Регистрация" : "Вход"}</STitle>
          <form className="form" id="form" onSubmit={handleSubmit}>
            <SInputWrapper>
              {isSignUp && (
                <BaseInput $isDark={isDark}
                  error={errors.name}
                  hasGlobalError={Boolean(error)}
                  type="text"
                  name="name"
                  id="formname"
                  placeholder="Имя"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isLoading}
                />
              )}
              <BaseInput $isDark={isDark}
                error={errors.login}
                hasGlobalError={Boolean(error)}
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
                value={formData.login}
                onChange={handleChange}
                disabled={isLoading}
              />
              <BaseInput $isDark={isDark}
                error={errors.password}
                hasGlobalError={Boolean(error)}
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
                disabled={isLoading}
              />
            </SInputWrapper>
            {errors.name && (
              <div style={{ color: 'red'}}>
                {errors.name}
              </div>
            )}
            {errors.login  && (
              <div style={{ color: 'red'}}>
                {errors.login }
              </div>
            )}
            {errors.password && (
              <div style={{ color: 'red'}}>
                {errors.password}
              </div>
            )}
            {error && <p style={{ color: "red"}}>{error}</p>}
            <BaseButton
              type="secondary"
              fullWidth={true}
              text={isSignUp ? "Зарегистрироваться" : "Войти"}
              disabled={isLoading || isFormInvalid}
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
