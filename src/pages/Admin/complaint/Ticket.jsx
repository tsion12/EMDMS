import React, { useState } from "react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import CreateTicketModal from "./components/CreateTicketModal";
import { OpenTicket } from "./components/OpenTicket";
import AllTickets from "./components/AllTickets";

const Ticket = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [openTicketPage, setOpenTicketPage] = useState(true);
  const [openSideModal, setOpenSideModal] = useState(false);

  return (
    <div className="flex flex-col mt-10 ml-10 mr-10 space-y-6 w-full">
      {openSideModal && (
        <CreateTicketModal setOpenSideModal={setOpenSideModal} />
      )}
      <div className="flex items-center justify-between w-full">
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
          <HiOutlinePencilSquare className="text-lg" />
          Create New Ticket
        </div>
      </div>
      <div className="bg-white w-[78vw] rounded-md h-[70vh] overflow-y-auto flex flex-col p-10 text-sm  ">
        {openTicketPage && (
          <>
            <OpenTicket
              setActiveTab={setActiveTab}
              setOpenTicketPage={setOpenTicketPage}
              activeTab={activeTab}
            />
          </>
        )}
        {!openTicketPage && (
          <>
            <AllTickets setOpenTicketPage={setOpenTicketPage} />
          </>
        )}
      </div>
    </div>
  );
};

export default Ticket;
