import React, { useEffect, useState } from "react";
import Button from "../../../components/utilities/Button";
import { CiFolderOn } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";

import "react-datepicker/dist/react-datepicker.css";

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
      <div className="lg:w-[30%] p-6 flex flex-col gap-6 items-start bg-emdmsPrimary h-max border-4 border-white rounded-xl">
        {/* <div className="flex flex-col gap-2">
           <p className="font-medium text-white">
             Register your personal Information
           </p>
           <p className="font-light text-xs text-N99/60 leading-relaxed">
             Here in this section is general information. you will need to
             complete all inputs in order to be verified and continue the
             process.
           </p>
         </div> */}
        <div className="lg:flex flex-col gap-2">
          <p className="font-medium text-white">Reminder</p>
          <ul className="px-6 list-disc font-light text-xs text-N99/60 leading-relaxed">
            <li>Make sure you have submitted all necessary information.</li>
            <li>Make sure you have provided legit/legal residence locations</li>
            <li>
              If you find any difficulties while you submit the information's
              Contact us with our email address
            </li>
          </ul>
        </div>

        <div className="flex gap-3 items-center">
          <input
            type="checkbox"
            className="w-5 h-5 checked:bg-teal-600 checked:border-transparent"
            // {...register("agreeTerms")}
          />
          <p className="text-white font-light text-sm">
            I agree to the{" "}
            <span className="font-medium underline cursor-pointer">
              terms and conditions
            </span>
          </p>
        </div>
        {/* {errors.agreeTerms && (
           <p className="text-yellow-500 text-xs">
             {errors.agreeTerms.message}
           </p>
         )} */}
      </div>
      {/* end of right side card */}
    </div>
  );
};

export default PageTwoAddContract;
