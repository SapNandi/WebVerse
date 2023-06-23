import { useState , useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StateContext } from "../../contexts/StateContext";
import "./login.css"; // Import the CSS file for the component
// import {MdAccountCircle} from 'react-icons/md'
import { MdAccountCircle } from "react-icons/md";
import { BiSolidLock } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
const Login = () => {
  const [regNo, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { stud, setStud } = useContext(StateContext);
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here, e.g., send username and password to the server
    console.log("Username:", regNo);
    console.log("Password:", password);
    axios
      .post(`http://localhost:8000/api/v1/student/auth/login`, {
        regNo,
        password,
      })
      .then(function (response) {
        console.log(response);
        if (response) {
          setStud(response.data)
          navigate("/student");
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
      <h2>Student Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">
            <BsFillPersonFill className="icon" />
          </label>
          <input
            type="text"
            id="username"
            value={regNo}
            placeholder="Registration Number"
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
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
        <a href="/register">click to register</a>
      </form>
    </div>
  );
};

export default Login;
