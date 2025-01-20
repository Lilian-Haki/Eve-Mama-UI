import { React } from "react";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';


function TopNav() {
  
  return (
    <div className="w-[1150px] fixed lg:ml-[250px] md:ml-[80px] ">
      <nav className="h-[60px] bg-amber-100">
        <div className="inline-flex">
          <div className="mt-[16px] ml-16 text-[25px] font-cursive"> Eve&apos;s Mama Midwife Clinic</div>
          <div className="inline-flex mt-[30px] lg:ml-[600px] md:ml-[350px] sm:ml-[120px]">
            <div className="flex gap-4">
            <NotificationsActiveIcon/>
            <AccountCircleIcon/>
            <LogoutIcon/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default TopNav;
