import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { useState } from "react";

function Todo(props) {
  const [showModal, setShowModal] = useState(false);

  function deleteHandler() {
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {showModal && <Modal onConfirm={closeModal} onCancel={closeModal} />}
      {showModal && <Backdrop onCancel={closeModal} />}
    </div>
  );
}

export default Todo;
