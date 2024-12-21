import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PLogin from "./components/patient/login/plogin";
import PRegister from "./components/patient/login/pregister";
import PDashboard from "./components/patient/dashboard/dashboard";
function App() {
  return (
      <Router>
        <Routes>
          <Route path="login" element={<PLogin />} />
          <Route path="register" element={<PRegister/>}/>
          <Route path="dashboard" element={<PDashboard/>} />
        </Routes>
      </Router>
  );
}

export default App;
