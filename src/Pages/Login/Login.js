import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Login.css";

const Login = (props) => {
    const [username, setUserName] = useState()
    const [email, setEmail] = useState()
    const history = useHistory();
    const handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name = target.name;
        if(name === "username"){
            setUserName(value)
        }
        else{
            setEmail(value)
        }
      }
      const handleSubmit = (e)  => {
          //Type of user
        e.preventDefault();
        //here you can verfiy username and password
        if ((username === "teacher" || username === "student") && email) {
            history.push("/start");
        } 
      }
    
    return (
        <form className="form" onSubmit={(e)=> handleSubmit(e)}>
          <div className="input-container">
            <label className="label">Profession: </label>
            <input
              type="text"
              name="username"
              className="input"
              placeholder="(teacher/student)"
              value={username}
              onChange={(e)=> handleChange(e)}
            />
          </div>
          <div className="input-container">
            <label className="label">Email: </label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="john@doe.com"
              value={email}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button type="submit" id="login-btn">
            Login
          </button>
        </form>
      );
}

export default Login;