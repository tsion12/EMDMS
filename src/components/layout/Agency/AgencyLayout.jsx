import React from "react";
import SideBar from "../Agency/SideBar";
import NavBar from "../Agency/NavBar";

const AgencyLayout = ({ children }) => {
  return (
    <>
      <NavBar className="h-screen p-8" />
      <div className="flex">
        <SideBar />
        {children}
      </div>
    </>
  );
};

export default AgencyLayout;
