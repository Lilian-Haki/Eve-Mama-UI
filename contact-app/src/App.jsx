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
import PendingPayments from "./components/patient/finances/pendingPayments";
import CompletedPayments from "./components/patient/finances/completedPayments";
import ApprovedPayments from "./components/patient/finances/approvedPayments";
import PrescriptionList from "./components/patient/prescriptions/prescriptions";
import ReceiptList from "./components/patient/receipts/receipts";
import LabTestsList from "./components/patient/labtests/labTests";
function App() {
  return (
      <Router>
        <Routes>
          <Route path="login" element={<PLogin />} />
          <Route path="register" element={<PRegister/>}/>
          <Route path="dashboard" element={<PDashboard/>} />
          <Route path="landing_page" element={<LandingPage/>}/>
          <Route path="add_appointment" element={<AddAppointment/>}/>
          <Route path="approved_appointment" element={<ApprovedAppointment/>}/>
          <Route path="pending_appointment" element={<PendingAppointment/>}/>
          <Route path="completed_appointment" element={<CompletedAppointments/>} />
          <Route path="pending_paymens" element={<PendingPayments/>}/>
          <Route path="completed_payments" element={<CompletedPayments/>}/>
          <Route path="approved_payments" element={<ApprovedPayments/>}/>
          <Route path="prescriptions" element={<PrescriptionList/>}/>
          <Route path="receipts" element={<ReceiptList/>}/>
          <Route path="lab_tests" element={<LabTestsList/>}/>
        </Routes>
      </Router>
  );
}

export default App;
