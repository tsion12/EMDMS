import React from "react";

const Button = ({ custom, children, handelClick }) => {
  const animateButtonClick = (event) => {
    event.target.classList.add("scale-[0.97]");
    setTimeout(() => {
      event.target.classList.remove("scale-[0.97]");
    }, 100);
  };

  return (
    <>
      <button
        onClick={(e) => {
          handelClick();
          animateButtonClick(e);
        }}
        className={`${custom} cursor-pointer rounded-md px-2 text-sm font-medium transition-all duration-200 ease-in-out`}>
        {children}
      </button>
    </>
  );
};

export default Button;
