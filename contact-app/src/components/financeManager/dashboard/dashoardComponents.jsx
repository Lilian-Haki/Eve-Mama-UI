import React from 'react'
// import { useState } from "react";
// import logo from "../../../assets/logo.jpeg";
// import home from "../../../assets/icon/jam-icons/outline & logos/home.svg";
// import users12 from "../../../assets/users12.svg";
// import listings from "../../../assets/listings.svg";
// import Reports from "../../../assets/Reports.jpg";
// import settings from "../../../assets/settings.jpg";
// import help from "../../../assets/help.jpg";
// import { Link } from "react-router-dom";
// import Navbar from "../Dashboard/navbar";

// const Dashboard = ({ children }) => {
//   const [selected, setSelected] = useState("dashboard"); // Default selection
//   const [collapsed, setCollapsed] = useState(true); // Sidebar collapsed by default on small screens

//   const handleClick = (buttonName) => {
//     setSelected(buttonName);
//   };

//   const toggleSidebar = () => {
//     setCollapsed(!collapsed);
//   };

//   return (
//     <div className="bg-gray-200 lg:w-[1500px] sm:w-[100px] min-h-screen">
//       {/* Sidebar Toggle Button - Visible only on small screens */}
//       <button
//         className="md:hidden fixed top-4 left-4 bg-primary text-white p-2 rounded z-20"
//         onClick={toggleSidebar}
//       >
//         ☰
//       </button>

//       {/* Side Navigation */}
//       <div
//         className={`fixed bg-white transition-transform duration-300 ${
//           collapsed ? "-translate-x-full" : "translate-x-0"
//         } md:translate-x-0 md:w-64 h-full z-10`}
//       >
//         <img
//           src={logo}
//           alt="logo"
//           className="mx-16 max-h-26 max-w-24 min-h-10 min-w-8 mt-6"
//         />

//         <Link to="/dashboard">
//         <button
//               className={`hover:text-stone-950 text-white flex h-14 py-2 px-4 items-center gap-3 mt-4 ml-6 w-[200px] rounded-lg hover:bg-sky-200 `}
//               style={{
//                 backgroundColor:
//                   selected === "dashboard" ? "rgba(20, 120, 163, 1)" : "",
//                 color: selected === "dashboard" ? "white" : "black",
//               }}
//               onClick={() => handleClick("dashboard")}
//             >
//               <img src={home} alt="home" className="active:bg-white text-black flex w-6 h-6" />
//               <p className="font-roboto text-lg">Dashboard</p>
//             </button>
//         </Link>

//         <Link to="/listings">
//         <button
//             className={'w-[200px] h-14 py-2 px-4 items-center gap-3 flex mt-6 ml-6 rounded-lg hover:bg-aliceblue'}
//               style={{
//                 backgroundColor:
//                   selected === "listings" ? "rgba(20, 120, 163, 1)" : "",
//                 color: selected === "listings" ?  "white" : "black",
//               }}
//               onClick={() => handleClick("listings")}
//             >
//               <img src={listings} alt="listings" className="active:bg-white flex w-6 h-6" />
//               <p className="font-roboto text-lg">Listings</p>
//             </button>
//         </Link>

//         <Link to="/users">
//         <button
//               className={`w-[200px] h-14 py-2 px-4 items-center gap-3 flex mt-6 ml-6 rounded-lg hover:bg-aliceblue`}
//               style={{
//                 backgroundColor:
//                   selected === "users" ? "rgba(20, 120, 163, 1)" : "",
//                 color: selected === "users" ? "white" : "black",
//               }}
//               onClick={() => handleClick("users")}
//             >
//               <img src={users12} alt="users" className="flex w-6 h-6" />
//               <p className="font-roboto text-lg">Users</p>
//             </button>
//           </Link>

//         <button
//           className={`w-[200px] h-14 py-2 px-4 items-center gap-3 flex mt-6 ml-6 rounded-lg hover:bg-aliceblue ${
//             selected === "reports" ? "active" : ""
//           }`}
//           onClick={() => handleClick("reports")}
//         >
//           <img src={Reports} alt="Reports" className="flex w-6 h-6" />
//           <p className="font-roboto text-lg">Reports</p>
//         </button>

//         <div className="flex gap-1 mt-[166px] space-x-12 ml-6">
//           <div className="inline-flex items-center">
//             <img
//               src={settings}
//               alt="settings"
//               className="flex w-[24px] h-[24px] justify-center align-center flex-shrink-0"
//             />
//             <p className="font-inter text-[14px] ml-1 font-medium">Settings</p>
//           </div>
//           <div className="inline-flex items-center">
//             <img
//               src={help}
//               alt="help"
//               className="flex w-[24px] h-[24px] justify-center align-center flex-shrink-0"
//             />
//             <p className="font-inter text-[14px] ml-1 font-medium">Help</p>
//           </div>
//         </div>
//       </div>
//       {/* navbar */}
//       <Navbar />

//       {/* Main Content Area */}
//       <div
//         className={`flex transition-all duration-300 ${
//           collapsed ? "ml-0" : "ml-64"
//         } md:ml-64 p-4`}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
