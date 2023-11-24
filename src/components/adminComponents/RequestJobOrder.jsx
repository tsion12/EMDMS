import React, { useState, useEffect } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import {
  AiOutlineInfoCircle,
  AiTwotoneCalendar,
  AiFillFileAdd,
} from "react-icons/ai";
import { MdFormatListBulleted, MdAddCircleOutline } from "react-icons/md";
import Select from "react-select";
import Button from "../utilities/Button";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Requestjoborder = ({ goback }) => {
  const [page, setPage] = useState(1);
  const changePage = () => {
    setPage(page + 1);
  };

  const goToPreviousTab = () => {
    setPage(page - 1);
  };
  useEffect(() => {
    console.log("my", page);
  }, [page]);

  return (
    <>
      <div className="flex flex-col gap-8">
        <div className=" flex items-center gap-2">
          <Button
            handelClick={() => {}}
            custom={"bg-emdmsPrimary px-2 py-2 rounded-sm"}>
            <FaAngleLeft
              onClick={() => goback("table")}
              className="text-white"
            />
          </Button>
          <div className="text-2xl text-emdmsPrimary font-poppins font-medium">
            Job Order Information
          </div>
        </div>
        {page === 1 && (
          <>
            <div className="lg:flex gap-4">
              <div className="lg:flex lg:flex-col  lg:w-[70%] gap-4">
                <div className="bg-white  rounded-lg shadow-lg">
                  <div className="bg-[#005656] rounded-tl-lg  w-1/4 top-0 h-2"></div>
                  <div className=" py-16 px-10">
                    {/* job order information */}
                    <div className="flex lg:flex-col gap-2">
                      <div className="text-[#008080] font-poppins font-medium">
                        <p>Job Order Information</p>
                      </div>
                      <div className="text-[#7F7F7F] text-xs">
                        <p>
                          Please Provide the neccassary Information for the job
                          order form
                          <span className="block">
                            and once completed submitted to the admin for
                            approval
                          </span>
                        </p>
                      </div>
                    </div>
                    {/* job order information */}

                    {/* text-field one */}
                    <div className=" lg:flex  lg:justify-between mt-10">
                      <div className="lg:flex lg:flex-col">
                        <div className="flex items-center gap-2">
                          <AiOutlineInfoCircle className="text-[#00808099]" />
                          <div className="flex flex-col">
                            <div className="">
                              <p className="text-gray-500">
                                Job Order Code{" "}
                                <span className="text-red-400">*</span>
                              </p>
                            </div>
                            <div>
                              <p className="text-[#949494] text-xs">
                                Eg. Partner name + Date(Year) + Generated code
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <input
                        type="text"
                        id="name"
                        name="name"
                        class="lg:w-[50%] px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emdmsPrimary"
                        placeholder="DUB_AHM_MOH_1123"
                      />
                    </div>
                    {/* end of text-field one */}

                    {/* end of text-field two */}
                    <div className="lg:flex justify-between mt-8">
                      <div className="lg:flex flex-col">
                        <div className="flex items-center gap-2">
                          <AiOutlineInfoCircle className="text-[#00808099]" />
                          <div className="flex flex-col">
                            <div>
                              <p className="text-gray-500">Quantity *</p>
                            </div>
                            <div>
                              <p className="text-[#949494] text-xs font-poppins">
                                Eg. 150, 250, 500, ...
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <input
                        type="text"
                        id="name"
                        name="name"
                        class=" lg:w-[50%] px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Type Job Oder number"
                      />
                    </div>
                    {/* text-field two */}

                    {/* text-field three */}
                    <div className=" lg:flex justify-between mt-8">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <AiOutlineInfoCircle className="text-[#00808099]" />
                          <div className="flex flex-col">
                            <div>
                              <p className="text-gray-500">Partners List *</p>
                            </div>
                            <div>
                              <p className="text-[#949494] text-xs font-poppins">
                                Eg. Choose a partner from Ethiopia
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Select
                        className="text-emdmsPrimary lg:w-[50%] placeholder:text-N95 placeholder:text-sm  focus:border-emdmsPrimary focus:ring-emdmsPrimary rounded-md "
                        options={options}
                        placeholder="Select partner from ..."
                      />
                    </div>
                    {/* end of text-field three */}

                    {/* text-field four */}
                    <div className="lg:flex justify-between mt-8">
                      <div className="lg:flex flex-col">
                        <div className="flex items-center gap-2">
                          <AiOutlineInfoCircle className="text-[#00808099]" />
                          <div className="lg:flex flex-col">
                            <div>
                              <p className="text-gray-500">
                                Job Order Description *
                              </p>
                            </div>
                            <div>
                              <p className="text-[#949494] text-xs font-poppins">
                                Eg. Description
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col lg:w-[50%]">
                        <div className="bg-emdmsPrimary gap-4 flex items-center px-4 py-1 rounded-t-md">
                          <p className="text-white font-bold">B</p>
                          <p className="text-white">/</p>
                          <MdFormatListBulleted className="text-white" />
                        </div>
                        <div className="">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            class="w-full h-[150px] px-2 py-2 border border-gray-300 rounded-b-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Description"
                          />
                        </div>
                      </div>
                    </div>
                    {/* end of text-field four */}
                  </div>
                </div>

                <div className="lg:flex justify-end sm:text-center">
                  <Button
                    handelClick={changePage}
                    custom="bg-[#005656] text-white px-4 py-2 rounded-md w-max py-2 px-8">
                    Next
                  </Button>
                </div>
              </div>

              {/* right side card */}
              <div className="lg:w-[30%] space-y-4 flex flex-col h-[68vh] overflow-y-auto  ">
                {[1, 2, 3, 4].map(() => (
                  <div className=" p-6 flex flex-col gap-4 items-start bg-white  border-4  border-white  rounded-xl">
                    <div className="font-bold text-lg">Job Order Info #1</div>
                    <div className="border border-[#D9D9D9] w-full"></div>
                    <div className=" px-6 flex flex-col gap-3">
                      <div className="flex flex-col ">
                        <div className="text-emdmsPrimary text-lg">
                          Job Category
                        </div>
                        <div className="text-[14px]">
                          Senior Marketing Manager
                        </div>
                      </div>
                      <div className="flex flex-col ">
                        <div className="text-emdmsPrimary text-lg">
                          Job Position
                        </div>
                        <div className="text-[14px]">
                          Senior Marketing Manager
                        </div>
                      </div>
                      <div className="flex flex-col ">
                        <div className="text-emdmsPrimary text-lg">
                          Job Category
                        </div>
                        <div className="text-[14px]">
                          Senior Marketing Manager
                        </div>
                      </div>{" "}
                      <div className="flex flex-col ">
                        <div className="text-emdmsPrimary text-lg">
                          Job Category
                        </div>
                        <div className="text-[14px]">
                          Senior Marketing Manager
                        </div>
                      </div>
                      <div className="flex flex-col ">
                        <div className="text-emdmsPrimary text-lg">
                          Job Category
                        </div>
                        <div className="text-[14px]">
                          Senior Marketing Manager
                        </div>
                      </div>
                      <div className="flex flex-col ">
                        <div className="text-emdmsPrimary text-lg">
                          Job Category
                        </div>
                        <div className="text-[14px]">
                          Senior Marketing Manager
                        </div>
                      </div>
                      <div className="flex flex-col ">
                        <div className="text-emdmsPrimary text-lg">
                          Job Category
                        </div>
                        <div className="text-[14px]">
                          Senior Marketing Manager
                        </div>
                      </div>
                    </div>
                  </div>
                ))}{" "}
              </div>

              {/* end of right side card */}
            </div>
          </>
        )}

        {page === 2 && (
          <>
            <div className=" mt-8 flex gap-4 ">
              <div className="flex flex-col  w-[70%] gap-4">
                <div className="bg-white  rounded-lg shadow-lg overflow-y-auto">
                  <div className="bg-[#005656] rounded-tl-lg  w-2/4 top-0 h-2"></div>
                  <div className=" py-16 px-10">
                    {/* job order information */}
                    <div className="lg:flex justify-between">
                      <div className="lg:flex flex-col gap-1">
                        <div className="text-[#008080] font-poppins font-medium">
                          <p>Job Order Information</p>
                        </div>
                        <div className="text-[#7F7F7F] text-xs">
                          <p>
                            Please Provide the neccassary Information for the
                            job order form{" "}
                            <span className="block">
                              and once completed submitted to the admin for
                              approval
                            </span>
                          </p>
                        </div>
                      </div>

                      <Button
                        handelClick={() => {}}
                        custom="text-sm flex gap-2 items-center bg-[#005656] text-white rounded-md w-max h-max py-3">
                        <MdAddCircleOutline className="text-white " />
                        Add Job Order Info
                      </Button>
                    </div>

                    {/* job order information */}
                    {/* text-field one */}
                    <div className=" flex justify-between mt-4">
                      <div className="flex flex-col">
                        <div className="flex  gap-2">
                          <AiOutlineInfoCircle className="text-[#00808099]" />
                          <div className="flex flex-col">
                            <div>
                              <p className="text-gray-500">Job Category *</p>
                            </div>
                            <div>
                              <p className="text-[#949494] text-xs font-poppins">
                                Eg. Professional and Household
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Select
                        className="text-emdmsPrimary w-[50%]  placeholder:text-N95 placeholder:text-sm  focus:border-emdmsPrimary focus:ring-emdmsPrimary rounded-md "
                        options={options}
                        placeholder="Please Select Job.."
                      />
                    </div>
                    {/* end of text-field one */}

                    {/* text-field two */}
                    <div className=" flex justify-between mt-4">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <AiOutlineInfoCircle className="text-[#00808099]" />
                          <div className="flex flex-col">
                            <div>
                              <p className="text-gray-500">Job Position *</p>
                            </div>
                            <div>
                              <p className="text-[#949494] text-xs  font-poppins">
                                Eg. Driver, House Keeper, etc...
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Select
                        className="text-emdmsPrimary w-[50%]  placeholder:text-N95 placeholder:text-sm  focus:border-emdmsPrimary focus:ring-emdmsPrimary rounded-md "
                        options={options}
                        placeholder="Select job pos..."
                      />
                    </div>
                    {/* end of text-field two */}

                    {/* text-field three */}
                    <div className=" flex justify-between mt-4">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <AiOutlineInfoCircle className="text-[#00808099]" />
                          <div className="flex flex-col">
                            <div>
                              <p className="text-gray-500">Quantity </p>
                            </div>
                            <div>
                              <p className="text-[#949494] text-xs font-poppins">
                                Eg. must be equal to the one you <br />
                                wrote on the previous form
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Select
                        className="text-emdmsPrimary w-[50%]  placeholder:text-N95 placeholder:text-sm  focus:border-emdmsPrimary focus:ring-emdmsPrimary rounded-md "
                        options={options}
                        placeholder="Type how many jo..."
                      />
                    </div>
                    {/* end of text-field three */}

                    {/* text-field four */}
                    <div className="flex  mt-4 text-[#949494] font-medium">
                      <div>Salary as per mols agreement</div>
                      {/* <Checkbox toggle /> */}
                    </div>
                    <div>
                      <p className="text-xs text-[#949494]">
                        for compansations based on guidelines, including factors
                        like position and <br /> market rates, fostering
                        compliant and harmonious workplaces{" "}
                      </p>
                    </div>
                    {/* end of text-field four */}
                    <div className=" flex justify-between mt-4">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <AiOutlineInfoCircle className="text-[#00808099]" />
                          <div className="flex flex-col">
                            <div>
                              <p className="text-gray-500">Salary </p>
                            </div>
                            <div>
                              <p className="text-[#949494] text-xs font-poppins">
                                Eg. Addis Ababa, Piassa
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <Select
                        className="text-emdmsPrimary w-[50%]  placeholder:text-N95 placeholder:text-sm  focus:border-emdmsPrimary focus:ring-emdmsPrimary rounded-md "
                        options={options}
                        placeholder="Type how many jo..."
                      />
                    </div>
                    <div className=" flex justify-between mt-4">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <AiOutlineInfoCircle className="text-[#00808099]" />
                          <div className="flex flex-col">
                            <div>
                              <p className="text-gray-500">Currency </p>
                            </div>
                            <div>
                              <p className="text-[#949494] text-xs font-poppins">
                                Eg. Addis Ababa, Piassa
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <input
                        type="text"
                        id="disabled-input"
                        aria-label="disabled input"
                        class="mb-6 bg-gray-100 w-[50%] border border-gray-100 text-gray-900 text-sm rounded-lg block py-2.5 text-center cursor-not-allowed  dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value="please select job location"
                        disabled
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <Button
                    handelClick={goToPreviousTab}
                    custom=" text-[#005656] px-4 py-2 rounded-md w-[200px] border border-[#005656]">
                    Back
                  </Button>
                  <Button
                    handelClick={changePage}
                    custom="bg-[#005656]  text-white px-4 py-2 rounded-md w-[200px]">
                    Next
                  </Button>
                </div>
              </div>

              {/* right side card */}
              <div className="lg:w-[30%] p-6 flex flex-col gap-6 items-start bg-emdmsPrimary h-max border-4 border-white rounded-xl">
                {/* <div className="flex flex-col gap-2">
           <p className="font-medium text-white">
             Register your personal Information
           </p>
           <p className="font-light text-xs text-N99/60 leading-relaxed">
             Here in this section is general information. you will need to
             complete all inputs in order to be verified and continue the
             process.
           </p>
         </div> */}
                <div className="lg:flex flex-col gap-2">
                  <p className="font-medium text-white">Reminder</p>
                  <ul className="px-6 list-disc font-light text-xs text-N99/60 leading-relaxed">
                    <li>
                      Make sure you have submitted all necessary information.
                    </li>
                    <li>
                      Make sure you have provided legit/legal residence
                      locations
                    </li>
                    <li>
                      If you find any difficulties while you submit the
                      information's Contact us with our email address
                    </li>
                  </ul>
                </div>

                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    className="w-5 h-5 checked:bg-teal-600 checked:border-transparent"
                    // {...register("agreeTerms")}
                  />
                  <p className="text-white font-light text-sm">
                    I agree to the{" "}
                    <span className="font-medium underline cursor-pointer">
                      terms and conditions
                    </span>
                  </p>
                </div>
                {/* {errors.agreeTerms && (
           <p className="text-yellow-500 text-xs">
             {errors.agreeTerms.message}
           </p>
         )} */}
              </div>
              {/* end of right side card */}
            </div>
          </>
        )}
        {page === 3 && (
          <>
            <div className=" mt-8 flex gap-4 ">
              <div className="flex flex-col  w-[70%] gap-4">
                <div className="bg-white   rounded-lg shadow-lg">
                  <div className="bg-[#005656] rounded-t-lg  w-full top-0 h-2"></div>
                  <div className="  py-16 px-10">
                    {/* job order information */}
                    <div className="flex flex-col gap-1">
                      <div className="text-[#005656] font-poppins font-medium">
                        <p>File Upload</p>
                      </div>
                      <div className="text-[#7F7F7F] text-xs font-poppins">
                        <p>
                          Based on this Configurations, you can modify the
                          compensation
                          <span className="block">
                            that your applicant will recieve and publicize your
                            job.
                          </span>
                        </p>
                      </div>
                    </div>
                    {/* job order information */}
                    {/* text-field one */}
                    <div className=" lg:flex  justify-between  mt-10">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <AiOutlineInfoCircle className="text-[#00808099]" />
                          <a className="flex flex-col">
                            <div className="">
                              <p className="text-black">
                                Upload Your Partnership Agreement Document Here
                                <span className="text-red-400">*</span>
                              </p>
                            </div>
                            <div>
                              <p className="text-[#949494] text-xs">Max 4mb</p>
                              <p className="text-[#949494] text-xs">
                                Eg. pdf, jpg, png
                              </p>
                            </div>
                          </a>
                        </div>
                      </div>

                      {/* <input
                    type="text"
                    id="name"
                    name="name"
                    class="w-[50%] px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emdmsPrimary"
                    placeholder="DUB_AHM_MOH_1123"
                  /> */}

                      <div className="border border-[#00565640] rounded-md lg:w-[50%] h-[200px] py-20 ">
                        <div className="flex flex-col items-center">
                          <AiFillFileAdd className="text-[#008080]" />
                          <div className="text-[#008080]">
                            Upload a file here
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end of text-field one */}
                    {/* text-field four */}
                    {/* end of text-field four */}
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <Button
                    handelClick={goToPreviousTab}
                    custom={
                      "text-[#005656] px-4 py-2 rounded-md w-[200px] border border-[#005656]"
                    }>
                    Back
                  </Button>
                  <Button
                    handelClick={goback}
                    custom={
                      "bg-[#005656]  text-white px-4 py-2 rounded-md w-[200px]"
                    }>
                    Submit
                  </Button>
                </div>
              </div>

              {/* right side card */}
              <div className="hidden lg:w-[30%] sm:w-[100%] p-6 lg:flex flex-col gap-6   items-start bg-emdmsPrimary h-max border-4 border-white rounded-xl">
                {/* <div className="flex flex-col gap-2">
            <p className="font-medium text-white">
              Register your personal Information
            </p>
            <p className="font-light text-xs text-N99/60 leading-relaxed">
              Here in this section is general information. you will need to
              complete all inputs in order to be verified and continue the
              process.
            </p>
          </div> */}
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-white">Reminder</p>
                  <ul className="px-6 list-disc font-light text-xs text-N99/60 leading-relaxed">
                    <li>
                      Make sure you have submitted all necessary information.
                    </li>
                    <li>
                      Make sure you have provided legit/legal residence
                      locations
                    </li>
                    <li>
                      If you find any difficulties while you submit the
                      information's Contact us with our email address
                    </li>
                  </ul>
                </div>

                <div className="flex gap-3 items-center">
                  <input
                    type="checkbox"
                    className="w-5 h-5 checked:bg-teal-600 checked:border-transparent"
                    // {...register("agreeTerms")}
                  />
                  <p className="text-white font-light text-sm">
                    I agree to the
                    <span className="font-medium  underline  cursor-pointer">
                      terms and conditions
                    </span>
                  </p>
                </div>
                {/* {errors.agreeTerms && (
            <p className="text-yellow-500 text-xs">
              {errors.agreeTerms.message}
            </p>
          )} */}
              </div>
              {/* end of right side card */}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Requestjoborder;
