import User from "../../../assets/svg/Ellipse 2.png";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { TbScanEye } from "react-icons/tb";
import { AiFillCloseCircle, AiOutlineInfoCircle } from "react-icons/ai";

const PartnershipApprovalTable = () => {
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
      entity: "Belaynesh Getachew Temesgen",

      createdDate: "21 july 2022",
    },
    {
      id: 2,
      name: "Libamlak Birhanu Workalem",
      entity: "Belaynesh Getachew Temesgen",

      createdDate: "21 july 2022",
    },
    {
      id: 3,
      name: "Libamlak Birhanu Workalem",
      entity: "Belaynesh Getachew Temesgen",

      createdDate: "21 july 2022",
    },
    {
      id: 4,
      name: "Libamlak Birhanu Workalem",
      entity: "Belaynesh Getachew Temesgen",
      status: "Rejected",

      createdDate: "21 july 2022",
    },
    {
      id: 5,
      name: "Libamlak Birhanu Workalem",
      entity: "Belaynesh Getachew Temesgen",

      createdDate: "21 july 2022",
    },
    {
      id: 6,
      name: "Libamlak Birhanu Workalem",
      entity: "Belaynesh Getachew Temesgen",

      createdDate: "21 july 2022",
    },
  ];

  return (
    <div className="  flex flex-col space-y-4 ">
      {openModal === true && (
        <div className="fixed inset-0 flex items-center justify-end z-50  backdrop-filter backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 md:w-2/3 lg:w-3/5 h-screen overflow-y-scroll bg-white rounded-md shadow-lg px-2 py-8">
            <button
              className="absolute top-0 left-0 m-4 pb-10 "
              onClick={() => {
                setOpenModal(false);
              }}>
              <AiFillCloseCircle className="text-4xl text-emdmsPrimary" />
            </button>

            <div className="flex gap-4  w-full h-full ">
              <div className="bg-white px-5 py-10 w-[40%] rounded-lg overflow-y-auto noscrollBar ">
                <div className="flex flex-col space-y-8">
                  <div className=" flex flex-col space-y-2 w-full">
                    <div className="  text-[#008080] font-semibold">
                      {" "}
                      Foreign Entity Information
                    </div>
                    <div className="bg-[#F0F7F7] py-8 px-4  space-y-3 rounded-lg">
                      <div className="grid grid-cols-2 gap-5">
                        <div className="flex space-x-2 ">
                          <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                          <div className="flex flex-col text-xs">
                            <div>Foreign Entity Name</div>
                            <div className="text-[#949494] text-[10px]">
                              Full name
                            </div>
                          </div>
                        </div>
                        <div className="text-xs mt-3 md:ml-10">
                          Mohamod Abdala Mustafa
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-5">
                        <div className="flex space-x-2 ">
                          <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                          <div className="flex flex-col text-xs">
                            <div>Country</div>
                            <div className="text-[#949494] text-[10px]">
                              country
                            </div>
                          </div>
                        </div>
                        <div className="text-xs mt-3 md:ml-10">Ethiopia</div>
                      </div>
                      <div className="grid grid-cols-2 gap-5">
                        <div className="flex space-x-2 ">
                          <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                          <div className="flex flex-col text-xs">
                            <div>Phone Number</div>
                            <div className="text-[#949494] text-[10px]">
                              phone number
                            </div>
                          </div>
                        </div>
                        <div className="text-xs mt-3 md:ml-10">
                          +251 9 11 12 13
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-5">
                        <div className="flex space-x-2 ">
                          <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                          <div className="flex flex-col text-xs">
                            <div>Region</div>
                            <div className="text-[#949494] text-[10px]">
                              region
                            </div>
                          </div>
                        </div>
                        <div className="text-xs mt-3 md:ml-10">Oromia</div>
                      </div>
                      <div className="grid grid-cols-2 gap-5">
                        <div className="flex space-x-2 ">
                          <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                          <div className="flex flex-col text-xs">
                            <div>City</div>
                            <div className="text-[#949494] text-[10px]">
                              city
                            </div>
                          </div>
                        </div>
                        <div className="text-xs mt-3 md:ml-10">Addis Ababa</div>
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
                            <div>Agency Name</div>
                            <div className="text-[#949494] text-[10px]">
                              Agency company name
                            </div>
                          </div>
                        </div>
                        <div className="text-xs mt-3 md:ml-10">
                          Mohamod Abdala Mustafa
                        </div>
                        <div className="flex space-x-2 ">
                          <AiOutlineInfoCircle className=" text-[#98D2C1] mt-1" />
                          <div className="flex flex-col text-xs">
                            <div>Country </div>
                            <div className="text-[#949494] text-[10px]">
                              country
                            </div>
                          </div>
                        </div>
                        <div className="text-xs  mt-3 md:ml-10">Ethiopia</div>
                        <div className="flex space-x-2 ">
                          <AiOutlineInfoCircle className=" text-[#98D2C1] mt-1" />
                          <div className="flex flex-col text-xs">
                            <div>Phone Number </div>
                            <div className="text-[#949494] text-[10px]">
                              Phone number{" "}
                            </div>
                          </div>
                        </div>
                        <div className="text-xs  mt-3 md:ml-10">
                          +251 9 11 12 13
                        </div>
                        <div className="flex space-x-2 ">
                          <AiOutlineInfoCircle className=" text-[#98D2C1] mt-1" />
                          <div className="flex flex-col text-xs">
                            <div>Labor ID </div>
                            <div className="text-[#949494] text-[10px]">
                              labor id
                            </div>
                          </div>
                        </div>
                        <div className="text-xs  mt-3 md:ml-10">
                          LI123456789
                        </div>
                        <div className="flex space-x-2 ">
                          <AiOutlineInfoCircle className=" text-[#98D2C1] mt-1" />
                          <div className="flex flex-col text-xs">
                            <div>Region </div>
                            <div className="text-[#949494] text-[10px]">
                              Date
                            </div>
                          </div>
                        </div>
                        <div className="text-xs  mt-3 md:ml-10">16/08/1991</div>
                        <div className="flex space-x-2 ">
                          <AiOutlineInfoCircle className=" text-[#98D2C1] mt-1" />
                          <div className="flex flex-col text-xs">
                            <div>City </div>
                            <div className="text-[#949494] text-[10px]">
                              city
                            </div>
                          </div>
                        </div>
                        <div className="text-xs  mt-3 md:ml-10">
                          Addis Ababa
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="relative">
                    <input
                      type="text"
                      id="simple-search"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:outline-emdmsPrimary h-28 p-2 pl-8 block w-full"
                      placeholder=""
                      required
                    />
                    <span class="absolute top-3 left-3 text-xs text-gray-400">
                      Please enter reason
                    </span>
                  </div>
                  <div className="flex items-center justify-between space-x-4">
                    <button className="text-red-500 text-sm w-1/2 py-3 rounded-md shadow-xl">
                      Reject
                    </button>
                    <button className="text-white text-sm w-1/2 py-3 bg-[#008080] rounded-md shadow-xl">
                      Approve
                    </button>
                  </div>
                </div>
              </div>
              <div className=" w-[60%]  h-full mt-10 space-y-2">
                <div className="  text-[#008080] font-semibold">
                  {" "}
                  Power of Attorney
                </div>
                <div className="bg-[#F0F7F7] h-full rounded-lg   overflow-y-auto noscrollBar w-full flex flex-col items-center justify-center py-8 px-4">
                  {" "}
                  <div className="flex flex-col items-center h-[90vh] w-full bg-white text-[#008080] font-semibold">
                    Documents
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className=" bg-white h-[50vh] overflow-y-auto noscrollBar rounded-lg shadow-md p-4">
        <table className="min-w-full bg-white">
          <thead className=" text-left text-[#6B6F7B]  text-sm tracking-wider">
            <tr className="bg-[#F0F7F780]">
              <th className="flex items-center gap-4 px-4 py-4">
                <div>
                  <input type="checkbox" />
                </div>

                <div className="flex gap-1 items-center pl-8 justify-center">
                  {" "}
                  Labor Name <FaAngleDown />
                </div>
              </th>

              <th className="px-8 py-4">Foreign Entity Name</th>

              <th className="px-4 py-4">Created Date</th>
              <th className="px-4 py-4">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {data.map((item) => (
              <tr
                key={item.id}
                className=" text-[#6B6F7B] text-sm even:bg-[#F0F7F780] odd:bg-white">
                <td className="px-4 py-4 flex space-x-2 items-center ">
                  <input type="checkbox" />
                  <div className="w-8 h-8 rounded-full bg-gray-400">
                    <img src={User} alt="" />
                  </div>
                  <div> {item.name}</div>
                </td>

                <td className="px-4 py-2">{item.entity}</td>

                <td className="px-8 py-2">{item.createdDate}</td>
                <td className="px-8 py-2">
                  <button onClick={() => setOpenModal(true)}>
                    <TbScanEye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PartnershipApprovalTable;
