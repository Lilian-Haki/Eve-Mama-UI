import { useState, React } from "react";
import {Link} from "react-router-dom";
import logo from "../../../assets/images/logo.jpg";
import { HomeOutlined,CalendarOutlined,MedicineBoxOutlined,MessageOutlined,DotChartOutlined} from '@ant-design/icons';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

function SpSideNav() {
  const [selected, setSelected] = useState("dashboard"); // Default selection

  const [openDropdown, setOpenDropdown] = useState(null);
  const handleClick = (menu) => {
    setSelected(menu);
    if (menu === "appointments") {
      setOpenDropdown(openDropdown === "appointments" ? null : "appointments"); // Toggle "appointments" dropdown
    } else {
      setOpenDropdown(null); // Close any dropdown
    }
  };
  
    
  return (
    <div className="fixed w-[250px] bg-purple-500 h-auto">
      <div>
        <img
          className="h-[150px] w-[150px] ml-9 pt-2 rounded-[100%]"
          src={logo}
          alt=""
        />
      </div>

      {/* Dashboard */}
      <Link to="/sp_dashboard">
          <button
            className={`hover:text-stone-950 text-white flex h-14 py-2 px-4 items-center gap-3 mt-4 ml-6 w-[200px] rounded-lg hover:bg-purple-300 `}
            style={{
              backgroundColor:
                selected === "dashboard" ? "#6A1B9A" : "",
              color: selected === "dashboard" ? "white" : "black",
            }}
            onClick={() => handleClick("dashboard")}
          >
            <HomeOutlined /> 
            <p className="font-roboto text-lg">Dashboard</p>
          </button>
        </Link>

  {/* Appointments */}
  <div className="ml-6 mt-6">
        <button
          className={`w-[200px] h-14 py-2 px-4 items-center gap-3 flex rounded-lg ${
            openDropdown === "appointments"? "bg-purple-800 text-white" : "hover:bg-purple-300"
          }`}
          onClick={() => handleClick("appointments")}
        >
          <CalendarOutlined />
          <p className="font-roboto text-lg">Appointments</p>
        </button>

        {/* Dropdown Menu */}
        {openDropdown === "appointments" && (
          <div className="ml-8 mt-2 flex flex-col space-y-2">
            <Link to="/sp_add_appointment">
              <button
                className={`w-[160px] h-10 py-1 px-4 text-left rounded-lg hover:bg-purple-300 ${
                  selected === "appointments-new" ? "bg-purple-600 text-white" : ""
                }`}
                onClick={() => setSelected("appointments-new")}
              >
                New
              </button>
            </Link>
            <Link to="/sp_pending_appointment">
              <button
                className={`w-[160px] h-10 py-1 px-4 text-left rounded-lg hover:bg-purple-300 ${
                  selected === "appointments-pending"
                    ? "bg-purple-600 text-white"
                    : ""
                }`}
                onClick={() => setSelected("appointments-pending")}
              >
                Pending
              </button>
            </Link>
            <Link to="/sp_approved_appointment">
              <button
                className={`w-[160px] h-10 py-1 px-4 text-left rounded-lg hover:bg-purple-300 ${
                  selected === "appointments-approved"
                    ? "bg-purple-600 text-white"
                    : ""
                }`}
                onClick={() => setSelected("appointments-approved")}
              >
                Approved
              </button>
            </Link>
            <Link to="/sp_completed_appointment">
              <button
                className={`w-[160px] h-10 py-1 px-4 text-left rounded-lg hover:bg-purple-300 ${
                  selected === "appointments-completed"
                    ? "bg-purple-600 text-white"
                    : ""
                }`}
                onClick={() => setSelected("appointments-completed")}
              >
                Completed 
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Lab Tests */}
      <Link to="/sp_lab_tests">
          <button
            className={`hover:text-stone-950 text-white flex h-14 py-2 px-4 items-center gap-3 mt-4 ml-6 w-[200px] rounded-lg hover:bg-purple-300 `}
            style={{
              backgroundColor:
                selected === "labtests" ? "#6A1B9A" : "",
              color: selected === "labtests" ? "white" : "black",
            }}
            onClick={() => handleClick("labtests")}
          >
          <DotChartOutlined />
            <p className="font-roboto text-lg">Lab Tests</p>
          </button>
        </Link>

        {/* Prescription */}
        <Link to="/sp_prescriptions">
            <button
              className={`hover:text-stone-950 text-white flex h-14 py-2 px-4 items-center gap-3 mt-4 ml-6 w-[200px] rounded-lg hover:bg-purple-300 `}
              style={{
                backgroundColor:
                  selected === "prescriptions" ? "#6A1B9A" : "",
                color: selected === "prescriptions" ? "white" : "black",
              }}
              onClick={() => handleClick("prescriptions")}
            >
              <MedicineBoxOutlined />
              <p className="font-roboto text-lg">Prescription</p>
            </button>
          </Link>

    {/* Messages */}
    <Link to="/sp_messages">
          <button
            className={`hover:text-stone-950 text-white flex h-14 py-2 px-4 items-center gap-3 mt-4 ml-6 w-[200px] rounded-lg hover:bg-purple-300 `}
            style={{
              backgroundColor:
                selected === "messages" ? "#6A1B9A" : "",
              color: selected === "messages" ? "white" : "black",
            }}
            onClick={() => handleClick("messages")}
          >
            <MessageOutlined />
          <p className="font-roboto text-lg">Messages</p>
          </button>
        </Link>

    {/* Help */}
    <Link to="/sp_help">
          <button
            className={`hover:text-stone-950 text-white flex h-14 py-2 px-4 items-center gap-3 mt-4 ml-6 w-[200px] rounded-lg `}
            style={{
              color: selected === "help" ? "purple" : "pink",
            }}
            onClick={() => handleClick("help")}
          >
            <HelpOutlineOutlinedIcon/>
            <p className="">Need Help?</p>
          </button>
        </Link>

   </div>
  );
}
export default SpSideNav;
