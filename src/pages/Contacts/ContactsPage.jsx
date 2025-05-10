import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/contactsSlice";
import { fetchContacts } from "../../redux/contacts/contactsOps";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import ContactList from "../../components/ContactList/ContactList";
import { useEffect } from "react";

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  useEffect(() => {
    if (contacts.length === 0) dispatch(fetchContacts());
  }, [dispatch, contacts]);

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </>
  );
};
export default Contacts;
