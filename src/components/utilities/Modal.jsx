import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black/50"></div>
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div className="p-6 flex flex-col space-y-4 rounded-lg shadow-lg relative max-w-4xl bg-white w-[50%]">
          <button
            className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-800"
            onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
