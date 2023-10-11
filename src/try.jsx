// <>
//   <div className="h-[450px] overflow-y-auto flex flex-col space-y-6">
//     <div className="flex justify-between items-start bg-white rounded-md px-4 py-10 shadow-md">
//       <div className="flex space-x-3 justify-center">
//         {" "}
//         <BsChevronDown className="mr-2 font-bold text-2xl" />
//         <div className="flex flex-col item-start">
//           <div className="flex items-center mb-2">
//             <h4 className="text-xl font-bold">Bank Statement</h4>
//           </div>
//           <p className="text-[#A3A3A3] mb-2 max-w-lg text-xs">
//             A bank statement is typically a digital or physical
//             document that provides a summary of the transactions,
//             balances, and activity in a bank account over a specific
//             period of time.
//           </p>
//           <div className="flex items-center space-x-2">
//             <p className="text-gray-600">Maximum Document</p>
//             <div className="bg-red-400 px-4 py-2 rounded-xl text-white">
//               1
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex items-center space-x-2 bg-emdmsPrimary/70  text-white font-bold py-2 px-4 rounded">
//         <AiOutlinePlus />
//         <button className="">Upload</button>
//       </div>
//     </div>
//     <div className="flex justify-between items-start bg-white rounded-md px-4 py-10 shadow-md">
//       <div className="flex space-x-3 justify-center">
//         {" "}
//         <div className="flex flex-col item-start">
//           <div className="flex items-center mb-2">
//             <h4 className="text-xl font-bold">Bank Guarantee</h4>
//           </div>
//           <p className="text-[#A3A3A3] mb-2 max-w-lg text-xs">
//             A bank guarantee is typically issued as a physical or
//             digital document that outlines the terms and conditions
//             of the guarantee, including the amount of money
//             involved, the parties involved, and the specific
//             obligations that must be fulfilled.
//           </p>
//           <div className="flex items-center space-x-2">
//             <p className="text-gray-600">Maximum Document</p>
//             <div className="bg-green-400 px-4 py-2 text-white rounded-xl">
//               3
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex items-center justify-center space-x-2 bg-emdmsPrimary/70  text-white font-bold py-2 px-4 rounded">
//         <AiOutlinePlus />
//         <button className="">Add Document</button>
//       </div>
//     </div>
//     <div className="flex justify-between items-start bg-white rounded-md px-4 py-10 shadow-md">
//       <div className="flex space-x-3 justify-center">
//         <div className="flex flex-col item-start">
//           <div className="flex items-center mb-2">
//             <h4 className="text-xl font-bold">Bank Statement</h4>
//           </div>
//           <p className="text-[#A3A3A3] mb-2 max-w-lg text-xs">
//             A bank statement is typically a digital or physical
//             document that provides a summary of the transactions,
//             balances, and activity in a bank account over a specific
//             period of time.
//           </p>
//           <div className="flex items-center space-x-2">
//             <p className="text-gray-600">Maximum Document</p>
//             <div className="bg-green-400 px-4 py-2 text-white rounded-xl">
//               2
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex items-center space-x-2 bg-emdmsPrimary/70  text-white font-bold py-2 px-4 rounded">
//         <AiOutlinePlus />
//         <button className="">Add Document</button>
//       </div>
//     </div>
//   </div>
//   <div className="flex justify-end space-x-3">
//     <button
//       onClick={() => {
//         setActiveTab("");
//       }}
//       className="bg-transparent hover:bg-[#008080] text-[#008080] font-bold py-2 px-10 border border-[#008080] rounded">
//       Back
//     </button>
//     <button className="bg-[#008080d4] hover:bg-[#008080] text-white font-bold py-2 px-10 rounded">
//       Next
//     </button>
//   </div>
// </>

 {
   /* <div className=" flex flex-col space-y-8 max-h-[400px]  overflow-y-auto">
                {" "}
                <div className="flex w-full    space-x-4">
                  <div className="bg-white rounded-lg p-14 flex shadow-lg">
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex space-x-2">
                        <div className="mr-4 ">
                          <img
                            src={Profile}
                            alt="Profile Picture"
                            className="rounded-full h-24 w-24"
                          />
                        </div>
                        <div className="flex flex-col items-center space-y-2 justify-center">
                          <h2 className="text-sm font-semibold text-emdmsPrimary">
                            Abdala Agency
                          </h2>
                          <p className="text-[#9A9A9A] text-xs">
                            Business Name
                          </p>
                          <div className="border border-[#EED116] bg-[#FCF9E1] rounded-lg py-1 px-4  flex items-center">
                            <span className="mr-2 text-[#B29C10]">
                              <AiOutlineClockCircle />
                            </span>
                            <span className="text-[#B29C10] text-xs">
                              Pending...
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center mt-10 space-x-10">
                        <div className="flex flex-col mr-4 text-sm">
                          <div className="flex items-center mb-2 text-[#9A9A9A]">
                            <HiPhone className="mr-2" />
                            <span>Phone</span>
                          </div>
                          <div className="flex items-center mb-2 text-[#9A9A9A]">
                            <AiFillHome className="mr-2" />
                            <span>Country</span>
                          </div>
                          <div className="flex items-center mb-2 text-[#9A9A9A]">
                            <BsFlagFill className="mr-2" />
                            <span>City</span>
                          </div>
                          <div className="flex items-center text-[#9A9A9A]">
                            <BsFlagFill className="mr-2" />
                            <span>Emirate/Governor</span>
                          </div>
                        </div>
                        <div className="flex flex-col text-[#005656] font-bold text-sm">
                          <div className="mb-2">+25198903623</div>
                          <div className="mb-2">Saudi Arabia</div>
                          <div className="mb-2">Jeddah</div>
                          <div>Emirate 1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-14 flex shadow-lg">
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex space-x-2">
                        <div className="mr-4 ">
                          <img
                            src={Profile}
                            alt="Profile Picture"
                            className="rounded-full h-24 w-24"
                          />
                        </div>
                        <div className="flex flex-col items-center space-y-2 justify-center">
                          <h2 className="text-sm font-semibold text-emdmsPrimary">
                            Abdala Agency
                          </h2>
                          <p className="text-[#9A9A9A] text-xs">
                            Business Name
                          </p>
                          <div className="border border-[#32A583] bg-[#CBE8E0] rounded-lg py-1 px-4  flex items-center">
                            <span className="mr-2 text-[#32A583]">
                              <BsCheckLg />
                            </span>
                            <span className="text-[#32A583] text-xs">
                              Verified
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center mt-10 space-x-10">
                        <div className="flex flex-col mr-4 text-sm">
                          <div className="flex items-center mb-2 text-[#9A9A9A]">
                            <HiPhone className="mr-2" />
                            <span>Phone</span>
                          </div>
                          <div className="flex items-center mb-2 text-[#9A9A9A]">
                            <AiFillHome className="mr-2" />
                            <span>Country</span>
                          </div>
                          <div className="flex items-center mb-2 text-[#9A9A9A]">
                            <BsFlagFill className="mr-2" />
                            <span>City</span>
                          </div>
                          <div className="flex items-center text-[#9A9A9A]">
                            <BsFlagFill className="mr-2" />
                            <span>Emirate/Governor</span>
                          </div>
                        </div>
                        <div className="flex flex-col text-[#005656] font-bold text-sm">
                          <div className="mb-2">+25198903623</div>
                          <div className="mb-2">Saudi Arabia</div>
                          <div className="mb-2">Jeddah</div>
                          <div>Emirate 1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full space-x-4">
                  {" "}
                  <div className="bg-white rounded-lg p-14 flex shadow-lg">
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex space-x-2">
                        <div className="mr-4 ">
                          <img
                            src={Profile}
                            alt="Profile Picture"
                            className="rounded-full h-24 w-24"
                          />
                        </div>
                        <div className="flex flex-col items-center space-y-2 justify-center">
                          <h2 className="text-sm font-semibold text-emdmsPrimary">
                            Abdala Agency
                          </h2>
                          <p className="text-[#9A9A9A] text-xs">
                            Business Name
                          </p>
                          <div className="border border-[#CC362F] bg-[#F8E5E5] rounded-lg py-1 px-4  flex items-center">
                            <span className="mr-2 text-[#CC362F]">
                              <AiOutlineClose />
                            </span>
                            <span className="text-[#CC362F] text-xs">
                              Rejected
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center mt-10 space-x-10">
                        <div className="flex flex-col mr-4 text-sm">
                          <div className="flex items-center mb-2 text-[#9A9A9A]">
                            <HiPhone className="mr-2" />
                            <span>Phone</span>
                          </div>
                          <div className="flex items-center mb-2 text-[#9A9A9A]">
                            <AiFillHome className="mr-2" />
                            <span>Country</span>
                          </div>
                          <div className="flex items-center mb-2 text-[#9A9A9A]">
                            <BsFlagFill className="mr-2" />
                            <span>City</span>
                          </div>
                          <div className="flex items-center text-[#9A9A9A]">
                            <BsFlagFill className="mr-2" />
                            <span>Emirate/Governor</span>
                          </div>
                        </div>
                        <div className="flex flex-col text-[#005656] font-bold text-sm">
                          <div className="mb-2">+25198903623</div>
                          <div className="mb-2">Saudi Arabia</div>
                          <div className="mb-2">Jeddah</div>
                          <div>Emirate 1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-14 flex shadow-lg">
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex space-x-2">
                        <div className="mr-4 ">
                          <img
                            src={Profile}
                            alt="Profile Picture"
                            className="rounded-full h-24 w-24"
                          />
                        </div>
                        <div className="flex flex-col items-center space-y-2 justify-center">
                          <h2 className="text-sm font-semibold text-emdmsPrimary">
                            Abdala Agency
                          </h2>
                          <p className="text-[#9A9A9A] text-xs">
                            Business Name
                          </p>
                          <div className="border border-[#EED116] bg-[#FCF9E1] rounded-lg py-1 px-4  flex items-center">
                            <span className="mr-2 text-[#B29C10]">
                              <AiOutlineClockCircle />
                            </span>
                            <span className="text-[#B29C10] text-xs">
                              Pending...
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center mt-10 space-x-10">
                        <div className="flex flex-col mr-4 text-sm">
                          <div className="flex items-center mb-2 text-[#9A9A9A]">
                            <HiPhone className="mr-2" />
                            <span>Phone</span>
                          </div>
                          <div className="flex items-center mb-2 text-[#9A9A9A]">
                            <AiFillHome className="mr-2" />
                            <span>Country</span>
                          </div>
                          <div className="flex items-center mb-2 text-[#9A9A9A]">
                            <BsFlagFill className="mr-2" />
                            <span>City</span>
                          </div>
                          <div className="flex items-center text-[#9A9A9A]">
                            <BsFlagFill className="mr-2" />
                            <span>Emirate/Governor</span>
                          </div>
                        </div>
                        <div className="flex flex-col text-[#005656] font-bold text-sm">
                          <div className="mb-2">+25198903623</div>
                          <div className="mb-2">Saudi Arabia</div>
                          <div className="mb-2">Jeddah</div>
                          <div>Emirate 1</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */
}
 
 <button
   onClick={openSideModal}
   className="border border-[#008080] px-4 py-2 flex items-center justify-center text-[#008080] rounded-md ">
   Finish
 </button>;
 {
   sideModalOpen && (
     <div className="fixed inset-0 flex items-center justify-end z-50  backdrop-filter backdrop-blur-sm">
       <div className="fixed inset-y-0 right-0 w-1/4 bg-white rounded-md shadow-lg px-8 py-8">
         <button
           className="absolute top-0 right-0 m-4"
           onClick={closeSideModal}>
           <svg
             xmlns="http://www.w3.org/2000/svg"
             className="h-6 w-6"
             fill="none"
             viewBox="0 0 24 24"
             stroke="currentColor">
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth={2}
               d="M6 18L18 6M6 6l12 12"
             />
           </svg>
         </button>
         <div className="flex flex-col space-y-6 items-start">
           <div className=" flex space-x-6 items-center mt-5">
             <MdOutlineCancel className="text-4xl text-red-500" />
             <div className="text-[#464255] text-2xl font-semibold">
               License No: 12345678
             </div>
           </div>
           <div className="flex items-center max-w-sm">
             <p className="text-lg text-[#BC4C2E]">
               <span className="text-[#661B17] font-semibold">Attention</span>:
               Out of the total of 7 documents submitted, 3 have been deemed
               unacceptable. Therefore, the system is obligated to decline this
               particular license. Kindly provide the reason for rejection in
               order to proceed with the evaluation of the next applicant.
             </p>
           </div>
           <div className="mt-10 text-[#313A4E] text-sm">Rejection Reason</div>
           <div className="bg-[#F0F7F7] rounded-md shadow-md h-[250px] w-full px-8 py-4 text-xs text-[#313a4e97] ">
             type the rejection reason...
           </div>
         </div>
         <div className="flex space-x-6 justify-center mt-10">
           <button
             onClick={closeSideModal}
             className="bg-[#F0F7F7] py-2 px-10 text-[#008080] rounded-lg">
             Cancel
           </button>
           <button
             onClick={() => {
               setActiveTab("approved");
             }}
             className="bg-[#005656] py-2 px-16 text-white rounded-lg">
             Submit
           </button>
         </div>
       </div>
     </div>
   );
}
 
<div className="flex flex-col p-6 bg-[#F0F7F7] rounded-lg space-y-3">
  <div className="text-N40 font-bold">Document Label</div>
  <div className="text-N40 text-xs">
    The document you uploaded and the name you entered are incompatible, so
    please cross-check again and change the name.
  </div>
  <div className="flex justify-end">
    {isApproved ? (
      <button className="bg-[#008080] px-6 py-2 rounded-md shadow-sm text-white font-medium">
        Approved
      </button>
    ) : (
      <div className="flex items-center justify-center space-x-2">
        <button
          onClick={() => {
            // handleRejectClick();
          }}
          className="bg-white px-8 py-2 rounded-md border border-error40 shadow-lg text-error40 font-medium">
          Reject
        </button>

        <button
          onClick={handleApproveClick}
          className="bg-[#008080] px-6 py-2 rounded-md shadow-sm text-white font-medium">
          Approve
        </button>
      </div>
    )}
  </div>
</div>;

{
  sideModalOpen && (
    <div className="fixed inset-0 flex items-center justify-end z-50  backdrop-filter backdrop-blur-sm">
      <div className="fixed inset-y-0 right-0 w-1/4 bg-white rounded-md shadow-lg px-8 py-8">
        <button className="absolute top-0 right-0 m-4" onClick={closeSideModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="flex flex-col space-y-6 items-start">
          <div className=" flex space-x-2 items-center mt-5">
            <MdOutlineCancel className="text-3xl text-red-500" />
            <div className="text-[#464255] text-lg font-semibold">
              Rejected Bank Gurantee
            </div>
          </div>
          <div className="flex items-center max-w-sm">
            <p className="text-lg text-[#BC4C2E]">
              <span className="text-[#661B17] font-semibold">Attention</span>:
              Out of the total of 4 documents submitted, 3 have been deemed
              unacceptable. Now you have rejected this document. Please specify
              your rejection reasons under the given format
            </p>
          </div>
          <div className="mt-10 text-[#313A4E] text-sm font-semibold">
            Rejection Reason
          </div>
          <div className="bg-[#F0F7F7] rounded-md shadow-md h-[250px] w-full px-8 py-4 text-xs text-[#313a4e97] ">
            type the rejection reason...
          </div>
        </div>
        <div className="flex space-x-6 justify-center mt-10">
          <button
            onClick={closeSideModal}
            className="bg-[#F0F7F7] py-2 px-10 text-[#008080] rounded-sm">
            Cancel
          </button>
          <button
            onClick={() => {
              setActiveTab("financial");
            }}
            className=" border border-red-500 py-2 px-16 text-red-500 rounded-sm">
            Reject
          </button>
        </div>
      </div>
    </div>
  );
}