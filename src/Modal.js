import { createPortal } from "react-dom";
import "./Modal.css"

function Modal({ isOpened, onClose, onConfirm, title, message }) {
  if (!isOpened) {
    return null;
  }
  return createPortal(
    <div>
      <div className="overlay" onClick={onClose}></div>
      <div className="modal">
        <div className="border">
          <span className="close-btn" onClick={onClose}>x</span>
          <div className="modal-title">{title}</div>
          <div className="modal-content">{message}</div>
          <div className="modal-footer">
            <button className="button" onClick={onConfirm}>Confirm</button>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal"));
}

export default Modal;
