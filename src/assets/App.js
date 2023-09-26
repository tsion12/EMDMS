import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import 'Routes' from 'react-router-dom'

import DashboardPage from "./pages/DashboardPage";

import LocalApplicantsContent from "./pages/LocalApplicantsSection";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
     
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route
              path="/local-applicants"
              element={<LocalApplicantsContent />}
            />
          </Routes>
     
      </Layout>
    </Router>
  );
};

export default App;
