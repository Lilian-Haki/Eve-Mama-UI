import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PLogin from "./components/patient/login/plogin";
import PRegister from "./components/patient/login/pregister";
import PDashboard from "./components/patient/dashboard/dashboard";
import AddAppointment from "./components/patient/appointments/addApointment";
import PendingAppointment from "./components/patient/appointments/pendingAppointment";
import ApprovedAppointment from "./components/patient/appointments/approvedAppointments";
import CompletedAppointments from "./components/patient/appointments/completedAppointment";
import LandingPage from "./components/landingpage";
function App() {
  return (
      <Router>
        <Routes>
          <Route path="login" element={<PLogin />} />
          <Route path="register" element={<PRegister/>}/>
          <Route path="dashboard" element={<PDashboard/>} />
          <Route path="add_appointment" element={<AddAppointment/>}/>
          <Route path="approved_appointment" element={<ApprovedAppointment/>}/>
          <Route path="pending_appointment" element={<PendingAppointment/>}/>
          <Route path="completed_appointment" element={<CompletedAppointments/>} />
          <Route path="/" element={<LandingPage/>}/>
        </Routes>
      </Router>
  );
}

export default App;
