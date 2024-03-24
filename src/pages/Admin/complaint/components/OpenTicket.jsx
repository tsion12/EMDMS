import React from 'react'
import { BsPostcard, BsPostcardHeart } from 'react-icons/bs';

export const OpenTicket = ({setActiveTab, activeTab, setOpenTicketPage}) => {
  return (
    <div>
      {" "}
      <div className="flex w-full justify-between pb-10 items-center">
        <div className="flex items-start w-2/4 gap-10 justify-start border border-l-0 border-r-0 border-t-0 py-4">
          <div
            onClick={() => {
              setActiveTab("all");
            }}
            className={`${
              activeTab === "all" ? "text-emdmsPrimary font-bold" : ""
            } flex cursor-pointer items-center justify-center space-x-2`}>
            <BsPostcard />
            <p>All Tickets</p>
          </div>{" "}
          <div
            onClick={() => {
              setActiveTab("resolved");
            }}
            className={`${
              activeTab === "resolved" ? "text-emdmsPrimary font-bold" : ""
            } flex cursor-pointer  items-center justify-center space-x-2`}>
            <BsPostcardHeart />
            <p>Resolved</p>
          </div>{" "}
        </div>

        <form class="max-w-md w-1/4 ">
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20">
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              class="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </form>
      </div>
      <div className=" h-[65vh] overflow-y-auto flex flex-col space-y-5">
        {[1, 2, 3, 4].map((item) => (
          <div className="  border flex flex-col p-5 space-y-3 w-full h-max rounded-sm">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-center space-x-3">
                <div className="h-3 w-3 rounded-full bg-[#F8A53499]"></div>
                <div className="text-[#2E2C34] text-lg">Ticket# 2023-CS123</div>
              </div>
              <div className="text-[#84818A]">Created at 12:45 AM</div>
            </div>
            <div className="flex flex-col space-y-1 items-start justify-start">
              <h3>Lorem ipsum dolor sit amet?</h3>
              <p className="text-[#84818A] max-w-3xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="border w-full border-gray-100"></div>
            <div className="flex items-center justify-between space-x-3 w-full">
              <div className="flex items-center justify-start space-x-3">
                {" "}
                <div className=" h-10 w-10 bg-red-50 rounded-full"></div>
                <div className=" flex flex-col  items-start justify-start">
                  <h2>Aberash Zemenu Liyu</h2>
                  <p className="text-xs">Labor ID: 123456789</p>
                </div>
              </div>
              <div
                onClick={() => {
                  setOpenTicketPage(false);
                }}
                className="underline cursor-pointer text-emdmsPrimary/80">
                Open Ticket
              </div>
            </div>
          </div>
        ))}{" "}
      </div>
    </div>
  );
}
