import React, { useState } from "react";
import Button from "../../../components/utilities/Button";
import NoRecord from "../../../assets/svg/NoRecord.svg";
import PastMedical from "./steps/PastMedical";
import MedicalSectionOne from "./steps/MedicalSectionOne";
import MedicalSectionTwo from "./steps/MedicalSectionTwo";
import InvestigationSectionOne from "./steps/InvestigationSectionOne";
import InvestigationSectionTwo from "./steps/InvestigationSectionTwo";
import InvestigationSectionThree from "./steps/InvestigationSectionThree";
import PhysicalComment from "./steps/PhysicalComment";

const MedicalExamination = () => {
  const [activeTab, setActiveTab] = useState("application");
  const [medicalTab, setMedicalTab] = useState("");
  const [step, setStep] = useState("past");

  const handleClick = () => {

    if (step === "past") {
      setStep("medicalOne");
    } else if (step === "medicalOne") {
      setStep("medicalTwo");
    } else if (step === "medicalTwo") {
      setStep("investigationOne");
    } else if (step === "investigationOne") {
      setStep("investigationTwo");
    } else if (step === "investigationTwo") {
      setStep("investigationThree");
    } else if (step === "investigationThree") {
      setStep("physical");
    }

    
  };
  return (
    <div className="m-10 flex w-full h-full space-x-4">
      <div className="flex flex-col w-1/3  h-[80vh] overflow-y-auto space-y-5 ">
        <div className="flex flex-col space-y-1">
          <div className="text-3xl font-semibold text-emdmsPrimary font-poppins">
            Applications
          </div>
          <div className="max-w-lg text-[#9898A3] text-sm font-poppins">
            Application lists where the applicants submitted their documents to
            see if they are legit or not
          </div>
        </div>
        <div className="bg-white w-full  flex space-x-10 md:space-x-6 md:flex-row justify-between items-center py-3  rounded-lg shadow-sm  text-[#7D7D7D] text-sm font-poppins    overflow-x-auto ">
          <Button
            handelClick={() => {
              setActiveTab("application");
            }}
            custom={`${
              activeTab === "application"
                ? "text-emdmsPrimary"
                : "text-N80 bg-white"
            } px-4  w-full w-max  whitespace-nowrap`}>
            Requests
          </Button>
          <Button
            handelClick={() => {
              setActiveTab("approved");
            }}
            custom={`${
              activeTab === "approved"
                ? "text-emdmsPrimary"
                : "text-N80 bg-white"
            } px-4  w-full w-max  whitespace-nowrap`}>
            Approved
          </Button>
          <Button
            handelClick={() => {
              setActiveTab("rejected");
            }}
            custom={`${
              activeTab === "rejected" ? "text-red-500" : "text-N80 bg-white"
            } px-4  w-full w-max  whitespace-nowrap`}>
            Rejected
          </Button>
        </div>
        {activeTab === "application" && (
          <div className="flex flex-col w-full  py-10 px-10 bg-white rounded-lg shadow-lg space-y-6 font-poppins  md:h-[300px] lg:h-[250px]">
            <div className="text-[#464255] font-semibold text-xl md:text-xs lg:text-lg">
              Tsion Mengistu Ademe
            </div>
            <div className="text-xs max-w-lg tracking-wide text-[#A3A3A3] font-poppins">
              License numbers are typically unique identifiers issued by
              specific authorities or organizations for specific purposes
            </div>
            <div className="flex justify-between items-center">
              <div className="text-[#464255] text-sm font-medium font-poppins">
                Medical Center Name
              </div>
              <div className="bg-emdmsPrimary px-10 py-1 text-white text-sm md:text-xs rounded-lg">
                Betezata Hospital
              </div>
            </div>

            <div className="flex justify-center ">
              <button
                onClick={() => {
                  setMedicalTab("view");
                }}
                className="bg-[#005656B2] px-4 py-2 rounded-lg text-white text-sm md:text-xs lg:text-sm font-poppins">
                View Document
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col w-2/3 mt-24  h-[77vh] noscrollBar  overflow-y-auto  ">
        {medicalTab === "" && (
          <div className=" w-full h-full flex flex-col items-center justify-center ">
            <img src={NoRecord} alt="" />
            <div className="text-xs text-[#9898a386] text-center leading-5 max-w-sm mx-auto">
              In order to obtain the labor medical record, we will need to input
              the labor ID to access the laborer's information and initiate the
              examination of the relevant documents.
            </div>
          </div>
        )}
        {medicalTab === "view" && (
          <div className="flex flex-col w-full h-full ">
            <div className="flex w-full h-full space-x-4">
              <div className="h-[70vh] overflow-y-auto noscrollBar w-2/3 bg-white rounded-md">
                {step === "past" && <PastMedical />}
                {step === "medicalOne" && <MedicalSectionOne />}
                {step === "medicalTwo" && <MedicalSectionTwo />}
                {step === "investigationOne" && <InvestigationSectionOne />}
                {step === "investigationTwo" && <InvestigationSectionTwo />}
                {step === "investigationThree" && <InvestigationSectionThree />}
                {step === "physical" && <PhysicalComment />}
              </div>
              <div className="h-full w-1/3 bg-white rounded-md">
                <div className=" h-full flex flex-col items-center justify-center ">
                  <img src={NoRecord} alt="" className="w-64" />
                  <div className="text-xs p-5 text-[#9898a386] text-center leading-5 max-w-sm mx-auto">
                    This is where the admin gives approval for the agency to get
                    start the contract process
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4 py-5 text-xs justify-end">
              {" "}
              <button
                onClick={() => {}}
                className="text-[#008894] cursor-pointer border  border-[#008894] bg-[#F0F7F7] font-bold px-6 rounded-md py-1">
                {" "}
                cancel
              </button>
              <button
                // type="submit"
                onClick={handleClick}
                className="text-white border border-[#008894] bg-[#008894] px-6 rounded-md py-1 cursor-pointer">
                {" "}
                Continue
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MedicalExamination;
