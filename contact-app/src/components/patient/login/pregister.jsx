import React from "react";
import {Link} from "react-router-dom"
import loginpic from "../../../assets/images/login.png";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import LockIcon from '@mui/icons-material/Lock';
import AccountCircle from '@mui/icons-material/AccountCircle';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';

function PRegister() {
  return (
    <div className="inline-flex rounded ml-[200px] mt-[100px]">
    <div className="bg-purple-800 rounded-[20px] w-[400px] h-[500px]">
      <img src={loginpic} alt="Image of Girl logging in" />
    </div>
    <div className="rounded-[20px] -ml-[30px] w-[600px] h-[500px] bg-yellow-100">
    <div className="mt-8 text-center">
        <h4 className="font-cursive text-[30px] font-[20px] text-zinc-600">
          Eve&apos;s Mama Birth Clinic
        </h4>
        <h4 className="italic underline text-zinc-600 font-roboto">
          Patients Register
        </h4>
      </div>
      <form className="mt-8 ml-8 inline-flex gap-8" action="">
      <div>
      <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
      <DriveFileRenameOutlineOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField id="input-with-sx" label="Firstname" variant="standard" />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop:'14px' , marginBottom:"10px"}}>
      <DriveFileRenameOutlineOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField id="input-with-sx" label="Lastname" variant="standard" />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop:'14px' , marginBottom:"10px"}}>
      <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField id="input-with-sx" label="Username" variant="standard" />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop:'14px' , marginBottom:"10px"}}>
      <EmailOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField id="input-with-sx" label="Email" variant="standard" />
      </Box>
        </div>
        <div className="-mt-4 ml-6">
        <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop:'14px' , marginBottom:"10px"}}>
      <LocalPhoneOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField id="input-with-sx" label="PhoneNumber" variant="standard" />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop:'14px' , marginBottom:"10px"}}>
      <EventNoteOutlinedIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField id="input-with-sx" label="Date of Birth" variant="standard" />
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop:'14px' , marginBottom:"10px"}}>
      <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField id="input-with-sx" label="Enter Password" variant="standard" />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', marginTop:'14px' , marginBottom:"10px"}}>
      <LockIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField id="input-with-sx" label="Confirm Password" variant="standard" />
      </Box>
        </div>
      </form><br/>
      <a className="text-zinc-600 ml-9 hover:text-purple-700" href="">Need any Help?</a>
      <br></br>
        <button className="font-roboto text-slate-100 hover:bg-purple-700 w-[200px] h-[40px] rounded-[10px] ml-9 mt-6 bg-purple-800">Register</button>
      <div>
      <Link to="/login" className="text-zinc-600 ml-9 hover:text-purple-700"> Already have an account? Login</Link>
        </div>
    </div>
  </div>
  );
}
export default PRegister;
