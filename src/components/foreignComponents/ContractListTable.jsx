import User from "../../assets/svg/Ellipse 2.png";

import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { TbScanEye } from "react-icons/tb";
import { BiMaleFemale } from "react-icons/bi";
import Profile from "../../assets/svg/placeholder.svg";
import PaginationComponent from "../utilities/PaginationComponent";
import { AiFillCloseCircle, AiOutlineInfoCircle } from "react-icons/ai";
import DeleteModal from "../utilities/DeleteModal";
import { BsCalendarWeek, BsPersonCircle } from "react-icons/bs";
const ContractListTable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const [isSearch, setSearch] = useState(false);
  const handleSearch = () => {
    setSearch(true);
  };
  const data = [
    {
      id: 1,
      name: "Libamlak Birhanu Workalem",
      passport: "EP6824682468le",
      status: "Screened",
      agencyName: "Ahmed Abdala Mohamod",
      embassyName: "Emirates 1",
    
    },
    {
      id: 2,
      name: "Libamlak Birhanu Workalem",
      passport: "EP6824682468",
      status: "Issued",
      agencyName: "Ahmed Abdala Mohamod",
      embassyName: "Emirates 1",
    },
    {
      id: 3,
      name: "Libamlak Birhanu Workalem",
      passport: "EP6824682468",
      status: "Checked",
      agencyName: "Ahmed Abdala Mohamod",
      embassyName: "Emirates 1",
    },
    {
      id: 4,
      name: "Libamlak Birhanu Workalem",
      passport: "EP6824682468le",
      status: "Rejected",
      agencyName: "Ahmed Abdala Mohamod",
      embassyName: "Emirates 1",
    },
    {
      id: 5,
      name: "Libamlak Birhanu Workalem",
      passport: "EP6824682468le",
      status: "Immigiration Verified",
      agencyName: "Ahmed Abdala Mohamod",
      embassyName: "Emirates 1",
    },
    {
      id: 6,
      name: "Libamlak Birhanu Workalem",
      passport: "EP6824682468",
      status: "Payment Verified",
      agencyName: "Ahmed Abdala Mohamod",
      embassyName: "Emirates 1",
    },
  ];

  return (
    <div className="  flex flex-col space-y-4 ">
      {openModal === true && (
        <div
          className={` ${
            openModal ? "translate-x-0 right-0" : "translate-x-full right-0"
          } transition ease-in duration-300 fixed inset-y-0 right-0 md:w-2/3 lg:w-4/5 overflow-y-scroll bg-white rounded-md shadow-lg px-8 py-8`}>
          <button
            className="absolute top-0 left-0 m-4 pb-10 "
            onClick={() => {
              setOpenModal(false);
            }}>
            <AiFillCloseCircle className="text-4xl text-emdmsPrimary" />
          </button>

          <div className="flex flex-col gap-4 h-full w-full">
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
                              <td>passport</td>{" "}
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
      )}

      <div className=" bg-white h-[60vh] overflow-y-auto rounded-lg shadow-md p-4">
        <table className="min-w-full bg-white">
          <thead className=" text-left text-[#6B6F7B] text-xs tracking-wider">
            <tr className="bg-[#F0F7F780] m-10">
              <th className="flex items-center gap-4 px-4 py-4">
                <div>
                  <p>No</p>
                </div>

                <div className="flex gap-1 items-center pl-8 justify-center">
                  {" "}
                  Labor Name <FaAngleDown />
                </div>
              </th>
              <th className="px-4 py-4">Status</th>
              <th className="px-4 py-4">Passport Number</th>

              <th className="px-4 py-4">Agency Name</th>
              <th className="px-4 py-4">Embassy Name</th>
              <th className="px-4 py-4">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((item) => (
              <tr
                key={item.id}
                className=" text-[#6B6F7B] text-xs even:bg-[#F0F7F780] odd:bg-white">
                <td className="px-4 py-4 flex space-x-2 items-center ">
                  <div>01</div>
                  <div className="w-8 h-8 hidden md:block rounded-full bg-gray-400">
                    <img src={User} alt="" />
                  </div>
                  <div> {item.name}</div>
                </td>
                <td className=" py-2 ">
                  <div
                    className={`${
                      item.status === "Screened"
                        ? "bg-[#FFD9641A] text-[#FFD964]"
                        : item.status === "Payment"
                        ? "bg-[#2a7b511a] text-[#64ff8b]"
                        : item.status === "Rejected"
                        ? "bg-red-200 text-[#FF0B00]"
                        : "bg-[#71E17C1A] text-[#71E17C]"
                    } px-4 py-2 rounded-md w-40 flex items-center justify-center`}>
                    {item.status}
                  </div>
                </td>
                <td className="px-4 py-2">{item.passport}</td>{" "}
                <td className="px-4 py-2">{item.agencyName}</td>
                <td className="px-4 py-2">{item.embassyName}</td>
                <td className="px-4 py-2">
                  <div>
                    <button onClick={() => setOpenModal(true)}>
                      <TbScanEye />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex   justify-end">
        <PaginationComponent />
      </div>
    </div>
  );
};

export default ContractListTable;
