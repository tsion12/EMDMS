import { React, useState } from "react";
import { CiSearch, CiFilter, CiCirclePlus } from "react-icons/ci";
import ContractListTable from "../../components/foreignComponents/ContractListTable";

const ContractsList = () => {
  return (
    <div className="w-full flex flex-col gap-10 mt-10 p-10">
      <>
        <div className="md:flex-row flex flex-col justify-between space-y-4 md:space-y-0  w-full items-center">
          <div>
            <p className="text-2xl font-semibold text-emdmsPrimary">
              Contract Lists
            </p>
            <p className="text-xs text-N70 max-w-md">
              Contract lists for job contracts refer to organized records that
              track the status of employment agreements from the perspective of
              the approver.
            </p>
          </div>
          <div className="flex space-x-3 w-full md:w-[30%] items-center justify-center">
            <div class="relative w-full ">
              <div class="absolute inset-y-0 left-0 flex text-[#212121] items-center pl-3 pointer-events-none">
                <CiSearch />
              </div>

              <input
                type="search"
                id="default-search"
                class="block w-full p-2 pl-10 pr-10 text-sm placeholder:text-[#212121] border border-[#81818133] rounded-md bg-gray-50"
                placeholder="Search"
                required
              />

              <div class="absolute inset-y-0 right-0  w-24 flex space-x-1  border rounded-l-none border-[#81818133] rounded-md items-center pr-3  pointer-events-none">
                <div className="pl-2">
                  <CiFilter className="text-[#212121]" />
                </div>
                <div className="text-sm">Filters</div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4 justify-between md:items-center">
          {/* Selection Tab Container */}

          <div className=" w-full gap-4 h-[70vh] overflow-y-auto px-2 py-1 pb-3 relative rounded-lg">
            <ContractListTable />
          </div>
        </div>
      </>
    </div>
  );
};

export default ContractsList;
