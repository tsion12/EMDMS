import React from "react";

const RejectionModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-20"></div>
      <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
        <div className="bg-white flex flex-col space-y-4 rounded-lg shadow-lg relative w-[40%] h-[30%] ">
       
          {children}
        </div>
      </div>
    </div>
  );
};

export default RejectionModal;
