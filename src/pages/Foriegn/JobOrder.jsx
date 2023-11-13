import React, { useState } from "react";
import Button from "../../components/utilities/Button";
import ReactTable from "../../components/foreignComponents/ReactTable";
import { TbScanEye } from "react-icons/tb";
import { BiSolidFilePdf } from "react-icons/bi";
import { createColumnHelper } from "@tanstack/react-table";
import Requestjoborder from "../../components/foreignComponents/RequestJobOrder";
import Body from "../../components/layout/Foriegn/Body";

const JobOrder = () => {
  const [page, setPage] = useState("table");
  const [activeTab, setActiveTab] = useState("New Application");

  // Create a Job Order Function
  function setToCreate() {
    setPage("create");
  }

  // React Tables
  const defaultData = [
    {
      jobOrderCode: "DUB_AHM_MOH_1123",
      submittedAt: "2022-08-20",
      action: "View",
    },
    {
      jobOrderCode: "DUB_AHM_MOH_1123",
      submittedAt: "2022-08-20",
      action: "View",
    },
  ];

  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor((row) => row.jobOrderCode, {
      id: "jobOrderCode",
      cell: (info) => <span>{info.getValue()}</span>,
      header: () => <span>Job Order Code</span>,
    }),
    columnHelper.accessor((row) => row.submittedAt, {
      id: "submittedAt",
      cell: (info) => <span className="text-[#6B6F7B]">{info.getValue()}</span>,
      header: () => <span>Submitted At</span>,
    }),
    columnHelper.accessor((row) => row.action, {
      id: "action",
      cell: (info) => (
        <div
          onClick={() => setOpenModal(true)}
          className="flex items-center bg-[#F0F7F7] w-fit mx-auto px-5 py-2 rounded-sm cursor-pointer">
          <div className="bg-white border border-[#008080] p-1 mr-2">
            <TbScanEye color="#008080" />
          </div>
          <span className="text-emdmsPrimary font-medium	">
            {info.getValue()}
          </span>
        </div>
      ),
      header: () => <span>Action</span>,
    }),
  ];
  const [openModal, setOpenModal] = useState(false);

  const [documents, setDocuments] = useState("new application");

  return (
    <Body custom={"!overflow-x-hidden !w-screen  z-40"}>
      {page === "table" ? (
        <>
          <div className="w-full flex flex-col gap-10">
            <div>
              <p className="title">Job order Lists</p>
              <p className="title-description">
                Application lists where the applicants submitted their documents
                to see if they are legit or not
              </p>
            </div>
            <div className="w-full flex flex-col md:flex-row gap-4 justify-between md:items-center">
              {/* Selection Tab Container */}
              <div className="w-full md:w-max  flex gap-4 lg:gap-10 items-center overflow-auto noscrollBar p-2 bg-white rounded-lg">
                <Button
                  handelClick={() => {
                    setActiveTab("New Application");
                  }}
                  custom={`${
                    activeTab === "New Application"
                      ? "text-emdmsPrimary"
                      : "text-N80 bg-white"
                  } px-8 py-2 w-full w-max font-semibold whitespace-nowrap`}>
                  New Application
                </Button>
                <Button
                  handelClick={() => {
                    setActiveTab("Re-applied Applications");
                  }}
                  custom={`${
                    activeTab === "Re-applied Applications"
                      ? "text-emdmsPrimary"
                      : "text-N80 bg-white"
                  } px-8 py-2 w-full w-max font-semibold whitespace-nowrap`}>
                  Re-applied Applications
                </Button>
                <Button
                  handelClick={() => {
                    setActiveTab("Approved");
                  }}
                  custom={`${
                    activeTab === "Approved"
                      ? "text-emdmsPrimary"
                      : "text-N80 bg-white"
                  } px-8 py-2 w-full w-max font-semibold whitespace-nowrap`}>
                  Approved
                </Button>
                <Button
                  handelClick={() => {
                    setActiveTab("Rejected");
                  }}
                  custom={`${
                    activeTab === "Rejected"
                      ? "text-emdmsPrimary"
                      : "text-N80 bg-white"
                  } px-8 py-2 w-full w-max font-semibold whitespace-nowrap`}>
                  Rejected
                </Button>
              </div>

              <div className="w-full bg-lime-300 md:w-max">
                <Button
                  handelClick={setToCreate}
                  custom={"py-2 w-full text-white bg-emdmsPrimary"}>
                  Request Job Order
                </Button>
              </div>
            </div>
            <div className="mt-10">
              <ReactTable
                columns={columns}
                defaultData={defaultData}></ReactTable>
            </div>
          </div>
        </>
      ) : (
        <Requestjoborder goback={setPage} />
      )}
      <div
        className={`${
          openModal ? "translate-x-0 right-0" : "translate-x-full right-0"
        } transition ease-in duration-300 z-50 bg-white px-5 py-3 absolute h-screen mt-[-6.5rem] md:mt-[-8.3rem] md:w-2/3 lg:w-1/2 overflow-y-scroll`}>
        <div
          onClick={() => setOpenModal(false)}
          className="bg-emdmsPrimary fixed px-3.5 py-1.5 text-white rounded-full font-bold w-max cursor-pointer">
          &times;
        </div>
        <div className="space-y-7 mt-16 ">
          <div className="px-4 py-3 bg-[#F0F7F7] rounded-lg">
            <div className="text-sm border-b w-fit font-medium	mb-5">
              Job Order Information
            </div>
            <div className="px-4 space-y-4 w-5/6">
              <div className="flex gap-2 ">
                <div className="text-emdmsPrimary text-sm w-1/2">
                  Job Order Code
                </div>
                <div className="text-sm w-1/2">DUB_AHM_MOH_1123</div>
              </div>
              <div className="flex gap-2 ">
                <div className="text-emdmsPrimary text-sm w-1/2">
                  Job order Quanitiy
                </div>
                <div className="text-sm w-1/2">Logistics and others</div>
              </div>
              <div className="flex gap-2 ">
                <div className="text-emdmsPrimary text-sm w-1/2">Partner</div>
                <div className="text-sm w-1/2">Alduwa Agency</div>
              </div>
              <div className="flex gap-2 ">
                <div className="text-emdmsPrimary text-sm w-1/2">
                  Job Order Description
                </div>
                <div className="text-sm w-1/2">
                  Our ‘Recruitment Team’ is looking for competent, energized,
                  self-started & motivated Finance Assistant.
                  <br></br>
                  Work Place: - In two areas of Addis Ababa<br></br>
                  Employment Level:- Entry/Intern<br></br>
                  Experience required:- 1-2 years
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-[#F0F7F7] rounded-lg ">
            <div className="text-sm border-b w-fit font-medium	mb-5">
              Job Order Details
            </div>
            <div className="px-4 space-y-4  w-5/6">
              <div className="flex gap-2 ">
                <div className="text-emdmsPrimary text-sm w-1/2">
                  Experience
                </div>
                <div className="text-sm w-1/2">Addis Ababa, Piassa</div>
              </div>
              <div className="flex gap-2 ">
                <div className="text-emdmsPrimary text-sm w-1/2">
                  Job Category
                </div>
                <div className="text-sm w-1/2">Permanent</div>
              </div>
              <div className="flex gap-2 ">
                <div className="text-emdmsPrimary text-sm w-1/2">
                  Job Position
                </div>
                <div className="w-1/2">
                  <div className="text-sm flex flex-wrap space-y-1 gap-1 items-center">
                    <div className="bg-[#E5F3EF] rounded-sm px-2 py-1">
                      Marketing <span className="text-xs ml-2">&times;</span>
                    </div>
                    <div className="bg-[#E5F3EF] rounded-sm px-2 py-1">
                      Economics <span className="text-xs ml-2">&times;</span>
                    </div>
                    <div className="bg-[#E5F3EF] rounded-sm px-2 py-1">
                      Social Studies
                      <span className="text-xs ml-2">&times;</span>
                    </div>
                    <div className="bg-[#E5F3EF] rounded-sm px-2 py-1">
                      Managment <span className="text-xs ml-2">&times;</span>
                    </div>
                    <div className="bg-[#E5F3EF] rounded-sm px-2 py-1">
                      Marketing Managment
                      <span className="text-xs ml-2">&times;</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 ">
                <div className="text-emdmsPrimary text-sm w-1/2">Benefits</div>
                <div className="w-1/2">
                  <div className="text-sm mb-1">
                    <span className="underline">Degree </span>with 5 years
                  </div>
                  <div className="text-sm">
                    <span className="underline">Masters </span>with 2 years
                  </div>
                </div>
              </div>
              <div className="flex gap-2 ">
                <div className="text-emdmsPrimary text-sm w-1/2">Quantity</div>
                <div className="text-sm w-1/2">500</div>
              </div>
              <div className="flex gap-2 ">
                <div className="text-emdmsPrimary text-sm w-1/2">Salary</div>
                <div className="text-sm w-1/2">1000</div>
              </div>
              <div className="flex gap-2 ">
                <div className="text-emdmsPrimary text-sm w-1/2">Currency</div>
                <div className="text-sm w-1/2">USD</div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-[#F0F7F7] rounded-lg">
            <div className="text-sm border-b w-fit font-medium	mb-5">
              Documents
            </div>
            <div className="flex gap-24 px-4 py-3">
              <div className="text-emdmsPrimary text-sm">Documnent Type</div>
              <div className="flex items-center rounded-lg shadow bg-white">
                <div className="bg-emdmsPrimary h-full rounded-l py-2 px-3 flex justify-center items-center">
                  <BiSolidFilePdf color="#ffffff" size={30} />
                </div>
                <div className="py-2 px-3">
                  <div className="text-sm mb-1">Partnerhsip Aggrement.pdf</div>
                  <div className="text-gray-500 text-xs">
                    Document file Uploaded
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button
            handelClick={() => setOpenModal(false)}
            custom={"bg-emdmsPrimary py-3 text-white float-right "}>
            Cancle
          </Button>
        </div>
      </div>
    </Body>
  );
};

export default JobOrder;
