import React from "react";
import Calendar from "../cards/calendar";
import TopCards from "../cards/topcards";
import AppointmentsTable from "../cards/appointmentsTable";
function DashboardCards() {
    return(
        <div className="ml-[300px] -mt-[560px]">
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