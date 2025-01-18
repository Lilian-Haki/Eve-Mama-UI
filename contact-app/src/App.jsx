import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SLogin from "./components/staffLogin";
import SRegister from "./components/staffRegister"

// Patient imports
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
import PrescriptionList from "./components/patient/prescriptions/prescriptions";
import ReceiptList from "./components/patient/receipts/receipts";
import LabTestsList from "./components/patient/labtests/labTests";

// Midwives
import MidDashboard from "./components/midwives/dashboard/dashboard";
import MidAddAppointments from "./components/midwives/appointments/addApointment";
import MidPendingAppointments from "./components/midwives/appointments/pendingAppointment";
import MidApprovedAppointments from "./components/midwives/appointments/approvedAppointments";
import MidCompletedAppointments from "./components/midwives/appointments/completedAppointment";
import MidLabTestsList from "./components/midwives/labtests/labTests";
import MidPrescriptionList from "./components/midwives/prescriptions/prescriptions";
import MidHelp from "./components/midwives/help/help";
import MidMessages from "./components/midwives/messages/messages";
import MidNotifications from "./components/midwives/notification/notification";
import MidSettings from "./components/midwives/settings/settings";

function App() {
  return (
      <Router>
        <Routes>
          {/* Shared */}
         <Route path="staff_register" element={<SRegister />} />
         <Route path="staff_login" element={<SLogin />} />
          {/* Patient */}
          <Route path="login" element={<PLogin />} />
          <Route path="register" element={<PRegister/>}/>
          <Route path="dashboard" element={<PDashboard/>} />
          <Route path="landing_page" element={<LandingPage/>}/>
          <Route path="add_appointment" element={<AddAppointment/>}/>
          <Route path="approved_appointment" element={<ApprovedAppointment/>}/>
          <Route path="pending_appointment" element={<PendingAppointment/>}/>
          <Route path="completed_appointment" element={<CompletedAppointments/>} />
          <Route path="pending_payments" element={<PendingPayments/>}/>
          <Route path="completed_payments" element={<CompletedPayments/>}/>
          <Route path="prescriptions" element={<PrescriptionList/>}/>
          <Route path="receipts" element={<ReceiptList/>}/>
          <Route path="lab_tests" element={<LabTestsList/>}/>
          {/* Midwives */}
          <Route path="mid_dashboard" element={<MidDashboard/>} />
          <Route path="mid_add_appointment" element={<MidAddAppointments/>}/>
          <Route path="mid_approved_appointment" element={<MidApprovedAppointments/>}/>
          <Route path="mid_pending_appointment" element={<MidPendingAppointments/>}/>
          <Route path="mid_completed_appointment" element={<MidCompletedAppointments/>} />
          <Route path="mid_lab_tests" element={<MidLabTestsList/>}/>
          <Route path="mid_prescriptions" element={<MidPrescriptionList/>}/>
          <Route path="mid_messages" element={<MidMessages/>} />
          <Route path="mid_help" element={<MidHelp/>} />
          <Route path="mid_notifications" element={<MidNotifications/>} />
          <Route path="mid_settings" element={<MidSettings/>} />
          {/* Speciaiist */}
          {/* Finance Manager */}
          {/* Service Manager */}
          {/* Driver */}
          {/* Lab Technician */}
          {/* Supplier */}
        </Routes>
      </Router>
  );
}

export default App;
