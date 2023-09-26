import { Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ForeignManagement from "../pages/LocalApplicants";
// import Documents from "../pages/Documents";

const routes = [
  <Route path="/" element={<Dashboard />} />,
  <Route path="/foreign-management" element={<ForeignManagement />} />,
//   <Route path="/documents" element={<Documents />} />,
];

export default routes;
