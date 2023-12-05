import { Route } from "react-router-dom";
import Dashboard from "../pages/Admin/Dashboard";
import LocalApplicants from "../pages/Admin/LocalApplicants";
import Info from "../pages/Info";
import Informations from "../pages/Info";
import AgencyDashboard from "../pages/Agency/AgencyDashboard";
import StuffList from "../pages/Agency/StuffList";
import License from "../pages/Agency/License";
import Partnership from "../pages/Foriegn/partnership";
import ForeignDashboard from "../pages/Foriegn/Dashboard";
import LicenceInspection from "../pages/Admin/license_Inspection/LicenceInspection";
import JobOrder from "../pages/Foriegn/JobOrder";
import AgencyJobOrder from "../pages/Agency/AgencyJobOrder";
import AdminJobOrder from "../pages/Admin/pages/JObOrder";
import Contracts from "../pages/Agency/Contracts";

const routes = [
  <Route path="/" element={<Informations />} />,

  <Route path="/admin" element={<Dashboard />} />,
  <Route path="/admin/local-applicants" element={<LocalApplicants />} />,
  <Route path="/admin/inspection" element={<LicenceInspection />} />,
  <Route path="/admin/job-order" element={<AdminJobOrder />} />,

  <Route path="/agency" element={<AgencyDashboard />} />,
  <Route path="/agency/stuff" element={<StuffList />} />,
  <Route path="/agency/job-order" element={<AgencyJobOrder />} />,
  <Route path="/agency/license" element={<License />} />,
  <Route path="/agency/contracts" element={<Contracts />} />,

  <Route path="/foreign/dashboard" element={<ForeignDashboard />} />,
  <Route path="/foreign/partnership" element={<Partnership />} />,
  <Route path="/foreign/job-order" element={<JobOrder />} />,
];

export default routes;
