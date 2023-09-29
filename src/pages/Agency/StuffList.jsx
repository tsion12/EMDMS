import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import StuffClip from "../../assets/StuffClip.png";
import Body from "../../components/layout/Agency/Body";
import Modal from "../../components/Modal";
import { BsFillExclamationTriangleFill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { LiaRedoAltSolid } from "react-icons/lia";

import User from "../../assets/Ellipse 2.png";
import { MdOutlineCancel } from "react-icons/md";
import TableComponent from "../../components/agency components/TableComponent";

const StuffList = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const [activeTab, setActiveTab] = useState("");

  const handleUpload = () => {
    setIsUploaded(true);
  };

  const handleReupload = () => {
    setIsUploaded(false);
  };

  const [isSearch, setSearch] = useState(false);

  return (
    <div className="mt-10 ml-20 mr-20 flex flex-col w-full h-screen space-y-20">
      {isOpen === true && (
        <div className="fixed inset-0 flex items-center justify-end z-50  backdrop-filter backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-[40%] bg-white rounded-md shadow-lg px-8 py-8">
            <button
              className="absolute top-0 left-0 m-4 pb-10 "
              onClick={() => {
                setIsOpen(false);
              }}>
              <MdOutlineCancel className="text-4xl text-red-500" />
            </button>

            <div className="flex flex-col  items-start mt-10">
              <div className="space-y-1">
                {" "}
                <div className="text-[#005656] text-xl font-bold">
                  Add Staff Members
                </div>
                <div className="text-[#212121] text-xs tracking-wide font-poppins">
                  Add staff members who works at the organization
                </div>
              </div>
              <div className="pt-5 pb-3 text-[#212121] font-semibold text-sm">
                Enter labor ID
              </div>
              <div className="flex w-full justify-between">
                <form class="flex items-center w-[90%]  ">
                  <div class="relative w-full  ">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-6 ">
                      <AiOutlineSearch />
                    </div>
                    <input
                      type="text"
                      id="simple-search"
                      class="bg-white border border-[#00808033] text-black text-sm font-medium rounded-lg rounded-r-none block w-full py-2 px-14 "
                      placeholder="Search "
                    />
                  </div>
                  <div className="w-[15%]">
                    {" "}
                    <button
                      type="button"
                      onClick={() => setSearch(true)}
                      class="py-2 px-12 ml-2 text-sm font-medium text-white bg-[#008080] rounded-lg rounded-l-none border ">
                      {" "}
                      Select
                    </button>
                  </div>
                </form>
              </div>

              <div className="border border-black/5  w-full mt-10"></div>

              <div
                className={`mt-10 mb-8 w-full ${
                  isSearch === false && "pointer-events-none opacity-50"
                }`}>
                {isSearch === true && (
                  <div className="mt-4">
                    <div className="text-[#005656] font-medium text-lg">
                      Labor
                    </div>
                    <div className="flex items-start justify-between mt-4">
                      <div className="flex space-x-2 items-center">
                        <div classNa me="p-2 rounded-full">
                          {" "}
                          <img src={User} alt="" className="w-16" />
                        </div>
                        <div className="flex flex-col items-start text-[#313A4E] font-poppins">
                          <div className="">Libamlak Birhanu Workalem</div>
                          <div>L1234567890183</div>
                        </div>
                      </div>

                      <div>
                        <div className="mb-3">
                          <select
                            id="countries"
                            class=" text-black bg-white font-medium rounded-lg shadow-lg text-sm px-5 py-2.5 text-center inline-flex items-center hover:bg-border-red-200   w-full p-2.5 ">
                            <option selected>Manager</option>
                            <option value="CA">IT</option>
                            <option value="FR">Owner</option>
                            <option value="CA">Secretary</option>

                            <option value="CA">Staff</option>
                          </select>{" "}
                        </div>
                      </div>
                    </div>
                    <div className="border border-black/5 w-full mt-10"></div>
                  </div>
                )}

                <div className="mt-10 mb-8 w-full">
                  <div className="text-[#005656] font-medium text-lg">
                    Documents
                  </div>
                  <div className="bg-white shadow-xl w-full rounded-lg items-center flex justify-between p-8">
                    <div className="flex flex-col items-start ">
                      <div className="text-[#464255]">Police Certificate</div>
                      <div className="text-xs max-w-[450px] text-[#A3A3A3]">
                        A bank statement is typically a digital or physical
                        document that provides a summary of the transactions,
                        balances, and activity in a bank account over a specific
                        period of time.
                      </div>
                    </div>

                    <div className="flex items-center">
                      {!isUploaded ? (
                        <button
                          className="border py-1 px-2 border-emdmsPrimary text-emdmsPrimary rounded-md text-xs"
                          onClick={handleUpload}>
                          Upload Document
                        </button>
                      ) : (
                        <div className="flex space-x-2">
                          <button className=" py-2 px-4 bg-[#008080] text-white rounded-md text-xs">
                            Uploaded
                          </button>
                          <div className="bg-yellow-400 px-4 rounded-lg text-white font-bold flex items-center">
                            <LiaRedoAltSolid />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="mt-4 mb-8 w-full">
                  <div className="bg-white shadow-xl rounded-lg items-center flex justify-between p-8">
                    <div className="flex flex-col items-start ">
                      <div className="text-[#464255]">Government ID</div>
                      <div className="text-xs max-w-[450px] text-[#A3A3A3]">
                        A bank statement is typically a digital or physical
                        document that provides a summary of the transactions,
                        balances, and activity in a bank account over a specific
                        period of time.
                      </div>
                    </div>

                    <div className="flex items-center">
                      {!isUploaded ? (
                        <button
                          className="border py-2 px-4 border-emdmsPrimary text-emdmsPrimary rounded-md text-xs"
                          onClick={handleUpload}>
                          Upload Document
                        </button>
                      ) : (
                        <div className="flex space-x-2">
                          <button className=" py-2 px-4 bg-[#008080] text-white rounded-md text-xs">
                            Uploaded
                          </button>
                          <div className="bg-yellow-400 px-4 rounded-lg text-white font-bold flex items-center">
                            <LiaRedoAltSolid />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                    }}
                    className="border border-[#008080] text-[#008080] font-bold py-2 px-16 rounded mr-4 shadow-lg">
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("addMembers");
                      setIsOpen(false);
                    }}
                    className="bg-[#008080] text-white font-bold py-2 px-20 rounded shadow-lg">
                    Add
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-between px-10">
        {" "}
        <div className="bg-white p-6 w-[40%] h-10 flex justify-between items-center rounded-lg">
          <div className="text-[#717579] text-lg">search here...</div>

          <CiSearch className="text-2xl font-extrabold" />
        </div>
        <div
          onClick={() => {
            setIsOpen(true);
          }}
          className="bg-emdmsPrimary  h-10 flex p-6 justify-center items-center text-white text-sm rounded-lg">
          Add Staff Members
        </div>
      </div>
      {activeTab === "" && (
        <div className="mx-auto ">
          <img src={StuffClip} alt="" className="w-[300px] h-[400px]" />
        </div>
      )}
      {activeTab === "addMembers" && (
        <div className="">
          <TableComponent />
        </div>
      )}
    </div>
  );
};

export default StuffList;
