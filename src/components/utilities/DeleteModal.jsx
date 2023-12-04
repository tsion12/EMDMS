import React from "react";

const DeleteModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black/50"></div>
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div className=" flex flex-col space-y-4 rounded-2xl shadow-lg relative max-w-4xl bg-white w-[50%]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
