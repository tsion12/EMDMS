import User from "../../assets/Ellipse 2.png";
import { MdEdit } from "react-icons/md";
import { CiRedo } from "react-icons/ci";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import { BsQrCodeScan } from "react-icons/bs";
import { TbScanEye } from "react-icons/tb";
import PaginationComponent from "../utilities/PaginationComponent";

const ContractTable = () => {
  const [isOpen, setIsOpen] = useState(null);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);

  const [activeTab, setActiveTab] = useState("");

  const handleUpload = () => {
    setIsUploaded(true);
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
                    } px-4 py-2 rounded-md w-[55%] flex items-center justify-center`}>
                    {item.status}
                  </div>
                </td>
                <td className="px-4 py-2">{item.gender}</td>
                <td className="px-4 py-2">{item.age}</td>
                <td className="px-4 py-2">{item.createdDate}</td>
                <td className="px-4 py-2">
                  <div className="flex gap-4">
                    <button onClick={() => setIsOpen("edit")} className="">
                      <RiDeleteBin5Line />
                    </button>

                    <button onClick={() => setIsOpen("redo")}>
                      <BsQrCodeScan />
                    </button>
                    <button onClick={() => setIsOpen("redo")}>
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
