import React, { useEffect, useState } from "react";
import Button from "../../../components/utilities/Button";
import Avatar from "../../../assets/images/Avatar.png";
import { FaAngleLeft } from "react-icons/fa6";
import Select from "react-select";
import {
  MdAddCircleOutline,
  MdFormatListBulleted,
  MdOutlineCancel,
} from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { SlCalender } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import PageTwoAddContract from "./PageTwoAddContract";
const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const AddContractPage = ({
  goback,
  mainPage,
  setMainPage,
  setStarterPage,
  setCurrentTab,
  cardArea,
  setCardArea,
}) => {
  const [isChecked, setIsChecked] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };
  const [page, setPage] = useState(1);
  const changePage = () => {
    setPage(page + 1);
  };

  const goToPreviousTab = () => {
    setPage(page - 1);
  };

  useEffect(() => {
    console.log(isChecked);
  }, [isChecked]);
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className=" flex items-center gap-2">
          <Button
            handelClick={() => {}}
            custom={"bg-emdmsPrimary px-2 py-2 rounded-sm"}>
            <FaAngleLeft
              onClick={() => goback("table")}
              className="text-white"
            />
          </Button>
          <div className="text-2xl text-emdmsPrimary font-poppins font-medium">
            Contact Information
          </div>
        </div>
        {page === 1 && (
          <>
            <div className="lg:flex gap-4">
              <div className="lg:flex lg:flex-col  lg:w-[70%] gap-4">
                <div className="bg-white   rounded-lg shadow-lg">
                  <div className="bg-[#005656] rounded-tl-lg  w-2/4 top-0 h-2"></div>
                  <div className="h-[68vh] overflow-y-auto noscrollBar">
                    <div className=" py-3 ">
                      {/* profile information */}
                      <div className="flex bg-[#F0F7F7]   lg:flex-col py-5 gap-2">
                        <div className="text-[#008080] font-poppins font-bold">
                          <p>Profile Information</p>
                        </div>
                        <div className="text-[#7F7F7F] text-xs">
                          <p>
                            Please Provide the neccassary Information for the
                            job order form
                            <span className="block">
                              and once completed submitted to the admin for
                              approval
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2  gap-3 px-10">
                        {" "}
                        <div className="  flex flex-col space-y-2 justify-between mt-8  ">
                          <div className="flex flex-col    ">
                            <div className="flex items-center gap-2">
                              <div className="flex flex-col ">
                                <div>
                                  <p className="text-gray-500 text-sm">
                                    Job Order ID{" "}
                                    <span className="text-red-500"> *</span>{" "}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <Select
                            className="text-emdmsPrimary w-full placeholder:text-N95  text-xs  focus:border-emdmsPrimary  rounded-lg "
                            options={options}
                            placeholder="Choose Business Type"
                          />
                        </div>
                        <div></div>
                        <div className="lg:flex justify-between mt-8">
                          <div className="lg:flex flex-col space-y-2">
                            <div>
                              <p className="text-emdmsPrimary font-medium">
                                Emergency Contact Person
                              </p>
                            </div>
                            <div>
                              <p className="text-[#949494] text-xs max-w-sm font-poppins">
                                Based on these configurations, you can modify
                                the compensation that your applicant will
                                receive and publicize your job.
                              </p>
                            </div>
                            <div className="py-4">
                              <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                  type="checkbox"
                                  value=""
                                  className="sr-only peer"
                                  checked={isChecked}
                                  onChange={handleToggle}
                                />
                                <div
                                  className={`w-11 h-5  rounded-sm ${
                                    isChecked
                                      ? "bg-emdmsPrimary"
                                      : "bg-[#B4B4B4]"
                                  }`}>
                                  <div
                                    className={`h-4  w-4 my-0.5  bg-[#F5F5F5] rounded-sm  shadow-2xl transition-transform ${
                                      isChecked
                                        ? "translate-x-full  mx-2"
                                        : "translate-x-0 mx-1"
                                    }`}></div>
                                </div>
                                <span className="ms-3 text-sm font-medium">
                                  Is the emergency contact person an LMIS user?
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                        <div></div>
                        {isChecked && (
                          <>
                            <div>
                              <div className="  flex flex-col space-y-2 justify-between mt-8  ">
                                <div className="flex flex-col    ">
                                  <div className="flex items-center gap-2">
                                    <div className="flex flex-col ">
                                      <div>
                                        <p className="text-gray-500 text-sm">
                                          Search by labor id{" "}
                                          <span className="text-red-500">
                                            {" "}
                                            *
                                          </span>{" "}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  onClick={() => {
                                    setCardArea(true);
                                  }}
                                  class="relative w-full  ">
                                  <div class="absolute inset-y-0 right-2 flex text-[#212121] items-center pl-3 pointer-events-none">
                                    <CiSearch />
                                  </div>

                                  <input
                                    type="search"
                                    id="default-search"
                                    class="block w-full p-2 pl-10 pr-10 text-sm placeholder:text-gray placeholder:text-xs border border-[#81818133] rounded-md "
                                    placeholder="Search labor id"
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                            <div></div>
                            {cardArea === true && (
                              <div className="bg-[#F0F7F7] col-span-2 flex justify-between rounded-md shadow-md h-[230px] w-[60%]  text-xs text-[#313a4e97] ">
                                <div className="bg-[#008080] w-[50%] rounded-l-md flex items-center justify-center">
                                  <div className="flex flex-col items-center justify-center">
                                    <div className="w-32 h-32 bg-white ">
                                      <img
                                        src={Avatar}
                                        alt="Avatar"
                                        className="w-32 h-32"
                                      />
                                    </div>

                                    <div className="text-white text-lg">
                                      Petros Temsgen Alemu
                                    </div>
                                  </div>
                                </div>
                                <div className="flex flex-col space-y-2 pl-5  w-[50%] ">
                                  <div
                                    onClick={() => {
                                      setCardArea(false);
                                    }}
                                    className="flex justify-end pr-5 pt-2 ">
                                    <MdOutlineCancel className="text-xl text-red-400" />
                                  </div>
                                  <div>Labor ID</div>
                                  <div className="text-[#008080] text-lg">
                                    S23-344-12232-ED12
                                  </div>
                                  <div className="text-black">
                                    Age:{" "}
                                    <span className="text-[#3A3541AD]">26</span>{" "}
                                  </div>
                                  <div className="text-black">
                                    Gender:{" "}
                                    <span className="text-[#3A3541AD]">
                                      Female
                                    </span>{" "}
                                  </div>
                                  <div className="text-black">
                                    Martial Status:{" "}
                                    <span className="text-[#3A3541AD]">
                                      Single
                                    </span>{" "}
                                  </div>
                                  <div className="text-black">
                                    Region:{" "}
                                    <span className="text-[#3A3541AD]">
                                      Amhara
                                    </span>{" "}
                                  </div>
                                  <div className="text-black">
                                    Phone Number:{" "}
                                    <span className="text-[#3A3541AD]">
                                      +251 90 80 70
                                    </span>{" "}
                                  </div>
                                </div>
                              </div>
                            )}
                          </>
                        )}
                        {!isChecked && (
                          <>
                            <div className=" flex flex-col space-y-2 justify-between mt-8  ">
                              <div className="flex flex-col    ">
                                <div className="flex items-center gap-2">
                                  <div className="flex flex-col ">
                                    <div>
                                      <p className="text-gray-500 text-sm">
                                        Emergency Contact Name{" "}
                                        <span className="text-red-500"> *</span>{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <input
                                type="text"
                                id="first_name"
                                class="mx-auto mt-4 text-emdmsPrimary w-full placeholder:text-N95  text-xs border p-2.5 rounded-md"
                                placeholder="John"
                                required
                              />
                            </div>
                            <div className=" flex flex-col space-y-2 justify-between mt-8  ">
                              <div className="flex flex-col    ">
                                <div className="flex items-center gap-2">
                                  <div className="flex flex-col ">
                                    <div>
                                      <p className="text-gray-500 text-sm">
                                        Date of Birth
                                        <span className="text-red-500">
                                          {" "}
                                          *
                                        </span>{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="relative mx-auto mt-4 text-emdmsPrimary w-full placeholder:text-N95  text-xs border  p-2.5 rounded-md ">
                                <DatePicker
                                  selected={startDate}
                                  onChange={(date) => setStartDate(date)}
                                />
                                <div className="absolute right-4 top-2.5">
                                  <SlCalender />
                                </div>
                              </div>
                            </div>
                            <div className="  flex flex-col space-y-2 justify-between mt-8  ">
                              <div className="flex flex-col    ">
                                <div className="flex items-center gap-2">
                                  <div className="flex flex-col ">
                                    <div>
                                      <p className="text-gray-500 text-sm">
                                        Region{" "}
                                        <span className="text-red-500"> *</span>{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <Select
                                className="text-emdmsPrimary w-full placeholder:text-N95/50  text-xs  focus:  rounded-lg "
                                options={options}
                                placeholder="select region"
                              />
                            </div>
                            <div className=" flex flex-col space-y-2 justify-between mt-8  ">
                              <div className="flex flex-col    ">
                                <div className="flex items-center gap-2">
                                  <div className="flex flex-col ">
                                    <div>
                                      <p className="text-gray-500 text-sm">
                                        City
                                        <span className="text-red-500">
                                          {" "}
                                          *
                                        </span>{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <input
                                type="text"
                                id="first_name"
                                class="mx-auto mt-4 text-emdmsPrimary w-full placeholder:text-N95  text-xs border p-2.5 rounded-md"
                                placeholder="type city address"
                                required
                              />
                            </div>
                            <div className="  flex flex-col space-y-2 justify-between mt-8  ">
                              <div className="flex flex-col    ">
                                <div className="flex items-center gap-2">
                                  <div className="flex flex-col ">
                                    <div>
                                      <p className="text-gray-500 text-sm">
                                        Subcity{" "}
                                        <span className="text-red-500"> *</span>{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <Select
                                className="text-emdmsPrimary w-full placeholder:text-N95/50  text-xs  focus:  rounded-lg "
                                options={options}
                                placeholder="select subcity"
                              />
                            </div>
                            <div className=" flex flex-col space-y-2 justify-between mt-8  ">
                              <div className="flex flex-col    ">
                                <div className="flex items-center gap-2">
                                  <div className="flex flex-col ">
                                    <div>
                                      <p className="text-gray-500 text-sm">
                                        Woreda
                                        <span className="text-red-500">
                                          {" "}
                                          *
                                        </span>{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <input
                                type="text"
                                id="first_name"
                                class="mx-auto mt-4 text-emdmsPrimary w-full placeholder:text-N95  text-xs border p-2.5 rounded-md"
                                placeholder="type woreda"
                                required
                              />
                            </div>
                            <div className=" flex flex-col space-y-2 justify-between mt-8  ">
                              <div className="flex flex-col    ">
                                <div className="flex items-center gap-2">
                                  <div className="flex flex-col ">
                                    <div>
                                      <p className="text-gray-500 text-sm">
                                        Pobox
                                        <span className="text-red-500">
                                          {" "}
                                          *
                                        </span>{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <input
                                type="text"
                                id="first_name"
                                class="mx-auto mt-4 text-emdmsPrimary w-full placeholder:text-N95  text-xs border p-2.5 rounded-md"
                                placeholder="type woreda"
                                required
                              />
                            </div>
                            <div className=" flex flex-col space-y-2 justify-between mt-8  ">
                              <div className="flex flex-col    ">
                                <div className="flex items-center gap-2">
                                  <div className="flex flex-col ">
                                    <div>
                                      <p className="text-gray-500 text-sm">
                                        Email
                                        <span className="text-red-500">
                                          {" "}
                                          *
                                        </span>{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <input
                                type="text"
                                id="first_name"
                                class="mx-auto mt-4 text-emdmsPrimary w-full placeholder:text-N95  text-xs border p-2.5 rounded-md"
                                placeholder="type email"
                                required
                              />
                            </div>
                            <div className=" flex flex-col space-y-2 justify-between mt-8  ">
                              <div className="flex flex-col    ">
                                <div className="flex items-center gap-2">
                                  <div className="flex flex-col ">
                                    <div>
                                      <p className="text-gray-500 text-sm">
                                        House Number
                                        <span className="text-red-500">
                                          {" "}
                                          *
                                        </span>{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <input
                                type="text"
                                id="first_name"
                                class="mx-auto mt-4 text-emdmsPrimary w-full placeholder:text-N95  text-xs border p-2.5 rounded-md"
                                placeholder="type house number"
                                required
                              />
                            </div>
                            <div className=" flex flex-col space-y-2 justify-between mt-8  ">
                              <div className="flex flex-col    ">
                                <div className="flex items-center gap-2">
                                  <div className="flex flex-col ">
                                    <div>
                                      <p className="text-gray-500 text-sm">
                                        Telephone
                                        <span className="text-red-500">
                                          {" "}
                                          *
                                        </span>{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <input
                                type="text"
                                id="first_name"
                                class="mx-auto mt-4 text-emdmsPrimary w-full placeholder:text-N95  text-xs border p-2.5 rounded-md"
                                placeholder="type telephone"
                                required
                              />
                            </div>
                            <div className="  flex flex-col space-y-2 justify-between mt-8  ">
                              <div className="flex flex-col    ">
                                <div className="flex items-center gap-2">
                                  <div className="flex flex-col ">
                                    <div>
                                      <p className="text-gray-500 text-sm">
                                        Gender{" "}
                                        <span className="text-red-500"> *</span>{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <Select
                                className="text-emdmsPrimary w-full placeholder:text-N95/50  text-xs  focus:  rounded-lg "
                                options={options}
                                placeholder="select Gender"
                              />
                            </div>
                            <div className=" flex flex-col space-y-2 justify-between mt-8  ">
                              <div className="flex flex-col    ">
                                <div className="flex items-center gap-2">
                                  <div className="flex flex-col ">
                                    <div>
                                      <p className="text-gray-500 text-sm">
                                        Fax number
                                        <span className="text-red-500">
                                          {" "}
                                          *
                                        </span>{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <input
                                type="text"
                                id="first_name"
                                class="mx-auto mt-4 text-emdmsPrimary w-full placeholder:text-N95  text-xs border p-2.5 rounded-md"
                                placeholder="type telephone"
                                required
                              />
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                    {!isChecked && (
                      <>
                        <div className=" py-3 ">
                          {/* additional information */}
                          <div className="flex bg-[#F0F7F7]   lg:flex-col py-5 gap-2">
                            <div className="text-[#008080] font-poppins font-bold">
                              <p>Additional Information</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-2  gap-3 px-10 py-4">
                            {" "}
                            <div className=" flex flex-col space-y-2 justify-between mt-8  ">
                              <div className="flex flex-col    ">
                                <div className="flex items-center gap-2">
                                  <div className="flex flex-col ">
                                    <div>
                                      <p className="text-gray-500 text-sm">
                                        Begining of Contract date
                                        <span className="text-red-500">
                                          {" "}
                                          *
                                        </span>{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="relative mx-auto mt-4 text-emdmsPrimary w-full placeholder:text-N95  text-xs border  p-2.5 rounded-md ">
                                <DatePicker
                                  selected={startDate}
                                  onChange={(date) => setStartDate(date)}
                                />
                                <div className="absolute right-4 top-2.5">
                                  <SlCalender />
                                </div>
                              </div>
                            </div>
                            <div className=" flex flex-col space-y-2 justify-between mt-8  ">
                              <div className="flex flex-col    ">
                                <div className="flex items-center gap-2">
                                  <div className="flex flex-col ">
                                    <div>
                                      <p className="text-gray-500 text-sm">
                                        End of Contract date
                                        <span className="text-red-500">
                                          {" "}
                                          *
                                        </span>{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="relative mx-auto mt-4 text-emdmsPrimary w-full placeholder:text-N95  text-xs border  p-2.5 rounded-md ">
                                <DatePicker
                                  selected={startDate}
                                  onChange={(date) => setStartDate(date)}
                                />
                                <div className="absolute right-4 top-2.5">
                                  <SlCalender />
                                </div>
                              </div>
                            </div>
                            <div className=" flex flex-col space-y-2 justify-between mt-8  ">
                              <div className="flex flex-col    ">
                                <div className="flex items-center gap-2">
                                  <div className="flex flex-col ">
                                    <div>
                                      <p className="text-gray-500 text-sm">
                                        Passport Number
                                        <span className="text-red-500">
                                          {" "}
                                          *
                                        </span>{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <input
                                type="text"
                                id="first_name"
                                class="mx-auto mt-4 text-emdmsPrimary w-full placeholder:text-N95  text-xs border p-2.5 rounded-md"
                                placeholder="type city address"
                                required
                              />
                            </div>
                            <div className=" flex flex-col space-y-2 justify-between mt-8  ">
                              <div className="flex flex-col    ">
                                <div className="flex items-center gap-2">
                                  <div className="flex flex-col ">
                                    <div>
                                      <p className="text-gray-500 text-sm">
                                        Visa Number
                                        <span className="text-red-500">
                                          {" "}
                                          *
                                        </span>{" "}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <input
                                type="text"
                                id="first_name"
                                class="mx-auto mt-4 text-emdmsPrimary w-full placeholder:text-N95  text-xs border p-2.5 rounded-md"
                                placeholder="type woreda"
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="lg:flex justify-end sm:text-center">
                  <Button
                    handelClick={changePage}
                    custom="bg-[#005656] text-white px-4 py-2 rounded-md w-max py-2 px-8">
                    Next
                  </Button>
                </div>
              </div>

              {/* right side card */}
              <div className="lg:w-[30%] space-y-4 flex flex-col h-[68vh] overflow-y-auto  ">
                <div className=" p-6 flex flex-col gap-4 items-start bg-white  border-4  border-white  rounded-xl">
                  {" "}
                  <div className="bg-[#008080] p-1 rounded-l-md flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-32 h-32 bg-white ">
                        <img src={Avatar} alt="Avatar" className="w-32 h-32" />
                      </div>
                    </div>
                  </div>
                  <div className="font-bold text-lg">Labor Information </div>
                  <div className="border border-[#D9D9D9] w-full"></div>
                  <div className=" px-6 flex flex-col gap-3">
                    <div className="flex flex-col ">
                      <div className="text-emdmsPrimary text-lg">Full Name</div>
                      <div className="text-[14px]">Belaynesh Demeke Demse</div>
                    </div>
                    <div className="flex flex-col ">
                      <div className="text-emdmsPrimary text-lg">Gender</div>
                      <div className="text-[14px]">Female</div>
                    </div>
                    <div className="flex flex-col ">
                      <div className="text-emdmsPrimary text-lg">
                        Martial Status
                      </div>
                      <div className="text-[14px]">Single</div>
                    </div>{" "}
                    <div className="flex flex-col ">
                      <div className="text-emdmsPrimary text-lg">Region</div>
                      <div className="text-[14px]">Amhara</div>
                    </div>
                    <div className="flex flex-col ">
                      <div className="text-emdmsPrimary text-lg">
                        Phone Number
                      </div>
                      <div className="text-[14px]">+251 789 928 879</div>
                    </div>
                  </div>
                </div>
                <div className=" p-6 flex flex-col gap-4 items-start bg-white  border-4  border-white  rounded-xl">
                  {" "}
                  <div className="font-bold text-lg">
                    Emergency Contact Information{" "}
                  </div>
                  <div className="border border-[#D9D9D9] w-full"></div>
                  <div className=" px-6 flex flex-col gap-3">
                    <div className="flex flex-col ">
                      <div className="text-emdmsPrimary text-lg">Full Name</div>
                      <div className="text-[14px]">Belaynesh Demeke Demse</div>
                    </div>
                    <div className="flex flex-col ">
                      <div className="text-emdmsPrimary text-lg">Gender</div>
                      <div className="text-[14px]">Female</div>
                    </div>
                    <div className="flex flex-col ">
                      <div className="text-emdmsPrimary text-lg">
                        Martial Status
                      </div>
                      <div className="text-[14px]">Single</div>
                    </div>{" "}
                    <div className="flex flex-col ">
                      <div className="text-emdmsPrimary text-lg">Region</div>
                      <div className="text-[14px]">Amhara</div>
                    </div>
                    <div className="flex flex-col ">
                      <div className="text-emdmsPrimary text-lg">
                        Phone Number
                      </div>
                      <div className="text-[14px]">+251 789 928 879</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* end of right side card */}
            </div>
          </>
        )}

        {page === 2 && (
          <>
            <PageTwoAddContract
              setPage={setPage}
              goToPreviousTab={goToPreviousTab}
              changePage={changePage}
              mainPage={mainPage}
              setMainPage={setMainPage}
              setStarterPage={setStarterPage}
              setCurrentTab={setCurrentTab}
            />
          </>
        )}
      </div>
    </>
  );
};

export default AddContractPage;
