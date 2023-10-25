import React from "react";
import StaffCheckTable from "../../../../components/layout/Admin/StaffChcekTable";

const StaffCheck = () => {
  return (
    <div className="flex flex-col p-8 space-y-6 w-[75%] h-[67vh] overflow-y-auto bg-white rounded-xl text-xs noscrollBar">
      <div className="text-lg font-bold">Inspection Check List</div>
      <div className="w-full h-[45vh] overflow-y-auto noscrollBar ">
        {" "}
        <StaffCheckTable />
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

export default StaffCheck;
