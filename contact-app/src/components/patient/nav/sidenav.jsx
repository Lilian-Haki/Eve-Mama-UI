import React from "react";
import logo from '../../../assets/images/logo.jpg'
function SideNav() {
  return (
    <div className="-mt-[80px] w-[250px] bg-purple-500 h-[650px]">
      <div>
        <img className="h-[150px] w-[150px] ml-9 pt-2 rounded-[100%]" src={logo} alt="" />
      </div>
      <div className="mt-4 ml-[0px]">
        <div className="hover:bg-slate-600 h-[60px]">
          <p className="p-5">Dashboard</p>
        </div>
        <div className="hover:bg-slate-600 h-[60px]">
          <p className="p-5">Appointments</p>
        </div>
        <div className="hover:bg-slate-600 h-[60px]">
          <p className="p-5">Finances</p>
        </div>
        <div className="hover:bg-slate-600 h-[60px]">
          <p className="p-5">Prescription</p>
        </div>
        <div className="hover:bg-slate-600 h-[60px]">
          <p className="p-5">Receipts</p>
        </div>
      </div>
    </div>
  );
}
export default SideNav;
