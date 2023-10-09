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
 
