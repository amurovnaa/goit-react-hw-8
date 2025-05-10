import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { useEffect } from "react";
import { selectContacts } from "../../redux/contacts/selectors";
import s from "./ContactsPage.module.css";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    if (!contacts.length) dispatch(fetchContacts());
  }, [dispatch, contacts.length]);

  return (
    <section className={s.section}>
      <div>
        <h1 className={s.title}>Your Phonebook</h1>
        <h3 className={s.text}>Add contact filling the form: </h3>

        <ContactForm />
      </div>
      <div className={s.searchList}>
        <SearchBox />
        <ContactList />
      </div>
    </section>
  );
};
export default Contacts;
