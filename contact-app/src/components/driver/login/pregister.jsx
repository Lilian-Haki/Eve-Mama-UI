import React from "react";
import loginpic from "../../../assets/images/login.png";
function PRegister() {
  return (
    <div className="inline-flex rounded ml-[200px] mt-[100px]">
      <div className="bg-purple-800 rounded-[20px] w-[400px] h-[500px]">
        <img src={loginpic} alt="Image of Girl logging in" />
      </div>
      <div className="rounded-[20px] -ml-[30px] w-[600px] h-[500px] bg-yellow-100">
        <div className="mt-8 text-center">
          <h4>Eve Mamas Clinic</h4>
          <h4 className="underline ">Patient Login</h4>
        </div>
        <form className="mt-8 ml-2 inline-flex gap-8" action="">
        <div>
          <label htmlFor="">Enter Firstname</label>
          <br></br>
          <input type="text" placeholder="Enter Username" />
          <br></br>
          <label htmlFor="">Enter Lastname</label>
          <br></br>
          <input type="text" placeholder="Enter Username" />
          <br></br>
          <label htmlFor="">Gender</label>
          <br></br>
          <input type="text" placeholder="Enter Username" />
          <br></br>
          <label htmlFor="">Your DateOfBirth</label>
          <br></br>
          <input type="text" placeholder="Enter Username" />
          <br></br>
          <label htmlFor="">Enter Email</label>
          <br></br>
          <input type="text" placeholder="Enter Password" />
          <br></br>
          <label htmlFor="">Enter Phone</label>
          <br></br>
          <input type="text" placeholder="Enter Password" />
          <br></br>
          </div>
          <div>
          <label htmlFor="">Enter Username</label>
          <br></br>
          <input type="text" placeholder="Enter Username" />
          <br></br>
          <label htmlFor="">Your Location</label>
          <br></br>
          <input type="text" placeholder="Enter Username" />
          <br></br>
          <label htmlFor="">Your Address</label>
          <br></br>
          <input type="text" placeholder="Enter Password" />
          <br></br>
          <label htmlFor="">Enter Password</label>
          <br></br>
          <input type="text" placeholder="Enter Password" />
          <br></br>
          <label htmlFor="">Retype Password</label>
          <br></br>
          <input type="text" placeholder="Enter Password" />
          <br></br>
          </div>
        </form>
        <div>
            <button>Login</button>
            <button>Register</button>
          </div>
      </div>
    </div>
  );
}
export default PRegister;
