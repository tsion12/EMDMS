import React from "react";
import NavBar from "./components/layout/NavBar";
import Aside from "./components/layout/SideBar";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from "react-router-dom";
import routes from "./routes/route";
function App() {
  return (
    <>
      <Router>
        <div className="h-screen font-poppins">
          <NavBar className="p-8" />
          <div className="flex">
            <Aside />
            <Routes>{routes}</Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
