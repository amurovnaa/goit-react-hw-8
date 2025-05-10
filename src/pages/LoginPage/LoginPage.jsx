import LoginForm from "../../components/LoginForm/LoginForm";
import s from "./LoginPage.module.css";
const Login = () => {
  return (
    <div className={s.sectionWrapper}>
      <div className={s.loginText}>
        <h1 className={s.title}>Login now!</h1>
        <p className={s.text}>
          Log in to access and manage your contacts, stay connected, and enjoy a
          personalized experience!
        </p>
      </div>
      <LoginForm />
    </div>
  );
};
export default Login;
