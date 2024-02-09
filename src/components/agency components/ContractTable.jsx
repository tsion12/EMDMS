import User from "../../assets/svg/Ellipse 2.png";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsFillExclamationTriangleFill, BsQrCodeScan } from "react-icons/bs";
import { TbScanEye } from "react-icons/tb";
import PaginationComponent from "../utilities/PaginationComponent";
import { AiFillCloseCircle, AiOutlineInfoCircle } from "react-icons/ai";
import DeleteModal from "../utilities/DeleteModal";
const ContractTable = () => {
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
      gender: "Female",
      status: "Draft",
      age: "Manager",
      createdDate: "21 july 2022",
    },
    {
      id: 2,
      name: "Libamlak Birhanu Workalem",
      gender: "Male",
      status: "Issued",
      age: "Staff",
      createdDate: "21 july 2022",
    },
    {
      id: 3,
      name: "Libamlak Birhanu Workalem",
      gender: "Male",
      status: "Checked",
      age: "Admin",
      createdDate: "21 july 2022",
    },
    {
      id: 4,
      name: "Libamlak Birhanu Workalem",
      gender: "Female",
      status: "Rejected",
      age: "User",
      createdDate: "21 july 2022",
    },
    {
      id: 5,
      name: "Libamlak Birhanu Workalem",
      gender: "Female",
      status: "Immigiration Verified",
      age: "User",
      createdDate: "21 july 2022",
    },
    {
      id: 6,
      name: "Libamlak Birhanu Workalem",
      gender: "Male",
      status: "Payment Verified",
      age: "User",
      createdDate: "21 july 2022",
    },
  ];

  return (
    <div className="  flex flex-col space-y-4 ">
      {openModal === true && (
        <div className="fixed inset-0 flex items-center justify-end z-50  backdrop-filter backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 md:w-2/3 lg:w-4/5 overflow-y-scroll bg-white rounded-md shadow-lg px-8 py-8">
            <button
              className="absolute top-0 left-0 m-4 pb-10 "
              onClick={() => {
                setOpenModal(false);
              }}>
              <AiFillCloseCircle className="text-4xl text-emdmsPrimary" />
            </button>

            <div className="flex gap-4  w-full h-full ">
              <div className="bg-white px-10 py-10 w-[40%] rounded-lg overflow-y-auto noscrollBar ">
                <div className="flex flex-col space-y-8">
                  <div className=" flex flex-col space-y-2 w-full">
                    <div className="  text-[#008080] font-semibold">
                      {" "}
                      Contact Information
                    </div>
                    <div className="bg-[#F0F7F7] py-8 px-4  rounded-lg">
                      <div className="grid grid-cols-2 gap-5">
                        <div className="flex space-x-2 ">
                          <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                          <div className="flex flex-col text-xs">
                            <div>Job Order</div>
                            <div className="text-[#949494] text-[10px]">
                              Job Order ID
                            </div>
                          </div>
                        </div>
                        <div className="text-xs mt-3 md:ml-10">
                          Job Order Code
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=" flex flex-col space-y-2 w-full">
                    <div className="  text-[#008080] font-semibold">
                      {" "}
                      Emergency Contact Information
                    </div>
                    <div className="bg-[#F0F7F7] py-8 px-4  rounded-lg">
                      <div className="grid grid-cols-2 gap-5">
                        <div className="flex space-x-2 ">
                          <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                          <div className="flex flex-col text-xs">
                            <div> Name</div>
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
                            <div>Job Order Quantity </div>
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
                            <div> Job Category</div>
                            <div className="text-[#949494] text-[10px]">
                              Agency full name
                            </div>
                          </div>
                        </div>
                        <div className="text-xs  mt-3 md:ml-10">
                          Mohamod Abdala Mustafa
                        </div>
                        <div className="flex space-x-2 ">
                          <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                          <div className="flex flex-col text-xs">
                            <div>Birth Date</div>
                            <div className="text-[#949494] text-[10px]">
                              Date
                            </div>
                          </div>
                        </div>
                        <div className="text-xs  mt-3 md:ml-10">16/08/1991</div>
                        <div className="flex space-x-2 ">
                          <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                          <div className="flex flex-col text-xs">
                            <div>Region</div>
                            <div className="text-[#949494] text-[10px]">
                              Date
                            </div>
                          </div>
                        </div>
                        <div className="text-xs  mt-3 md:ml-10">16/08/1991</div>{" "}
                        <div className="flex space-x-2 ">
                          <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                          <div className="flex flex-col text-xs">
                            <div>City</div>
                            <div className="text-[#949494] text-[10px]">
                              Date
                            </div>
                          </div>
                        </div>
                        <div className="text-xs  mt-3 md:ml-10">16/08/1991</div>{" "}
                        <div className="flex space-x-2 ">
                          <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                          <div className="flex flex-col text-xs">
                            <div>Sub-city</div>
                            <div className="text-[#949494] text-[10px]">
                              Date
                            </div>
                          </div>
                        </div>
                        <div className="text-xs  mt-3 md:ml-10">16/08/1991</div>{" "}
                        <div className="flex space-x-2 ">
                          <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                          <div className="flex flex-col text-xs">
                            <div>Woreda</div>
                            <div className="text-[#949494] text-[10px]">
                              Date
                            </div>
                          </div>
                        </div>
                        <div className="text-xs  mt-3 md:ml-10">16/08/1991</div>{" "}
                        <div className="flex space-x-2 ">
                          <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                          <div className="flex flex-col text-xs">
                            <div>PoBox</div>
                            <div className="text-[#949494] text-[10px]">
                              Date
                            </div>
                          </div>
                        </div>
                        <div className="text-xs  mt-3 md:ml-10">16/08/1991</div>{" "}
                        <div className="flex space-x-2 ">
                          <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                          <div className="flex flex-col text-xs">
                            <div>Email Address</div>
                            <div className="text-[#949494] text-[10px]">
                              Date
                            </div>
                          </div>
                        </div>
                        <div className="text-xs  mt-3 md:ml-10">16/08/1991</div>{" "}
                        <div className="flex space-x-2 ">
                          <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                          <div className="flex flex-col text-xs">
                            <div>House number</div>
                            <div className="text-[#949494] text-[10px]">
                              Date
                            </div>
                          </div>
                        </div>
                        <div className="text-xs  mt-3 md:ml-10">16/08/1991</div>{" "}
                        <div className="flex space-x-2 ">
                          <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                          <div className="flex flex-col text-xs">
                            <div>Telephone</div>
                            <div className="text-[#949494] text-[10px]">
                              Date
                            </div>
                          </div>
                        </div>
                        <div className="text-xs  mt-3 md:ml-10">16/08/1991</div>{" "}
                        <div className="flex space-x-2 ">
                          <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                          <div className="flex flex-col text-xs">
                            <div>Gender</div>
                            <div className="text-[#949494] text-[10px]">
                              Date
                            </div>
                          </div>
                        </div>
                        <div className="text-xs  mt-3 md:ml-10">16/08/1991</div>{" "}
                        <div className="flex space-x-2 ">
                          <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                          <div className="flex flex-col text-xs">
                            <div>Fax Number</div>
                            <div className="text-[#949494] text-[10px]">
                              Date
                            </div>
                          </div>
                        </div>
                        <div className="text-xs  mt-3 md:ml-10">16/08/1991</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#F0F7F7] px-10 py-12 w-[60%] rounded-lg overflow-y-auto noscrollBar ">
                <div className=" w-full flex flex-col items-center justify-center py-8 px-4">
                  {" "}
                  <div className="text-[#008080] font-semibold">Documents</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <DeleteModal isOpen={isOpen} onClose={closeModal}>
        <div className="text-2xl bg-red-500 text-center rounded-t-2xl p-5 font-poppins text-white font-bold">
          Delete this contract?
        </div>
        <div className="text-N40 text-center text-sm tracking-wider">
          Are you sure you want to Delete this
          <span className="font-bold"> Contract from the list</span>?
        </div>
        <div className="flex mx-10 flex-col space-y-3 bg-[#F8E5E5] p-5 border-l-8 border-l-[#992823] rounded-md">
          <div className="flex space-x-2 items-center text-[#771505] font-bold text-lg">
            <BsFillExclamationTriangleFill />
            <div>Attention</div>
          </div>
          <div className="text-[#BC4C2E] tracking-wider text-sm max-w-lg">
            If you delete this contract, it will be gone forever. Are you sure
            you want to delete?
          </div>
        </div>
        <div className="mx-10 py-2 flex space-x-6 items-center justify-end">
          <button
            onClick={closeModal}
            className="bg-[#F0F7F7] py-2 px-8 text-N40 rounded-md text-sm">
            Cancel
          </button>
          <button
            onClick={() => {}}
            className="bg-[#CC362F] py-2 px-8 text-white rounded-md text-sm">
            Delete
          </button>
        </div>
      </DeleteModal>
      <div className=" bg-white h-[50vh] overflow-y-auto rounded-lg shadow-md p-4">
        <table className="min-w-full bg-white">
          <thead className=" text-left text-[#6B6F7B] text-sm tracking-wider">
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
              <th className="px-8 py-4">Status</th>
              <th className="px-8 py-4">Gender</th>
              <th className="px-8 py-4">Age</th>
              <th className="px-8 py-4">Created Date</th>
              <th className="px-8 py-4">Action</th>
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

                <td className="px-4 py-2 ">
                  <div
                    className={`${
                      item.status === "Draft"
                        ? "bg-[#FFD9641A] text-[#FFD964]"
                        : item.status === "Rejected"
                        ? "bg-red-200 text-[#FF0B00]"
                        : "bg-[#71E17C1A] text-[#71E17C]"
                    } px-4 py-2 rounded-md w-[65%] flex items-center justify-center`}>
                    {item.status}
                  </div>
                </td>
                <td className="px-4 py-2">{item.gender}</td>
                <td className="px-4 py-2">{item.age}</td>
                <td className="px-4 py-2">{item.createdDate}</td>
                <td className="px-4 py-2">
                  <div className="flex gap-4">
                    <button onClick={() => setIsOpen(true)} className="">
                      <RiDeleteBin5Line />
                    </button>

                    <button onClick={() => setOpenModal()}>
                      <BsQrCodeScan />
                    </button>
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

      <div className="flex justify-end">
        <PaginationComponent />
      </div>
    </div>
  );
};

export default ContractTable;
