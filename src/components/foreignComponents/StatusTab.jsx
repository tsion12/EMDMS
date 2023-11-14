import React, { useState } from "react";
import { BiBriefcaseAlt, BiSolidFilePdf } from "react-icons/bi";
import Button from "../utilities/Button";

const StatusTab = ({ openModal, setOpenModal }) => {
  const gridData = [
    {
      id: 1,
      agencyId: "1234567",
      description:
        "A bank statement is typically a digital or physical document that provides a summary of the transactions, balances, and activity in a bank account over a specific period of time.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  pb-10   gap-3 w-full ">
      {[1, 2, 3].map((item) => (
        <div
          key={item.id}
          className="bg-white w-full rounded-xl  py-4 pb-10 px-2 flex flex-col space-y-2">
          <div className="flex px-10 space-x-4 pt-5   ">
            <div>
              <BiBriefcaseAlt className="text-4xl  font-bold text-emdmsPrimary" />
            </div>
            <div className="flex  flex-col space-y-1">
              <div className="text-[#313A4E] font-semibold">
                DUB_AHM_MOH_1123
              </div>
              <div className="text-[#838383]">Job Order Code</div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="text-lg text-[#838383]">Total</div>
            <div className="text-2xl font-bold">2,030</div>
          </div>

          <div className="grid grid-cols-2  pl-10  text-center py-5   ">
            <div className=" flex flex-col items-start w-full space-y-1 ">
              <div>Pending</div>
              <div className=" w-[100%] border border-[#d4d4d42f]"></div>
            </div>
            <div>4</div>
            <div className=" flex flex-col w-full items-start space-y-2 ">
              <div>Rejected</div>
              <div className=" w-[100%] border border-[#d4d4d42f]"></div>
            </div>
            <div>4</div>
            <div className=" flex flex-col w-full  items-start space-y-2 ">
              <div>Completed</div>
              <div className=" w-[100%] border border-[#d4d4d42f]"></div>
            </div>
            <div>4</div>
          </div>
          <div
            onClick={() => {
              setOpenModal(true);
            }}
            className="flex items-center justify-center border text-emdmsPrimary font-semibold border-emdmsPrimary rounded-3xl py-1">
            View Details
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatusTab;
