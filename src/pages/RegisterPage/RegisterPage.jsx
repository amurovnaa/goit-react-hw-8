import RegisterForm from "../../components/RegisterForm/RegisterForm";
import s from "./RegisterPage.module.css";
const Register = () => {
  return (
    <section className={s.sectionWrapper}>
      <div className={s.registerText}>
        <h1 className={s.title}>Register now!</h1>
        <p className={s.text}>
          Sign up now to manage, organize, and stay connected with your contacts
          easily!
        </p>
      </div>
      <RegisterForm />
    </section>
  );
};
export default Register;
