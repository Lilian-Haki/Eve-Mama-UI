import React from "react";
import MidTopNav from "../nav/topnav";
import MidSideNav from "../nav/sidenav"
import Cards from "../dashboard/cards"
function MidDashboard() {
    return(
        <div>
       <MidTopNav/>
       <MidSideNav/>    
       <Cards/>        
        </div>
    );
}
export default MidDashboard;