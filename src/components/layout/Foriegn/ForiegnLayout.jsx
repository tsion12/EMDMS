import React from "react";
import NavBar from "./NavBar";
import Aside from "./SideBar";

const ForiegnLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="flex">
        <Aside />
        {children}
      </div>
    </>
  );
};

export default ForiegnLayout;
