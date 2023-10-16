import { TbScanEye } from "react-icons/tb";
import Profile from "../../../assets/svg/placeholder.svg";
import { HiFolderMinus } from "react-icons/hi2";
import { useState } from "react";

import { AiFillCloseCircle, AiFillEye } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { FaFolderMinus } from "react-icons/fa6";
import {
  MdEditNote,
  MdOutlineNotes,
  MdOutlineSpeakerNotesOff,
} from "react-icons/md";

const files = [
  {
    Avatar: Profile,
    name: "Bekelech Beshetu Amanuel",
    laborId: "Dec 13, 2022",
  },
  {
    Avatar: Profile,
    name: "Bekelech Beshetu Amanuel",
    laborId: "Dec 13, 2022",
  },
  {
    Avatar: Profile,
    name: "Bekelech Beshetu Amanuel",
    laborId: "Dec 13, 2022",
  },
  {
    Avatar: Profile,
    name: "Bekelech Beshetu Amanuel",
    laborId: "Dec 13, 2022",
  },
  {
    Avatar: Profile,
    name: "Bekelech Beshetu Amanuel",
    laborId: "Dec 13, 2022",
  },
];

export default function DashboardTable() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 max-h-[250px] overflow-y-auto noscrollBar  mb-10">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6">
          <div className="overflow-hidden  sm:rounded-lg">
            <table className=" min-w-full divide-y ">
              <thead className="bg-white ">
                <tr>
                  <th
                    scope="col"
                    className="px-6 p-5  text-left text-xs font-medium text-black tracking-wider"></th>
                  <th
                    scope="col"
                    className="px-6 p-5  text-left text-xs font-medium text-black tracking-wider">
                    File Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 p-5  text-left text-xs font-medium text-black tracking-wider">
                    Recieved Date
                  </th>

                  <th
                    scope="col"
                    className="px-6 p-5  text-left text-xs font-medium text-black tracking-wider">
                    View
                  </th>
                  <th
                    scope="col"
                    className="px-6 p-5  text-left text-xs font-medium text-black tracking-wider">
                    Reject
                  </th>
                  <th
                    scope="col"
                    className="px-6 p-5  text-left text-xs font-medium text-black tracking-wider">
                    Approve
                  </th>
                </tr>
              </thead>
              <tbody className=" divide-y divide-gray-200 text-sm text-N70 my-table even:bg-white">
                {files.map((file, index) => (
                  <tr
                    key={file.name}
                    className={index % 2 === 0 ? "bg-red-500" : ""}>
                    <td className="px-6 py-4 ">
                      <div className=" text-emdmsPrimary bg-white rounded-md flex items-center justify-center w-6 h-6 mx-auto shadow-md">
                        <FaFolderMinus className="text-sm" />
                      </div>
                    </td>
                    <td>
                      <p className="w-52 text-xs">{file.name}</p>
                    </td>
                    <td className="px-6 py-4 text-xs whitespace-nowrap">
                      {file.laborId}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        className="bg-[#008080aa] p-2 flex gap-2 items-center rounded-full"
                        onClick={openModal}>
                        <AiFillEye className=" text-white font-bold" />
                      </button>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        className="bg-[#DF817D] p-2 flex gap-2 items-center rounded-full"
                        onClick={openModal}>
                        <MdOutlineSpeakerNotesOff className=" text-white font-bold " />
                      </button>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        className="bg-[#7EC6B1] p-2 flex gap-2 items-center rounded-full"
                        onClick={openModal}>
                        <MdOutlineNotes className=" text-white font-bold " />
                      </button>
                    </td>
                    <td></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {modal && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg p-8 w-11/12 h-full md:w-9/12 lg:w-8/12 xl:w-6/12   transition-transform duration-500 transform translate-x-0 right-0 md:translate-x-1/2 ">
            {/* Modal Content */}
            <div className=" flex flex-col gap-4  h-full w-full">
              <button
                className="px-4 py-2 text-white rounded"
                onClick={closeModal}>
                <AiFillCloseCircle className="text-[#005656] text-5xl" />
                <div className="flex gap-4 p-10">
                  <div className="bg-red-100 w-[30%] rounded-lg overflow-y-auto "></div>
                  <div className="bg-red-100 w-[70%] rounded-lg "></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
