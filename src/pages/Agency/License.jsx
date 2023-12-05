import React, { useState } from "react";
import Map from "../../assets/map.png";
import SmallMap from "../../assets/smallMaop.png";
import Flag from "../../assets/Japan.png";
import Qatar from "../../assets/qatar.png";
import Saudi from "../../assets/saudi.png";
import SearchIcon from "../../assets/searchcontryIcon.png";
import { MdUpload } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";
import { IoImageOutline } from "react-icons/io5";

import Portfolio from "../../assets/Portfolio.png";
import Modal from "../../components/utilities/Modal";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import PageTwo from "./pages/PageTwo";
import ProgressBar from "@ramonak/react-progress-bar";

const License = () => {
  const [requestModal, setrequestModal] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [activePage, setActivePage] = useState("");
  //   const openModal = () => {
  //     setrequestModal(true);
  //   };

  const closeModal = () => {
    setrequestModal(false);
  };
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const options = [
    "Partner 1",
    "Partner 2",
    "Partner 3",
    "Partner 4",
    "Partner 5",
  ];
  const [selectedOption2, setSelectedOption2] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleOptionClick = (option) => {
    setSelectedOption2(option);
    setIsOpen(false);
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className=" w-full max-h-80vh overflow-y-auto">
      {/* Add License Modal */}
      {activeModal === "request" && (
        <>
          <Modal isOpen={requestModal} onClose={closeModal}>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div>
                <img src={SmallMap} alt="" />
              </div>
              <div className="text-emdmsPrimary text-2xl font-semibold font-poppins tracking-wide">
                Choose Country
              </div>
              <div className="text-[#212121] text-xs tracking-wider font-poppins">
                Choose the country in which the license will be issued.
              </div>
            </div>
            {/* Radio Buttons */}
            <div className="p-10">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio h-4 w-4 text-emdmsPrimary"
                  value="option1"
                  checked={selectedOption === "option1"}
                  onChange={handleOptionChange}
                />
                <div className="ml-5 p-0 py-0 rounded-sm">
                  <img src={Qatar} alt="" />
                </div>
                <span className="ml-2 text-sm">Jordan</span>
              </label>

              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio h-4 w-4 text-emdmsPrimary"
                  value="option2"
                  checked={selectedOption === "option2"}
                  onChange={handleOptionChange}
                />
                <div className="ml-5 p-0 py-0 rounded-sm">
                  <img src={Flag} alt="" />
                </div>
                <span className="ml-2 text-sm">Qatar</span>
              </label>

              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio h-4 w-4 text-emdmsPrimary"
                  value="option3"
                  checked={selectedOption === "option3"}
                  onChange={handleOptionChange}
                />
                <div className="ml-5 p-0 py-0 rounded-sm">
                  <img src={Saudi} alt="" />
                </div>
                <span className="ml-2 text-sm">Saudi Arabia</span>
              </label>

              <label className="inline-flex items-center ml-6">
                <input
                  type="radio"
                  className="form-radio h-4 w-4 text-emdmsPrimary"
                  value="option4"
                  checked={selectedOption === "option4"}
                  onChange={handleOptionChange}
                />
                <div className="ml-5 p-0 py-0 rounded-sm">
                  <img src={Flag} alt="" />
                </div>
                <span className="ml-2 text-sm">United Arab Emirates</span>
              </label>
            </div>
            <div className="flex items-center justify-center space-x-6">
              {" "}
              <button
                onClick={closeModal}
                className="border border-[#008080] py-2 px-16 text-N40 rounded-lg">
                Cancel
              </button>
              <button
                onClick={() => {
                  setActiveModal("partner");
                }}
                className="bg-[#008080] py-2 px-16 text-white rounded-lg">
                Select
              </button>
            </div>

            <div className="flex items-center justify-center pt-10 space-x-1">
              <AiOutlineExclamationCircle className="text-red-900 font-extrabold" />
              <p className="text-[#cf5151bf]">
                <span className="font-bold">Note:</span> You must select only
                one country in order to choose foreign partner to create new
                licence
              </p>
            </div>
          </Modal>
        </>
      )}
      {/* Add Partner Modal */}
      {activeModal === "partner" && (
        <div>
          <Modal isOpen={requestModal} onClose={closeModal}>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div>
                <img src={SmallMap} alt="" />
              </div>
              <div className="text-emdmsPrimary text-2xl font-semibold font-poppins tracking-wide">
                Choose Partner
              </div>
              <div className="text-[#212121] text-xs tracking-wider font-poppins">
                Choose the country in which the license will be issued.
              </div>
            </div>
            {/* DropDown */}
            <div className="flex space-x-40 items-center p-10">
              <div className="flex items-start space-x-1">
                <img src={SearchIcon} alt="" />
                <div className="flex flex-col items-start">
                  <div className="font-bold">Foriegn Partner</div>
                  <div className="text-N70 text-xs max-w-xs">
                    Choose a single partner to carry out the process.
                  </div>
                </div>{" "}
              </div>{" "}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Foreign Partner"
                  className="  bg-[#F3F3F3] rounded-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emdmsPrimary w-64"
                  value={searchTerm}
                  onChange={handleInputChange}
                  onClick={() => setIsOpen(!isOpen)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <BsChevronDown className="" />
                </div>
                {isOpen && (
                  <div className="absolute mt-1 bg-white rounded-md shadow-lg">
                    {filteredOptions.map((option) => (
                      <div
                        key={option}
                        className="py-2 px-4 hover:bg-blue-500 hover:text-white cursor-pointer"
                        onClick={() => handleOptionClick(option)}>
                        {option}
                      </div>
                    ))}
                  </div>
                )}
                {selectedOption2 && (
                  <div className="mt-2">
                    Selected Option: <strong>{selectedOption2}</strong>
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-center space-x-6">
              {" "}
              <button
                onClick={() => {
                  setActiveModal("request");
                }}
                className="border border-[#008080] py-2 px-16 text-N40 rounded-lg">
                Back
              </button>
              <button
                onClick={() => {
                  setActiveModal("power");
                }}
                className="bg-[#008080] py-2 px-16 text-white rounded-lg">
                Select
              </button>
            </div>

            <div className="flex items-center justify-center pt-10 space-x-1">
              <AiOutlineExclamationCircle className="text-red-900 font-extrabold" />
              <p className="text-[#cf5151bf]">
                <span className="font-bold">Note:</span> You must select only
                one country in order to choose foreign partner to create new
                licence
              </p>
            </div>
          </Modal>
        </div>
      )}
      {activeModal === "power" && (
        <div>
          <Modal isOpen={requestModal} onClose={closeModal}>
            <div className="flex flex-col items-center justify-center space-y-2">
              <div>
                <img src={SmallMap} alt="" />
              </div>
              <div className="text-emdmsPrimary text-2xl font-semibold font-poppins tracking-wide">
                Upload Power of Attorney
              </div>
              <div className="text-[#212121] text-xs tracking-wider font-poppins">
                Choose the country in which the license will be issued.
              </div>
            </div>
            {/* Upload Area */}
            <div className="flex w-full flex-col space-y-2   items-center justify-center">
              <div className="bg-[#F0F7F7] w-[65%] h-48 rounded-md flex flex-col items-center justify-center">
                <MdUpload className="text-emdmsPrimary text-3xl" />
                <div className="text-[#008080] font-bold">Upload Files</div>
                <div className="text-[#8F9BBA] text-xs max-w-xs">
                  PDF, PNG, JPG and GIF files are allowed Max 4mb{" "}
                </div>
              </div>
            </div>
            <div className="flex w-full flex-col space-y-2 items-center justify-center">
              <div className=" w-[65%] px-5 py-2 h-24  border rounded-md flex flex-col items-center justify-center">
                {/* <MdUpload className="text-emdmsPrimary text-3xl" /> */}
                <div className="flex items-center justify-between w-full ">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-10 h-10 rounded-full bg-emdmsPrimary flex items-center justify-center">
                      <IoImageOutline className=" text-white" />
                    </div>
                    <div className="flex flex-col text-[#212121]">
                      <div className="text-sm  font-bold">
                        Power of Attorney
                      </div>
                      <div className="text-xs">10 MB</div>
                    </div>
                  </div>
                  <div>
                    <MdOutlineCancel className="text-red-500" />
                  </div>
                </div>
                <div className="w-full my-3 px-8">
                  <ProgressBar
                    completed="60"
                    height="10px"
                    labelSize="8px"
                    baseBgColor="#E2F0F0"
                    bgColor="#008080"></ProgressBar>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-6">
              {" "}
              <button
                onClick={() => {
                  setActiveModal("partner");
                }}
                className="border border-[#008080] py-2 px-16 text-N40 rounded-lg">
                Back
              </button>
              <button
                onClick={() => {
                  setrequestModal(false);
                  setActivePage("pageTwo");
                }}
                className="bg-[#008080] py-2 px-16 text-white rounded-lg">
                Select
              </button>
            </div>

            <div className="flex items-center justify-center pt-10 space-x-1">
              <AiOutlineExclamationCircle className="text-red-900 font-extrabold" />
              <p className="text-[#cf5151bf]">
                <span className="font-bold">Note:</span> You must select only
                one country in order to choose foreign partner to create new
                licence
              </p>
            </div>
          </Modal>
        </div>
      )}
      {/* Background Image */}
      {activePage === "" && (
        <>
          {" "}
          <img
            className="absolute object-cover w-full h-full mx-none"
            src={Map}
            alt=""
          />
          <div className="m-10 relative">
            <div className="flex justify-end mr-20 space-x-6">
              <button
                onClick={() => {
                  setrequestModal(true);
                  setActiveModal("request");
                }}
                className="bg-emdmsPrimary text-white p-2 px-10 rounded-lg text-sm font-poppins">
                Request License
              </button>
            </div>

            {/* Content */}
            <div className="w-full flex flex-col items-center justify-center mt-20">
              <img src={Portfolio} alt="" className="h-[400px] w-[400px]" />
              <h2 className="max-w-sm text-center text-2xl font-medium text-[#008080]">
                To initiate the process of creating a license, simply click on
                the "Request License"
              </h2>
            </div>
          </div>
        </>
      )}

      {activePage === "pageTwo" && <PageTwo />}
    </div>
  );
};

export default License;
