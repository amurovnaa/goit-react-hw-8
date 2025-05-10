import { Field, Formik, Form, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/contactsOps";

const ContactForm = () => {
  const initialValues = { name: "", number: "" };
  const dispatch = useDispatch();

  const nameId = useId();
  const phoneId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );

    actions.resetForm();
  };

  const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "At least 3 characters!")
      .max(50, "Max 50 charaters!")
      .required("Required"),
    number: Yup.string()
      .min(3, "At least 3 numbers!")
      .max(50, "Max 50 charaters!")
      .required("Required"),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={s.formContainer}>
        <div className={s.inputWrapper}>
          <label className={s.inputName} htmlFor={nameId}>
            Name
          </label>
          <Field
            className={s.input}
            type="name"
            name="name"
            id={nameId}
            placeholder="Enter name"
          />
          <ErrorMessage className={s.error} name="name" component="span" />
        </div>
        <div className={s.inputWrapper}>
          <label className={s.inputName} htmlFor={phoneId}>
            Number
          </label>
          <Field
            className={s.input}
            type="phone"
            name="number"
            id={phoneId}
            placeholder="Enter phone"
          />
          <ErrorMessage className={s.error} name="number" component="span" />
        </div>
        <button className={s.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
