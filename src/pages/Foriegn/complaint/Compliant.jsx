import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import Nofile from "../../../assets/svg/noFile.svg";
import CreateCompliantSideModal from "./components/CreateCompliantSideModal";

const Compliant = () => {
  const [initialView, setInitialView] = useState(true);
  const [openSideModal, setOpenSideModal] = useState(false);
  return (
    <div className="flex flex-col mt-10 ml-10 mr-10 space-y-6 w-full">
      {openSideModal && (
        <CreateCompliantSideModal setOpenSideModal={setOpenSideModal} />
      )}
      <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center md:justify-between items-end w-full">
        <div className="flex flex-col space-y-1">
          <div className="text-3xl font-semibold text-emdmsPrimary font-poppins">
            Compliant Management
          </div>
          <div className="max-w-lg text-[#9898A3] text-sm font-poppins">
            Under this table you will find a list of report issues that you
            created as a part of labour.
          </div>
        </div>
        <div
          onClick={() => {
            setOpenSideModal(true);
          }}
          className="w-40 cursor-pointer py-3 gap-2 rounded-r-md text-xs flex items-center justify-center  bg-emdmsPrimary text-white">
          <IoMdAdd className="text-lg" />
          Request Compliant
        </div>
      </div>
      {initialView && (
        <div className=" w-full h-full flex flex-col items-center justify-center">
          <img src={Nofile} alt="" />
          <div className="text-emdmsPrimary max-w-sm text-lg text-center ">
            In this section, you will find the reports you applied for the
            labor.
          </div>
        </div>
      )}
    </div>
  );
};

export default Compliant;
