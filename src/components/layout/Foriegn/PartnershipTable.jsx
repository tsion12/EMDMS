import { TbScanEye } from "react-icons/tb";
import Profile from "../../../assets/svg/placeholder.svg";
import Ellipse from "../../../assets/svg/Ellipse 829.png";
import { useState } from "react";
import { AiFillCloseCircle, AiOutlineInfoCircle } from "react-icons/ai";
import { BsCheckLg, BsPersonCircle } from "react-icons/bs";
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
                    className="px-6 p-5  text-left text-sm font-medium text-black tracking-wider"></th>
                  <th
                    scope="col"
                    className="px-6 p-5  text-left text-sm font-medium text-black tracking-wider">
                    Agency Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 p-5  text-left text-sm font-medium text-black tracking-wider">
                    Requested Date
                  </th>

                  <th
                    scope="col"
                    className="px-6 p-5  text-left text-sm font-medium text-black tracking-wider">
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
                      <button className="bg-[#65BBA2] px-2 py-2 flex gap-2 items-center rounded-sm">
                        <BsCheckLg className="text-white" />
                      </button>
                      <button className="bg-[#D86863] px-2 py-2 flex gap-2 items-center rounded-sm">
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
        <div className="fixed inset-0 flex items-center justify-end z-50 backdrop-filter backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-[35%] bg-white duration-500 rounded-md shadow-lg px-8 py-8 transform transition-transform translate-x-0 ">
            {/* Modal Content */}
            <div className="flex flex-col items-start  gap-4 h-full w-full">
              <div className="flex items-center space-x-2">
                {" "}
                <button
                  className="px-4 py-2 text-white rounded"
                  onClick={closeModal}>
                  <AiFillCloseCircle className="text-[#005656] text-4xl" />
                </button>
                <div className="text-emdmsPrimary text-lg font-bold">
                  Local Agency Information
                </div>
              </div>
              <div className="flex items-center space-x-10 ">
                <div className=" bg-red-500 rounded-full ">
                  <img src={Ellipse} className="" alt="" />
                </div>
                <div className="flex flex-col space-y-3 items-start justify-center ">
                  <div className="text-lg text-[#008080] font-medium">
                    Agency Basic Info
                  </div>
                  <div className="bg-[#F0F7F7] p-4 flex flex-col rounded-lg space-y-3 w-full">
                    <div className="grid grid-cols-2 items-center gap-32">
                      <div className="flex items-start space-x-2">
                        {/* <AiOutlineInfoCircle /> */}
                        <BsPersonCircle className="text-[#98D2C1] mt-1" />
                        <div className="flex flex-col items-start">
                          <div className="text-xs">Agency Name</div>
                          <div className="text-[10px] text-N70">labor name</div>
                        </div>
                      </div>
                      <div className="text-xs">Mohamod Abdala Mustafa</div>
                    </div>
                    <div className="grid grid-cols-2 items-center gap-32">
                      <div className="flex items-start space-x-2">
                        {/* <AiOutlineInfoCircle /> */}
                        <BsPersonCircle className="text-[#98D2C1] mt-1" />
                        <div className="flex flex-col items-start">
                          <div className="text-xs">Agency Amharic Name</div>
                          <div className="text-N70 text-[10px]">labor name</div>
                        </div>
                      </div>
                      <div className="text-xs">መሀመድ አብደላ ሙስጠፋ</div>
                    </div>
                    <div className="grid grid-cols-2 items-center gap-32">
                      <div className="flex items-start space-x-2">
                        {/* <AiOutlineInfoCircle /> */}
                        <BsPersonCircle className="text-[#98D2C1] mt-1" />
                        <div className="flex flex-col items-start">
                          <div className="text-xs">Agency Type</div>
                          <div className="text-[10px] text-N70">labor name</div>
                        </div>
                      </div>
                      <div className="text-xs">PLC</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-[#008080] text-lg  mt-5">
                Contact Information
              </div>
              <div className="bg-[#F0F7F7] p-6 flex flex-col rounded-lg space-y-3 w-full">
                <div className="grid grid-cols-2 items-center gap-32">
                  <div className="flex items-start space-x-2">
                    {/* <AiOutlineInfoCircle /> */}
                    <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                    <div className="flex flex-col items-start">
                      <div
                        className="text-xs
                      ">
                        Location of the Residence
                      </div>
                      <div className="text-[10px] text-N70">labor name</div>
                    </div>
                  </div>
                  <div className="text-xs">Urban</div>
                </div>
                <div className="grid grid-cols-2 items-center gap-32">
                  <div className="flex items-start space-x-2">
                    {/* <AiOutlineInfoCircle /> */}
                    <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                    <div className="flex flex-col items-start">
                      <div
                        className="text-xs
                      ">
                        Region
                      </div>
                      <div className="text-[10px] text-N70">labor name</div>
                    </div>
                  </div>
                  <div className="text-xs">Addis Ababa</div>
                </div>
                <div className="grid grid-cols-2 items-center gap-32">
                  <div className="flex items-start space-x-2">
                    {/* <AiOutlineInfoCircle /> */}
                    <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                    <div className="flex flex-col items-start">
                      <div
                        className="text-xs
                      ">
                        Subcity
                      </div>
                      <div className="text-[10px] text-N70">labor name</div>
                    </div>
                  </div>
                  <div className="text-xs">Arada</div>
                </div>
                <div className="grid grid-cols-2 items-center gap-32">
                  <div className="flex items-start space-x-2">
                    {/* <AiOutlineInfoCircle /> */}
                    <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                    <div className="flex flex-col items-start">
                      <div
                        className="text-xs
                      ">
                        Kebele
                      </div>
                      <div className="text-[10px] text-N70">labor name</div>
                    </div>
                  </div>
                  <div className="text-xs">07</div>
                </div>
                <div className="grid grid-cols-2 items-center gap-32">
                  <div className="flex items-start space-x-2">
                    {/* <AiOutlineInfoCircle /> */}
                    <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                    <div className="flex flex-col items-start">
                      <div
                        className="text-xs
                      ">
                        House Number
                      </div>
                      <div className="text-[10px] text-N70">labor name</div>
                    </div>
                  </div>
                  <div className="text-xs">567</div>
                </div>
                <div className="grid grid-cols-2 items-center gap-32">
                  <div className="flex items-start space-x-2">
                    {/* <AiOutlineInfoCircle /> */}
                    <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                    <div className="flex flex-col items-start">
                      <div
                        className="text-xs
                      ">
                        Email Address
                      </div>
                      <div className="text-[10px] text-N70">labor name</div>
                    </div>
                  </div>
                  <div className="text-xs">mohamodabdela@gmail.com</div>
                </div>
                <div className="grid grid-cols-2 items-center gap-32">
                  <div className="flex items-start space-x-2">
                    {/* <AiOutlineInfoCircle /> */}
                    <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                    <div className="flex flex-col items-start">
                      <div
                        className="text-xs
                      ">
                        FAx
                      </div>
                      <div className="text-[10px] text-N70">labor name</div>
                    </div>
                  </div>
                  <div className="text-xs">32123</div>
                </div>
                <div className="grid grid-cols-2 items-center gap-32">
                  <div className="flex items-start space-x-2">
                    {/* <AiOutlineInfoCircle /> */}
                    <AiOutlineInfoCircle className="text-[#98D2C1] mt-1" />
                    <div className="flex flex-col items-start">
                      <div
                        className="text-xs
                      ">
                        P.O.BOX
                      </div>
                      <div className="text-[10px] text-N70">labor name</div>
                    </div>
                  </div>
                  <div className="text-xs">32123</div>
                </div>
              </div>
              <div className="flex justify-end items-start  w-full">
                <button
                  onClick={closeModal}
                  className="bg-[#F0F7F7] px-10 py-2 rounded-md">
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
