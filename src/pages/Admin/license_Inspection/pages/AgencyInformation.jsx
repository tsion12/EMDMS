import React, { useState } from "react";
import { AiFillInfoCircle, AiOutlineInfoCircle } from "react-icons/ai";
import { HiMiniDocumentMagnifyingGlass } from "react-icons/hi2";
import { GoDotFill } from "react-icons/go";
import { TbInfoCircleFilled, TbInfoTriangleFilled } from "react-icons/tb";
import { GiFiles } from "react-icons/gi";
import StaffCheck from "./StaffCheck";
import EnvironmentCheck from "./EnvironmentCheck";
import EquipmentCheck from "./EquipmentCheck";
import Conclusion from "./Conclusion";

const AgencyInformation = () => {
  const [currentMenu, setCurrentMenu] = useState("Agency Information");
  const menuItems = [
    {
      icon: <AiFillInfoCircle />,
      text: "Agency Information",
    },
    {
      icon: <HiMiniDocumentMagnifyingGlass />,
      text: "Staff Check",
    },
    {
      icon: <GiFiles />,
      text: "Environment Check",
    },
    {
      icon: <TbInfoCircleFilled />,
      text: "Equipment Check",
    },
    {
      icon: <TbInfoTriangleFilled />,
      text: "Conclusion",
    },
  ];

  const companyInfoItems = [
    {
      icon: <GoDotFill className="text-emdmsPrimary text-lg mt-1" />,
      title: "Agency Type",
      companyType: "company type",
      value: "PLC",
    },
    {
      icon: <GoDotFill className="text-emdmsPrimary text-lg mt-1" />,
      title: "Agency Type",
      companyType: "company type",
      value: "PLC",
    },
    {
      icon: <GoDotFill className="text-emdmsPrimary text-lg mt-1" />,
      title: "Agency Type",
      companyType: "company type",
      value: "PLC",
    },
    {
      icon: <GoDotFill className="text-emdmsPrimary text-lg mt-1" />,
      title: "Agency Type",
      companyType: "company type",
      value: "PLC",
    },
    {
      icon: <GoDotFill className="text-emdmsPrimary text-lg mt-1" />,
      title: "Agency Type",
      companyType: "company type",
      value: "PLC",
    },
    {
      icon: <GoDotFill className="text-emdmsPrimary text-lg mt-1" />,
      title: "Agency Type",
      companyType: "company type",
      value: "PLC",
    },
    {
      icon: <GoDotFill className="text-emdmsPrimary text-lg mt-1" />,
      title: "Agency Type",
      companyType: "company type",
      value: "PLC",
    },
    {
      icon: <GoDotFill className="text-emdmsPrimary text-lg mt-1" />,
      title: "Agency Type",
      companyType: "company type",
      value: "PLC",
    },
  ];
  const locationItems = [
    {
      icon: <GoDotFill className="text-emdmsPrimary text-lg mt-1" />,
      title: "Agency Type",
      companyType: "company type",
      value: "PLC",
    },
    {
      icon: <GoDotFill className="text-emdmsPrimary text-lg mt-1" />,
      title: "Agency Type",
      companyType: "company type",
      value: "PLC",
    },
    {
      icon: <GoDotFill className="text-emdmsPrimary text-lg mt-1" />,
      title: "Agency Type",
      companyType: "company type",
      value: "PLC",
    },
    {
      icon: <GoDotFill className="text-emdmsPrimary text-lg mt-1" />,
      title: "Agency Type",
      companyType: "company type",
      value: "PLC",
    },
    {
      icon: <GoDotFill className="text-emdmsPrimary text-lg mt-1" />,
      title: "Agency Type",
      companyType: "company type",
      value: "PLC",
    },
    {
      icon: <GoDotFill className="text-emdmsPrimary text-lg mt-1" />,
      title: "Agency Type",
      companyType: "company type",
      value: "PLC",
    },
  ];
  return (
    <div className="flex flex-col space-y-8 lg:space-y-0 lg:flex-row w-full   h-[70vh] lg:space-x-20">
      {/* left side */}
      <div className="flex flex-row space-x-6 p-2 lg:space-x-0 lg:flex-col lg:px-10 justify-around lg:py-10 lg:space-y-6  w-[90vw] overflow-y-auto lg:w-[25%]  lg:h-[60%] bg-white rounded-xl">
        {menuItems.map((menuItem, index) => (
          <button
            onClick={() => {
              setCurrentMenu(menuItem.text);
              console.log({ currentMenu });
            }}
            key={index}
            className={`flex items-center space-x-2 ${
              currentMenu === menuItem.text
                ? " text-emdmsPrimary font-bold"
                : ""
            }`}>
            {menuItem.icon}
            <div>{menuItem.text}</div>
          </button>
        ))}
      </div>
      {/* right side  */}
      {currentMenu === "Agency Information" && (
        <div className="flex flex-col p-8 space-y-6 w-full lg:w-[75%] h-[67vh] overflow-y-auto bg-white rounded-xl text-xs noscrollBar">
          {/* Company information */}
          <div className="flex items-center space-x-4">
            <div className="bg-[#F0F7F7] w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold text-emdmsPrimary">
              A
            </div>
            <div className="flex flex-col space-y-1">
              <div className="text-emdmsPrimary font-bold text-sm">
                Abdala Agency
              </div>
              <div className="text-xs text-[#9A9A9A]">Agency Type: PLC</div>
            </div>
          </div>
          {/* Description */}
          <div className="space-y-1">
            <div className="font-bold">Description</div>
            <div className="text-[10px] text-[#656565] max-w-2xl">
              To an English person, it will seem like simplified English, as a
              skeptical Cambridge friend of mine told me what Occidental is. The
              European languages are members of the same family. Their separate
              existence is a myth. For science, music, sport, etc, To achieve
              this, it would be necessary Separate existence is a myth. If
              several languages coalesce
            </div>
          </div>
          {/* Border */}
          <div className="border w-full border-[#555555"></div>
          <div className="h-[35vh] overflow-y-auto noscrollBar space-y-8">
            {" "}
            <div className="space-y-5">
              {" "}
              {/* Company Information */}
              <div className="space-y-1/2">
                <div className="font-bold">Company Information</div>
                <div className="text-[10px] text-[#656565] max-w-2xl">
                  Private Company
                </div>
              </div>
              {/* Company Info Items */}
              <div className="grid grid-cols-4 grid-rows-2 gap-4">
                {companyInfoItems.map((item, index) => (
                  <div key={index} className="flex space-x-2 items-start">
                    {item.icon}
                    <div className="flex flex-col space-y-1/2 leading-4">
                      <div className="text-xs font-bold text-N40 tracking-wide">
                        {item.title}
                      </div>
                      <div className="text-[10px] text-[#656565] ">
                        {item.companyType}
                      </div>
                      <div className="text-[10px] font-semibold text-[#656565]">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-5">
              {" "}
              {/* location Details */}
              <div className="space-y-1/2">
                <div className="font-bold">Location Details</div>
                <div className="text-[10px] text-[#656565] max-w-2xl">
                  Private Company
                </div>
              </div>
              {/* location detail Items */}
              <div className="grid grid-cols-3 grid-rows-2 gap-4">
                {locationItems.map((item, index) => (
                  <div key={index} className="flex space-x-2 items-start">
                    {item.icon}
                    <div className="flex flex-col space-y-1/2 leading-4">
                      <div className="text-xs font-bold text-N40 tracking-wide">
                        {item.title}
                      </div>
                      <div className="text-[10px] text-[#656565] ">
                        {item.companyType}
                      </div>
                      <div className="text-[10px] font-semibold text-[#656565]">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-end  items-center space-x-5 mt-10">
            <div>
              {" "}
              <button className=" border border-[#008080] px-10 py-2 text-[#008080]">
                cancel
              </button>
            </div>
            <div>
              <button
                onClick={() => setCurrentMenu("Staff Check")}
                className=" border bg-[#008080] px-12 py-2 text-white rounded-md">
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {currentMenu === "Staff Check" && <StaffCheck />}
      {currentMenu === "Environment Check" && <EnvironmentCheck />}

      {currentMenu === "Equipment Check" && <EquipmentCheck />}

      {currentMenu === "Conclusion" && <Conclusion />}
    </div>
  );
};

export default AgencyInformation;
