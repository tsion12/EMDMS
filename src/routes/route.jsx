import { Route } from "react-router-dom";
import Dashboard from "../pages/Admin/Dashboard";
import ForeignManagement from "../pages/Admin/LocalApplicants";
import Info from "../pages/Info";
import Informations from "../pages/Info";
import AgencyDashboard from "../pages/Agency/AgencyDashboard";
import StuffList from "../pages/Agency/StuffList";
// import Documents from "../pages/Documents";

const routes = [
  <Route path="/" element={<Informations />} />,

  <Route path="/admin" element={<Dashboard />} />,
  <Route path="/admin/foreign-management" element={<ForeignManagement />} />,

  <Route path="/agency" element={<AgencyDashboard />} />,
  <Route path="/agency/stuff" element={<StuffList />} />,
];

export default routes;
