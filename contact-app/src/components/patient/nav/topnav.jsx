import { React } from "react";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';


function TopNav() {
  
  return (
    <div className="w-[1150px] fixed ml-[250px]">
      <nav className="h-[60px] bg-amber-100">
        <div className="inline-flex">
          <div className="mt-[16px] ml-4 text-[25px] font-cursive"> Eve&apos;s Mama Midwife Clinic</div>
          <div className="inline-flex mt-[30px] ml-[730px]">
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
