import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";
import * as Yup from "yup";
import { useId } from "react";
import s from "./RegisterForm.module.css";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = async (values, actions) => {
    console.log(values);
    dispatch(registerThunk(values));
    actions.resetForm();
  };

  const registerValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name is too short")
      .max(30, "Name is too long")
      .required("Name is required"),

    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={registerValidationSchema}
      >
        <Form className={s.formContainer}>
          <div className={s.inputWrapper}>
            <label className={s.inputName} htmlFor={nameId}>
              Your name:
            </label>
            <Field
              className={s.input}
              name="name"
              type="name"
              placeholder="Name"
            />
            <ErrorMessage className={s.error} name="name" component="span" />
          </div>
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
          <Link className={s.link} to="/login">
            You already have account? Sign in!
          </Link>
          <button className={s.button} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </>
  );
};
export default RegisterForm;
