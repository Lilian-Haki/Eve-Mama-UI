import React from "react";
import loginpic from '../../../assets/images/login.png';
function PLogin() {
  return (
    <div className="inline-flex rounded ml-[250px] mt-[100px]">
    <div className="bg-purple-800 rounded-[20px] w-[400px] h-[500px]">
      <img src={loginpic} alt="Image of Girl logging in" />
    </div>
      <div className="rounded-[20px] -ml-[30px] w-[400px] h-[500px] bg-yellow-100">
        <div className="mt-8 text-center">
        <h4>Eve Mamas Clinic</h4>
        <h4 className="underline ">Patient Login</h4>
        </div>
        <form  className="mt-8 ml-2" action="">
            <label htmlFor="">Enter Username</label><br></br>
            <input type="text" placeholder="Enter Username" /><br></br>
            <label htmlFor="">Enter Password</label><br></br>
            <input type="text" placeholder="Enter Password" /><br></br>
            <button>Login</button><br></br>
            <a href="">Do you need any Help?</a>
            <div>
                <button>Quit</button>
                <button>Register</button>
            </div>
        </form>
      </div>
      </div>
  );
}
export default PLogin;
