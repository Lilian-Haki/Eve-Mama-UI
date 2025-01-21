import { React } from "react";
import {Link} from "react-router-dom";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';


function SpTopNav() {
  
  return (
    <div className="w-[1150px] fixed ml-[250px]">
      <nav className="h-[60px] bg-amber-100">
        <div className="inline-flex">
          <div className="mt-[16px] ml-4 text-[25px] font-cursive "> Good afternoon, <span className="text-purple-800">Lilian Haki</span></div>
          <div className="inline-flex mt-[30px] ml-[730px]">
            <div className="flex gap-4">
            <Link to="/mid_notifications"><NotificationsActiveIcon/></Link>
            <AccountCircleIcon/>
            <LogoutIcon/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default SpTopNav;
