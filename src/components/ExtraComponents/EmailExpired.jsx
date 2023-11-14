import React from "react";
import { MdCancel } from "react-icons/md";
const EmailExpired = () => {
  return (
    <div className="bg-[#F0F7F7] flex items-center justify-center h-screen">
      <div className="relative">
        <div className="bg-white md:w-[40vw] mx-auto   w-full  rounded-xl shadow-md p-6 ">
          <div className="relative">
            <div className="absolute top-0 bottom-40 left-1/2 transform -translate-x-1/2 -translate-y-3/4 w-28 h-28 rounded-full border-[12px] border-[#F0F7F7] bg-white z-50">
              <div className="absolute inset-0 flex items-center justify-center">
                <MdCancel className="text-error40 text-4xl" />
              </div>
            </div>
          </div>
          {/*card content */}
          <div className="flex flex-col items-center justify-center text-center mt-12 space-x-4 text-error60">
            <div className="text-error30 font-bold text-lg mb-2">
              The email is link is expired!
            </div>
            <div className="text-center text-sm max-w-sm">
              We sent an email to lorumepsium@gmail.com
            </div>
            <div className="text-center text-sm max-w-sm mt-5">
              The link provided in the email has expired. Kindly request a new
              email verification by using your email address.
            </div>
            <div className="bg-emdmsPrimary text-sm text-white px-12 py-2 rounded-lg mt-8">
              Send Again
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailExpired;
