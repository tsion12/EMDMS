import React from "react";
import NavBar from "./components/layout/Admin/NavBar";
import Aside from "./components/layout/Admin/SideBar";
import { useLocation } from "react-router-dom";
import { Routes } from "react-router-dom";
import routes from "./routes/route";
import AdminLayout from "./components/layout/Admin/AdminLayout";
import AgencyLayout from "./components/layout/Agency/AgencyLayout";
function App() {
  const { pathname } = useLocation();

  const adminLayoutUsingRoutes = ["/", "/admin", "/admin/foreign-management"];
  return (
    <>
      <div className="h-screen overflow-hidden relative font-poppins">
        {adminLayoutUsingRoutes.includes(pathname) ? (
          <AdminLayout>
            <Routes>{routes}</Routes>
          </AdminLayout>
        ) : (
          <AgencyLayout>
            <Routes>{routes}</Routes>
          </AgencyLayout>
        )}
      </div>
    </>
  );
}

export default App;
