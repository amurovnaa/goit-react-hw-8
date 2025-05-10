import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";
import * as Yup from "yup";

const LoginForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    password: "",
  };

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
      <div>
        <div>
          <h1>Login now!</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia sequi
            exercira necessitatibus perspiciatis!
          </p>
        </div>
        <div>
          <div>
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={loginValidationSchema}
            >
              <Form>
                <fieldset>
                  <label>Email</label>
                  <Field name="email" type="email" placeholder="Email" />
                  <label>Password</label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                  <div>
                    <Link to="/register">You don't have account? Sign UP!</Link>
                  </div>
                  <button type="submit">Login</button>
                </fieldset>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
