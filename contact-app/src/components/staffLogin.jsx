import React from "react";
import loginpic from "../assets/images/login.png";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LockIcon from '@mui/icons-material/Lock';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AccountCircle from '@mui/icons-material/AccountCircle';

function SLogin() {
  return (
    <div className="inline-flex rounded ml-[250px] mt-[100px]">
      <div className="bg-purple-800 rounded-[20px] w-[400px] h-[500px]">
        <img src={loginpic} alt="Image of Girl logging in" />
      </div>
      <div className="rounded-[20px] -ml-[30px] w-[400px] h-[500px] bg-yellow-100">
        <div className="mt-8 text-center">
          <h4 className="font-cursive text-[30px] font-[20px] text-zinc-600">
            Eve&apos;s Mamas Clinic
          </h4>
          <h4 className="italic underline text-zinc-600 font-roboto">
            Staff Login
          </h4>
        </div>
        <form className="mt-8 ml-[20px]" action="">

        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Enter Username/ Email" variant="standard" />
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop:'14px' , marginBottom:"10px"}}>
        <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Enter Password" variant="standard" />
        </Box>
        <a className="text-zinc-600 ml-7 hover:text-purple-700" href="">Do you need any Help?</a>
        <br></br>
          <button className="font-roboto text-slate-100 hover:bg-purple-700 w-[200px] h-[40px] rounded-[10px] ml-5 mt-6 bg-purple-800">Login</button>
          <div className="gap-[50px] flex mt-[110px] ml-5">
            <button className="text-zinc-600 text-[15px] hover:text-purple-700"><HighlightOffIcon fontSize="40px" color="disabled"/> Quit</button>
            <button className="text-zinc-600 text-[15px] hover:text-purple-700"><HowToRegIcon color="disabled" fontSize="70px"/>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SLogin;
