import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import * as Yup from "yup";
import s from "./LoginForm.module.css";
import { useId } from "react";

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(loginThunk(values));
    console.log(values);
    actions.resetForm();
  };

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={loginValidationSchema}
      >
        <Form className={s.formContainer}>
          <div className={s.inputWrapper}>
            <label className={s.inputName} htmlFor={emailId}>
              Email:
            </label>
            <Field
              className={s.input}
              name="email"
              type="email"
              placeholder="tima@gmail.com"
            />

            <ErrorMessage className={s.error} name="email" component="span" />
          </div>
          <div className={s.inputWrapper}>
            <label className={s.inputName} htmlFor={passwordId}>
              Password:
            </label>
            <Field
              className={s.input}
              name="password"
              type="password"
              placeholder="Password"
            />
            <ErrorMessage
              className={s.error}
              name="password"
              component="span"
            />
          </div>
          <Link className={s.link} to="/register">
            You don't have account? Sign Up!
          </Link>
          <button className={s.button} type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;
