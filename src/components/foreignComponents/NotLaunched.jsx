import React from "react";
import NotLaunchedSvg from "../../assets/svg/NotLaunched.svg";

const NotLaunched = () => {
  return (
    <>
      <div className="flex flex-col gap-6 items-center justify-end h-screen overflow-hidden">
        <h1 className="text-5xl text-[#005656]/20 capitalize font-bold">
          Not Launched Yet!
        </h1>
        <p className="text-[24px] text-[#005656] text-center w-3/4 font-bold">
          The functionality of this feature has not yet been made available for
          our users. We anticipate its release in the near future.
        </p>

        <img
          src={NotLaunchedSvg}
          alt="NotLaunchedSvg"
          className="max-w-[680px]"
        />
      </div>
    </>
  );
};

export default NotLaunched;
