import React, { useState } from "react";
import "../Login/Login.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import StudentRegister from "../../components/studentRegister/StudentRegister";
import AlumniRegister from "../../components/alumniRegister/AlumniRegister";
import FullWidthTabs from "../../components/Tab/Tab";


const Signup = () => {
  // const [portal,setPortal]=useState("student");
  // const [isChecked, setIsChecked] = useState(true);
  // const handleRadioSubmit=(e)=>{
  //   setPortal(()=>e.target.value);
  //   if(e.target.value === "student"){
  //     setIsChecked(true);
  //   }else{
  //     setIsChecked(false);
  //   }
  // }

  return (
    <div className="login-container">
      <div style={{textAlign:"center"}}>
      <h1>Register as</h1>
      </div>
      {/* <div>
        <div>
          <input
            type="radio"
            name="register"
            value="student"
            defaultChecked={isChecked}
            onClick={handleRadioSubmit}
          />{" "}
          Student
          <br />
          <br />
          <input
            type="radio"
            name="register"
            value="alumni"
            defaultChecked={!isChecked}
            onClick={handleRadioSubmit}
          />{" "}
          Alumni
        </div>
      </div> */}
      {/* <div className="login-box" style={{ marginTop: "8vh" }}>
        {portal === "student" ? <StudentRegister/> : <AlumniRegister/>}
      </div> */}
      <div>
      <FullWidthTabs />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
