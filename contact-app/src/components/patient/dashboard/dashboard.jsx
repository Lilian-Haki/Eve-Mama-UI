import React from "react";
import TopNav from "../nav/topnav";
import SideNav from "../nav/sidenav"
import Cards from "../dashboard/cards"
function PDashboard() {
    return(
        <div>
       <TopNav/>
       <SideNav/>    
       <Cards/>        
        </div>
    );
}
export default PDashboard;