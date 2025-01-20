import React from "react";
import Calendar from "../cards/calendar";
import TopCards from "../cards/topcards";
import AppointmentsTable from "../cards/appointmentsTable";
function DashboardCards() {
    return(
        <div className=" lg:ml-[300px] md:ml-[150px] pt-[90px]">
        <div>
      <TopCards/>
        </div>
        <div className="flex gap-10 mt-6">
       <Calendar/>
       <AppointmentsTable/>
       </div>
        </div>
    );
}
export default DashboardCards;