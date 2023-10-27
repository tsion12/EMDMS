import React, { useState } from "react";
import Modal from "../../../../components/Modal";
import { BsFillExclamationTriangleFill } from "react-icons/bs";

const Conclusion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="flex flex-col p-8 space-y-6 w-full lg:w-[75%] h-[67vh] overflow-y-auto bg-white rounded-xl text-xs noscrollBar">
      <div className="text-lg font-bold">Inspection Check List</div>
      <div className="w-full h-[45vh] overflow-y-auto noscrollBar flex flex-col space-y-6">
        <div className="flex flex-col">
          <div className="text-sm font-semibold">Inspector</div>
          <div className="text-[8px] text-[#AEB0B4]">
            Who inspected the Agency
          </div>
        </div>
        <div className="border px-5 py-3 w-[85%] rounded-lg flex items-center justify-start">
          <div>Belaynesh Abegaz</div>
        </div>
        <div className="flex flex-col">
          <div className="text-sm font-semibold">
            Viewed things while under Inspection
          </div>
          <div className="text-[8px] text-[#AEB0B4]">Inspection Reports</div>
        </div>
        <div className="border px-5 py-5 w-[85%] rounded-lg flex items-center justify-start">
          <div className="text-[#1e1e1ebe] max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
      <div className="flex justify-end  items-center space-x-5 mt-10">
        <div>
          {" "}
          <button className=" border border-[#CC362F] px-10 py-2 text-[#CC362F]">
            Reject
          </button>
        </div>
        <div>
          <button
            onClick={openModal}
            className=" border bg-[#008080] px-12 py-2 text-white rounded-md">
            Approve
          </button>
          <Modal isOpen={isOpen} onClose={closeModal}>
            <div className="text-2xl  text-center font-poppins text-N40 font-bold">
              Confirmation
            </div>
            <div className="text-N40 text-center text-sm tracking-wider">
              Are you sure you want to
              <span className="font-bold"> Approve </span>the Inspection ?
            </div>
            <div className="flex flex-col space-y-3 bg-[#F0F7F7] p-5 border-l-8 border-l-[#2A2A2A] rounded-md">
              <div className="flex space-x-2 items-center text-[#555555] font-bold text-lg">
                <BsFillExclamationTriangleFill />
                <div>Attention</div>
              </div>
              <div className="text-[#555555] tracking-wider text-xs max-w-lg">
                If you accept this document, it will not require the user to
                upload it once more.
              </div>
            </div>
            <div className="flex space-x-6 items-center justify-end">
              <button
                onClick={closeModal}
                className="bg-[#F0F7F7] py-2 px-8 text-N40 rounded-sm text-sm">
                Cancel
              </button>
              <button
                onClick={() => {}}
                className="bg-emdmsPrimary py-2 px-8 text-white rounded-sm text-sm">
                Submit
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Conclusion;
