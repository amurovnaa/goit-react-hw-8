import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { loginThunk } from "../../redux/auth/operations";

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
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
            <div></div>
            <Link to="/">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
