import Modal from "react-modal";
// import css"./DeleteModal.css";

Modal.setAppElement("#root"); // Make sure this matches your app's root div

const ModalDeleteContact = ({ isOpen, onClose, onConfirm, contactName }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Confirm Delete"
      className="modal"
      overlayClassName="overlay"
    >
      <h2>Delete Contact</h2>
      <p>
        Are you sure you want to delete <strong>{contactName}</strong>?
      </p>
      <div className="buttons">
        <button onClick={onConfirm} className="confirm">
          Yes, Delete
        </button>
        <button onClick={onClose} className="cancel">
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default ModalDeleteContact;
