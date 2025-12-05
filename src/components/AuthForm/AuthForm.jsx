import { Link, useNavigate } from "react-router-dom";
import BaseButton from "./Button";
import BaseInput from "./Input";
import { SBg, SFormGroup, SFormGroupP, SInputWrapper, SModal, STitle, SWrapper } from "./AuthForm.styled";

const AuthForm = ({ isSignUp, setIsAuth }) => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuth(true);
    navigate("/");
  };
  return (
    <SBg>
      <SModal>
        <SWrapper>
          <STitle>{isSignUp ? "Регистрация" : "Вход"}</STitle>
          <form className="form" id="form" action="#">
            <SInputWrapper>
              {isSignUp && (
                <BaseInput
                  tag="input"
                  className="auth-input"
                  type="text"
                  name="name"
                  id="formname"
                  placeholder="Имя"
                />
              )}
              <BaseInput
                tag="input"
                className="auth-input"
                type="text"
                name="login"
                id="formlogin"
                placeholder="Эл. почта"
              />
              <BaseInput
                tag="input"
                type="password"
                name="password"
                id="formpassword"
                placeholder="Пароль"
              />
            </SInputWrapper>

            <BaseButton
              onClick={handleLogin}
              type="secondary"
              fullWidth={true}
              className="button-enter"
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