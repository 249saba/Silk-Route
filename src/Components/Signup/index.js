import { React, useState } from "react";
import "./Signup.css";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleChange = (e, val) => {
    if (val == "name") {
      setName(e.target.value);
    }
    if (val == "password") {
      setPassword(e.target.value);
    }
    if (val == "email") {
      setEmail(e.target.value);
    }
  };
  const collectData=()=>{
    console.log(name,email,password)
  }

  return (
    <div className="signupcontainer">
      <h1>Register</h1>
      <input
      value={name}
        className="inputbox"
        type={"text"}
        placeholder="Enter Name"
        onChange={(e) => handleChange(e, "name")}
      />
      <input
      value={email}
        className="inputbox"
        type="text"
        placeholder="Enter Email"
        onChange={(e) => {
          handleChange(e, "email");
        }}
      />
      <input
      value={password}
        className="inputbox"
        type={"password"}
        placeholder=" Enter Password"
        onChange={(e) => {
          handleChange(e, "password");
        }}
      />
      <button className="signupbtn" type="button" onClick={collectData}>
        Sign up
      </button>
    </div>
  );
};
export default Signup;
