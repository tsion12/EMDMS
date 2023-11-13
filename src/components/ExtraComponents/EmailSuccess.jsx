import React from "react";
import { BsCheck } from "react-icons/bs";

const EmailSuccess = () => {
  return (
    <div className="bg-[#F0F7F7] flex items-center justify-center h-screen">
      <div className="relative">
        <div className="bg-white md:w-[40vw] mx-auto   w-full  rounded-xl shadow-md p-6 ">
          <div className="relative">
            <div className="absolute top-0 bottom-40 left-1/2 transform -translate-x-1/2 -translate-y-3/4 w-28 h-28 rounded-full border-[12px] border-[#F0F7F7] bg-white z-50">
              <div className="absolute inset-0 flex items-center justify-center">
                <BsCheck className="font-bold text-[#12653F] text-4xl" />
              </div>
            </div>
          </div>
          {/*card content */}
          <div className="flex flex-col items-center justify-center text-center mt-12 space-x-4 text-emdmsPrimary">
            <div className=" font-bold text-lg mb-2">
              The email is link is expired!
            </div>

            <div className="text-center text-sm max-w-sm mt-5">
              Congratulations! You have successfully entered the email address
              associated with your account.
            </div>
            <div className="bg-emdmsPrimary text-sm font-semibold text-white px-12 py-2 rounded-lg mt-8">
              Back to Login Page
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSuccess;
