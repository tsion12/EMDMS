import React from "react";

const MedicalSectionOne = () => {
  return (
    <div className="flex flex-col items-start p-10 text-xs space-y-4 w-full h-full">
      <div className="text-new  text-xl max-w-[150px] tracking-wider font-bold">
        Medical Examination
      </div>
      <div className="grid grid-cols-2  w-full gap-3">
        <div className="">
          <div className="py-2 text-new">Vital sign</div>
          <div className="grid grid-cols-2 gap-3 justify-center items-center w-full">
            <div className="text-[#586166]">Blood Pleasure </div>

            <div className="flex space-x-2">
              <div className="border border-black py-1 px-2 rounded-md">
                120
              </div>
              <div className="border border-black py-1 px-2 rounded-md">80</div>
            </div>

            <div className="text-[#586166]"> Chest x-ray </div>

            <div className="flex space-x-2 ">
              <div className="border border-black py-1 px-4 rounded-md">
                Normal
              </div>
            </div>
            <div className="text-[#586166]">Weight </div>

            <div className="flex space-x-2">
              <div className="border border-black py-1 px-2 rounded-md">
                {" "}
                45 kg
              </div>
            </div>
            <div className="text-[#586166]">RR </div>

            <div className="flex space-x-2">
              <div className="border border-black py-1 px-2 rounded-md">
                120
              </div>
              <div className="border border-black py-1 px-2 rounded-md">80</div>
            </div>
            <div className="text-[#586166]">Height </div>

            <div className="flex space-x-2">
              <div className="border border-black py-1 px-2 rounded-md">
                {" "}
                148cm
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="py-2 text-new">Visual Activity (Unaided)</div>
          <div className="grid grid-cols-2 gap-2 justify-center items-center w-full">
            <div className="text-[#586166]">Distant Rt. Eye </div>

            <div className="flex space-x-2 ">
              <div className="border border-black py-1 px-4 rounded-md">
                Normal
              </div>
            </div>
            <div className="text-[#586166]">Distant Lt. Eye </div>

            <div className="flex space-x-2 ">
              <div className="border border-black py-1 px-4 rounded-md">
                Normal
              </div>
            </div>

            <div className="text-[#586166]">Near Rt. Eye </div>

            <div className="flex space-x-2 ">
              <div className="border border-black py-1 px-4 rounded-md">
                Normal
              </div>
            </div>
            <div className="text-[#586166]">Near Lt. Eye </div>

            <div className="flex space-x-2 ">
              <div className="border border-black py-1 px-4 rounded-md">
                Normal
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="py-2 text-new">Visual Activity (Aided)</div>
          <div className="grid grid-cols-2 gap-2 justify-center items-center w-full">
            <div className="text-[#586166]">Distant Rt. Eye </div>

            <div className="flex space-x-2 ">
              <div className="border border-black py-1 px-4 rounded-md">
                Normal
              </div>
            </div>
            <div className="text-[#586166]">Distant Lt. Eye </div>

            <div className="flex space-x-2 ">
              <div className="border border-black py-1 px-4 rounded-md">
                Normal
              </div>
            </div>

            <div className="text-[#586166]">Near Rt. Eye </div>

            <div className="flex space-x-2 ">
              <div className="border border-black py-1 px-4 rounded-md">
                Normal
              </div>
            </div>
            <div className="text-[#586166]">Near Lt. Eye </div>

            <div className="flex space-x-2 ">
              <div className="border border-black py-1 px-4 rounded-md">
                Normal
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default MedicalSectionOne;
