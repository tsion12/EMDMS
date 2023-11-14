import React, { useState } from "react";
import Button from "../../components/utilities/Button";
import ReactTable from "../../components/foreignComponents/ReactTable";
import { TbScanEye } from "react-icons/tb";
import { BiMaleFemale, BiSolidFilePdf } from "react-icons/bi";
import { createColumnHelper } from "@tanstack/react-table";
import Requestjoborder from "../../components/foreignComponents/RequestJobOrder";
import Body from "../../components/layout/Foriegn/Body";
import Profile from "../../assets/svg/placeholder.svg";
import {
  AiFillCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import AgencyStatusTab from "../../components/agency components/AgencyStatusTab";
import { BsCalendarWeek, BsPersonCircle } from "react-icons/bs";

const AgencyJobOrder = () => {
  const [page, setPage] = useState("table");
  const [activeTab, setActiveTab] = useState("New Application");
  const [currentTab, setcurrentTab] = useState("");

  // Create a Job Order Function
  function setToCreate() {
    setPage("create");
  }

  // React Tables
  const defaultData = [
    {
      jobOrderCode: "DUB_AHM_MOH_1123",
      submittedAt: "2022-08-20",
      action: "View",
    },
    {
      jobOrderCode: "DUB_AHM_MOH_1123",
      submittedAt: "2022-08-20",
      action: "View",
    },
  ];

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor((row) => row.jobOrderCode, {
      id: "jobOrderCode",
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => <span>Job Order Code</span>,
    }),
    columnHelper.accessor((row) => row.submittedAt, {
      id: "submittedAt",
      cell: (info) => <span className="text-[#6B6F7B]">{info.getValue()}</span>,
      header: () => <span>Submitted At</span>,
    }),
    columnHelper.accessor((row) => row.action, {
      id: "action",
      cell: (info) => (
        <div
          onClick={() => setOpenModal(true)}
          className="flex items-center bg-[#F0F7F7] w-fit mx-auto px-5 py-2 rounded-sm cursor-pointer">
          <div className="bg-white border border-[#008080] p-1 mr-2">
            <TbScanEye color="#008080" />
          </div>
          <span className="text-emdmsPrimary font-medium	">
            {info.getValue()}
          </span>
        </div>
      ),
      header: () => <span>Action</span>,
    }),
  ];
  const [openModal, setOpenModal] = useState(false);

  const [documents, setDocuments] = useState("new application");

  return (
    <Body custom={"!overflow-x-hidden !w-screen  z-40"}>
      {page === "table" ? (
        <>
          <div className="w-full flex flex-col gap-10">
            <div>
              <p className="title">Job order Lists</p>
              <p className="title-description">
                Application lists where the applicants submitted their documents
                to see if they are legit or not
              </p>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-4 justify-between md:items-center">
              {/* Selection Tab Container */}
              {currentTab === "" && (
                <div className="w-full md:w-max  flex gap-4 lg:gap-10 items-center overflow-auto noscrollBar p-2 bg-white rounded-lg">
                  <Button
                    handelClick={() => {
                      setActiveTab("New Application");
                    }}
                    custom={`${
                      activeTab === "New Application"
                        ? "text-emdmsPrimary"
                        : "text-N80 bg-white"
                    } px-8 py-2 w-full w-max font-semibold whitespace-nowrap`}>
                    New Application
                  </Button>
                  <Button
                    handelClick={() => {
                      setActiveTab("Re-applied Applications");
                    }}
                    custom={`${
                      activeTab === "Re-applied Applications"
                        ? "text-emdmsPrimary"
                        : "text-N80 bg-white"
                    } px-8 py-2 w-full w-max font-semibold whitespace-nowrap`}>
                    Re-applied Applications
                  </Button>
                  <Button
                    handelClick={() => {
                      setActiveTab("Approved");
                    }}
                    custom={`${
                      activeTab === "Approved"
                        ? "text-emdmsPrimary"
                        : "text-N80 bg-white"
                    } px-8 py-2 w-full w-max font-semibold whitespace-nowrap`}>
                    Approved
                  </Button>
                  <Button
                    handelClick={() => {
                      setActiveTab("Rejected");
                    }}
                    custom={`${
                      activeTab === "Rejected"
                        ? "text-emdmsPrimary"
                        : "text-N80 bg-white"
                    } px-8 py-2 w-full w-max font-semibold whitespace-nowrap`}>
                    Rejected
                  </Button>
                </div>
              )}

              <div className="w-full bg-lime-300 md:w-max">
                <Button
                  handelClick={setToCreate}
                  custom={"py-2 w-full text-white bg-emdmsPrimary"}>
                  Request Job Order
                </Button>
              </div>
            </div>

            <div className="mt-10   w-full h-[50vh] overflow-y-auto">
              {/* <ReactTable
                columns={columns}
                defaultData={defaultData}></ReactTable> */}
              <AgencyStatusTab
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            </div>
            <div className="flex justify-center items-end md:justify-end mt-2 mr-5 space-x-3">
              <button className="border border-[#005656] px-6 py-2 lg:py-1">
                {" "}
                <div
                  onClick={() => setPage((prev) => prev - 1)}
                  className=" space-x-2 items-center  flex text-[#005656]">
                  {" "}
                  <AiOutlineLeft />
                  <div className="hidden  md:block">Previous</div>
                </div>
              </button>
              <div className="border border-[#005656] bg-white pr-2 flex space-x-6 ">
                {" "}
                <button className="bg-emdmsPrimary text-white px-3 py-1">
                  1
                </button>
                <button className="text-emdmsPrimary">2</button>
                <button className="text-emdmsPrimary">3</button>
                <button className="text-emdmsPrimary">4</button>
              </div>
              <button className="border border-[#005656] px-6 py-2 lg:py-1">
                {" "}
                <div
                  onClick={() => setPage((prev) => prev + 1)}
                  className=" space-x-2 items-center  flex text-[#005656]">
                  <div className="hidden  md:block">Next</div>
                  <AiOutlineRight />
                </div>
              </button>
            </div>
          </div>
        </>
      ) : (
        <Requestjoborder goback={setPage} />
      )}
      <div
        className={`${
          openModal ? "translate-x-0 right-0 " : "translate-x-full right-0"
        } transition ease-in duration-300 z-50 bg-white px-5 py-3 absolute h-screen mt-[-6.5rem] md:mt-[-8.3rem] md:w-2/3 lg:w-4/5 overflow-y-scroll`}>
        <div
          onClick={() => setOpenModal(false)}
          className="bg-emdmsPrimary fixed px-3.5 py-1.5 text-white rounded-full font-bold w-max cursor-pointer">
          &times;
        </div>
        <div className="flex flex-col gap-4 h-full w-full">
          <button
            className=" py-2 text-white rounded"
            onClick={() => {
              setOpenModal(false);
            }}>
            <AiFillCloseCircle className="text-[#005656] text-3xl" />
          </button>
          <div className="flex gap-4  w-full h-full ">
            <div className="bg-white px-10 py-20 w-[40%] rounded-lg overflow-y-auto noscrollBar shadow-2xl ">
              <div className="flex flex-col space-y-8">
                <div className="flex items-center   space-x-8 ">
                  <div className=" h-32 w-32  flex rounded-full">
                    <img src={Profile} alt="" className="" />
                  </div>
                  <div className=" flex flex-col space-y-2 w-full">
                    <div className="  text-[#008080] font-semibold">
                      {" "}
                      Labor Information
                    </div>
                    <div className="bg-[#F0F7F7] p-4  rounded-lg">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="flex space-x-2 ">
                          <BsPersonCircle className="text-[#98D2C1] mt-1" />
                          <div className="flex flex-col text-xs">
                            <div>Name</div>
                            <div className="text-[#949494] text-[10px]">
                              labor name
                            </div>
                          </div>
                        </div>
                        <div className="text-xs mt-3">
                          Mohamod Abdala Mustafa
                        </div>
                        <div className="flex space-x-2 ">
                          <BiMaleFemale className="text-[#98D2C1] mt-1" />
                          <div className="flex flex-col text-xs">
                            <div>Gender</div>
                            <div className="text-[#949494] text-[10px]">
                              Male/Female
                            </div>
                          </div>
                        </div>
                        <div className="text-xs  mt-3">Male</div>
                        <div className="flex space-x-2 ">
                          <BsCalendarWeek className="text-[#98D2C1] mt-1" />
                          <div className="flex flex-col text-xs">
                            <div>Birth Date</div>
                            <div className="text-[#949494] text-[10px]">
                              Date
                            </div>
                          </div>
                        </div>
                        <div className="text-xs  mt-3">16, 08, 1991</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col space-y-2 w-full">
                  <div className="  text-[#008080] font-semibold">
                    {" "}
                    Local Agency Information
                  </div>
                  <div className="bg-[#F0F7F7] py-8 px-4  rounded-lg">
                    <div className="grid grid-cols-2 gap-5">
                      <div className="flex space-x-2 ">
                        <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                        <div className="flex flex-col text-xs">
                          <div>Local Agency Name</div>
                          <div className="text-[#949494] text-[10px]">
                            Agency full name
                          </div>
                        </div>
                      </div>
                      <div className="text-xs mt-3 md:ml-10">
                        Mohamod Abdala Mustafa
                      </div>
                      <div className="flex space-x-2 ">
                        <AiOutlineInfoCircle className=" text-[#98D2C1] mt-1" />
                        <div className="flex flex-col text-xs">
                          <div>Local Agency Phone Number</div>
                          <div className="text-[#949494] text-[10px]">
                            Phone number{" "}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs  mt-3 md:ml-10">
                        +251 9 11 12 13
                      </div>
                      <div className="flex space-x-2 ">
                        <AiOutlineInfoCircle className="text-[#98D2C1] text-xl mt-1" />
                        <div className="flex flex-col text-xs ">
                          <div>Local Agency Alternative Phone Number</div>
                          <div className="text-[#949494] text-[10px]">
                            {" "}
                            Phone number{" "}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs  mt-3 md:ml-10">
                        +251 9 11 12 13
                      </div>
                      <div className="flex space-x-2 ">
                        <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                        <div className="flex flex-col text-xs">
                          <div>Email Address</div>
                          <div className="text-[#949494] text-[10px]">
                            Email Address
                          </div>
                        </div>
                      </div>
                      <div className="text-xs  mt-3 md:ml-10">
                        mohamodabdela@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col space-y-2 w-full">
                  <div className="  text-[#008080] font-semibold">
                    {" "}
                    Foreign Employer Information
                  </div>
                  <div className="bg-[#F0F7F7] py-8 px-4  rounded-lg">
                    <div className="grid grid-cols-2 gap-5">
                      <div className="flex space-x-2 ">
                        <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                        <div className="flex flex-col text-xs">
                          <div>Full Name</div>
                          <div className="text-[#949494] text-[10px]">
                            Agency full name
                          </div>
                        </div>
                      </div>
                      <div className="text-xs mt-3 md:ml-10">
                        Mohamod Abdala Mustafa
                      </div>
                      <div className="flex space-x-2 ">
                        <AiOutlineInfoCircle className=" text-[#98D2C1] mt-1" />
                        <div className="flex flex-col text-xs">
                          <div>Phone Number</div>
                          <div className="text-[#949494] text-[10px]">
                            Phone number{" "}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs  mt-3 md:ml-10">
                        +251 9 11 12 13
                      </div>
                      <div className="flex space-x-2 ">
                        <AiOutlineInfoCircle className="text-[#98D2C1] text-xl mt-1" />
                        <div className="flex flex-col text-xs ">
                          <div> Alternative Phone Number</div>
                          <div className="text-[#949494] text-[10px]">
                            {" "}
                            Phone number{" "}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs  mt-3 md:ml-10">
                        +251 9 11 12 13
                      </div>
                      <div className="flex space-x-2 ">
                        <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                        <div className="flex flex-col text-xs">
                          <div>Email Address</div>
                          <div className="text-[#949494] text-[10px]">
                            Email Address
                          </div>
                        </div>
                      </div>
                      <div className="text-xs  mt-3 md:ml-10">
                        mohamodabdela@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col space-y-2 w-full">
                  <div className="  text-[#008080] font-semibold">
                    {" "}
                    Emergency Contact Person
                  </div>
                  <div className="bg-[#F0F7F7] py-8 px-4  rounded-lg">
                    <div className="grid grid-cols-2 gap-5">
                      <div className="flex space-x-2 ">
                        <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                        <div className="flex flex-col text-xs">
                          <div>Full Name</div>
                          <div className="text-[#949494] text-[10px]">
                            Agency full name
                          </div>
                        </div>
                      </div>
                      <div className="text-xs mt-3 md:ml-10">
                        Mohamod Abdala Mustafa
                      </div>
                      <div className="flex space-x-2 ">
                        <AiOutlineInfoCircle className=" text-[#98D2C1] mt-1" />
                        <div className="flex flex-col text-xs">
                          <div>Phone Number</div>
                          <div className="text-[#949494] text-[10px]">
                            Phone number{" "}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs  mt-3 md:ml-10">
                        +251 9 11 12 13
                      </div>
                      <div className="flex space-x-2 ">
                        <AiOutlineInfoCircle className="text-[#98D2C1] text-xl mt-1" />
                        <div className="flex flex-col text-xs ">
                          <div> Alternative Phone Number</div>
                          <div className="text-[#949494] text-[10px]">
                            {" "}
                            Phone number{" "}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs  mt-3 md:ml-10">
                        +251 9 11 12 13
                      </div>
                      <div className="flex space-x-2 ">
                        <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                        <div className="flex flex-col text-xs">
                          <div>Email Address</div>
                          <div className="text-[#949494] text-[10px]">
                            Email Address
                          </div>
                        </div>
                      </div>
                      <div className="text-xs  mt-3 md:ml-10">
                        mohamodabdela@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col space-y-2 w-full">
                  <div className="  text-[#008080] font-semibold">
                    {" "}
                    Contract Information
                  </div>
                  <div className="bg-[#F0F7F7] py-8 px-4  rounded-lg">
                    <div className="grid grid-cols-2 gap-5">
                      <div className="flex space-x-2 ">
                        <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                        <div className="flex flex-col text-xs">
                          <div>Beginning of Contract</div>
                          <div className="text-[#949494] text-[10px]">
                            Agency full name
                          </div>
                        </div>
                      </div>
                      <div className="text-xs mt-3 md:ml-10">
                        Mohamod Abdala Mustafa
                      </div>
                      <div className="flex space-x-2 ">
                        <AiOutlineInfoCircle className=" text-[#98D2C1] mt-1" />
                        <div className="flex flex-col text-xs">
                          <div>End of contract</div>
                          <div className="text-[#949494] text-[10px]">
                            Phone number{" "}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs  mt-3 md:ml-10">
                        +251 9 11 12 13
                      </div>
                      <div className="flex space-x-2 ">
                        <AiOutlineInfoCircle className="text-[#98D2C1] text-xl mt-1" />
                        <div className="flex flex-col text-xs ">
                          <div> Passport Number</div>
                          <div className="text-[#949494] text-[10px]">
                            {" "}
                            Phone number{" "}
                          </div>
                        </div>
                      </div>
                      <div className="text-xs  mt-3 md:ml-10">
                        +251 9 11 12 13
                      </div>
                      <div className="flex space-x-2 ">
                        <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                        <div className="flex flex-col text-xs">
                          <div>Visa Number</div>
                          <div className="text-[#949494] text-[10px]">
                            Email Address
                          </div>
                        </div>
                      </div>
                      <div className="text-xs  mt-3 md:ml-10">
                        mohamodabdela@gmail.com
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#F0F7F7] px-10 py-12 w-[60%] rounded-lg overflow-y-auto noscrollBar shadow-2xl">
              <div className=" w-full flex flex-col items-center justify-center py-8 px-4">
                {" "}
                <div className="text-[#008080] font-semibold">Documents</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Body>
  );
};

export default AgencyJobOrder;
