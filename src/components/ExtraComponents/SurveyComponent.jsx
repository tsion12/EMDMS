import React, { useState } from "react";
import { PiSuitcaseSimple } from "react-icons/pi";
import { MdCancel } from "react-icons/md";

const SurveyComponent = () => {
  const [openModal, setOpenModal] = useState(true);
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative bg-white  mx-auto px-10 rounded-xl shadow-md p-6">
          <div className="absolute right-2 top-2 flex items-center justify-end w-full  ">
            <MdCancel className=" text-[#D9D9D9] text-2xl " />
          </div>{" "}
          <div className="relative">
            <div className="absolute top-0 bottom-40 left-1/2 transform -translate-x-1/2 -translate-y-3/4 w-16 h-16 shadow-2xl rounded-full border-8 border-white bg-[#0D5EA6] z-50">
              <div className="absolute inset-0 flex items-center justify-center">
                <PiSuitcaseSimple className="font-bold text-white text-xl font-cold" />
              </div>
            </div>
          </div>
          {/*card content */}
          <div className=" flex flex-col items-center justify-center text-center  space-x-4 ">
            <div className="font-bold text-2xl mt-7">Job opportunity</div>
            <div className="text-center text-sm text-[#C1C4D3] tracking-wider max-w-xs pt-3">
              To improve your visibility and help you find the right job market,
              please take a moment to complete the survey.
            </div>
            <div className="bg-[#0D5EA6] tracking-wider w-full text-sm font-semibold text-white px-12 py-3 rounded-lg mt-8">
              Start Survey
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SurveyComponent;
