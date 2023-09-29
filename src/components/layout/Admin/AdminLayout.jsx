import React from "react";
import Aside from "./SideBar";
import NavBar from "./NavBar";

const AdminLayout = ({ children }) => {
  return (
    <>
      <NavBar className="p-8" />
      <div className="flex">
        <Aside />
        {children}
      </div>
    </>
  );
};

export default AdminLayout;
