import { useState, React } from "react";
import logo from "../../../assets/images/logo.jpg";
function SideNav() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const menuItems = [
    {
      id: 1,
      label: "Dashboard",
    },
    {
      id: 2,
      label: "Appointments",
      dropdown: [
        "Add Appointment",
        "Pending Appointments",
        "Approved Appointments",
        "Completed",
      ],
    },
    {
      id: 3,
      label: "Finances",
      dropdown: ["Pending Payments", "Approved Payments", "Completed"],
    },
    {
      id: 4,
      label: "Prescription",
    },
    {
      id: 5,
      label: "Receipts",
    },
  ];

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };
  return (
    <div className="-mt-[80px] w-[250px] bg-purple-500 h-[650px]">
      <div>
        <img
          className="h-[150px] w-[150px] ml-9 pt-2 rounded-[100%]"
          src={logo}
          alt=""
        />
      </div>
      <div
        style={{
          width: "250px",
          backgroundColor: "#f8f9fa",
          height: "100vh",
          padding: "20px",
          boxShadow: "2px 0 5px rgba(0,0,0,0.1)",
        }}
      >
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {menuItems.map((item) => (
            <li key={item.id} style={{ marginBottom: "10px" }}>
              <div
                onClick={() => toggleDropdown(item.id)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  padding: "10px",
                  backgroundColor: "#e9ecef",
                  borderRadius: "5px",
                }}
              >
                <span>{item.label}</span>
                {item.dropdown && (
                  <span>{openDropdown === item.id ? "▲" : "▼"}</span>
                )}
              </div>
              {/* Dropdown Menu */}
              {item.dropdown && openDropdown === item.id && (
                <ul
                  style={{
                    listStyle: "none",
                    paddingLeft: "20px",
                    marginTop: "5px",
                  }}
                >
                  {item.dropdown.map((subItem, index) => (
                    <li
                      key={index}
                      style={{
                        padding: "5px",
                        cursor: "pointer",
                        backgroundColor: "#f1f1f1",
                        borderRadius: "3px",
                        marginBottom: "5px",
                      }}
                    >
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default SideNav;
