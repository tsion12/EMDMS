import React, { useState } from "react";
import { CiFilter, CiSearch } from "react-icons/ci";
import { FiPlus } from "react-icons/fi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { MdCancel, MdSecurityUpdateGood } from "react-icons/md";
import { GrStatusUnknown } from "react-icons/gr";
import { TbArrowRampRight, TbDeviceImacSearch } from "react-icons/tb";
import { TbArrowsExchange } from "react-icons/tb";

import Select from "react-select";
const Inspection = () => {
  const [sideModalOpen, setSideModalOpen] = useState(false);
  const openSideModal = () => {
    setSideModalOpen(true);
  };

  const closeSideModal = () => {
    setSideModalOpen(false);
  };
  function handleTheme(theme) {
    return {
      ...theme,
      borderRadius: "5px",
      colors: {
        ...theme.colors,
        primary25: "#f0f7f7",
        primary: "#005656",
        neutral50: "#005656",
        neutral80: "#005656",
      },
    };
  }
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="w-full flex flex-col gap-10 mt-10 p-10">
      {sideModalOpen && (
        <div className="fixed inset-0 flex items-center justify-end z-50 transition-all duration-200 ease-in-out bg-black/50">
          <div className="fixed inset-y-0 right-0 w-2/5 bg-white rounded-md shadow-lg px-8 py-4">
            <div className="flex flex-col space-y-6 items-start">
              <div className=" flex space-x-2 items-center mt-5 mb-10">
                <MdCancel
                  onClick={() => {
                    setSideModalOpen(false);
                  }}
                  className="text-3xl text-emdmsPrimary"
                />
              </div>

              <div className="w-full flex flex-col space-y-8  h-[85vh]">
                <div className="w-full">
                  <label
                    htmlFor="fitnessInput"
                    className="flex flex-col space-y-4">
                    <div className="font-bold">Woreda</div>
                    <div className="w-full ">
                      <Select
                        styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,

                            borderColor: state.isFocused
                              ? "N99"
                              : "emdmsPrimary",
                          }),
                        }}
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        theme={(theme) => handleTheme(theme)}
                        className="text-emdmsPrimary ml-1 placeholder:text-xs text-xs focus:outline-0 ring-0 border-emdmsPrimary/40  focus:border-emdmsPrimary focus:ring-emdmsPrimary  focus:ring-emdmsPrimary/40 focus:outline-new/40 w-full rounded-md"
                      />
                    </div>
                  </label>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="fitnessInput"
                    className="flex flex-col space-y-4">
                    <div className="font-bold">District</div>
                    <div className="w-full ">
                      <Select
                        styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,

                            borderColor: state.isFocused
                              ? "N99"
                              : "emdmsPrimary",
                          }),
                        }}
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        theme={(theme) => handleTheme(theme)}
                        className="text-emdmsPrimary ml-1 placeholder:text-xs text-xs focus:outline-0 ring-0 border-emdmsPrimary/40  focus:border-emdmsPrimary focus:ring-emdmsPrimary  focus:ring-emdmsPrimary/40 focus:outline-new/40 w-full rounded-md"
                      />
                    </div>
                  </label>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="fitnessInput"
                    className="flex flex-col space-y-4">
                    <div className="font-bold">Street Address</div>
                    <div className="w-full ">
                      <Select
                        styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,

                            borderColor: state.isFocused
                              ? "N99"
                              : "emdmsPrimary",
                          }),
                        }}
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        theme={(theme) => handleTheme(theme)}
                        className="text-emdmsPrimary ml-1 placeholder:text-xs text-xs focus:outline-0 ring-0 border-emdmsPrimary/40  focus:border-emdmsPrimary focus:ring-emdmsPrimary  focus:ring-emdmsPrimary/40 focus:outline-new/40 w-full rounded-md"
                      />
                    </div>
                  </label>
                </div>
                <div className="w-full">
                  <label
                    htmlFor="fitnessInput"
                    className="flex flex-col space-y-4">
                    <div className="font-bold">House Number</div>
                    <div className="w-full ">
                      <Select
                        styles={{
                          control: (baseStyles, state) => ({
                            ...baseStyles,

                            borderColor: state.isFocused
                              ? "N99"
                              : "emdmsPrimary",
                          }),
                        }}
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        theme={(theme) => handleTheme(theme)}
                        className="text-emdmsPrimary ml-1 placeholder:text-xs text-xs focus:outline-0 ring-0 border-emdmsPrimary/40  focus:border-emdmsPrimary focus:ring-emdmsPrimary  focus:ring-emdmsPrimary/40 focus:outline-new/40 w-full rounded-md"
                      />
                    </div>
                  </label>
                </div>
                <div className="space-y-8">
                  <label
                    htmlFor="remarkInput"
                    className=" flex flex-col space-y-2">
                    <div>Remark</div>
                    <div className="w-full">
                      <textarea
                        id="remarkInput"
                        className="w-full  bg-[#F0F7F7] rounded-md placeholder:text-xs text-xs focus:outline-0 ring-0 border-emdmsPrimary/40    focus:outline-new/40 h-40 p-2 "
                        placeholder="Remark"
                      />
                    </div>
                  </label>
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <button className="text-emdmsPrimary w-40 bg-[#F0F7F7] px-4 py-2 rounded-md ">
                    cancel
                  </button>
                  <button className="text-white w-40 flex items-center justify-center space-x-2 bg-emdmsPrimary px-4 py-2 rounded-md">
                    <TbArrowsExchange />
                    <span>submit</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="flex justify-between  w-full items-center">
        <div>
          <p className="text-2xl font-semibold text-emdmsPrimary">Inspection</p>
          <p className="text-xs text-N70 max-w-sm">
            Beneath this card, you will discover a compilation of assessments
            conducted by administrators to scrutinize the agency.
          </p>
        </div>
        <div className="flex space-x-3 w-[50%] items-center justify-center">
          <div class="relative w-full ">
            <div class="absolute inset-y-0 left-0 flex text-[#212121] items-center pl-3 pointer-events-none">
              <CiSearch />
            </div>

            <input
              type="search"
              id="default-search"
              class="block w-full p-2 pl-10 pr-10 text-sm placeholder:text-[#212121] border border-[#81818133] rounded-md bg-transparent"
              placeholder="Search"
              required
            />

            <div class="absolute inset-y-0 right-0  w-24 flex space-x-1  border rounded-l-none border-[#81818133] rounded-md items-center pr-3  pointer-events-none">
              <div className="pl-2">
                <CiFilter className="text-[#212121]" />
              </div>
              <div className="text-sm">Filters</div>
            </div>
          </div>
          <div className="flex w-[35%] space-x-2 text-white bg-emdmsPrimary  font-medium rounded-lg text-sm px-5 py-2">
            <div>
              <FiPlus className="text-2xl" />
            </div>
            <div
              onClick={() => {
                setSideModalOpen(true);
              }}>
              <button type="button" className="cursor-pointer">
                Request License
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[70vh] overflow-y-auto">
        <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-8 text-sm w-full">
          {/* inspection approved */}
          <div className="bg-white rounded-md flex flex-col gap-8  p-10 ">
            <div className="flex items-center justify-start space-x-2">
              <HiBuildingOffice2 className="text-5xl text-emdmsPrimary" />{" "}
              <div className="flex flex-col text-sm">
                <h1 className=" text-xl font-bold">Inspection 1</h1>
                <p>All Job orders</p>
              </div>
            </div>
            <div className="flex mx-10 flex-col space-y-2 items-start justify-center ">
              <div className="flex items-center space-x-2">
                {" "}
                <div>
                  <MdSecurityUpdateGood />
                </div>
                <div className="text-[#000000B2]">
                  Created Date:{" "}
                  <span className="text-emdmsPrimary font-bold">
                    Jan 22/2022
                  </span>{" "}
                </div>
              </div>{" "}
              <div className="flex items-center space-x-2">
                {" "}
                <div>
                  <GrStatusUnknown />
                </div>
                <div className="text-[#000000B2]">
                  Status of Inspection:
                  <span className="text-[#32A583] font-bold">
                    Approved
                  </span>{" "}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {" "}
                <div>
                  <TbArrowRampRight />
                </div>
                <div className="text-[#000000B2]">
                  Type of Inspection:
                  <span className="text-emdmsPrimary font-bold">
                    Office Change
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className="border border-emdmsPrimary/50  mx-10 text-sm text-emdmsPrimary  rounded-md py-2 text-center">
              View Details
            </div>
          </div>
          {/* inspection rejected */}
          <div className="bg-white rounded-md flex flex-col gap-8  p-10 ">
            <div className="flex items-center justify-start space-x-2">
              <HiBuildingOffice2 className="text-5xl text-emdmsPrimary" />{" "}
              <div className="flex flex-col text-sm">
                <h1 className=" text-xl font-bold">Inspection 1</h1>
                <p>All Job orders</p>
              </div>
            </div>
            <div className="flex mx-10 flex-col space-y-2 items-start justify-center ">
              <div className="flex items-center space-x-2">
                {" "}
                <div>
                  <MdSecurityUpdateGood />
                </div>
                <div className="text-[#000000B2]">
                  Created Date:{" "}
                  <span className="text-emdmsPrimary font-bold">
                    Jan 22/2022
                  </span>{" "}
                </div>
              </div>{" "}
              <div className="flex items-center space-x-2">
                {" "}
                <div>
                  <GrStatusUnknown />
                </div>
                <div className="text-[#000000B2]">
                  Status of Inspection:
                  <span className="text-[#F26769] font-bold">
                    Rejected
                  </span>{" "}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {" "}
                <div>
                  <TbArrowRampRight />
                </div>
                <div className="text-[#000000B2]">
                  Type of Inspection:
                  <span className="text-emdmsPrimary font-bold">
                    Random
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className="flex w-full space-x-2 items-center  justify-center">
              {" "}
              <div className="border border-emdmsPrimary/50 w-1/2   text-sm text-emdmsPrimary  rounded-md py-2 text-center">
                View Details
              </div>{" "}
              <div className="border border-[#CC362F] w-1/2    text-sm text-[#CC362F]  rounded-md py-2 text-center">
                View Reason
              </div>
            </div>
          </div>
          {/* inspection pending */}
          <div className="bg-white rounded-md flex flex-col gap-8  p-10 ">
            <div className="flex items-center justify-start space-x-2">
              <HiBuildingOffice2 className="text-5xl text-emdmsPrimary" />{" "}
              <div className="flex flex-col text-sm">
                <h1 className=" text-xl font-bold">Inspection 1</h1>
                <p>All Job orders</p>
              </div>
            </div>
            <div className="flex mx-10 flex-col space-y-2 items-start justify-center ">
              <div className="flex items-center space-x-2">
                {" "}
                <div>
                  <MdSecurityUpdateGood />
                </div>
                <div className="text-[#000000B2]">
                  Created Date:{" "}
                  <span className="text-emdmsPrimary font-bold">
                    Jan 22/2022
                  </span>{" "}
                </div>
              </div>{" "}
              <div className="flex items-center space-x-2">
                {" "}
                <div>
                  <GrStatusUnknown />
                </div>
                <div className="text-[#000000B2]">
                  Status of Inspection:
                  <span className="text-[#EED116] font-bold">Pending</span>{" "}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {" "}
                <div>
                  <TbArrowRampRight />
                </div>
                <div className="text-[#000000B2]">
                  Type of Inspection:
                  <span className="text-emdmsPrimary font-bold">
                    Office Change
                  </span>{" "}
                </div>
              </div>
            </div>
            <div className="border border-emdmsPrimary/50  mx-10 text-sm text-emdmsPrimary  rounded-md py-2 text-center">
              View Details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inspection;
