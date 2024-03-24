import React from "react";
import { IoMdClose } from "react-icons/io";
import User from "../../../../assets/images/Avatar.png";

const LaborSearchResultCard = ({ setResult }) => {
  return (
    <div className="absolute left-0 w-full mt-2 bg-[#F0FEFF] border border-gray-300 p-4 flex flex-col justify-between rounded-md shadow-lg z-50">
      <div
        onClick={() => {
          setResult(false);
        }}
        className="flex bg-white justify-center border-2 rounded-full w-5 h-5 text-red   hover:text-white items-center  absolute -right-2 -top-1 hover:scale-105 hover:bg-red cursor-pointer">
        <IoMdClose className="text-xs" />
      </div>
      <div className="flex items-center justify-between space-x-3 w-full">
        <div className="flex items-center justify-center space-x-2">
          <div className="hidden relative md:flex items-center">
            <button className="rounded-full bg-primary ">
              <img
                src="jbjhbj"
                alt="A"
                className="h-10 w-10 bg-[#DFA9DD] rounded-full"
              />
            </button>
          </div>
          <div className="hidden md:flex md:flex-col  text-xs items-start  ">
            <div className="text-new font-bold">Tsion Menge</div>
            <div className="text-[#9898A3]">1234567</div>
          </div>
        </div>

        <div
          onClick={() => {}}
          className="bg-emdmsPrimary hover:bg-emdmsPrimary/50 p-2 rounded-md  w-16  text-xs text-white cursor-pointer flex items-center justify-center">
          Save Labor
        </div>
      </div>
    </div>
  );
};

export default LaborSearchResultCard;
