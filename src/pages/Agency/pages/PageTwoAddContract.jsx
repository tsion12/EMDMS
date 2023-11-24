import React, { useEffect, useState } from "react";
import Button from "../../../components/utilities/Button";
import { CiFolderOn } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import Avatar from "../../../assets/images/Avatar.png";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoReloadOutline } from "react-icons/io5";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
const PageTwoAddContract = ({
  setCurrentTab,
  setMainPage,
  goToPreviousTab,

  setStarterPage,
}) => {
  const [uploadState, setUploadState] = useState("upload");
  return (
    <div className="  flex gap-4 ">
      <div className="flex flex-col  w-[70%] gap-4">
        <div className="bg-white  rounded-lg shadow-lg overflow-y-auto">
          <div className="bg-[#005656] rounded-tl-lg  w-4/4 top-0 h-2"></div>
          <div className="h-[68vh] overflow-y-auto noscrollBar">
            <div className=" py-3 ">
              {/* job order information */}
              <div className="flex bg-[#F0F7F7]   lg:flex-col py-5 gap-2">
                <div className="text-[#008080] font-poppins font-bold">
                  <p>File Upload</p>
                </div>
                <div className="text-[#7F7F7F] text-xs max-w-sm">
                  Based on these configurations, you can modify the compensation
                  that your applicant will receive and publicize your job.
                </div>
              </div>
            </div>
            <div className="px-10 py-10 flex flex-col w-[80%]">
              <div className="flex items-center justify-between py-5 ">
                <div className="flex space-x-2">
                  <div>
                    <CiFolderOn className="text-emdmsPrimary font-bold" />
                  </div>
                  <div className="flex flex-col  text-xs">
                    <div>Employment Contact</div>
                    <div className="text-[#949494]">max 10mb</div>
                  </div>
                </div>
                <div className="flex space-x-2 text-xs items-center justify-center">
                  {uploadState === "upload" && (
                    <div
                      onClick={() => {
                        setUploadState("loading");
                      }}
                      className="border border-gray rounded-md px-8 py-1.5">
                      Upload
                    </div>
                  )}
                  {uploadState === "loading" && (
                    <div
                      onClick={() => {
                        setUploadState("error");
                      }}
                      className="border flex items-center space-x-1 border-gray rounded-md px-8 py-1.5">
                      <div>
                        <AiOutlineLoading3Quarters />
                      </div>{" "}
                      <div>loading</div>
                    </div>
                  )}
                  {uploadState === "error" && (
                    <div className="flex space-x-1 items-center justify-center">
                      <div>
                        <IoReloadOutline className="text-red-400 text-lg" />
                      </div>
                      <div
                        onClick={() => {
                          setUploadState("upload");
                        }}
                        className="border border-red-500 rounded-md px-8 py-1.5">
                        Error
                      </div>
                    </div>
                  )}
                  <div>
                    <BsThreeDotsVertical className="font-bold" />
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex items-center justify-between py-5 ">
                <div className="flex space-x-2">
                  <div>
                    <CiFolderOn className="text-emdmsPrimary font-bold" />
                  </div>
                  <div className="flex flex-col  text-xs">
                    <div>Slip Upload</div>
                    <div className="text-[#949494]">max 10mb</div>
                  </div>
                </div>
                <div className="flex space-x-2 text-xs items-center justify-center">
                  <div className="border border-gray rounded-md px-8 py-1.5">
                    Upload
                  </div>
                  <div>
                    <BsThreeDotsVertical className="font-bold" />
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex items-center justify-between py-5 ">
                <div className="flex space-x-2">
                  <div>
                    <CiFolderOn className="text-emdmsPrimary font-bold" />
                  </div>
                  <div className="flex flex-col  text-xs">
                    <div>Employment Contact</div>
                    <div className="text-[#949494]">max 10mb</div>
                  </div>
                </div>
                <div className="flex space-x-2 text-xs items-center justify-center">
                  <div className="border border-gray rounded-md px-8 py-1.5">
                    Upload
                  </div>
                  <div>
                    <BsThreeDotsVertical className="font-bold" />
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex items-center justify-between py-5 ">
                <div className="flex space-x-2">
                  <div>
                    <CiFolderOn className="text-emdmsPrimary font-bold" />
                  </div>
                  <div className="flex flex-col  text-xs">
                    <div>Certificate of Qualification</div>
                    <div className="text-[#949494]">max 10mb</div>
                  </div>
                </div>
                <div className="flex space-x-2 text-xs items-center justify-center">
                  <div className="border border-gray rounded-md px-8 py-1.5">
                    Upload
                  </div>
                  <div>
                    <BsThreeDotsVertical className="font-bold" />
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex items-center justify-between py-5 ">
                <div className="flex space-x-2">
                  <div>
                    <CiFolderOn className="text-emdmsPrimary font-bold" />
                  </div>
                  <div className="flex flex-col  text-xs">
                    <div>Passport</div>
                    <div className="text-[#949494]">max 10mb</div>
                  </div>
                </div>
                <div className="flex space-x-2 text-xs items-center justify-center">
                  <div className="border border-gray rounded-md px-8 py-1.5">
                    Upload
                  </div>
                  <div>
                    <BsThreeDotsVertical className="font-bold" />
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex items-center justify-between py-5 ">
                <div className="flex space-x-2">
                  <div>
                    <CiFolderOn className="text-emdmsPrimary font-bold" />
                  </div>
                  <div className="flex flex-col  text-xs">
                    <div>Working visa</div>
                    <div className="text-[#949494]">max 10mb</div>
                  </div>
                </div>
                <div className="flex space-x-2 text-xs items-center justify-center">
                  <div className="border border-gray rounded-md px-8 py-1.5">
                    Upload
                  </div>
                  <div>
                    <BsThreeDotsVertical className="font-bold" />
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2">
          <Button
            handelClick={goToPreviousTab}
            custom=" text-[#005656] px-4 py-2 rounded-md w-[200px] border border-[#005656]">
            Back
          </Button>
          <button
            onClick={() => {
              setMainPage("First");
              setStarterPage("Table");
              setCurrentTab("Submitted");
            }}
            className="bg-[#005656]  text-white px-4 py-2 rounded-md w-[200px]">
            submit
          </button>
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
              <div className="text-emdmsPrimary text-lg">Martial Status</div>
              <div className="text-[14px]">Single</div>
            </div>{" "}
            <div className="flex flex-col ">
              <div className="text-emdmsPrimary text-lg">Region</div>
              <div className="text-[14px]">Amhara</div>
            </div>
            <div className="flex flex-col ">
              <div className="text-emdmsPrimary text-lg">Phone Number</div>
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
              <div className="text-emdmsPrimary text-lg">Martial Status</div>
              <div className="text-[14px]">Single</div>
            </div>{" "}
            <div className="flex flex-col ">
              <div className="text-emdmsPrimary text-lg">Region</div>
              <div className="text-[14px]">Amhara</div>
            </div>
            <div className="flex flex-col ">
              <div className="text-emdmsPrimary text-lg">Phone Number</div>
              <div className="text-[14px]">+251 789 928 879</div>
            </div>
          </div>
        </div>
      </div>
      {/* end of right side card */}
    </div>
  );
};

export default PageTwoAddContract;
