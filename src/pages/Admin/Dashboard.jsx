import React from "react";
import { GiBatteryPackAlt } from "react-icons/gi";
import { BarChart, ResponsiveContainer } from "recharts";
import Barchart from "../../components/layout/Admin/Barchart";
import { MdOutlineDateRange } from "react-icons/md";
import DashboardTable from "../../components/layout/Admin/DashboardTable";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";

import WorldMap from "../../components/layout/Admin/WorldMap";
import PieChart from "../../components/layout/Admin/PieChart";
import AdminPieChart from "../../components/layout/Admin/PieChart";
import AdminAreaChart from "../../components/layout/Admin/AdminAreaChart";

const AdminDashboard = () => {
  return (
    // Main Container
    <div className="px-10 flex  py-20 flex-col space-y-10 lg:space-y-0 lg:flex-row items-start lg:space-x-10 space-x-0 h-screen overflow-auto w-full ">
      {/* left side cards */}
      <div className="flex flex-col space-y-6 w-full h-full  lg:w-[60%]  pb-10 ">
        {/* left side 1st card */}
        <div className="flex items-center bg-gradient-to-b h-[30%] from-[#00A8A8] to-[#004343] w-full justify-around overflow-auto noscrollBar rounded-lg py-5 px-5 pr-20 ">
          <div className="flex justify-start items-center space-x-2 ">
            <div className="bg-white  flex rounded-full mx-auto p-3">
              {" "}
              <CgNotes className="text-2xl text-[#5A8998]" />
            </div>
            <div className="flex flex-col  space-y-1">
              <div className="flex flex-col space-y-1 items-start justify-center">
                <div className="text-sm text-white">Total License Created</div>
                <div className="text-xl font-bold text-white">1000</div>
              </div>
              <div className="text-xs text-white ">
                {" "}
                <span className="font-bold">23%</span> since last month
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center space-x-2 ">
            <div className="bg-white  flex rounded-full mx-auto p-3">
              {" "}
              <CgNotes className="text-2xl text-[#5A8998]" />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex flex-col space-y-1 items-start justify-center">
                <div className="text-sm text-white">
                  Total Approved Documents
                </div>
                <div className="text-xl font-bold text-white">100</div>
              </div>
              <div className="text-xs text-white ">
                {" "}
                <span className="font-bold">23%</span> since last month
              </div>
            </div>
          </div>
          <div className="flex justify-start items-center space-x-2 ">
            <div className="bg-white  flex rounded-full mx-auto p-3">
              {" "}
              <CgNotes className="text-2xl text-[#5A8998]" />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex flex-col space-y-1 items-start justify-center">
                <div className="text-sm text-white">
                  Total Approved Documents
                </div>
                <div className="text-xl font-bold text-white">10</div>
              </div>
              <div className="text-xs text-white ">
                {" "}
                <span className="font-bold">23%</span> since last month
              </div>
            </div>
          </div>
        </div>

        {/* left side 2nd card */}
        <div className="flex flex-col  bg-white w-full h-full items-center  overflow-auto noscrollBar rounded-lg py-2 px-5  ">
          <div className="flex items-center w-full justify-between ">
            <div className="flex space-x-2 items-center p-4">
              <div className="text-lg font-bold">Monthly Activity</div>
              <div>
                <AiOutlineInfoCircle className="text-[#D0D1D2]" />
              </div>
            </div>

            <div className="border border-[#ECE9F1] px-6 py-2 rounded-md flex items-center justify-center space-x-3">
              <div className="text-xs">March 2020</div>
              <MdOutlineDateRange className="text-[#008080]" />
            </div>
          </div>
          <div className=" mt-10 w-full  h-full">
            <AdminAreaChart />
          </div>
        </div>
      </div>
      {/* Right side */}
      <div className="flex flex-col space-y-5 w-full lg:w-[40%] h-full  pb-10 ">
        <div className="w-full h-[50%] bg-white rounded-lg flex flex-col items-center space-y-2 justify-center p-2">
          <h1 className="text-6xl  text-emdmsPrimary font-semibold mb-3">30</h1>
          <div className="text-xl font-bold ">Weekly Statics</div>
          <div className="text-[#979797] text-sm pb-5  ">
            June 12 - June 19 ,2022
          </div>
          <div className="mx-auto w-[50%] border border-gray-200  "></div>
          <div className="grid grid-cols-2 w-[80%]  gap-12 text-center py-10 ">
            <div className=" flex flex-col space-y-2 items-center justify-center">
              <div className="flex items-start justify-start w-full space-x-[50%] text-sm ">
                <div className="">New -App</div>
                <div>4</div>
              </div>
              <div className="mx-auto w-[100%] border border-gray-200"></div>
              <div className="flex items-start justify-start w-full space-x-[50%] text-sm ">
                <div>New -App</div>
                <div>4</div>
              </div>
              <div className="mx-auto w-[100%] border border-gray-200"></div>
            </div>
            <div className=" flex flex-col space-y-2 items-center justify-center">
              <div className="flex items-start justify-start w-full space-x-[50%] text-sm ">
                <div>Cancel</div>
                <div>4</div>
              </div>
              <div className="mx-auto w-[100%] border border-gray-200"></div>
              <div className="flex items-start justify-start w-full space-x-[50%] text-sm">
                <div>Renew</div>
                <div>4</div>
              </div>
              <div className="mx-auto w-[100%] border border-gray-200"></div>
            </div>
          </div>
        </div>
        <div className="w-full h-[50%] bg-white rounded-lg flex flex-col p-2">
          <div className="flex space-x-2 items-center p-4">
            <div className="text-lg font-bold">Status Statics</div>
            <div>
              <AiOutlineInfoCircle className="text-[#D0D1D2]" />
            </div>
          </div>
          <div className="mx-auto">
            <AdminPieChart />
          </div>

          <div className="flex justify-between px-5 py-2 bg-white shadow-2xl rounded-xl mx-4">
            <div className="flex items-start space-x-1">
              <div className="h-2 w-2 rounded-full bg-[#98D2C1] mt-1"></div>
              <div className="flex flex-col items-start text-xs text-[#787486]">
                <div className=" tracking-wider  ">Domestic Work</div>
                <div className="font-extrabold text-sm">60%</div>
              </div>
            </div>
            <div className="flex items-start space-x-1">
              <div className="h-2 w-2 rounded-full bg-[#32A583] mt-1"></div>
              <div className="flex flex-col items-start text-xs text-[#787486]">
                <div className=" tracking-wider ">Homecare</div>
                <div className="font-extrabold text-sm">20%</div>
              </div>
            </div>
            <div className="flex items-start space-x-1">
              <div className="h-2 w-2 rounded-full bg-[#195241] mt-1"></div>
              <div className="flex flex-col items-start text-xs text-[#787486]">
                <div className=" tracking-wider ">Housemaids</div>
                <div className="font-extrabold text-sm">10%</div>
              </div>
            </div>{" "}
            <div className="flex items-start space-x-1">
              <div className="h-2 w-2 rounded-full bg-[#195241] mt-1"></div>
              <div className="flex flex-col items-start text-xs text-[#787486]">
                <div className=" tracking-wider ">others</div>
                <div className="font-extrabold text-sm">10%</div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
