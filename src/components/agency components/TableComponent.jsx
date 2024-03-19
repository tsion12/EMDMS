import User from "../../assets/svg/Ellipse 2.png";
import { MdEdit } from "react-icons/md";
import { CiRedo } from "react-icons/ci";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { LiaRedoAltSolid } from "react-icons/lia";

import { MdOutlineCancel } from "react-icons/md";
import RejectionModal from "../utilities/RejectionModal";

const TableComponent = () => {
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
      laborId: "123456",
      status: "Pending",
      role: "Manager",
    },
    {
      id: 2,
      name: "Libamlak Birhanu Workalem",
      laborId: "789012",
      status: "Accepted",
      role: "Staff",
    },
    {
      id: 3,
      name: "Libamlak Birhanu Workalem",
      laborId: "789012",
      status: "Pending",
      role: "Admin",
    },
    {
      id: 4,
      name: "Libamlak Birhanu Workalem",
      laborId: "789012",
      status: "Inactive",
      role: "User",
    },
    {
      id: 5,
      name: "Libamlak Birhanu Workalem",
      laborId: "789012",
      status: "Inactive",
      role: "User",
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      {/* add modal */}
      {isOpen === "edit" && (
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
                  Edit Staff Members
                </div>
                <div className="text-[#212121] text-xs tracking-wide font-poppins">
                  Add staff members who works at the organization
                </div>
              </div>

              <div className="border border-black/5  w-full mt-10"></div>

              <div className="mt-10 mb-8 w-full ">
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
                      setIsModal2Open(true);
                    }}
                    className="bg-[#008080] text-white font-bold py-2 px-20 rounded shadow-lg">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* redomodal */}
      {isOpen === "redo" && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/2">
          <div className="bg-white p-8 rounded shadow-lg w-[800px] overflow-hidden modal-container">
            <div className="flex flex-col space-y-6 items-start">
              <button
                className="flex items-end justify-end"
                onClick={() => setIsOpen(false)}>
                <MdOutlineCancel className="text-gray-400 text-2xl " />
              </button>
              <div className="text-[#005656] text-2xl font-bold">
                Replace (Libamlak Birhanu Workalem)
              </div>
              <div className="text-[#212121] text-xs tracking-wide font-poppins">
                Add staff members who works at the organization
              </div>
              <div className="border border-[#1818184f] w-full "></div>
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
                    class="bg-white border border-[#00808033] text-black text-sm font-medium rounded-lg rounded-r-none block w-full py-4 px-14 "
                    placeholder="Search "
                  />
                </div>
                <div className="w-[15%]">
                  {" "}
                  <button
                    onClick={handleSearch}
                    class="py-4 px-12 ml-2 text-sm font-medium text-white bg-[#008080] rounded-lg rounded-l-none border ">
                    {" "}
                    Select
                  </button>
                </div>
              </form>
            </div>
            {/* {isSearch === true && (
                <div>
                  <div>jdierhek</div>
                  <div>ksejroiwjf</div>
                </div>
              )} */}

            <div className="mt-4">
              <div className="text-[#005656] font-medium text-lg">Labor</div>
              <div className="flex items-start justify-between mt-4">
                <div className="flex space-x-2 items-center">
                  <div className="p-2 rounded-full">
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
              <div className="border border-[#1818184f] w-full"></div>
            </div>

            <div className="mt-4 mb-8">
              <div className="text-[#005656] font-medium text-lg">
                Documents
              </div>
              <div className="bg-white  rounded-lg items-center flex justify-between p-8">
                <div className="flex flex-col items-start ">
                  <div className="text-[#464255]">Police Certificate</div>
                  <div className="text-xs max-w-lg text-[#A3A3A3]">
                    A bank statement is typically a digital or physical document
                    that provides a summary of the transactions, balances, and
                    activity in a bank account over a specific period of time.
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
            <div className="mt-4 mb-8">
              <div className="text-[#005656] font-medium text-lg">
                Documents
              </div>
              <div className="bg-white shadow-xl rounded-lg items-center flex justify-between p-8">
                <div className="flex flex-col items-start ">
                  <div className="text-[#464255]">Government ID</div>
                  <div className="text-xs max-w-lg text-[#A3A3A3]">
                    A bank statement is typically a digital or physical document
                    that provides a summary of the transactions, balances, and
                    activity in a bank account over a specific period of time.
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
              <button className="border border-[#008080] text-[#008080] font-bold py-2 px-16 rounded mr-4 shadow-lg">
                Cancel
              </button>
              <button
                onClick={() => {
                  setIsModal2Open(true);
                }}
                className="bg-[#008080] text-white font-bold py-2 px-20 rounded shadow-lg">
                Add
              </button>
            </div>
          </div>
        </div>
      )}
      {/* rejection modal for edit */}
      <RejectionModal isOpen={isModal2Open}>
        <div className="bg-[#005656] p-10 h-[70%] w-full ">
          <div className="flex flex-col space-y-3">
            <div className=" text-xl text-white font-bold">
              You’re about to replace this user. Are you sure?
            </div>
            <div className="text-white text-sm max-w-2xl">
              The document you uploaded and the name you entered are
              incompatible, so please cross-check again and change the name. We
              have read the document you have submitted and the document. Please
              submit a valid form and document.
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end m-10 space-x-4">
          <button
            onClick={() => setIsModal2Open(false)}
            className="border border-[#005656] text-[#005656] py-2 px-12   rounded-sm">
            Cancel
          </button>
          <button
            onClick={() => {
              setIsOpen(false);
              setIsModal2Open(false);
            }}
            className="bg-[#005656] text-white py-2 px-12   rounded-sm">
            Confirm
          </button>
        </div>
      </RejectionModal>
      {/* rejection modal for redo */}

      <table className="min-w-full">
        <thead className="border border-t-0 border-r-0 border-l-0 border-b-gray-400 text-left text-[#6B6F7B] text-sm tracking-wider">
          <tr>
            <th className="px-4 py-4"></th>
            <th className="px-4 py-4">Avatar</th>
            <th className="px-4 py-4">Name</th>
            <th className="px-4 py-4">Labor ID</th>
            <th className="px-4 py-4">Status</th>
            <th className="px-4 py-4">Role</th>
            <th className="px-4 py-4">Action</th>
          </tr>
        </thead>
        <tbody className="">
          {data.map((item) => (
            <tr
              key={item.id}
              className="border border-t-0 border-r-0 border-l-0 border-b-gray-300 text-[#6B6F7B] text-sm">
              <td className="px-4 py-2">
                <input type="checkbox" />
              </td>
              <td className="px-4 py-4 ">
                <div className="w-8 h-8 rounded-full bg-gray-400">
                  <img src={User} alt="" />
                </div>
              </td>
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.laborId}</td>
              <td className="px-4 py-2">{item.status}</td>
              <td className="px-4 py-2">{item.role}</td>
              <td className="px-4 py-2">
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsOpen("edit")}
                    className="bg-[#008080] text-white font-bold py-2 px-2 rounded-sm">
                    <MdEdit />
                  </button>

                  <button
                    onClick={() => setIsOpen("redo")}
                    className="bg-white border border-[#008080] text-[#008080] font-extrabold py-1 px-2 rounded-sm">
                    <CiRedo />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
