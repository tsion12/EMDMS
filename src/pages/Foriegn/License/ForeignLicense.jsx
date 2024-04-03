import React, { useState } from "react";
import { CgNotes } from "react-icons/cg";
import { FaCheck } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

import { MdPendingActions } from "react-icons/md";
import { TbScanEye } from "react-icons/tb";

const ForeignLicense = () => {
  const [activeTab, setActiveTab] = useState("firmInfo");
  return (
    <div className="flex flex-col mt-10 mx-2 md:mx-10 space-y-6 w-full">
      <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:items-center md:justify-between items-end w-full">
        <div className="flex flex-col space-y-1">
          <div className="text-3xl font-semibold text-emdmsPrimary font-poppins">
            Licenses
          </div>
          <div className="max-w-lg text-[#9898A3] text-sm font-poppins">
            Under the job order list, you would typically find a compilation of
            job orders or work requests that need to be completed or InProgress.
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row items-start gap-4">
        <div className="w-full md:w-[30%] flex flex-col space-y-5 ">
          <div className="flex items-center justify-between w-full gap-4 ">
            <div
              onClick={() => setActiveTab("firmInfo")}
              className={` ${
                activeTab === "firmInfo"
                  ? "bg-emdmsPrimary text-white"
                  : "bg-white text-emdmsPrimary"
              } max-w-xl w-40 border cursor-pointer   hover:bg-emdmsPrimary/80 hover:text-white px-6 py-2 rounded-md flex items-center justify-center`}>
              Firm Info
            </div>
            <div
              onClick={() => setActiveTab("licenseApplication")}
              className={`
              ${
                activeTab === "licenseApplication"
                  ? "bg-emdmsPrimary text-white"
                  : "bg-white text-emdmsPrimary"
              }
              max-w-xl w-60 px-4 cursor-pointer
              hover:bg-emdmsPrimary/80 hover:text-white
                 py-2 rounded-md flex items-center justify-center`}>
              License Application
            </div>
          </div>

          <div className="block  w-full  bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
            <div className="h-16 bg-[#FFFBEB]  p-2 flex items-center justify-end">
              <div className="bg-[#BAB18B1A] rounded-md text-[#BAB18B] gap-2 py-1.5 text-sm px-2 flex items-center justify-center ">
                <p>Pending</p>
                <MdPendingActions />
              </div>
            </div>
            <div className="p-6">
              <h5 className=" text-2xl font-bold tracking-tight text-gray-900 ">
                License
              </h5>
              <p className="mb-2 text-[#555555]">Submitted at: Sep 12, 2022</p>
              <p className="font-normal  text-[#3B3F5C] text-xs ">
                This license number is accepted by License numbers are typically
                unique identifiers issued by specific authorities or
                organizations for specific purposes
              </p>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[70%]  h-[45vh] md:h-[70vh] overflow-scroll flex flex-col space-y-2  ">
          <div className="flex bg-white rounded-md w-full overflow-x-auto  items-center justify-around p-2">
            <div className="text-[#555555] font-semibold">2023 Renewal</div>
            <div className="text-xs">Dec 13, 2022</div>
            <div className=" bg-[#94C4FE] w-36  text-[#245487] font-bold text-center rounded-md flex  space-x-2 px-8 py-3 text-xs ">
              <IoClose />
              <p> Uploaded</p>
            </div>

            <div className=" border border-[#EED116] cursor-pointer bg-[#FCF9E1]  text-[#B29C10] font-bold w-24 px-6  text-center rounded-md flex items-center justify-center py-2 text-xs ">
              Open
            </div>
          </div>
          <div className="flex bg-white  rounded-md w-full overflow-x-auto items-center justify-around p-2">
            <div className="text-[#555555] font-semibold">2023 Renewal</div>
            <div className="text-xs">Dec 13, 2022</div>
            <div className=" bg-[#CF51511A] w-36  text-[#CF5151] font-bold text-center rounded-md flex  space-x-2 px-8 py-3 text-xs ">
              <IoClose />
              <p> Rejected</p>
            </div>

            <div className=" border border-[#EED116]  cursor-pointer bg-[#FCF9E1]  text-[#B29C10] font-bold w-24 px-6  text-center rounded-md flex items-center justify-center py-2 text-xs ">
              Open
            </div>
          </div>
          <div className="flex bg-white rounded-md w-full overflow-x-auto  items-center justify-around p-2">
            <div className="text-[#555555] font-semibold">2023 Renewal</div>
            <div className="text-xs">Dec 13, 2022</div>
            <div className=" bg-[#71E17C1A] w-36  text-[#71E17C] font-bold text-center rounded-md flex  space-x-2 px-8 py-3 text-xs ">
              <FaCheck /> <p> verified</p>
            </div>

            <div className=" border border-[#EED116] cursor-pointer bg-[#FCF9E1]  text-[#B29C10] font-bold w-24 px-6  text-center rounded-md flex items-center justify-center py-2 text-xs ">
              Open
            </div>
          </div>
          <div className="flex bg-white rounded-md w-full overflow-x-auto  items-center justify-around p-2">
            <div className="text-[#555555] font-semibold">2023 Renewal</div>
            <div className="text-xs">Dec 13, 2022</div>
            <div className="border border-[#EED116] bg-[#FCF9E1] w-36  text-[#B29C10] font-bold text-center rounded-md flex  space-x-2 px-8 py-3 text-xs ">
              <FaCheck /> <p> Pending</p>
            </div>

            <div className=" border border-[#EED116] cursor-pointer bg-[#FCF9E1]  text-[#B29C10] font-bold w-24 px-6  text-center rounded-md flex items-center justify-center py-2 text-xs ">
              Open
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForeignLicense;
