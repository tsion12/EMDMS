import { React, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Button from "../../components/utilities/Button";
import { CiSearch, CiFilter, CiCirclePlus } from "react-icons/ci";
import StarterPage from "../../assets/svg/StarterPPage.svg";
import { MdCancel, MdOutlineCancel } from "react-icons/md";
import Avatar from "../../assets/images/Avatar.png";
import { TbDeviceImacSearch } from "react-icons/tb";
import AddContractPage from "./pages/AddContractPage";
import ContractTable from "../../components/agency components/ContractTable";

const Contracts = () => {
  const [mainPage, setMainPage] = useState("First");
  const [currentTab, setCurrentTab] = useState("Contracts");
  const [sideModalOpen, setSideModalOpen] = useState(false);
  const [cardArea, setCardArea] = useState(false);
  const [StarterPage1, setStarterPage] = useState("one");

  const openSideModal = () => {
    setSideModalOpen(true);
  };

  const closeSideModal = () => {
    setSideModalOpen(false);
  };

  return (
    <div className="w-full flex flex-col gap-10 mt-10 p-10">
      {/* First Column */}
      {sideModalOpen && (
        <div className="fixed inset-0 flex items-center justify-end z-50 transition-all duration-200 ease-in-out bg-black/50">
          <div className="fixed inset-y-0 right-0 w-2/5 bg-white rounded-md shadow-lg px-8 py-8">
            <div className="flex flex-col space-y-6 items-start">
              <div className=" flex space-x-2 items-center mt-5 mb-10">
                <MdCancel
                  onClick={() => {
                    setSideModalOpen(false);
                  }}
                  className="text-3xl text-emdmsPrimary"
                />
              </div>

              <div className="mt-20 flex flex-col space-y-1 ">
                <div className="text-emdmsPrimary text-md font-semibold">
                  Import Lobors
                </div>
                <div className="text-xs text-[#212121]">
                  Copy paste labor ID in order to add them into the list.
                </div>
              </div>
              <div className="  w-full flex items-center justify-between py-5 ">
                <div className="flex items-start justify-center space-x-1 text-sm">
                  <div>
                    <TbDeviceImacSearch className="text-emdmsPrimary mt-1" />
                  </div>
                  <div className="flex flex-col ">
                    <div>Labor ID</div>
                    <div className="text-N70 text-xs">
                      Copy/Write a labor ID to add users
                    </div>
                  </div>
                </div>

                <div
                  onClick={() => {
                    setCardArea(true);
                  }}
                  class="relative w-[55%]  ">
                  <div class="absolute inset-y-0 left-0 flex text-[#212121] items-center pl-3 pointer-events-none">
                    <CiSearch />
                  </div>

                  <input
                    type="search"
                    id="default-search"
                    class="block w-full p-2 pl-10 pr-10 text-sm placeholder:text-gray placeholder:text-xs border border-[#81818133] rounded-md bg-gray-50"
                    placeholder="Search labor id"
                    required
                  />
                </div>
              </div>
              {cardArea === true && (
                <div className="bg-[#F0F7F7] flex justify-between rounded-md shadow-md h-[250px] w-full  text-xs text-[#313a4e97] ">
                  <div className="bg-[#008080] w-[50%] rounded-l-md flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-32 h-32 bg-white ">
                        <img src={Avatar} alt="Avatar" className="w-32 h-32" />
                      </div>

                      <div className="text-white text-lg">
                        Petros Temsgen Alemu
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col space-y-2 pl-5  w-[50%] ">
                    <div
                      onClick={() => {
                        setCardArea(false);
                      }}
                      className="flex justify-end pr-5 pt-2 ">
                      <MdOutlineCancel className="text-xl text-emdmsPrimary" />
                    </div>
                    <div>Labor ID</div>
                    <div className="text-[#008080] text-lg">
                      S23-344-12232-ED12
                    </div>
                    <div className="text-black">
                      Age: <span className="text-[#3A3541AD]">26</span>{" "}
                    </div>
                    <div className="text-black">
                      Gender: <span className="text-[#3A3541AD]">Female</span>{" "}
                    </div>
                    <div className="text-black">
                      Martial Status:{" "}
                      <span className="text-[#3A3541AD]">Single</span>{" "}
                    </div>
                    <div className="text-black">
                      Region: <span className="text-[#3A3541AD]">Amhara</span>{" "}
                    </div>
                    <div className="text-black">
                      Phone Number:{" "}
                      <span className="text-[#3A3541AD]">+251 90 80 70</span>{" "}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex space-x-6 justify-end mt-10">
              <button
                onClick={closeSideModal}
                className=" border border-emdmsPrimary w-36 py-1 text-[#008080] rounded-md">
                Cancel
              </button>
              <button
                onClick={() => {
                  setSideModalOpen(false);
                  setMainPage("addLabors");
                }}
                className=" border bg-emdmsPrimary  border-emdmsPrimary text-white w-36 py-1 rounded-md">
                Add
              </button>
            </div>
          </div>
        </div>
      )}
      {mainPage === "First" && (
        <>
          <div className="flex justify-between  w-full items-center">
            <div>
              <p className="title">Contract Lists</p>
              <p className="title-description">
                Application lists where the applicants submitted their documents
                to see if they are legit or not
              </p>
            </div>
            <div className="flex space-x-3 w-[50%] items-center justify-center">
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
              <div className="flex w-[25%] space-x-2 text-white bg-emdmsPrimary  font-medium rounded-lg text-sm px-5 py-2">
                <div>
                  <CiCirclePlus className="text-2xl" />
                </div>
                <div
                  onClick={() => {
                    setSideModalOpen(true);
                  }}>
                  <button type="button" class="  ">
                    Add Labor
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4 justify-between md:items-center">
            {/* Selection Tab Container */}

            <div className="flex w-full bg-white/50 gap-4 justify-between items-center px-2 py-1 pb-3 relative rounded-lg">
              {/* Loading Bar  */}
              <div className="absolute bg-N99 h-2 w-full bottom-0 left-0 rounded-xl">
                <div
                  className={`${
                    currentTab === "Contracts"
                      ? "w-1/12"
                      : currentTab === "Submitted"
                      ? "w-2/12"
                      : currentTab === "Checked"
                      ? "w-4/12"
                      : currentTab === "OSSC"
                      ? "w-5/12"
                      : currentTab === "Payment"
                      ? "w-7/12"
                      : currentTab === "Issued"
                      ? "w-9/12"
                      : currentTab === "Immigration"
                      ? "w-11/12"
                      : currentTab === "Investigation"
                      ? "w-full"
                      : "w-0"
                  } h-full bg-emdmsPrimary transition-all duration-200 ease-in-out rounded-b-lg `}></div>
              </div>

              {/* Filter Buttons */}
              <div className="w-full flex gap-4 justify-between items-center overflow-auto noscroll-bar">
                <Button
                  handelClick={() => {
                    setCurrentTab("Contracts");
                  }}
                  custom={`${
                    currentTab === "Contracts"
                      ? "text-emdmsPrimary bg-white"
                      : "text-N70"
                  }  py-1.5 whitespace-nowrap text-xs`}>
                  All Contracts
                </Button>
                <Button
                  handelClick={() => {
                    setCurrentTab("Submitted");
                  }}
                  custom={`${
                    currentTab === "Submitted"
                      ? "text-emdmsPrimary bg-white"
                      : "text-N70"
                  } py-1.5 whitespace-nowrap text-xs`}>
                  Qualified
                </Button>
                <Button
                  handelClick={() => {
                    setCurrentTab("Checked");
                  }}
                  custom={`${
                    currentTab === "Checked"
                      ? "text-emdmsPrimary bg-white"
                      : "text-N70"
                  } py-1.5 whitespace-nowrap text-xs`}>
                  Checked
                </Button>
                <Button
                  handelClick={() => {
                    setCurrentTab("OSSC");
                  }}
                  custom={`${
                    currentTab === "OSSC"
                      ? "text-emdmsPrimary bg-white"
                      : "text-N70"
                  } py-1.5 whitespace-nowrap text-xs`}>
                  OSSC verified
                </Button>
                <Button
                  handelClick={() => {
                    setCurrentTab("Investigation");
                  }}
                  custom={`${
                    currentTab === "Investigation"
                      ? "text-emdmsPrimary bg-white"
                      : "text-N70"
                  } py-1.5 whitespace-nowrap text-xs`}>
                  Investigation
                </Button>{" "}
                <Button
                  handelClick={() => {
                    setCurrentTab("Payment");
                  }}
                  custom={`${
                    currentTab === "Payment"
                      ? "text-emdmsPrimary bg-white"
                      : "text-N70"
                  } py-1.5 whitespace-nowrap text-xs`}>
                  Payment Verified
                </Button>{" "}
                <Button
                  handelClick={() => {
                    setCurrentTab("Issued");
                  }}
                  custom={`${
                    currentTab === "Issued"
                      ? "text-emdmsPrimary bg-white"
                      : "text-N70"
                  } py-1.5 whitespace-nowrap text-xs`}>
                  Issued
                </Button>{" "}
                <Button
                  handelClick={() => {
                    setCurrentTab("Immigration");
                  }}
                  custom={`${
                    currentTab === "Immigration"
                      ? "text-emdmsPrimary bg-white"
                      : "text-N70"
                  } py-1.5 whitespace-nowrap text-xs`}>
                  Immigration Verified
                </Button>{" "}
              </div>
            </div>
          </div>
          {StarterPage1 === "one" && (
            <div className="flex items-center justify-center">
              <img src={StarterPage} alt="StarterPage" className="w-[800px]" />
            </div>
          )}
          {StarterPage1 === "Table" && (
            <div className="">
              <ContractTable />
            </div>
          )}
        </>
      )}
      {mainPage === "addLabors" && (
        <>
          {" "}
          <AddContractPage
            mainPage={mainPage}
            setMainPage={setMainPage}
            setStarterPage={setStarterPage}
            setCurrentTab={setCurrentTab}
            cardArea={cardArea}
            setCardArea={setCardArea}
          />
        </>
      )}
    </div>
  );
};

export default Contracts;
