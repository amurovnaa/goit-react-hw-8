import { FaPhone } from "react-icons/fa6";
import { BsPeopleFill } from "react-icons/bs";
import s from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import ModalDeleteContact from "../ModalDeleteContact/ModalDeleteContact";
import { useState } from "react";

export const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDeleteContact = () => {
    dispatch(deleteContact(id));
    setIsModalOpen(false);
  };

  // const handleDeleteContact = () => {
  //   dispatch(deleteContact(id));
  // };
  return (
    <div className={s.wrapper}>
      <div className={s.contactInfo}>
        <div className={s.contactData}>
          <BsPeopleFill />
          <p>{name}</p>
        </div>
        <div className={s.contactData}>
          <FaPhone />
          <p>{number}</p>
        </div>
      </div>
      <button className={s.buttonDelete} onClick={() => setIsModalOpen(true)}>
        Delete
      </button>
      <ModalDeleteContact
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDeleteContact}
        contactName={name}
      />
    </div>
  );
};

export default Contact;
