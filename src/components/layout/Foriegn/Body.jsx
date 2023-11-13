import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Body = ({ custom, children, back }) => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div
        className={`${custom} dashboardLayout  px-10 pt-10 customHeight flex flex-col gap-4 overflow-hidden`}>
        <div>
          {back ? (
            <BsArrowLeft
              onClick={goBack}
              className="text-emdmsPrimary text-2xl cursor-pointer transition-all duration-200 ease-in-out hover:scale-110"
            />
          ) : (
            ""
          )}
        </div>
        {children}
      </div>
    </>
  );
};

export default Body;
