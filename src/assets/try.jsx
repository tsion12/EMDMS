<div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
  <div className="bg-white p-8 rounded shadow-lg w-[800px] overflow-hidden modal-container">
    <div className="flex flex-col space-y-6 items-start">
      <button className="flex items-end justify-end" onClick={closeModal}>
        <MdOutlineCancel className="text-gray-400 text-2xl " />
      </button>
      <div className="text-[#005656] text-2xl font-bold">Add Staffs</div>
      <div className="text-[#212121] text-xs tracking-wide font-poppins">
        Add staff members who works at the organization
      </div>
      <div className="border border-[#1818184f] w-full "></div>
    </div>

    <div className="pt-5 pb-3 text-[#212121] font-semibold text-sm">
      Enter labor ID
    </div>
    <div className="flex w-full justify-between">
      <form class="flex items-center w-[90%]  ">
        <div class="relative w-full  ">
          <div class="absolute inset-y-0 left-0 flex items-center pl-6 ">
            <AiOutlineSearch />
          </div>
          <input
            type="text"
            id="simple-search"
            class="bg-white border border-[#00808033] text-black text-sm font-medium rounded-lg rounded-r-none block w-full py-4 px-14 "
            placeholder="Search "
          />
        </div>
        <div className="w-[15%]">
          {" "}
          <button
            onClick={handleSearch}
            class="py-4 px-12 ml-2 text-sm font-medium text-white bg-[#008080] rounded-lg rounded-l-none border ">
            {" "}
            Select
          </button>
        </div>
      </form>
    </div>
    {/* {isSearch === true && (
                <div>
                  <div>jdierhek</div>
                  <div>ksejroiwjf</div>
                </div>
              )} */}

    <div className="mt-4">
      <div className="text-[#005656] font-medium text-lg">Labor</div>
      <div className="flex items-start justify-between mt-4">
        <div className="flex space-x-2 items-center">
          <div className="p-2 rounded-full">
            {" "}
            <img src={User} alt="" className="w-16" />
          </div>
          <div className="flex flex-col items-start text-[#313A4E] font-poppins">
            <div className="">Libamlak Birhanu Workalem</div>
            <div>L1234567890183</div>
          </div>
        </div>

        <div>
          <div className="mb-3">
            <select
              id="countries"
              class=" text-black bg-white font-medium rounded-lg shadow-lg text-sm px-5 py-2.5 text-center inline-flex items-center hover:bg-border-red-200   w-full p-2.5 ">
              <option selected>Manager</option>
              <option value="CA">IT</option>
              <option value="FR">Owner</option>
              <option value="CA">Secretary</option>

              <option value="CA">Staff</option>
            </select>{" "}
          </div>
        </div>
      </div>
      <div className="border border-[#1818184f] w-full"></div>
    </div>

    <div className="mt-4 mb-8">
      <div className="text-[#005656] font-medium text-lg">Documents</div>
      <div className="bg-white shadow-xl rounded-lg items-center flex justify-between p-8">
        <div className="flex flex-col items-start ">
          <div className="text-[#464255]">Police Certificate</div>
          <div className="text-xs max-w-lg text-[#A3A3A3]">
            A bank statement is typically a digital or physical document that
            provides a summary of the transactions, balances, and activity in a
            bank account over a specific period of time.
          </div>
        </div>

        <div className="flex items-center">
          {!isUploaded ? (
            <button
              className="border py-2 px-4 border-emdmsPrimary text-emdmsPrimary rounded-md text-xs"
              onClick={handleUpload}>
              Upload Document
            </button>
          ) : (
            <div className="flex space-x-2">
              <button className=" py-2 px-4 bg-[#008080] text-white rounded-md text-xs">
                Uploaded
              </button>
              <div className="bg-yellow-400 px-4 rounded-lg text-white font-bold flex items-center">
                <LiaRedoAltSolid />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    <div className="mt-4 mb-8">
      <div className="text-[#005656] font-medium text-lg">Documents</div>
      <div className="bg-white shadow-xl rounded-lg items-center flex justify-between p-8">
        <div className="flex flex-col items-start ">
          <div className="text-[#464255]">Government ID</div>
          <div className="text-xs max-w-lg text-[#A3A3A3]">
            A bank statement is typically a digital or physical document that
            provides a summary of the transactions, balances, and activity in a
            bank account over a specific period of time.
          </div>
        </div>

        <div className="flex items-center">
          {!isUploaded ? (
            <button
              className="border py-2 px-4 border-emdmsPrimary text-emdmsPrimary rounded-md text-xs"
              onClick={handleUpload}>
              Upload Document
            </button>
          ) : (
            <div className="flex space-x-2">
              <button className=" py-2 px-4 bg-[#008080] text-white rounded-md text-xs">
                Uploaded
              </button>
              <div className="bg-yellow-400 px-4 rounded-lg text-white font-bold flex items-center">
                <LiaRedoAltSolid />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    <div className="flex justify-center">
      <button className="border border-[#008080] text-[#008080] font-bold py-2 px-16 rounded mr-4 shadow-lg">
        Cancel
      </button>
      <button
        onClick={() => {
          setActiveTab("addMembers");
          setIsOpen(false);
        }}
        className="bg-[#008080] text-white font-bold py-2 px-20 rounded shadow-lg">
        Add
      </button>
    </div>
  </div>
</div>;
