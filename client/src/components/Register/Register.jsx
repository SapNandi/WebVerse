import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./register.css"; // Import the CSS file for the component
// import {MdAccountCircle} from 'react-icons/md'
import { MdAccountCircle } from "react-icons/md";
import { BiSolidLock } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
//   const navigate = useNavigate(); 
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here, e.g., send username and password to the server
    console.log("Username:", username);
    console.log("Password:", password);
    // Reset the form
    setUsername("");
    setPassword("");

  };

  return (
    <div className="login-container">
      <MdAccountCircle
        className="icon"
        style={{
          width: "258px",
          height: "545px",
          marginTop: "-79px",
          color: "#064635",
        }}
      />
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">
            <BsFillPersonFill className="icon" />
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">
            <BiSolidLock className="icon" />
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

