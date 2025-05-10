import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { registerThunk } from "../../redux/auth/operations";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  const handleSubmit = async (values, actions) => {
    console.log(values);
    dispatch(registerThunk(values));
    actions.resetForm();
  };
  return (
    <div>
      <div>
        <div>
          <h1>Register now!</h1>
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
                  <label>Name</label>
                  <Field name="name" type="name" placeholder="Name" />
                  <label>Email</label>
                  <Field name="email" type="email" placeholder="Email" />
                  <label>Password</label>
                  <Field
                    name="password"
                    type="password"
                    placeholder="Password"
                  />
                  <Link to="/login">You already have account?Sign in!</Link>
                  <button type="submit">Register</button>
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
export default RegisterForm;
