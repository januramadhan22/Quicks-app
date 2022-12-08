import React from "react";

function Modal() {
  return (
    <div className="absolute bottom-7 right-8 dropdown dropdown-top dropdown-end">
      <label tabIndex={0} className="btn m-1">
        Click
      </label>
      <div
        tabIndex={0}
        className="dropdown-content p-2 shadow bg-white rounded-sm w-96 h-96"
      >
        Modal Chat
      </div>
    </div>
  );
}

export default Modal;
