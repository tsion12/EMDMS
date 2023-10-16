import React from "react";
import { GiBatteryPackAlt } from "react-icons/gi";
import { BarChart, ResponsiveContainer } from "recharts";
import Barchart from "../../components/layout/Admin/Barchart";
import { MdOutlineDateRange } from "react-icons/md";
import DashboardTable from "../../components/layout/Admin/DashboardTable";
import { AiOutlineInfoCircle } from "react-icons/ai";
import WorldMap from "../../components/layout/Admin/WorldMap";
import PieChart from "../../components/layout/Admin/PieChart";
import AdminPieChart from "../../components/layout/Admin/PieChart";

const AgencyDashboard = () => {
  return (
    // Main Container
    <div className="p-10 flex flex-col space-y-10 lg:space-y-0 lg:flex-row items-start lg:space-x-10 space-x-0 h-screen overflow-auto w-full ">
      {/* left side cards */}
      <div className="flex flex-col space-y-6 w-full lg:w-[60%] mb-10 ">
        {/* left side 1st card */}
        <div className="flex items-center bg-gradient-to-b from-[#00A8A8] to-[#004343] w-full justify-around overflow-auto noscrollBar rounded-lg py-5 px-5 pr-20 ">
          <div className="flex justify-start items-center space-x-2 ">
            <div className="bg-white  flex rounded-full mx-auto p-3">
              {" "}
              <GiBatteryPackAlt className="text-2xl text-[#5A8998]" />
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
              <GiBatteryPackAlt className="text-2xl text-[#5A8998]" />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex flex-col space-y-1 items-start justify-center">
                <div className="text-sm text-white">Total Contract Created</div>
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
              <GiBatteryPackAlt className="text-2xl text-[#5A8998]" />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex flex-col space-y-1 items-start justify-center">
                <div className="text-sm text-white">Staff Members</div>
                <div className="text-xl font-bold text-white">6</div>
              </div>
              <div className="text-xs text-white "> last updated on Aug</div>
            </div>
          </div>
        </div>

        {/* left side 2nd card */}
        <div className="flex  bg-white w-full justify-between overflow-auto noscrollBar rounded-lg py-2 px-5  ">
          <div className="flex flex-col justify-between items-stretch p-5">
            <div className="text-sm font-poppins tracking-wide font-">
              {" "}
              Total License's Created this month
            </div>
            <div className="space-y-2">
              {" "}
              <div className="text-3xl font-bold font-poppins">2460</div>
              <div className="text-xs">
                {" "}
                <span className="text-[#36978D] font-bold ">23%</span> since
                last month
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-3 justify-center items-end w-full ">
            <div className="flex justify-between items-center space-x-20 w-[380px]  ">
              <div className=" text-xs">Task Assigned</div>
              <div className="border border-[#ECE9F1] px-6 py-2 rounded-md flex items-center justify-center space-x-3">
                <div className="text-xs">March 2020</div>
                <MdOutlineDateRange className="text-[#008080]" />
              </div>
            </div>
            <div className="w-[400px] h-[120px]">
              <Barchart />
            </div>
          </div>
        </div>
        {/* left side 3rd card */}
        <div className="bg-white w-full justify-between overflow-auto noscrollBar rounded-lg py-1 px-5 mb-10">
          <div className="flex space-x-2 items-center p-4">
            <div className="text-lg font-bold">Recent Activity</div>
            <div>
              <AiOutlineInfoCircle className="text-[#D0D1D2]" />
            </div>
          </div>
          <DashboardTable />
        </div>
      </div>
      {/* Right side */}
      <div className="flex flex-col space-y-5 w-full lg:w-[40%] h-full ">
        <div className="w-full h-[45%] bg-white rounded-lg flex flex-col p-2">
          <div className="flex space-x-2 items-center  p-4">
            <div className="text-lg font-bold">Job Order Locations</div>
          </div>
          <div className="h-[300px] w-[300px] mx-auto flex justify-center items-center">
            <WorldMap />
          </div>
          <div className="flex justify-between px-5">
            <div className="flex items-start space-x-1">
              <div className="h-2 w-2 rounded-full bg-[#98D2C1] mt-1"></div>
              <div className="flex flex-col items-start text-xs text-[#787486]">
                <div className=" tracking-wider ">Jordan</div>
                <div>254</div>
              </div>
            </div>
            <div className="flex items-start space-x-1">
              <div className="h-2 w-2 rounded-full bg-[#32A583] mt-1"></div>
              <div className="flex flex-col items-start text-xs text-[#787486]">
                <div className=" tracking-wider ">Qatar</div>
                <div>3000</div>
              </div>
            </div>
            <div className="flex items-start space-x-1">
              <div className="h-2 w-2 rounded-full bg-[#195241] mt-1"></div>
              <div className="flex flex-col items-start text-xs text-[#787486]">
                <div className=" tracking-wider ">Saudi Arabia</div>
                <div>9254</div>
              </div>
            </div>{" "}
            <div className="flex items-start space-x-1">
              <div className="h-2 w-2 rounded-full bg-[#195241] mt-1"></div>
              <div className="flex flex-col items-start text-xs text-[#787486]">
                <div className=" tracking-wider ">UAE</div>
                <div>454</div>
              </div>
            </div>{" "}
            <div className="flex items-start space-x-1">
              <div className="h-2 w-2 rounded-full bg-[#CDCDCD] mt-1"></div>
              <div className="flex flex-col items-start text-xs text-[#787486]">
                <div className=" tracking-wider ">Others</div>
                <div>254</div>
              </div>
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

export default AgencyDashboard;
