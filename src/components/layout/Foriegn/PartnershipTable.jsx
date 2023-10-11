import { TbScanEye } from "react-icons/tb";
import Profile from "../../../assets/svg/placeholder.svg";
import { HiFolderMinus } from "react-icons/hi2";
import { useState } from "react";

import { AiFillCloseCircle } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

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

export default function PartnershipTable() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 noscrollBar">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
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
                    Agency Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 p-5  text-left text-xs font-medium text-black tracking-wider">
                    Requested Date
                  </th>

                  <th
                    scope="col"
                    className="px-6 p-5  text-left text-xs font-medium text-black tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className=" divide-y divide-gray-200 text-sm text-N70 my-table even:bg-white">
                {files.map((file, index) => (
                  <tr
                    key={file.name}
                    className={index % 2 === 0 ? "bg-red-500" : ""}>
                    <td className="px-6 py-4 ">
                      <div className="text-xl text-emdmsPrimary bg-white rounded-full w-10 h-10 shadow-md">
                        <img src={Profile} alt="" />
                      </div>
                    </td>
                    <td>
                      <p className="w-52">{file.name}</p>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {file.laborId}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap flex  space-x-2 ">
                      <button
                        className="bg-[#65BBA2] px-2 py-2 flex gap-2 items-center rounded-sm"
                        onClick={openModal}>
                        <BsCheckLg className="text-white" />
                      </button>
                      <button
                        className="bg-[#D86863] px-2 py-2 flex gap-2 items-center rounded-sm"
                        onClick={openModal}>
                        <IoMdClose className="text-white" />
                      </button>
                      <button
                        className="bg-emdmsPrimary px-1 py-1 flex gap-2 items-center rounded-sm"
                        onClick={openModal}>
                        <TbScanEye className=" text-white font-bold text-xl" />
                      </button>
                    </td>
                    {/* <td className="p-4">
                      <AiFillEye className=" bg-emdmsPrimary/30 h-10 w-10 text-white p-3 hover:bg-emdmsPrimary cursor-pointer hover:scale-90 transition-all ease-in-out duration-200 rounded-full" />
                    </td>
                    <td className="p-4">
                      <AiTwotoneEdit className=" bg-emdmsPrimary/30 h-10 w-10 text-white p-3 hover:bg-emdmsPrimary cursor-pointer hover:scale-90 transition-all ease-in-out duration-200 rounded-full" />
                    </td>
                    <td className="p-4">
                      <AiTwotoneDelete className=" bg-emdmsPrimary/30 h-10 w-10 text-white p-3 hover:bg-emdmsPrimary cursor-pointer hover:scale-90 transition-all ease-in-out duration-200 rounded-full" />
                    </td> */}
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
