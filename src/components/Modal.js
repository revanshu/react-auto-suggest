import React from "react";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div
      className={showHideClassName}
      onClick={() => {
        handleClose();
      }}
    >
      <div className="modal-main">{children}</div>
    </div>
  );
};

export default Modal;
