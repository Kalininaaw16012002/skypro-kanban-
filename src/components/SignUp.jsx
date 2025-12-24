import { useState } from "react";
import AuthForm from "./AuthForm/AuthForm";


const SignUp = () => {
  const [isAuth, setIsAuth] = useState(false);

  return <AuthForm isSignUp={true} setIsAuth={setIsAuth} />;
};

export default SignUp;