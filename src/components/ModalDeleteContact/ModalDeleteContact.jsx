import React from "react";
import Modal from "react-modal";
import s from "./ModalDeleteContact.module.css"; // Importing the module CSS

Modal.setAppElement("#root"); // Ensure your app root element is set

const ModalDeleteContact = ({ isOpen, onClose, onConfirm, contactName }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Confirm Delete"
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <h2 className={s.title}>Delete Contact</h2>
      <p className={s.text}>
        Are you sure you want to delete <strong>{contactName}</strong>?
      </p>
      <div className={s.buttons}>
        <button onClick={onConfirm} className={s.confirm}>
          Yes, Delete
        </button>
        <button onClick={onClose} className={s.cancel}>
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default ModalDeleteContact;
