import React from "react";

const PastMedical = () => {
  return (
    <div className="flex flex-col items-start p-10 text-xs space-y-4">
      <div className="text-new  text-xl max-w-[150px] tracking-wider font-bold">
        Past Medical History
      </div>
      <div className="flex items-start flex-col space-y-3 text-[#586166]">
        <div>1. Any Medical illeness</div>
        <button className="border border-black px-6 py-1 rounded-md">
          Yes
        </button>
        <div className="flex flex-col">
          <div className="text-sm font-semibold">Comment:</div>
          <div className="text-[#898989] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
      <div className="flex items-start flex-col space-y-3 text-[#586166]">
        <div>2. Any Allergy?</div>
        <button className="border border-black px-6 py-1 rounded-md">No</button>
      </div>
      <div className="flex items-start flex-col space-y-3 text-[#586166]">
        <div>3. Any Known Disabilities</div>
        <button className="border border-black px-6 py-1 rounded-md">
          Yes
        </button>
        <div className="flex flex-col">
          <div className="text-sm font-semibold">Comment:</div>
          <div className="text-[#898989] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
      <div className="flex items-start flex-col space-y-3 text-[#586166]">
        <div>
          4. Any previous admission/hospitalization or previous accident? *
        </div>
        <button className="border border-black px-6 py-1 rounded-md">No</button>
          </div>
          
          
    </div>
  );
};

export default PastMedical;
