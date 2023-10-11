import React, { useEffect } from "react";
import NavBar from "./components/layout/Admin/NavBar";
import Aside from "./components/layout/Admin/SideBar";
import { useLocation } from "react-router-dom";
import { Routes } from "react-router-dom";
import routes from "./routes/route";
import AdminLayout from "./components/layout/Admin/AdminLayout";
import AgencyLayout from "./components/layout/Agency/AgencyLayout";
import ForiegnLayout from "./components/layout/Foriegn/ForiegnLayout";
function App() {
  const { pathname } = useLocation();

  function getPathFromString(str) {
    if (str.startsWith("/admin")) {
      return "admin";
    } else if (str.startsWith("/foreign")) {
      return "foreign";
    } else if (str.startsWith("/agency")) {
      return "agency";
    } else {
      return "unknown";
    }
  }

  useEffect(() => {
    console.log(getPathFromString(pathname));
  }, []);
  return (
    <>
      <div className="h-screen overflow-hidden relative font-poppins">
        {getPathFromString(pathname) === "admin" && (
          <AdminLayout>
            <Routes>{routes}</Routes>
          </AdminLayout>
        )}
        {getPathFromString(pathname) === "agency" && (
          <AgencyLayout>
            <Routes>{routes}</Routes>
          </AgencyLayout>
        )}
        {getPathFromString(pathname) === "foreign" && (
          <ForiegnLayout>
            <Routes>{routes}</Routes>
          </ForiegnLayout>
        )}
      </div>
    </>
  );
}

export default App;
