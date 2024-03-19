import React, { useState } from "react";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { BsPostcard } from "react-icons/bs";
import { BsPostcardHeart } from "react-icons/bs";
import { IoMdArrowRoundBack } from "react-icons/io";
import { MdCancel } from "react-icons/md";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const Ticket = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [openTicketPage, setOpenTicketPage] = useState(true);
  const [openSideModal, setOpenSideModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  function handleTheme(theme) {
    return {
      ...theme,
      borderRadius: "5px",
      colors: {
        ...theme.colors,
        primary25: "#f0f7f7",
        primary: "#005656",
        neutral50: "#005656",
        neutral80: "#005656",
      },
    };
  }

  return (
    <div className="flex flex-col mt-10 ml-10 mr-10 space-y-6 w-full">
      {openSideModal && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-end transition-all duration-200 ease-in-out bg-black/50">
            <div className="fixed inset-y-0 right-0 w-full px-8 py-8 bg-white rounded-md shadow-lg md:w-2/5">
              <div className="flex flex-col items-start ">
                <div className="flex items-center mt-5 mb-10  space-x-10 ">
                  <MdCancel
                    onClick={() => {
                      setOpenSideModal(false);
                    }}
                    className="text-3xl text-error40"
                  />

                  <div className="font-semibold text-emdmsPrimary text-lg">
                    Create New Compliant
                  </div>
                </div>
                <div className="flex flex-col w-full items-start justify-start gap-2">
                  {" "}
                  <>
                    <div className="font-bold">Create Complaint Ticket</div>
                    <p className="text-[#84818A] text-sm">
                      Write and address new queries and issues
                    </p>
                  </>
                  <div className="w-[70%]  my-4 border border-gray-100"></div>
                  <div className=" flex flex-col space-y-2 py-3 items-start w-full justify-start">
                    <div>User Labour ID</div>
                    <input
                      type="text"
                      className="w-full border rounded-md py-2 px-2 border-emdmsPrimary/30 placeholder:text-xs"
                      placeholder="Enter labour ID"
                    />
                  </div>
                  <div className=" flex flex-col space-y-2 py-3 items-start w-full justify-start">
                    <div>Select Relationship with Labor</div>
                    <div className="w-full">
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        theme={(theme) => handleTheme(theme)}
                        className="text-emdmsPrimary ml-1  placeholder:text-N95 placeholder:text-sm    focus:border-emdmsPrimary focus:ring-emdmsPrimary rounded-md"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2 py-10 items-start w-full justify-start">
                    <div>Description</div>
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="12"
                      placeholder="Type ticket issue here.."
                      className="border w-full p-3 rounded-md"
                    />
                  </div>
                  <div className="flex items-center justify-end w-full">
                    <button className="bg-emdmsPrimary w-24 py-2 text-white rounded-md">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
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
            <div className="flex w-full justify-between pb-10 items-center">
              <div className="flex items-start w-2/4 gap-10 justify-start border border-l-0 border-r-0 border-t-0 py-4">
                <div
                  onClick={() => {
                    setActiveTab("all");
                  }}
                  className={`${
                    activeTab === "all" ? "text-emdmsPrimary font-bold" : ""
                  } flex cursor-pointer items-center justify-center space-x-2`}>
                  <BsPostcard />
                  <p>All Tickets</p>
                </div>{" "}
                <div
                  onClick={() => {
                    setActiveTab("resolved");
                  }}
                  className={`${
                    activeTab === "resolved"
                      ? "text-emdmsPrimary font-bold"
                      : ""
                  } flex cursor-pointer  items-center justify-center space-x-2`}>
                  <BsPostcardHeart />
                  <p>Resolved</p>
                </div>{" "}
              </div>

              <form class="max-w-md w-1/4 ">
                <div class="relative">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-gray-500 "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20">
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    class="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search"
                    required
                  />
                </div>
              </form>
            </div>
            <div className=" h-[65vh] overflow-y-auto flex flex-col space-y-5">
              {[1, 2, 3, 4].map((item) => (
                <div className="  border flex flex-col p-5 space-y-3 w-full h-max rounded-sm">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center justify-center space-x-3">
                      <div className="h-3 w-3 rounded-full bg-[#F8A53499]"></div>
                      <div className="text-[#2E2C34] text-lg">
                        Ticket# 2023-CS123
                      </div>
                    </div>
                    <div className="text-[#84818A]">Created at 12:45 AM</div>
                  </div>
                  <div className="flex flex-col space-y-1 items-start justify-start">
                    <h3>Lorem ipsum dolor sit amet?</h3>
                    <p className="text-[#84818A] max-w-3xl">
                      Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit.
                    </p>
                  </div>
                  <div className="border w-full border-gray-100"></div>
                  <div className="flex items-center justify-between space-x-3 w-full">
                    <div className="flex items-center justify-start space-x-3">
                      {" "}
                      <div className=" h-10 w-10 bg-red-50 rounded-full"></div>
                      <div className=" flex flex-col  items-start justify-start">
                        <h2>Aberash Zemenu Liyu</h2>
                        <p className="text-xs">Labor ID: 123456789</p>
                      </div>
                    </div>
                    <div
                      onClick={() => {
                        setOpenTicketPage(false);
                      }}
                      className="underline cursor-pointer text-emdmsPrimary/80">
                      Open Ticket
                    </div>
                  </div>
                </div>
              ))}{" "}
            </div>
          </>
        )}
        {!openTicketPage && (
          <>
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
                    <div className="text-[#2E2C34] text-lg">
                      Ticket# 2023-CS123
                    </div>
                  </div>
                  <div className="text-[#84818A]">Created at 12:45 AM</div>
                </div>
                <div className="px-5 flex flex-col space-y-3 items-start justify-start">
                  <h3 className="font-medium text-lg ">
                    The agency is asking our daughter additional money.{" "}
                  </h3>
                  <p className="text-[#84818A] max-w-5xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </p>
                  <p className="text-[#84818A] max-w-5xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </p>
                  <p className="text-[#84818A] max-w-5xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit.
                  </p>
                </div>
                <div className=" w-full h-max bg-[#e7e7e73a] space-y-4 border rounded-sm px-10 py-5 flex flex-col">
                  <h1 className="text-base font-semibold">
                    Resolve the Complaint
                  </h1>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Ticket;
