import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const AllTickets = ({setOpenTicketPage}) => {
  return (
    <div>
      {" "}
      <div
        onClick={() => {
          setOpenTicketPage(true);
        }}
        className="flex w-full gap-1 cursor-pointer  items-center">
        <IoMdArrowRoundBack />
        Back
      </div>
      <div className=" h-[65vh] overflow-y-auto flex flex-col ">
        <div className="   flex flex-col p-5 space-y-3 w-full h-max rounded-sm">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-center space-x-3">
              <div className="h-3 w-3 rounded-full bg-[#F8A53499]"></div>
              <div className="text-[#2E2C34] text-lg">Ticket# 2023-CS123</div>
            </div>
            <div className="text-[#84818A]">Created at 12:45 AM</div>
          </div>
          <div className="px-5 flex flex-col space-y-3 items-start justify-start">
            <h3 className="font-medium text-lg ">
              The agency is asking our daughter additional money.{" "}
            </h3>
            <p className="text-[#84818A] max-w-5xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <p className="text-[#84818A] max-w-5xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-[#84818A] max-w-5xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className=" w-full h-max bg-[#e7e7e73a] space-y-4 border rounded-sm px-10 py-5 flex flex-col">
            <h1 className="text-base font-semibold">Resolve the Complaint</h1>
            <div>write description</div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="8"
              placeholder="type ticket issue here"
              className="w-[90%] p-2  outline-emdmsPrimary/20"
            />
            <div className="flex items-center justify-end space-x-3">
              <button className="border border-[#555555] w-32 py-2 rounded-md ">
                Reject
              </button>
              <button className="bg-emdmsPrimary text-white border border-emdmsPrimary w-32 py-2 rounded-md ">
                Resolve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllTickets;
