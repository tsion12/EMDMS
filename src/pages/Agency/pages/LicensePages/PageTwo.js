import React, { useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import MobileMockupOne from "../../../../assets/svg/FirstMobileMockup.svg";
import MobileMockUpTwo from "../../../../assets/svg/MobileMockUpTwo.svg";
import MobileMockup3 from "../../../../assets/svg/MobileMockup3.svg";
import LineOverlay from "../../../../assets/svg/LineOver.svg";
import SlideTwo from "../../../../assets/svg/SlideTwo.svg";
import SlideThree from "../../../../assets/svg/SlideThreee.svg";
import SlideFour from "../../../../assets/svg/SlideFour.svg";
import MobileMockup4 from "../../../../assets/svg/MockupFour.svg";
import PaidHand from "../../../../assets/svg/paid.svg";
import CheckIcon from "../../../../assets/svg/checkIcon.svg";
import FileFirstIcon from "../../../../assets/svg/FirstStepIcon.svg";
import { BsDot } from "react-icons/bs";
import { IoMdAddCircle } from "react-icons/io";
import { FaCheck } from "react-icons/fa6";
import { TbScanEye } from "react-icons/tb";
import { IoClose } from "react-icons/io5";
import { CgNotes } from "react-icons/cg";

import {
  AiFillCloseCircle,
  AiFillHome,
  AiOutlineClockCircle,
  AiOutlineClose,
  AiOutlineLeft,
  AiOutlinePlus,
} from "react-icons/ai";
import { LuCopy } from "react-icons/lu";

import { IoIosAddCircle } from "react-icons/io";
import { HiPhone } from "react-icons/hi";

import Profile from "../../../../assets/svg/placeholder.png";
import {
  BsCheckLg,
  BsChevronDown,
  BsChevronUp,
  BsFillExclamationTriangleFill,
  BsFillImageFill,
  BsFlagFill,
} from "react-icons/bs";
import {
  MdDocumentScanner,
  MdMoney,
  MdOutlineStickyNote2,
  MdUpload,
} from "react-icons/md";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BiCalendar, BiSolidFolderMinus } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import Modal from "../../../../components/utilities/Modal";
import SubmitPage from "../SubmitPage";
const PageTwo = () => {
  const [sideModalOpen, setSideModalOpen] = useState(false);
  const [isExpand, setExpand] = useState(false);
  const [isUpload, setUpload] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [page, setPage] = useState("");
  const [requestRenewal, setRequestRenewal] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(2);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const toggleExpand = () => {
    setExpand(!isExpand);
  };
  const openSideModal = () => {
    setSideModalOpen(true);
  };

  const closeSideModal = () => {
    setSideModalOpen(false);
  };
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const [activeTab, setActiveTab] = useState("");
  const [renewalActiveTab, setRenewalActiveTab] = useState("renewalUpload");

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // dotsClass: "slick-dots !bg-blue-500",
    // appendDots: (dots) => console.log(dots),
    // (
    //   <div>
    //     <ul className="!bg-red-500/20">
    //       {dots.map((item) => console.log(dots))}
    //     </ul>
    //   </div>
    // ),
    // customPaging: i => (
    //   <div
    //     style={{
    //       width: "30px",
    //       color: "blue",
    //       border: "1px blue solid"
    //     }}
    //   >
    //     {i + 1}
    //   </div>
    // ),
    // className: "bg-green-500",
    // dotsClass: "bg-green-800 slick-dots ",

    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  const [paidState, setPaidState] = useState(false);
  return (
    <div className="mt-10 ml-20">
      {/* Upload Side Modal */}
      {sideModalOpen && (
        <div className="fixed inset-0 flex items-center justify-end z-50  backdrop-filter backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-2/5 bg-white rounded-md shadow-lg px-8 py-8">
            <div className="flex flex-col  items-start">
              <div className=" flex space-x-6 items-center ">
                <AiFillCloseCircle
                  onClick={closeSideModal}
                  className="text-4xl text-red-500"
                />
              </div>

              <div className="mt-5 text-emdmsPrimary text-lg font-bold">
                Upload Bank Statement
              </div>
              <div className="text-[10px] text-[#212121]">
                We support pdf, jpg, and many others.
              </div>
              <div className="mt-8 flex w-full justify-between items-center">
                <div className="flex space-x-1">
                  <div className="pt-1">
                    <BiCalendar />
                  </div>
                  <div className="flex flex-col  justify-start ">
                    <div className="text-[#313A4E] font-bold text-sm">
                      Issued Date *
                    </div>
                    <div className="text-[10px] text-[#949494] max-w-xs tracking-wide leading-5">
                      NB. Insert the date of the posted job will be removed and
                      applicants will stop applying
                    </div>
                  </div>
                </div>
                <div className="relative flex  ">
                  <input
                    type="text"
                    className="bg-[#F0F7F7] text-[#6D6D6D] rounded-sm pl-8 pr-16 py-2  text-[10px]"
                    placeholder="June 12, 2022"
                  />
                  <span className="absolute right-4  transform translate-y-1/2 pr-2">
                    <BiCalendar className="text-emdmsPrimary" />
                  </span>
                </div>
              </div>
              <div className="mt-4 flex w-full justify-between  items-center">
                <div className="flex space-x-1">
                  <div className="pt-1">
                    <MdMoney />
                  </div>
                  <div className="flex flex-col  justify-start ">
                    <div className="text-[#313A4E] font-bold text-xs">
                      Stated Capital *
                    </div>
                    <div className="text-[10px] text-[#949494] max-w-xs tracking-wide leading-5">
                      Eg. Only in Birr
                    </div>
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    className="bg-[#F0F7F7] text-[#6D6D6D] rounded-sm pl-8 pr-16 py-2  text-[10px]"
                    placeholder="Type the capital number"
                  />
                </div>
              </div>
              <div className="mt-4 flex w-full justify-between items-center">
                <div className="flex space-x-1">
                  <div className="pt-1">
                    <BiCalendar />
                  </div>
                  <div className="flex flex-col  justify-start ">
                    <div className="text-[#313A4E] font-bold text-xs">
                      Reference Number *
                    </div>
                    <div className="text-[10px] text-[#949494] max-w-xs tracking-wide leading-5">
                      Eg. write the number that is givens on the receipt
                    </div>
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    className="bg-[#F0F7F7] text-[#6D6D6D] rounded-sm pl-8 pr-16 py-2  text-[10px]"
                    placeholder="Enter the reference number"
                  />
                </div>
              </div>
              <div className=" ml-6 mt-10 w-full">
                {" "}
                <div className="bg-[#F0F7F7] rounded-md shadow-md h-[180px] w-[90%] border border-dashed border-gray-400 text-center flex flex-col justify-center items-center ">
                  {" "}
                  <div>
                    <MdUpload className="text-4xl text-[#008080]" />
                  </div>
                  <div className="text-[#008080] font-bold text-sm">
                    Upload Files
                  </div>
                  <div className="text-[10px] max-w-xs text-[#8F9BBA]">
                    PDF, PNG, JPG and GIF files are allowed Max 4mb{" "}
                  </div>
                </div>
              </div>
              <div className=" ml-6 mt-5 w-full">
                {" "}
                <div className="bg-white rounded-md shadow-md  w-[90%] border  border-gray-200 p-2 flex flex-col justify-center items-center ">
                  {" "}
                  <div className="flex items-start justify-between w-full ">
                    <div className="flex items-start space-x-4 ">
                      {" "}
                      <div className=" bg-emdmsPrimary rounded-full p-3">
                        <BsFillImageFill className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex flex-col space-y-1 ">
                        <div className="text-sm ">Bank Statement</div>
                        <div className="text-[#212121c4] text-sm">10 MB</div>
                      </div>
                    </div>
                    <div>
                      <IoCloseSharp className="text-red-500" />
                    </div>
                  </div>
                  <div className="flex space-x-1 w-full item-center justify-center">
                    {" "}
                    <div className="p-4 w-full">
                      <ProgressBar
                        completed={20}
                        height="8px"
                        customLabel
                        bgColor="#008080"
                        baseBgColor="#E2F0F0"
                      />
                    </div>
                    <div className="flex items-center text-xs">20%</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex space-x-6 justify-center mt-10">
              <button
                onClick={closeSideModal}
                className="border border-[#337979] py-2 px-16 text-[#008080] rounded-md text-sm">
                Cancel
              </button>
              <button
                onClick={() => {
                  setUpload(true);
                  setSideModalOpen(false);
                }}
                className="bg-[#005656] py-2 px-16 text-white rounded-md text-sm">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      <div className=" w-full    flex  max-h-screen overflow-auto gap-5 ">
        {/* left side */}
        {page === "" && (
          <>
            {" "}
            <div className=" flex flex-col space-y-5 lg:w-[70%] md:w-[70%] sm:w-full">
              {/* Tabs */}

              <>
                {" "}
                <div className="flex space-x-4 items-center">
                  <div className="bg-emdmsPrimary px-2 py-1">
                    <AiOutlineLeft className="text-white text-2xl font-bold" />
                  </div>
                  <div className="text-2xl text-emdmsPrimary font-bold font-poppins tracking-wide">
                    License
                  </div>
                </div>
                <div className="flex justify-between  bg-white/50 rounded-lg text-xs overflow-x-auto">
                  <button
                    onClick={() => {
                      setActiveTab("");
                    }}
                    className={`px-8 py-4 font-medium ${
                      activeTab === ""
                        ? "text-emdmsPrimary border-b-8 border-emdmsPrimary font-bold"
                        : "text-[#292929]"
                    }`}>
                    Foreign Information
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("financial");
                    }}
                    className={`px-8 py-4 ${
                      activeTab === "financial"
                        ? "text-emdmsPrimary border-b-8 border-emdmsPrimary"
                        : "text-[#292929]"
                    }`}>
                    Financial Documents
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("business");
                    }}
                    className={`px-8 py-4 ${
                      activeTab === "business"
                        ? "text-emdmsPrimary border-b-8 border-emdmsPrimary"
                        : "text-[#292929]"
                    }`}>
                    Business Documents
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("rental");
                    }}
                    className={`px-8 py-2 ${
                      activeTab === "rental"
                        ? "text-emdmsPrimary border-b-8 border-emdmsPrimary"
                        : "text-[#292929]"
                    }`}>
                    Rental Contract
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("payment");
                    }}
                    className={`px-8 py-2 ${
                      activeTab === "payment"
                        ? "text-emdmsPrimary border-b-8 border-emdmsPrimary"
                        : "text-[#292929]"
                    }`}>
                    Payment
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("renewal");
                    }}
                    className={`px-8 py-2 ${
                      activeTab === "renewal"
                        ? "text-emdmsPrimary border-b-8 border-emdmsPrimary"
                        : "text-[#292929]"
                    }`}>
                    License Renewal
                  </button>
                </div>
              </>

              {/* foriegn Tab */}
              {activeTab === "" && (
                <div className="h-full flex flex-col justify-between">
                  {" "}
                  <div className="flex justify-end">
                    <div className="flex space-x-2 bg-white px-8 py-2 justify-center items-center text-emdmsPrimary rounded-lg border border-emdmsPrimary shadow-sm">
                      <IoIosAddCircle className="text-2xl" />
                      <button className="text-sm font-bold">Add</button>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-x-4  gap-y-4 w-full h-[58vh]  overflow-auto noscrollBar sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                    <div className="bg-white rounded-lg shadow-lg p-2">
                      <div className="p-2 md:p-4 mb-5 flex flex-col md:flex-row items-center justify-center">
                        <img
                          src={Profile}
                          alt="Profile Picture"
                          className="rounded-full lg:h-20 lg:w-20 md:h-12 md:w-12  
                      "
                        />
                        <div className="ml-4 md:ml-8 flex flex-col items-center justify-center">
                          <h2 className="text-base md:text-sm font-semibold text-emdmsPrimary pb-2">
                            Abdala Agency
                          </h2>
                          <p className="text-xs md:text-xs text-[#9A9A9A] pb-1">
                            Business Name
                          </p>
                          <div className="border border-[#EED116] bg-[#FCF9E1] rounded-lg py-1 px-5 flex items-start">
                            <span className="mr-2 text-[#B29C10]">
                              <AiOutlineClockCircle />
                            </span>
                            <span className="text-[#B29C10] text-[10px]">
                              Pending...
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* contact information */}
                      <div className="flex flex-col md:flex-row items-center justify-center mb-10 space-x-10">
                        <div className="lg:flex flex-col mr-4 text-xs hidden md:hidden">
                          <div className="flex items-center mb-2 text-[#9A9A9A]">
                            <HiPhone className="mr-2" />
                            <span>Phone</span>
                          </div>
                          <div className="flex items-center mb-2 text-[#9A9A9A]">
                            <AiFillHome className="mr-2" />
                            <span>Country</span>
                          </div>
                          <div className="flex items-center mb-2 text-[#9A9A9A]">
                            <BsFlagFill className="mr-2" />
                            <span>City</span>
                          </div>
                          <div className="flex items-center text-[#9A9A9A]">
                            <BsFlagFill className="mr-2" />
                            <span>Emirate/Governor</span>
                          </div>
                        </div>
                        <div className="flex flex-col text-[#005656] font-bold text-xs md:items-center">
                          <div className="mb-2">+25198903623</div>
                          <div className="mb-2">Saudi Arabia</div>
                          <div className="mb-2">Jeddah</div>
                          <div>Emirate 1</div>
                        </div>
                      </div>
                    </div>
                    {/* card two */}
                    <div className="bg-white rounded-lg shadow-lg p-2">
                      <div className="p-2 md:p-4 mb-5 flex flex-col md:flex-row items-center justify-center">
                        <img
                          src={Profile}
                          alt="Profile Picture"
                          className="rounded-full lg:h-20 lg:w-20 md:h-12 md:w-12  
                      "
                        />
                        <div className="ml-4 md:ml-8 flex flex-col items-center justify-center">
                          <h2 className="text-base md:text-sm font-semibold text-emdmsPrimary pb-2">
                            Abdala Agency
                          </h2>
                          <p className="text-xs md:text-xs text-[#9A9A9A] pb-1">
                            Business Name
                          </p>
                          <div className="border border-[#EED116] bg-[#FCF9E1] rounded-lg py-1 px-5 flex items-start">
                            <span className="mr-2 text-[#B29C10]">
                              <AiOutlineClockCircle />
                            </span>
                            <span className="text-[#B29C10] text-[10px]">
                              Pending...
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* contact information */}
                      <div className="flex flex-col md:flex-row items-center justify-center mb-10 space-x-10">
                        <div className="lg:flex flex-col mr-4 text-xs hidden md:hidden">
                          <div className="flex items-center mb-2 text-[#9A9A9A]">
                            <HiPhone className="mr-2" />
                            <span>Phone</span>
                          </div>
                          <div className="flex items-center mb-2 text-[#9A9A9A]">
                            <AiFillHome className="mr-2" />
                            <span>Country</span>
                          </div>
                          <div className="flex items-center mb-2 text-[#9A9A9A]">
                            <BsFlagFill className="mr-2" />
                            <span>City</span>
                          </div>
                          <div className="flex items-center text-[#9A9A9A]">
                            <BsFlagFill className="mr-2" />
                            <span>Emirate/Governor</span>
                          </div>
                        </div>
                        <div className="flex flex-col text-[#005656] font-bold text-xs md:items-center">
                          <div className="mb-2">+25198903623</div>
                          <div className="mb-2">Saudi Arabia</div>
                          <div className="mb-2">Jeddah</div>
                          <div>Emirate 1</div>
                        </div>
                      </div>
                    </div>
                    {/* card three */}
                    <div className="bg-white rounded-lg shadow-lg p-2">
                      <div className="p-2 md:p-4 mb-5 flex flex-col md:flex-row items-center justify-center">
                        <img
                          src={Profile}
                          alt="Profile Picture"
                          className="rounded-full lg:h-20 lg:w-20 md:h-12 md:w-12  
                      "
                        />
                        <div className="ml-4 md:ml-8 flex flex-col items-center justify-center">
                          <h2 className="text-base md:text-sm font-semibold text-emdmsPrimary pb-2">
                            Abdala Agency
                          </h2>
                          <p className="text-xs md:text-xs text-[#9A9A9A] pb-1">
                            Business Name
                          </p>
                          <div className="border border-[#EED116] bg-[#FCF9E1] rounded-lg py-1 px-5 flex items-start">
                            <span className="mr-2 text-[#B29C10]">
                              <AiOutlineClockCircle />
                            </span>
                            <span className="text-[#B29C10] text-[10px]">
                              Pending...
                            </span>
                          </div>
                        </div>
                      </div>
                      {/* contact information */}
                      <div className="flex flex-col md:flex-row items-center justify-center mb-10 space-x-10">
                        <div className="lg:flex flex-col mr-4 text-xs hidden md:hidden">
                          <div className="flex items-center mb-2 text-[#9A9A9A]">
                            <HiPhone className="mr-2" />
                            <span>Phone</span>
                          </div>
                          <div className="flex items-center mb-2 text-[#9A9A9A]">
                            <AiFillHome className="mr-2" />
                            <span>Country</span>
                          </div>
                          <div className="flex items-center mb-2 text-[#9A9A9A]">
                            <BsFlagFill className="mr-2" />
                            <span>City</span>
                          </div>
                          <div className="flex items-center text-[#9A9A9A]">
                            <BsFlagFill className="mr-2" />
                            <span>Emirate/Governor</span>
                          </div>
                        </div>
                        <div className="flex flex-col text-[#005656] font-bold text-xs md:items-center">
                          <div className="mb-2">+25198903623</div>
                          <div className="mb-2">Saudi Arabia</div>
                          <div className="mb-2">Jeddah</div>
                          <div>Emirate 1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="  flex justify-end space-x-3 p-4 ">
                    <button className="bg-transparent hover:bg-[#008080] text-[#008080] font-bold py-2 px-10 border border-[#008080] rounded text-xs">
                      Cancel
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab("financial");
                      }}
                      className="bg-[#008080d4] hover:bg-[#008080] text-white font-bold py-2 px-10 text-xs rounded">
                      Proceed
                    </button>
                  </div>
                </div>
              )}

              {/* finanical Tab */}
              {activeTab === "financial" && (
                <div className="h-full flex flex-col justify-between">
                  <div className=" flex flex-col space-y-3 w-full h-[60vh] 2xl:h-[65vh] overflow-auto noscrollBar">
                    <div className="flex justify-between items-center bg-white rounded-md px-4 py-5 ">
                      <div className="flex space-x-3 justify-center">
                        <div
                          onClick={toggleExpand}
                          className="mr-2 font-bold text-lg">
                          {isExpand ? <BsChevronUp /> : <BsChevronDown />}
                        </div>

                        <div className="flex flex-col item-start">
                          <div className="flex items-center mb-2">
                            <h4 className="text-[16px] ">Bank Statement</h4>
                          </div>
                          <p className="text-[#A3A3A3] mb-2 lg:max-w-sm lg:text-[10px] hidden md:block">
                            A bank statement is typically a digital or physical
                            document that provides a summary of the
                            transactions, balances, and activity in a bank
                            account over a specific period of time.
                          </p>
                          <div className="flex items-center space-x-3">
                            <p className="text-gray-600 text-sm font-medium">
                              Maximum Document
                            </p>
                            <div className="bg-red-400 px-3 py-2 rounded-lg text-xs text-white">
                              1
                            </div>
                          </div>
                        </div>
                      </div>
                      {isUpload === false && (
                        <div className="flex items-center space-x-2 bg-emdmsPrimary/70 text-white font-bold py-2 px-4 rounded mr-10">
                          <AiOutlinePlus />
                          <button onClick={openSideModal} className=" text-sm">
                            Upload
                          </button>
                        </div>
                      )}
                      {isUpload === true && (
                        <div className="flex items-center justify-center mt-5 space-x-10 text-white font-bold  ">
                          <div className="text-xs  text-black/50">
                            Dec 13, 2022
                          </div>
                          <div className="pr-10">
                            {" "}
                            <div className="border border-[#EED116] bg-[#FCF9E1] rounded-lg py-1 px-5 flex items-start">
                              <span className="mr-2 text-[#B29C10]">
                                <AiOutlineClockCircle />
                              </span>
                              <span className="text-[#B29C10] text-[10px]">
                                Pending...
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    {isExpand === true && (
                      <div className="flex flex-col space-y-3 mr-6 ml-6 ">
                        <div className="bg-white p-2 flex items-center space-x-4 rounded-md">
                          <div className="">
                            <BiSolidFolderMinus className="text-emdmsPrimary" />
                          </div>
                          <div className="text-xs pr-[20%]">Bank Statement</div>

                          <div className="text-xs pr-[10%]">Dec 13, 2022</div>
                          <div className="pr-10">
                            {" "}
                            <div className="border border-[#EED116] bg-[#FCF9E1] rounded-lg py-1 px-5 flex items-start">
                              <span className="mr-2 text-[#B29C10]">
                                <AiOutlineClockCircle />
                              </span>
                              <span className="text-[#B29C10] text-[10px]">
                                Pending...
                              </span>
                            </div>
                          </div>

                          <div className=" bg-emdmsPrimary p-2 rounded-sm">
                            <MdDocumentScanner className="text-white" />
                          </div>
                        </div>
                        <div className="bg-white p-2 flex items-center space-x-4 rounded-md">
                          <div className="">
                            <BiSolidFolderMinus className="text-emdmsPrimary" />
                          </div>
                          <div className="text-xs pr-[20%]">Bank Statement</div>

                          <div className="text-xs pr-[10%]">Dec 13, 2022</div>
                          <div className="pr-10">
                            {" "}
                            <div className="border border-[#32A583] bg-[#CBE8E0] rounded-lg py-1 px-6  flex items-center">
                              <span className="mr-2 text-[#32A583]">
                                <BsCheckLg />
                              </span>
                              <span className="text-[#32A583] text-[10px]">
                                Verified
                              </span>
                            </div>
                          </div>

                          <div className=" bg-emdmsPrimary p-2 rounded-sm">
                            <MdDocumentScanner className="text-white" />
                          </div>
                        </div>
                        <div className="bg-white p-2 flex items-center space-x-4 rounded-md">
                          <div className="">
                            <BiSolidFolderMinus className="text-emdmsPrimary" />
                          </div>
                          <div className="text-xs pr-[20%]">Bank Statement</div>

                          <div className="text-xs pr-[10%]">Dec 13, 2022</div>
                          <div className="pr-10">
                            {" "}
                            <div className="border border-[#CC362F] bg-[#F8E5E5] rounded-lg py-1 px-5  flex items-center">
                              <span className="mr-2 text-[#CC362F]">
                                <AiOutlineClose />
                              </span>
                              <span className="text-[#CC362F] text-[10px]">
                                Rejected
                              </span>
                            </div>
                          </div>

                          <div className=" bg-emdmsPrimary p-2 rounded-sm">
                            <MdDocumentScanner className="text-white" />
                          </div>
                          <div className=" bg-[#F8E5E5] p-2 rounded-sm">
                            <MdOutlineStickyNote2 className="text-white font-extrabold" />
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="flex justify-between items-center bg-white rounded-md px-4 py-5 shadow-md">
                      <div className="flex space-x-6 justify-center">
                        <div className="flex flex-col item-start ml-8">
                          <div className="flex items-center  mb-2">
                            <h4 className=" text-[16px]">Bank Guarantee</h4>
                          </div>
                          <p className="text-[#A3A3A3] mb-2 lg:max-w-lg lg:text-[12px] hidden md:block">
                            A bank guarantee is typically issued as a physical
                            or digital document that outlines the terms and
                            conditions of the guarantee, including the amount of
                            money involved, the parties involved, and the
                            specific obligations that must be fulfilled.
                          </p>
                          <div className="flex items-center space-x-2">
                            <p className="text-gray-600 text-sm font-medium">
                              Maximum Document
                            </p>
                            <div className="bg-[#32A583] px-3 py-2 rounded-lg text-xs text-white">
                              3
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center space-x-2 bg-emdmsPrimary/70 text-white font-bold py-2 px-4 mr-10 rounded">
                        <AiOutlinePlus />
                        <button className="text-sm">Upload</button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center  bg-white rounded-md px-4 py-5  shadow-md">
                      <div className="flex space-x-3 justify-center">
                        <div className="flex flex-col item-start ml-8">
                          <div className="flex items-center mb-2">
                            <h4 className=" text-[16px]">Bank Statement</h4>
                          </div>
                          <p className="text-[#A3A3A3] mb-2 lg:max-w-lg lg:text-[12px] hidden md:block">
                            A bank statement is typically a digital or physical
                            document that provides a summary of the
                            transactions, balances, and activity in a bank
                            account over a specific period of time.
                          </p>
                          <div className="flex items-center space-x-2">
                            <p className="text-gray-600 text-sm font-medium">
                              Maximum Document
                            </p>
                            <div className="bg-[#32A583] px-3 py-2 rounded-lg text-xs text-white">
                              2
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center  space-x-2 bg-emdmsPrimary/70 text-white font-bold py-2 px-4 mr-10 rounded">
                        <AiOutlinePlus />
                        <button className="text-sm">Upload</button>
                      </div>
                    </div>
                  </div>
                  <div className=" flex justify-end space-x-3">
                    <button
                      onClick={() => {
                        setActiveTab("");
                      }}
                      className="bg-transparent hover:bg-[#008080] hover:text-white text-sm font-bold py-2 px-16 border border-[#008080] rounded">
                      Back
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab("business");
                      }}
                      className="bg-[#008080d4] hover:bg-[#008080]  text-white text-sm font-bold py-2 px-16 rounded">
                      Next
                    </button>
                  </div>
                </div>
              )}
              {/* Business Tab */}
              {activeTab === "business" && (
                <div className="h-full flex flex-col justify-between">
                  <div className="flex flex-col space-y-3 w-full h-[60vh] 2xl:h-[65vh] overflow-auto noscrollBar">
                    <div className="flex justify-between items-start bg-white rounded-md px-4 py-5 shadow-md">
                      <div className="flex space-x-3 justify-center">
                        <div className="flex flex-col item-start">
                          <div className="flex items-center mb-2">
                            <h4 className="text-xl font-bold text-[16px]">
                              Tax Clearance
                            </h4>
                          </div>
                          <p className="text-[#A3A3A3] mb-2 max-w-lg text-[12px]">
                            A bank statement is typically a digital or physical
                            document that provides a summary of the
                            transactions, balances, and activity in a bank
                            account over a specific period of time.
                          </p>
                          <div className="flex items-center space-x-2">
                            <p className="text-gray-600 text-sm font-medium">
                              Maximum Document
                            </p>
                            <div className="bg-red-400 px-3 py-2 rounded-lg text-xs text-white">
                              3
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center mt-10 space-x-2 bg-emdmsPrimary/70 text-white font-bold py-2 px-4 mr-10 rounded">
                        <AiOutlinePlus />
                        <button className="text-sm">Add Document</button>
                      </div>
                    </div>
                    <div className="flex justify-between items-start bg-white rounded-md px-4 py-5  shadow-md">
                      <div className="flex space-x-3 justify-center">
                        <div className="flex flex-col item-start">
                          <div className="flex items-center mb-2">
                            <h4 className="text-xl font-bold text-[16px]">
                              Bausiness Naming
                            </h4>
                          </div>
                          <p className="text-[#A3A3A3] mb-2 max-w-lg text-[12px]">
                            A bank guarantee is typically issued as a physical
                            or digital document that outlines the terms and
                            conditions of the guarantee, including the amount of
                            money involved, the parties involved, and the
                            specific obligations that must be fulfilled.
                          </p>
                          <div className="flex items-center space-x-2">
                            <p className="text-gray-600 text-sm font-medium">
                              Maximum Document
                            </p>
                            <div className="bg-[#32A583] px-3 py-2 rounded-lg text-xs text-white">
                              2
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center mt-10 space-x-2 bg-emdmsPrimary/70 text-white font-bold py-2 px-4 mr-10 rounded">
                        <AiOutlinePlus />
                        <button className="text-sm">Add Document</button>
                      </div>
                    </div>
                    <div className="flex justify-between items-start bg-white rounded-md px-4 py-5  shadow-md">
                      <div className="flex space-x-3 justify-center">
                        <div className="flex flex-col item-start">
                          <div className="flex items-center mb-2">
                            <h4 className="text-xl font-bold text-[16px]">
                              Commercial Registration
                            </h4>
                          </div>
                          <p className="text-[#A3A3A3] mb-2 max-w-lg text-[12px]">
                            A bank guarantee is typically issued as a physical
                            or digital document that outlines the terms and
                            conditions of the guarantee, including the amount of
                            money involved, the parties involved, and the
                            specific obligations that must be fulfilled.
                          </p>
                          <div className="flex items-center space-x-2">
                            <p className="text-gray-600 text-sm font-medium">
                              Maximum Document
                            </p>
                            <div className="bg-green-400 px-3 py-2 rounded-lg text-xs text-white">
                              2
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center mt-10 space-x-2 bg-emdmsPrimary/70 text-white font-bold py-2 px-4 mr-10 rounded">
                        <AiOutlinePlus />
                        <button className="text-sm">Add Document</button>
                      </div>
                    </div>
                    <div className="flex justify-between items-start bg-white rounded-md px-4 py-5  shadow-md">
                      <div className="flex space-x-3 justify-center">
                        <div className="flex flex-col item-start">
                          <div className="flex items-center mb-2">
                            <h4 className="text-xl font-bold text-[16px]">
                              Commercial Licence
                            </h4>
                          </div>
                          <p className="text-[#A3A3A3] mb-2 max-w-lg text-[12px]">
                            A bank guarantee is typically issued as a physical
                            or digital document that outlines the terms and
                            conditions of the guarantee, including the amount of
                            money involved, the parties involved, and the
                            specific obligations that must be fulfilled.
                          </p>
                          <div className="flex items-center space-x-2">
                            <p className="text-gray-600 text-sm font-medium">
                              Maximum Document
                            </p>
                            <div className="bg-[#32A583] px-3 py-2 rounded-lg text-xs text-white">
                              2
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center mt-10 space-x-2 bg-emdmsPrimary/70 text-white font-bold py-2 px-4 mr-10 rounded">
                        <AiOutlinePlus />
                        <button className="text-sm">Add Document</button>
                      </div>
                    </div>
                    <div className="flex justify-between items-start bg-white rounded-md px-4 py-5  shadow-md">
                      <div className="flex space-x-3 justify-center">
                        <div className="flex flex-col item-start">
                          <div className="flex items-center mb-2">
                            <h4 className="text-xl font-bold text-[16px]">
                              Article of PLC
                            </h4>
                          </div>
                          <p className="text-[#A3A3A3] mb-2 max-w-lg text-[12px]">
                            A bank guarantee is typically issued as a physical
                            or digital document that outlines the terms and
                            conditions of the guarantee, including the amount of
                            money involved, the parties involved, and the
                            specific obligations that must be fulfilled.
                          </p>
                          <div className="flex items-center space-x-2">
                            <p className="text-gray-600 text-sm font-medium">
                              Maximum Document
                            </p>
                            <div className="bg-[#32A583] px-3 py-2 rounded-lg text-xs text-white">
                              2
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center mt-10 space-x-2 bg-emdmsPrimary/70 text-white font-bold py-2 px-4 mr-10 rounded">
                        <AiOutlinePlus />
                        <button className="text-sm">Add Document</button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-3">
                    <button
                      onClick={() => {
                        setActiveTab("financial");
                      }}
                      className="bg-transparent hover:bg-[#008080] hover:text-white text-[#008080] text-sm font-bold py-2 px-16 border border-[#008080] rounded">
                      Back
                    </button>
                    <button
                      onClick={() => {
                        setActiveTab("rental");
                      }}
                      className="bg-[#008080d4] hover:bg-[#008080] text-white text-sm font-bold  py-2 px-16 rounded">
                      Next
                    </button>
                  </div>
                </div>
              )}
              {/* Rental Tab */}
              {activeTab === "rental" && (
                <div className="h-full flex flex-col justify-between">
                  <div className="flex flex-col space-y-3 w-full h-[60vh] 2xl:h-[65vh] overflow-auto noscrollBar">
                    <div className="flex justify-between items-start bg-white rounded-md px-4 py-5 shadow-md">
                      <div className="flex space-x-3 justify-center">
                        <div className="flex flex-col item-start">
                          <div className="flex items-center mb-2">
                            <h4 className="text-xl font-bold text-[16px]">
                              Rental Agreement
                            </h4>
                          </div>
                          <p className="text-[#A3A3A3] mb-2 max-w-lg text-[12px]">
                            A bank statement is typically a digital or physical
                            document that provides a summary of the
                            transactions, balances, and activity in a bank
                            account over a specific period of time.
                          </p>
                          <div className="flex items-center space-x-2">
                            <p className="text-gray-600 text-sm font-medium">
                              Maximum Document
                            </p>
                            <div className="bg-[#32A583] px-3 py-2 rounded-lg text-xs text-white">
                              3
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center mt-10 space-x-2 bg-emdmsPrimary/70 text-white font-bold py-2 px-4 mr-10 rounded">
                        <AiOutlinePlus />
                        <button className="text-sm">Add Document</button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-3">
                    <button
                      onClick={() => {
                        setActiveTab("financial");
                      }}
                      className="bg-transparent hover:bg-[#008080] hover:text-white text-[#008080] text-sm font-bold py-2 px-16 border border-[#008080] rounded">
                      Back
                    </button>
                    <button
                      onClick={openModal}
                      className="bg-[#008080d4] hover:bg-[#008080] text-white text-sm font-bold  py-2 px-16 rounded">
                      Submit
                    </button>
                    <Modal isOpen={isOpen} onClose={closeModal}>
                      <div className="text-2xl  text-center font-poppins text-N40 font-bold">
                        Confirmation
                      </div>
                      <div className="text-N40 text-center text-sm tracking-wider">
                        Are you sure you want to submit
                        <span className="font-bold"> this license</span>?
                      </div>
                      <div className="flex flex-col space-y-3 bg-[#FCF9E1] p-5 border-l-8 border-l-[#77680B] rounded-md">
                        <div className="flex space-x-2 items-center text-[#B29C10] font-bold text-lg">
                          <BsFillExclamationTriangleFill />
                          <div>Attention</div>
                        </div>
                        <div className="text-[#B29C10] tracking-wider text-xs max-w-lg">
                          The admins will not receive this license submission.
                          The final document will undergo review once the
                          foreign entity grants approval for the partner
                          request. Please ensure that you keep track of the
                          status.
                        </div>
                      </div>
                      <div className="flex space-x-6 items-center justify-end">
                        <button
                          onClick={closeModal}
                          className="bg-[#F0F7F7] py-2 px-8 text-N40 rounded-sm text-sm">
                          Cancel
                        </button>
                        <button
                          onClick={() => {
                            setPage("submit");
                          }}
                          className="bg-emdmsPrimary py-2 px-8 text-white rounded-sm text-sm">
                          Submit
                        </button>
                      </div>
                    </Modal>
                  </div>
                </div>
              )}
              {activeTab === "payment" && (
                <div className="h-full flex flex-col justify-between">
                  <div className="flex flex-col space-x-0  lg:flex-row lg:space-x-8 w-full h-[65vh] overflow-auto noscrollBar">
                    {paidState === false && (
                      <>
                        {" "}
                        <div className="flex flex-col items-center justify-start w-full lg:w-[50%] p-5 bg-white rounded-lg">
                          <h2>Payment Guide Pages</h2>
                          <div className="w-full h-full ">
                            <Slider {...settings}>
                              <div className="w-full h-[55vh]flex mt-10  items-center justify-center space-x-4">
                                <div className="w-full flex p-5 ">
                                  <img
                                    src={MobileMockupOne}
                                    alt=""
                                    className=" w-[270px]"
                                  />
                                  <div className=" flex flex-col space-y-2">
                                    <div className="text-xs text-[#005656] font-bold">
                                      First go to tele birr to make payment for
                                      the licence
                                    </div>{" "}
                                    <div className="text-xs flex items-start text-[#005656]">
                                      <div>
                                        <BsDot className="text-sm" />
                                      </div>
                                      Login to the app using your phone number
                                    </div>
                                    <div className="text-xs flex items-start text-[#005656]">
                                      <div>
                                        <BsDot className="text-sm" />
                                      </div>
                                      After logging into the app go to the
                                      payment section
                                    </div>{" "}
                                    <div className=" flex items-start  justify-center -ml-24 pt-10">
                                      <img
                                        src={FileFirstIcon}
                                        alt=""
                                        className="w-20"
                                      />
                                    </div>
                                    <div className="text-[#005656]">
                                      Payment
                                    </div>
                                    <div className="text-xs text-[#909090]">
                                      Payment is the process by which a buyer
                                      transfers funds to a seller or service
                                      provider in services.
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="w-full h-[55vh]flex mt-10  items-center justify-center space-x-4">
                                <div className="w-full flex p-5 ">
                                  <img
                                    src={MobileMockUpTwo}
                                    alt=""
                                    className=" w-[270px]"
                                  />
                                  <div className=" flex flex-col space-y-2">
                                    <div className="text-xs text-[#005656] font-bold">
                                      Select task and government service section{" "}
                                    </div>{" "}
                                    <div className="text-xs flex items-start text-[#005656]">
                                      <div>
                                        <BsDot className="text-sm" />
                                      </div>
                                      After selecting the section it will
                                      collapse and we will find the government
                                    </div>{" "}
                                    <div className=" flex items-start  justify-center pt-10">
                                      <img
                                        src={SlideTwo}
                                        alt=""
                                        className="w-40"
                                      />
                                    </div>
                                    <div className="text-[#005656]">
                                      Government
                                    </div>
                                    <div className="text-xs text-[#909090]">
                                      Select the government icon in order to get
                                      our payment service icon (Ethiopian Labor
                                      Market Information System).
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="w-full h-[55vh]flex mt-10  items-center justify-center space-x-4">
                                <div className="w-full flex p-5 ">
                                  <img
                                    src={MobileMockup3}
                                    alt=""
                                    className=" w-[270px]"
                                  />
                                  <div className=" flex flex-col space-y-2">
                                    <div className=" relative text-xs text-[#005656] font-bold">
                                      <div>
                                        <img src={LineOverlay} alt="" />
                                      </div>
                                      <div className="absolute bottom-3">
                                        After opening the the tax and government
                                        payment section{" "}
                                      </div>
                                    </div>{" "}
                                    <div className="text-xs flex items-start text-[#005656]">
                                      <div>
                                        <BsDot className="text-sm" />
                                      </div>
                                      Click on the Ethiopian Labor Market
                                      Information System (E-LMIS).
                                    </div>{" "}
                                    <div className=" flex items-start  justify-center  pt-10">
                                      <img
                                        src={SlideThree}
                                        alt=""
                                        className="w-40"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="w-full h-[55vh]flex mt-10  items-center justify-center space-x-4">
                                <div className="w-full flex p-5  ">
                                  <img
                                    src={MobileMockup4}
                                    alt=""
                                    className=" w-[290px]"
                                  />
                                  <div className=" flex flex-col space-y-2">
                                    <div className="text-xs text-[#005656] font-bold">
                                      Select task and government service section{" "}
                                    </div>{" "}
                                    <div className="text-xs flex items-start text-[#005656]">
                                      <div>
                                        <BsDot className="text-sm" />
                                      </div>
                                      After selecting the section it will
                                      collapse and we will find the government
                                    </div>{" "}
                                    <div className=" flex items-start  justify-center pt-20 -ml-20">
                                      <img
                                        src={SlideFour}
                                        alt=""
                                        className="w-40"
                                      />
                                    </div>
                                    <div className="text-[#005656] -ml-10">
                                      Payment Order Number
                                    </div>
                                    <div className="text-xs text-[#909090] -ml-10">
                                      Enter the payment number in order to make
                                      payment
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Slider>
                          </div>
                        </div>
                        <div className="flex flex-col items-center justify-start w-full lg:w-[50%] p-5 bg-white rounded-lg">
                          <h2 className="text-[#292929]">Payment Code</h2>
                          <div className="flex flex-col space-y-6 h-full items-center justify-center">
                            <div className="flex text-[#555555] items-center space-x-2">
                              <LuCopy />
                              <div>copy</div>
                            </div>
                            <div className="flex flex-col items-center space-y-6 justify-center">
                              <div className="text-[#005656] text-5xl tracking-[0.3em] font-bold">
                                546799
                              </div>
                              <div className="text-[#909090] text-xs text-center max-w-xs">
                                Here is the unique payment code required to make
                                a transaction using the Tele Birr application.
                                Please ensure that you keep this code
                                confidential and do not share it with anyone.
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    {paidState === true && (
                      <div className="md:relative flex items-center justify-start w-full  bg-white rounded-lg">
                        <div className="md:absolute md:bottom-0 md:-left-40">
                          <img
                            src={PaidHand}
                            alt=""
                            className="hidden md:block"
                          />
                        </div>
                        <div className="md:absolute md:right-24 space-y-4 flex flex-col items-start justify-center">
                          <img
                            src={CheckIcon}
                            alt=""
                            className="md:w-full w-30"
                          />
                          <div className="text-2xl text-emdmsPrimary">
                            We’ve received your payment{" "}
                          </div>
                          <div className="text-xs max-w-md">
                            Upon receiving your payment, we would like to assure
                            you that your transaction has been processed and
                            completed successfully. Our system has recorded the
                            details of your payment, including the amount, date,
                            and any associated information.
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex justify-end space-x-3">
                    <button
                      onClick={() => {
                        setActiveTab("financial");
                      }}
                      className="bg-transparent hover:bg-[#008080] hover:text-white text-[#008080] text-sm font-bold py-2 px-16 border border-[#008080] rounded">
                      Back
                    </button>
                    <button
                      onClick={openModal}
                      className="bg-[#008080d4] hover:bg-[#008080] text-white text-sm font-bold py-2 px-16 rounded">
                      Submit
                    </button>
                    <Modal isOpen={isOpen} onClose={closeModal}>
                      <div className="text-2xl text-center font-poppins text-N40 font-bold">
                        Confirmation
                      </div>
                      <div className="text-N40 text-center text-sm tracking-wider">
                        Are you sure you want to submit
                        <span className="font-bold"> this license</span>?
                      </div>
                      <div className="flex flex-col space-y-3 bg-[#FCF9E1] p-5 border-l-8 border-l-[#77680B] rounded-md">
                        <div className="flex space-x-2 items-center text-[#B29C10] font-bold text-lg">
                          <BsFillExclamationTriangleFill />
                          <div>Attention</div>
                        </div>
                        <div className="text-[#B29C10] tracking-wider text-xs max-w-lg">
                          The admins will not receive this license submission.
                          The final document will undergo review once the
                          foreign entity grants approval for the partner
                          request. Please ensure that you keep track of the
                          status.
                        </div>
                      </div>
                      <div className="flex space-x-6 items-center justify-end">
                        <button
                          onClick={closeModal}
                          className="bg-[#F0F7F7] py-2 px-8 text-N40 rounded-sm text-sm">
                          Cancel
                        </button>
                        <button
                          onClick={() => {
                            setPage("submit");
                          }}
                          className="bg-emdmsPrimary py-2 px-8 text-white rounded-sm text-sm">
                          Submit
                        </button>
                      </div>
                    </Modal>
                  </div>
                </div>
              )}
              {activeTab === "renewal" && (
                <div className="flex flex-col w-full items-start justify-start space-y-5  h-[65vh] overflow-auto noscrollBar ">
                  {requestRenewal === false && (
                    <div className=" flex flex-col space-y-2 w-full h-full">
                      <div className="flex justify-end items-center w-full">
                        <button
                          onClick={() => {
                            setRequestRenewal(true);
                          }}
                          className="border flex items-center justify-center space-x-3 border-emdmsPrimary  bg-white px-4 py-2 rounded-md text-emdmsPrimary ">
                          <IoMdAddCircle /> <span>Request Renewal</span>
                        </button>
                      </div>
                      <div className="flex bg-white rounded-md  items-center justify-around p-2">
                        <div className="text-[#555555] font-semibold">
                          2023 Renewal
                        </div>
                        <div className="text-xs">Dec 13, 2022</div>
                        <div className=" bg-[#CF51511A] w-36  text-[#CF5151] font-bold text-center rounded-md flex  space-x-2 px-8 py-3 text-xs ">
                          <IoClose />
                          <p> Rejected</p>
                        </div>
                        <div className="flex w-14 space-x-2 items-center">
                          {" "}
                          <div className="bg-emdmsPrimary p-1">
                            <TbScanEye className="text-white cursor-pointer" />
                          </div>{" "}
                          <div className="bg-[#CF51511A] p-1">
                            <CgNotes className="text-[#CF5151] cursor-pointer" />
                          </div>
                        </div>

                        <div className=" border border-[#EED116] cursor-pointer bg-[#FCF9E1]  text-[#B29C10] font-bold w-24 px-6  text-center rounded-md flex items-center justify-center py-2 text-xs ">
                          Open
                        </div>
                      </div>
                      <div className="flex bg-white rounded-md  items-center justify-around p-2">
                        <div className="text-[#555555] font-semibold">
                          2023 Renewal
                        </div>
                        <div className="text-xs">Dec 13, 2022</div>
                        <div className=" bg-[#71E17C1A] w-36  text-[#71E17C] font-bold text-center rounded-md flex  space-x-2 px-8 py-3 text-xs ">
                          <FaCheck /> <p> verified</p>
                        </div>
                        <div className="w-14 flex">
                          <div className="bg-emdmsPrimary p-1 ">
                            <TbScanEye className="text-white cursor-pointer" />
                          </div>
                        </div>

                        <div className=" border border-[#EED116] cursor-pointer bg-[#FCF9E1]  text-[#B29C10] font-bold w-24 px-6  text-center rounded-md flex items-center justify-center py-2 text-xs ">
                          Open
                        </div>
                      </div>
                      <div className="flex bg-white rounded-md  items-center justify-around p-2">
                        <div className="text-[#555555] font-semibold">
                          2023 Renewal
                        </div>
                        <div className="text-xs">Dec 13, 2022</div>
                        <div className="border border-[#EED116] bg-[#FCF9E1] w-36  text-[#B29C10] font-bold text-center rounded-md flex  space-x-2 px-8 py-3 text-xs ">
                          <FaCheck /> <p> Pending</p>
                        </div>
                        <div className="w-14 flex cursor-pointer">
                          <div className="bg-emdmsPrimary p-1 ">
                            <TbScanEye className="text-white cursor-pointer" />
                          </div>
                        </div>

                        <div className=" border border-[#EED116] cursor-pointer bg-[#FCF9E1]  text-[#B29C10] font-bold w-24 px-6  text-center rounded-md flex items-center justify-center py-2 text-xs ">
                          Open
                        </div>
                      </div>
                    </div>
                  )}
                  {requestRenewal === true && (
                    <>
                      <div className="bg-white h-[60vh] flex flex-col space-y-2 w-full rounded-md">
                        <div className="flex space-x-10  bg-white/50 rounded-lg text-xs overflow-x-auto">
                          <button
                            onClick={() => {
                              setRenewalActiveTab("renewalUpload");
                            }}
                            className={`px-8 py-2 font-medium ${
                              renewalActiveTab === "renewalUpload"
                                ? "text-emdmsPrimary border-b-8 bg-emdmsPrimary/10 border-emdmsPrimary font-bold"
                                : "text-[#292929]"
                            }`}>
                            Upload Documents
                          </button>
                          <button
                            onClick={() => {
                              setRenewalActiveTab("renewalPayment");
                            }}
                            className={`px-8 py-2 ${
                              renewalActiveTab === "renewalPayment"
                                ? "text-emdmsPrimary border-b-8 bg-emdmsPrimary/10 border-emdmsPrimary"
                                : "text-[#292929]"
                            }`}>
                            Payment
                          </button>
                        </div>
                        {renewalActiveTab === "renewalUpload" && (
                          <div>Upload</div>
                        )}
                        {renewalActiveTab === "renewalPayment" && (
                          <div className="p-5 h-[55vh]  flex flex-col ">
                            <div className="flex flex-col space-x-0  lg:flex-row lg:space-x-8 w-full  overflow-auto noscrollBar">
                              {paidState === false && (
                                <>
                                  {" "}
                                  <div className="flex flex-col  h-[55vh] overflow-hidden w-full lg:w-[50%] p-5 bg-emdmsPrimary/10 rounded-lg">
                                    <h2 className="text-center">
                                      Payment Guide Pages
                                    </h2>
                                    <div className=" ">
                                      <Slider {...settings}>
                                        <div className="w-full flex mt-5  items-center justify-center space-x-4">
                                          <div className="w-full flex p-5 ">
                                            <img
                                              src={MobileMockupOne}
                                              alt=""
                                              className=" w-[220px]"
                                            />
                                            <div className=" flex flex-col space-y-2">
                                              <div className="text-xs text-[#005656] font-bold">
                                                First go to tele birr to make
                                                payment for the licence
                                              </div>{" "}
                                              <div className="text-xs flex items-start text-[#005656]">
                                                <div>
                                                  <BsDot className="text-sm" />
                                                </div>
                                                Login to the app using your
                                                phone number
                                              </div>
                                              <div className="text-xs flex items-start text-[#005656]">
                                                <div>
                                                  <BsDot className="text-sm" />
                                                </div>
                                                After logging into the app go to
                                                the payment section
                                              </div>{" "}
                                              <div className=" flex items-start  justify-center -ml-24 pt-5">
                                                <img
                                                  src={FileFirstIcon}
                                                  alt=""
                                                  className="w-20"
                                                />
                                              </div>
                                              <div className="text-[#005656]">
                                                Payment
                                              </div>
                                              <div className="text-xs text-[#909090]">
                                                Payment is the process by which
                                                a buyer transfers funds to a
                                                seller or service provider in
                                                services.
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="w-full flex mt-5  items-center justify-center space-x-4">
                                          <div className="w-full flex p-5 ">
                                            <img
                                              src={MobileMockUpTwo}
                                              alt=""
                                              className=" w-[220px]"
                                            />
                                            <div className=" flex flex-col space-y-2">
                                              <div className="text-xs text-[#005656] font-bold">
                                                Select task and government
                                                service section{" "}
                                              </div>{" "}
                                              <div className="text-xs flex items-start text-[#005656]">
                                                <div>
                                                  <BsDot className="text-sm" />
                                                </div>
                                                After selecting the section it
                                                will collapse and we will find
                                                the government
                                              </div>{" "}
                                              <div className=" flex items-start  justify-center -ml-10">
                                                <img
                                                  src={SlideTwo}
                                                  alt=""
                                                  className="w-40"
                                                />
                                              </div>
                                              <div className="text-[#005656]">
                                                Government
                                              </div>
                                              <div className="text-xs text-[#909090]">
                                                Select the government icon in
                                                order to get our payment service
                                                icon (Ethiopian Labor Market
                                                Information System).
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="w-full h-[55vh]flex mt-10  items-center justify-center space-x-4">
                                          <div className="w-full flex p-5 ">
                                            <img
                                              src={MobileMockup3}
                                              alt=""
                                              className=" w-[220px]"
                                            />
                                            <div className=" flex flex-col space-y-2">
                                              <div className=" relative text-xs text-[#005656] font-bold">
                                                <div>
                                                  <img
                                                    src={LineOverlay}
                                                    alt=""
                                                  />
                                                </div>
                                                <div className="absolute bottom-3">
                                                  After opening the the tax and
                                                  government payment section{" "}
                                                </div>
                                              </div>{" "}
                                              <div className="text-xs flex items-start text-[#005656]">
                                                <div>
                                                  <BsDot className="text-sm" />
                                                </div>
                                                Click on the Ethiopian Labor
                                                Market Information System
                                                (E-LMIS).
                                              </div>{" "}
                                              <div className=" flex items-start  justify-center  pt-10">
                                                <img
                                                  src={SlideThree}
                                                  alt=""
                                                  className="w-40"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="w-full h-[55vh]flex mt-10  items-center justify-center space-x-4">
                                          <div className="w-full flex p-5  ">
                                            <img
                                              src={MobileMockup4}
                                              alt=""
                                              className=" w-[220px]"
                                            />
                                            <div className=" flex flex-col space-y-2">
                                              <div className="text-xs text-[#005656] font-bold">
                                                Select task and government
                                                service section{" "}
                                              </div>{" "}
                                              <div className="text-xs flex items-start text-[#005656]">
                                                <div>
                                                  <BsDot className="text-sm" />
                                                </div>
                                                After selecting the section it
                                                will collapse and we will find
                                                the government
                                              </div>{" "}
                                              <div className=" flex items-start  justify-center pt-10 -ml-10">
                                                <img
                                                  src={SlideFour}
                                                  alt=""
                                                  className="w-40"
                                                />
                                              </div>
                                              <div className="text-[#005656] ">
                                                Payment Order Number
                                              </div>
                                              <div className="text-xs text-[#909090] ">
                                                Enter the payment number in
                                                order to make payment
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </Slider>
                                    </div>
                                  </div>
                                  <div className="flex flex-col h-[55vh] items-center justify-start w-full lg:w-[50%] p-5 bg-emdmsPrimary/10 rounded-lg">
                                    <h2 className="text-[#292929]">
                                      Payment Code
                                    </h2>
                                    <div className="flex flex-col space-y-6 h-full items-center justify-center">
                                      <div className="flex text-[#555555] items-center space-x-2">
                                        <LuCopy />
                                        <div>copy</div>
                                      </div>
                                      <div className="flex flex-col items-center space-y-6 justify-center">
                                        <div className="text-[#005656] text-5xl tracking-[0.3em] font-bold">
                                          546799
                                        </div>
                                        <div className="text-[#909090] text-xs text-center max-w-xs">
                                          Here is the unique payment code
                                          required to make a transaction using
                                          the Tele Birr application. Please
                                          ensure that you keep this code
                                          confidential and do not share it with
                                          anyone.
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </>
                              )}
                              {paidState === true && (
                                <div className="md:relative flex items-center justify-start w-full  bg-white rounded-lg">
                                  <div className="md:absolute md:bottom-0 md:-left-40">
                                    <img
                                      src={PaidHand}
                                      alt=""
                                      className="hidden md:block"
                                    />
                                  </div>
                                  <div className="md:absolute md:right-24 space-y-4 flex flex-col items-start justify-center">
                                    <img
                                      src={CheckIcon}
                                      alt=""
                                      className="md:w-full w-30"
                                    />
                                    <div className="text-2xl text-emdmsPrimary">
                                      We’ve received your payment{" "}
                                    </div>
                                    <div className="text-xs max-w-md">
                                      Upon receiving your payment, we would like
                                      to assure you that your transaction has
                                      been processed and completed successfully.
                                      Our system has recorded the details of
                                      your payment, including the amount, date,
                                      and any associated information.
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="flex justify-end  w-full space-x-3">
                        <button
                          onClick={() => {
                            setActiveTab("financial");
                          }}
                          className="bg-transparent hover:bg-[#008080] hover:text-white text-[#008080] text-sm font-bold py-2 px-16 border border-[#008080] rounded">
                          Back
                        </button>
                        <button
                          onClick={openModal}
                          className="bg-[#008080d4] hover:bg-[#008080] text-white text-sm font-bold py-2 px-16 rounded">
                          Submit
                        </button>
                        <Modal isOpen={isOpen} onClose={closeModal}>
                          <div className="text-2xl text-center font-poppins text-N40 font-bold">
                            Confirmation
                          </div>
                          <div className="text-N40 text-center text-sm tracking-wider">
                            Are you sure you want to submit
                            <span className="font-bold"> this license</span>?
                          </div>
                          <div className="flex flex-col space-y-3 bg-[#FCF9E1] p-5 border-l-8 border-l-[#77680B] rounded-md">
                            <div className="flex space-x-2 items-center text-[#B29C10] font-bold text-lg">
                              <BsFillExclamationTriangleFill />
                              <div>Attention</div>
                            </div>
                            <div className="text-[#B29C10] tracking-wider text-xs max-w-lg">
                              The admins will not receive this license
                              submission. The final document will undergo review
                              once the foreign entity grants approval for the
                              partner request. Please ensure that you keep track
                              of the status.
                            </div>
                          </div>
                          <div className="flex space-x-6 items-center justify-end">
                            <button
                              onClick={closeModal}
                              className="bg-[#F0F7F7] py-2 px-8 text-N40 rounded-sm text-sm">
                              Cancel
                            </button>
                            <button
                              onClick={() => {
                                setPage("submit");
                              }}
                              className="bg-emdmsPrimary py-2 px-8 text-white rounded-sm text-sm">
                              Submit
                            </button>
                          </div>
                        </Modal>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
            {/* right side */}
            {activeTab === "" && (
              <>
                <div className="lg:w-[25%]  lg:h-[30%]  bg-[#005656] mt-14 p-10 rounded-lg text-white lg:flex md:flex-col space-y-2 hidden sm:block">
                  <div className="font-bold text-xl">Notice</div>
                  <ul className="list-disc text-xs text-white/50 pl-4 pb-5">
                    <li>
                      Make sure you have submitted all necessary information.
                    </li>
                    <li>
                      Make sure you have provided legit/legal residence
                      locations.
                    </li>
                    <li>
                      If you find any difficulties while you submit the
                      information, contact us with our email address.
                    </li>
                  </ul>
                  <label className="inline-flex items-center pb-5">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-500 rounded"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-2 text-sm text-white/50">
                      I agree to{" "}
                      <span className="text-white underline">
                        the terms and conditions
                      </span>
                    </span>
                  </label>
                </div>
              </>
            )}
            {/* Financial right side */}
            {activeTab === "financial" && (
              <div className="lg:flex lg:flex-col lg:w-[25%] lg:space-y-6 ">
                <div className=" bg-[#005656]   rounded-lg p-6  text-white flex flex-col space-y-2">
                  <div className="font-bold tracking-wider leading-[40px] font-poppins text-3xl max-w-4xl">
                    Licence Application
                  </div>

                  <div className="text-[#eceaf379] text-sm">
                    Started Date: Tuesday, June 27th 2023 Starting Time: 9:20:13
                    Am
                  </div>
                  <div className="text-[#ECEAF3] ">2/3 Documents</div>
                  <div className="flex items-center ">
                    <div className="p-4 w-full h-full">
                      <ProgressBar
                        completed={40}
                        height="10px"
                        customLabel
                        bgColor="#FFC369"
                      />
                    </div>
                    <div>20%</div>
                    <div></div>
                  </div>
                </div>
                {/* License status */}
                <div className=" bg-white rounded-lg p-6 text-white flex flex-col space-y-2 h-[45vh] 2xl:h-[60vh] overflow-y-auto noscrollBar  ">
                  <div className="text-[#464255] font-medium font-poppins text-xl">
                    {" "}
                    License Status
                  </div>
                  <div className="text-[#A3A3A3] text-sm pb-5">
                    After submitting licence these are application statuses{" "}
                  </div>
                  <div className="flex space-x-4">
                    <div>
                      <input
                        type="checkbox"
                        class="form-checkbox h-5 w-5 text-red-600 opacity-50 cursor-not-allowed"
                        disabled
                      />
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                      <div className="bg-[#D9D9D9] px-4 py-1 rounded-md">
                        {" "}
                        Screened{" "}
                      </div>
                      <div className="text-[#464255bc] text-xs">
                        December 28th, 06:19 AM
                      </div>
                      <div className="text-[#A3A3A3] text-xs leading-5">
                        “Screened status” Means that your application has gone
                        through an initial review process by the admin team.
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div>
                      <input
                        type="checkbox"
                        class="form-checkbox h-5 w-5 text-red-600 opacity-50 cursor-not-allowed"
                        disabled
                      />
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                      <div className="bg-[#D9D9D9] px-6 py-1 rounded-md">
                        {" "}
                        Verified{" "}
                      </div>
                      <div className="text-[#464255bc] text-xs">
                        December 28th, 06:19 AM
                      </div>
                      <div className="text-[#A3A3A3] text-xs leading-5">
                        “Screened status” Means that your application has gone
                        through an initial review process by the admin team.
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div>
                      <input
                        type="checkbox"
                        class="form-checkbox h-5 w-5 text-red-600 opacity-50 cursor-not-allowed"
                        disabled
                      />
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                      <div className="bg-[#D9D9D9] px-4 py-1 rounded-md">
                        {" "}
                        Inspected{" "}
                      </div>
                      <div className="text-[#464255bc] text-xs">
                        December 28th, 06:19 AM
                      </div>
                      <div className="text-[#A3A3A3] text-xs leading-5">
                        “Screened status” Means that your application has gone
                        through an initial review process by the admin team.
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div>
                      <input
                        type="checkbox"
                        class="form-checkbox h-5 w-5 text-red-600 opacity-50 cursor-not-allowed"
                        disabled
                      />
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                      <div className="bg-[#D9D9D9] px-4 py-1 rounded-md">
                        {" "}
                        Screened{" "}
                      </div>
                      <div className="text-[#464255bc] text-xs">
                        December 28th, 06:19 AM
                      </div>
                      <div className="text-[#A3A3A3] text-xs leading-5">
                        “Screened status” Means that your application has gone
                        through an initial review process by the admin team.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* business right side */}
            {activeTab === "business" && (
              <div className="flex flex-col w-[25%] space-y-6 ">
                <div className=" bg-[#005656]   rounded-lg p-6  text-white flex flex-col space-y-2">
                  <div className="font-bold tracking-wider leading-[40px] font-poppins text-3xl max-w-4xl">
                    Licence Application
                  </div>

                  <div className="text-[#eceaf379] text-sm">
                    Started Date: Tuesday, June 27th 2023 Starting Time: 9:20:13
                    Am
                  </div>
                  <div className="text-[#ECEAF3] ">2/3 Documents</div>
                  <div className="flex items-center ">
                    <div className="p-4 w-full h-full">
                      <ProgressBar
                        completed={80}
                        height="10px"
                        customLabel
                        bgColor="#FFC369"
                      />
                    </div>
                    <div>80%</div>
                    <div></div>
                  </div>
                </div>
                {/* License status */}
                <div className=" bg-white rounded-lg p-6 text-white flex flex-col space-y-2 h-[45vh] 2xl:h-[60vh] overflow-y-auto noscrollBar">
                  <div className="text-[#464255] font-medium font-poppins text-xl">
                    {" "}
                    License Status
                  </div>
                  <div className="text-[#A3A3A3] text-sm pb-5">
                    After submitting licence these are application statuses{" "}
                  </div>
                  <div className="flex space-x-4">
                    <div>
                      <input
                        type="checkbox"
                        class="form-checkbox h-5 w-5 text-red-600 opacity-50 cursor-not-allowed"
                        disabled
                      />
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                      <div className="bg-[#D9D9D9] px-4 py-1 rounded-md">
                        {" "}
                        Screened{" "}
                      </div>
                      <div className="text-[#464255bc] text-xs">
                        December 28th, 06:19 AM
                      </div>
                      <div className="text-[#A3A3A3] text-xs leading-5">
                        “Screened status” Means that your application has gone
                        through an initial review process by the admin team.
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div>
                      <input
                        type="checkbox"
                        class="form-checkbox h-5 w-5 text-red-600 opacity-50 cursor-not-allowed"
                        disabled
                      />
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                      <div className="bg-[#D9D9D9] px-6 py-1 rounded-md">
                        {" "}
                        Verified{" "}
                      </div>
                      <div className="text-[#464255bc] text-xs">
                        December 28th, 06:19 AM
                      </div>
                      <div className="text-[#A3A3A3] text-xs leading-5">
                        “Screened status” Means that your application has gone
                        through an initial review process by the admin team.
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div>
                      <input
                        type="checkbox"
                        class="form-checkbox h-5 w-5 text-red-600 opacity-50 cursor-not-allowed"
                        disabled
                      />
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                      <div className="bg-[#D9D9D9] px-4 py-1 rounded-md">
                        {" "}
                        Inspected{" "}
                      </div>
                      <div className="text-[#464255bc] text-xs">
                        December 28th, 06:19 AM
                      </div>
                      <div className="text-[#A3A3A3] text-xs leading-5">
                        “Screened status” Means that your application has gone
                        through an initial review process by the admin team.
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div>
                      <input
                        type="checkbox"
                        class="form-checkbox h-5 w-5 text-red-600 opacity-50 cursor-not-allowed"
                        disabled
                      />
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                      <div className="bg-[#D9D9D9] px-4 py-1 rounded-md">
                        {" "}
                        Screened{" "}
                      </div>
                      <div className="text-[#464255bc] text-xs">
                        December 28th, 06:19 AM
                      </div>
                      <div className="text-[#A3A3A3] text-xs leading-5">
                        “Screened status” Means that your application has gone
                        through an initial review process by the admin team.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {/* Rental right side */}
            {activeTab === "rental" && (
              <div className="flex flex-col w-[25%] space-y-6 ">
                <div className=" bg-[#005656]   rounded-lg p-6  text-white flex flex-col space-y-2">
                  <div className="font-bold tracking-wider leading-[40px] font-poppins text-3xl max-w-4xl">
                    Licence Application
                  </div>

                  <div className="text-[#eceaf379] text-sm">
                    Started Date: Tuesday, June 27th 2023 Starting Time: 9:20:13
                    Am
                  </div>
                  <div className="text-[#ECEAF3] ">2/3 Documents</div>
                  <div className="flex items-center ">
                    <div className="p-4 w-full h-full">
                      <ProgressBar
                        completed={97}
                        height="10px"
                        customLabel
                        bgColor="#FFC369"
                      />
                    </div>
                    <div>99%</div>
                    <div></div>
                  </div>
                </div>
                {/* License status */}
                <div className=" bg-white rounded-lg p-6 text-white flex flex-col space-y-2 h-[45vh] 2xl:h-[60vh] overflow-y-auto noscrollBar">
                  <div className="text-[#464255] font-medium font-poppins text-xl">
                    {" "}
                    License Status
                  </div>
                  <div className="text-[#A3A3A3] text-sm pb-5">
                    After submitting licence these are application statuses{" "}
                  </div>
                  <div className="flex space-x-4">
                    <div>
                      <input
                        type="checkbox"
                        class="form-checkbox h-5 w-5 text-red-600 opacity-50 cursor-not-allowed"
                        disabled
                      />
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                      <div className="bg-[#D9D9D9] px-4 py-1 rounded-md">
                        {" "}
                        Screened{" "}
                      </div>
                      <div className="text-[#464255bc] text-xs">
                        December 28th, 06:19 AM
                      </div>
                      <div className="text-[#A3A3A3] text-xs leading-5">
                        “Screened status” Means that your application has gone
                        through an initial review process by the admin team.
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div>
                      <input
                        type="checkbox"
                        class="form-checkbox h-5 w-5 text-red-600 opacity-50 cursor-not-allowed"
                        disabled
                      />
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                      <div className="bg-[#D9D9D9] px-6 py-1 rounded-md">
                        {" "}
                        Verified{" "}
                      </div>
                      <div className="text-[#464255bc] text-xs">
                        December 28th, 06:19 AM
                      </div>
                      <div className="text-[#A3A3A3] text-xs leading-5">
                        “Screened status” Means that your application has gone
                        through an initial review process by the admin team.
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div>
                      <input
                        type="checkbox"
                        class="form-checkbox h-5 w-5 text-red-600 opacity-50 cursor-not-allowed"
                        disabled
                      />
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                      <div className="bg-[#D9D9D9] px-4 py-1 rounded-md">
                        {" "}
                        Inspected{" "}
                      </div>
                      <div className="text-[#464255bc] text-xs">
                        December 28th, 06:19 AM
                      </div>
                      <div className="text-[#A3A3A3] text-xs leading-5">
                        “Screened status” Means that your application has gone
                        through an initial review process by the admin team.
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div>
                      <input
                        type="checkbox"
                        class="form-checkbox h-5 w-5 text-red-600 opacity-50 cursor-not-allowed"
                        disabled
                      />
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                      <div className="bg-[#D9D9D9] px-4 py-1 rounded-md">
                        {" "}
                        Screened{" "}
                      </div>
                      <div className="text-[#464255bc] text-xs">
                        December 28th, 06:19 AM
                      </div>
                      <div className="text-[#A3A3A3] text-xs leading-5">
                        “Screened status” Means that your application has gone
                        through an initial review process by the admin team.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "payment" && (
              <div className="lg:flex lg:flex-col lg:w-[25%] lg:space-y-6 ">
                <div className=" bg-[#005656]   rounded-lg p-6  text-white flex flex-col space-y-2">
                  <div className="font-bold tracking-wider leading-[40px] font-poppins text-3xl max-w-4xl">
                    Licence Application
                  </div>

                  <div className="text-[#eceaf379] text-sm">
                    Started Date: Tuesday, June 27th 2023 Starting Time: 9:20:13
                    Am
                  </div>
                  <div className="text-[#ECEAF3] ">2/3 Documents</div>
                  <div className="flex items-center ">
                    <div className="p-4 w-full h-full">
                      <ProgressBar
                        completed={40}
                        height="10px"
                        customLabel
                        bgColor="#FFC369"
                      />
                    </div>
                    <div>20%</div>
                    <div></div>
                  </div>
                </div>
                {/* License status */}
                <div className=" bg-white rounded-lg p-6 text-white flex flex-col space-y-2 h-[45vh] 2xl:h-[60vh] overflow-y-auto noscrollBar  ">
                  <div className="text-[#464255] font-medium font-poppins text-xl">
                    {" "}
                    License Status
                  </div>
                  <div className="text-[#A3A3A3] text-sm pb-5">
                    After submitting licence these are application statuses{" "}
                  </div>
                  <div className="flex space-x-4">
                    <div>
                      <input
                        type="checkbox"
                        class="form-checkbox h-5 w-5 text-red-600 opacity-50 cursor-not-allowed"
                        disabled
                      />
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                      <div className="bg-[#D9D9D9] px-4 py-1 rounded-md">
                        {" "}
                        Screened{" "}
                      </div>
                      <div className="text-[#464255bc] text-xs">
                        December 28th, 06:19 AM
                      </div>
                      <div className="text-[#A3A3A3] text-xs leading-5">
                        “Screened status” Means that your application has gone
                        through an initial review process by the admin team.
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div>
                      <input
                        type="checkbox"
                        class="form-checkbox h-5 w-5 text-red-600 opacity-50 cursor-not-allowed"
                        disabled
                      />
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                      <div className="bg-[#D9D9D9] px-6 py-1 rounded-md">
                        {" "}
                        Verified{" "}
                      </div>
                      <div className="text-[#464255bc] text-xs">
                        December 28th, 06:19 AM
                      </div>
                      <div className="text-[#A3A3A3] text-xs leading-5">
                        “Screened status” Means that your application has gone
                        through an initial review process by the admin team.
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div>
                      <input
                        type="checkbox"
                        class="form-checkbox h-5 w-5 text-red-600 opacity-50 cursor-not-allowed"
                        disabled
                      />
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                      <div className="bg-[#D9D9D9] px-4 py-1 rounded-md">
                        {" "}
                        Inspected{" "}
                      </div>
                      <div className="text-[#464255bc] text-xs">
                        December 28th, 06:19 AM
                      </div>
                      <div className="text-[#A3A3A3] text-xs leading-5">
                        “Screened status” Means that your application has gone
                        through an initial review process by the admin team.
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <div>
                      <input
                        type="checkbox"
                        class="form-checkbox h-5 w-5 text-red-600 opacity-50 cursor-not-allowed"
                        disabled
                      />
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                      <div className="bg-[#D9D9D9] px-4 py-1 rounded-md">
                        {" "}
                        Screened{" "}
                      </div>
                      <div className="text-[#464255bc] text-xs">
                        December 28th, 06:19 AM
                      </div>
                      <div className="text-[#A3A3A3] text-xs leading-5">
                        “Screened status” Means that your application has gone
                        through an initial review process by the admin team.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {activeTab === "renewal" && (
              <>
                <div className="lg:w-[25%]  lg:h-[30%]  bg-[#005656] mt-14 p-10 rounded-lg text-white lg:flex md:flex-col space-y-2 hidden sm:block">
                  <div className="font-bold text-xl">Notice</div>
                  <ul className="list-disc text-xs text-white/50 pl-4 pb-5">
                    <li>
                      Make sure you have submitted all necessary information.
                    </li>
                    <li>
                      Make sure you have provided legit/legal residence
                      locations.
                    </li>
                    <li>
                      If you find any difficulties while you submit the
                      information, contact us with our email address.
                    </li>
                  </ul>
                  <label className="inline-flex items-center pb-5">
                    <input
                      type="checkbox"
                      className="form-checkbox h-5 w-5 text-blue-500 rounded"
                      checked={isChecked}
                      onChange={handleCheckboxChange}
                    />
                    <span className="ml-2 text-sm text-white/50">
                      I agree to{" "}
                      <span className="text-white underline">
                        the terms and conditions
                      </span>
                    </span>
                  </label>
                </div>
              </>
            )}
          </>
        )}
        {page === "submit" && (
          <div className="w-full h-full overflow-y-auto">
            <SubmitPage />
          </div>
        )}
      </div>
    </div>
  );
};

export default PageTwo;
