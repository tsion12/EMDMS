import React, { useState } from "react";
import { MdCancel } from "react-icons/md";
import Select from "react-select";
import { IoIosWarning } from "react-icons/io";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const CreateCompliantSideModal = ({ setOpenSideModal }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [laborId, setLaborId] = useState("");
  const [result, setResult] = useState(null);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
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
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end transition-all duration-200 ease-in-out bg-black/50">
      <div className="fixed inset-y-0 right-0 w-full px-8 py-8 bg-white rounded-md shadow-lg md:w-2/5">
        <div className="flex w-full flex-col items-start  ">
          <div className="flex w-full items-start mt-5 mb-5  space-x-10 ">
            <MdCancel
              onClick={() => {
                setOpenSideModal(false);
              }}
              className="text-3xl text-error40"
            />
            <div className=" mx-auto  flex flex-col w-full items-center justify-center  gap-2">
              <div className="font-semibold text-emdmsPrimary text-3xl">
                Create Compliant
              </div>
              <p className="text-[#333333] text-sm text-justify my-2">
                You may have encountered an issue with the labor provided. To
                address your concerns, please select the appropriate reason from
                the options below and provide the necessary details. Our
                administrators will thoroughly investigate the matter and
                promptly respond to you with a resolution. 
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full h-[75vh] overflow-y-auto items-start justify-start gap-2 pl-14">
            <div className="text-red-500 flex text-sm font-semibold items-center justify-center gap-2  ">
              <IoIosWarning />
              <span>
                Please select one of the below options to create a compliant.
              </span>
            </div>
            {/* <input
                type="text"
                className="w-full border rounded-md py-2 px-2 border-emdmsPrimary/30 placeholder:text-xs"
                placeholder="Enter labour ID"
              /> */}
            <div className=" flex flex-col space-y-2 py-3 items-start w-full justify-start">
              <div>Complaint Types *</div>
              <div className="w-full">
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  theme={(theme) => handleTheme(theme)}
                  className="text-emdmsPrimary ml-1  placeholder:text-N95 placeholder:text-sm    focus:border-emdmsPrimary focus:ring-emdmsPrimary rounded-md"
                />
              </div>
            </div>
            <div className=" flex flex-col space-y-2 py-3 items-start w-full justify-start">
              <input
                type="text"
                className="text-emdmsPrimary py-2 mx-1  border border-emdmsPrimary/40 w-[99%]  placeholder:text-N95 placeholder:text-sm    focus:border-emdmsPrimary focus:ring-emdmsPrimary rounded-md"
                placeholder="enter labor ID"
              />
            </div>
            <div className="flex flex-col space-y-2 py-10 items-start w-full justify-start">
              <div>
                Write your compliant reason{" "}
                <span className="text-red-500">*</span>{" "}
              </div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="12"
                placeholder="you comments (optional)"
                className="border w-full p-3 rounded-md"
              />
            </div>
            <div className="text-emdmsPrimary underline italic ">
              Complaint Info
            </div>
            <div className="flex flex-col items-start w-full justify-start gap-2">
              <div className="text-emdmsPrimary font-semibold">
                Compliant Contact Person
              </div>
              <div className="text-xs max-w-sm text-[#7F7F7F]">
                Details should be clearly communicated to ensure effective
                collaboration and compliance management across the organization.
              </div>
              <div className="flex items-center justify-start space-x-2">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <div
                    className={`w-11 h-5 rounded-sm ${
                      isChecked ? "bg-emdmsPrimary" : "bg-[#B4B4B4]"
                    }`}>
                    <div
                      className={`h-4 w-4 my-0.5 bg-[#F5F5F5] rounded-sm shadow-2xl transition-transform ${
                        isChecked
                          ? "translate-x-full mx-2"
                          : "translate-x-0 mx-1"
                      }`}></div>
                  </div>
                </label>
                <div className="text-xs text-[#4e4d4d]">
                  Is the Compliant Contact Person an LMIS user?
                </div>
              </div>
              {isChecked ? (
                <div className="gap-4 w-full flex flex-col items-start justify-start">
                  <>
                    <div className="text-sm">Search by Labor ID</div>
                    <input
                      type="search"
                      placeholder="Search"
                      className="border  block w-full py-3 ps-2 text-third text-xs focus:outline-0 ring-0 border-emdmsPrimary/40 focus:border-emdmsPrimary focus:ring-emdmsPrimary focus:ring-emdmsPrimary/40 focus:outline-emdmsPrimary/40  rounded-md bg-white"
                    />
                  </>
                  <>
                    <div className="text-sm">
                      Select Relationship with Labor
                    </div>
                    <div className="w-full">
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        theme={(theme) => handleTheme(theme)}
                        className="text-emdmsPrimary ml-1  placeholder:text-N95 placeholder:text-sm    focus:border-emdmsPrimary focus:ring-emdmsPrimary rounded-md"
                      />
                    </div>
                  </>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 grid-cols-1 my-4  gap-6  w-full">
                  <div className="flex flex-col space-y-2 ">
                    <div className="text-sm">
                      Compliant Full Name <span className="text-red">*</span>
                    </div>
                    <input
                      type="text"
                      className="border rounded-md placeholder:text-xs text-xs focus:outline-none ring-0 border-emdmsPrimary/40  w-full p-2"
                      placeholder="Type here"
                    />
                  </div>
                  <div className="flex flex-col space-y-2 ">
                    <div className="text-sm">
                      Complaint Region <span className="text-red">*</span>
                    </div>
                    <input
                      type="text"
                      className="border rounded-md placeholder:text-xs text-xs focus:outline-none ring-0 border-emdmsPrimary/40  w-full p-2"
                      placeholder="Type here"
                    />
                  </div>
                  <div className="flex flex-col space-y-2 ">
                    <div className="text-sm">
                      Complain Woreda <span className="text-red">*</span>
                    </div>
                    <input
                      type="text"
                      className="border rounded-md placeholder:text-xs text-xs focus:outline-none ring-0 border-emdmsPrimary/40  w-full p-2"
                      placeholder="Type here"
                    />
                  </div>
                  <div className="flex flex-col space-y-2 ">
                    <div className="text-sm">
                      Complain Phone Number <span className="text-red">*</span>
                    </div>
                    <input
                      type="text"
                      className="border rounded-md placeholder:text-xs text-xs focus:outline-none ring-0 border-emdmsPrimary/40  w-full p-2"
                      placeholder="Type here"
                    />
                  </div>
                  <div className="flex flex-col space-y-2 col-span-2 ">
                    <div className="text-sm">
                      Select Relationship with labor{" "}
                      <span className="text-red">*</span>
                    </div>
                    <div className="w-full">
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        theme={(theme) => handleTheme(theme)}
                        className="text-emdmsPrimary ml-1  placeholder:text-N95 placeholder:text-sm    focus:border-emdmsPrimary focus:ring-emdmsPrimary rounded-md"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className=" my-4 border border-emdmsPrimary/40 rounded-md px-2 w-full py-2 ">
              upload file here
            </div>
            <div className="flex items-center justify-end w-full">
              <button className="bg-emdmsPrimary w-24 py-2 text-white rounded-md">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCompliantSideModal;
