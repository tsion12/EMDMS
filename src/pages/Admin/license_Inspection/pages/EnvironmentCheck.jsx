import React from "react";
import { BsExclamationTriangleFill } from "react-icons/bs";
import Image from "../../../../assets/image.png";
import ModalImage from "react-modal-image";
import MyImageGallery from "../../../../components/layout/Admin/MyImageGallery";
const EnvironmentCheck = () => {
  return (
    <div className="flex flex-col p-8 space-y-6 w-full lg:w-[75%] h-[67vh] overflow-y-auto bg-white rounded-xl text-xs noscrollBar">
      <div className="text-lg font-bold">Inspection Check List</div>
      <div className="w-full h-[45vh] overflow-y-auto noscrollBar grid grid-cols-3 gap-5 text-N40 font-semibold grid-rows-8 ">
        <div className="text-emdmsPrimary font-bold text-sm">
          Environment Checklists
        </div>
        <div className="text-emdmsPrimary font-bold text-sm">Results</div>

        <div className=" row-span-4 space-x-2 flex border border-[#005656]  rounded-lg p-4 pt-7">
          <BsExclamationTriangleFill className="text-2xl" />
          <div className="flex flex-col space-y-1  ">
            {" "}
            <div>Attention</div>
            <div className="text-[10px] tracking-wider text-[#AAAAAA] max-w-xs font-normal ">
              The inspector creates these reports, which aid the approver in
              making decisions to either approve or deny.
            </div>
          </div>
        </div>
        <div>Office Rent</div>
        <div>Approved</div>
        <div>Office Area</div>
        <div>24m2</div>
        <div>Office Room Count</div>

        <div>3</div>

        <div>Image of Office Gate</div>
        <div>Approved</div>
        <div className=" row-span-2 flex flex-col  bg-[#F0F7F7] space-y-2  rounded-lg p-4">
          <div className="space-x-2 flex  ">
            <div className=" w-14 h-8 rounded-sm">
              {" "}
              <img src={Image} alt="" className="w-14 h-10" />
            </div>
            <div className="flex flex-col ">
              {" "}
              <div className="text-N40">Image of Office Gate</div>
              <div className="text-[8px] max-w-[100px] leading-3 text-N40/50">
                This is the document you uploaded for inspection
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            {" "}
            <button className="bg-white w-[40%] py-1 text-emdmsPrimary">
              View
            </button>
          </div>
        </div>
        <div>Councelling Room</div>
        <div>Approved</div>
        <div>Councelling Room Area</div>
        <div>6m2</div>
        <div className=" row-span-2 flex flex-col  bg-[#F0F7F7] space-y-2  rounded-lg p-4">
          <div className="space-x-2 flex  ">
            <div className=" w-14 h-8 rounded-sm">
              {" "}
              <img src={Image} alt="" className="w-14 h-10" />
            </div>
            <div className="flex flex-col ">
              {" "}
              <div className="text-N40">Image of Office Gate</div>
              <div className="text-[8px] max-w-[100px] leading-3 text-N40/50">
                This is the document you uploaded for inspection
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            {" "}
            <button
              onClick={() => {
                <MyImageGallery />;
              }}
              className="bg-white  w-[40%] py-1 text-emdmsPrimary">
              View
            </button>
          </div>
        </div>
        <div>Image of Counselling Area</div>
        <div>Approved</div>
      </div>
      <div className="flex justify-end  items-center space-x-5 mt-10">
        <div>
          {" "}
          <button className=" border border-[#008080] px-10 py-2 text-[#008080]">
            cancel
          </button>
        </div>
        <div>
          <button className=" border bg-[#008080] px-12 py-2 text-white rounded-md">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnvironmentCheck;
