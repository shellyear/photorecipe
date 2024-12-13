import React from "react";

interface ModalProps {
  id: string;
  body: React.ReactNode;
}

const Modal = ({ id, body }: ModalProps) => {
  return (
    <dialog id={id} className="modal modal-middle sm:modal-middle">
      <div className="modal-box">
        {body}
        <div className="modal-action">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
