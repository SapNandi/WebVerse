import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import "./register.css"; // Import the CSS file for the component
// import {MdAccountCircle} from 'react-icons/md'
import { MdAccountCircle } from "react-icons/md";
import { BiSolidLock } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
const Register = () => {
  const [name, setUsername] = useState("");
  const [regNo, setRegno] = useState("");
  const [block, setBlock] = useState("");
  const [password, setPassword] = useState("");
  const [roomNo, setRoomno] = useState("");
  const navigation = useNavigate();
  const handleUserNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleBlockChange = (event) => {
    setBlock(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleRoomnoChange = (event) => {
    setRoomno(event.target.value);
  };
  const handleRegnoChange = (event) => {
    setRegno(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(username);
    axios.post("http://localhost:8000/api/v1/student/auth/register", {
        name,
        regNo,
        block,
        password,
        roomNo
    })
    .then(function (response) {
        console.log(response);
        if(response){
            navigation("/login");
        }
    })
    .catch((err) => {
        console.log(err);
    });
    // Reset the form
    setUsername("");
    setPassword("");
    setBlock("");
    setRegno("");
    setRoomno("");
  };

  return (
    <>
      <div className="register-container">
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
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">
              <BsFillPersonFill className="icon" />
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              value={name}
              onChange={handleUserNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="regno">
              <BsFillPersonFill className="icon" />
            </label>
            <input
              type="text"
              id="regno"
              placeholder="Registration Number"
              value={regNo}
              onChange={handleRegnoChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="block">
              <BsFillPersonFill className="icon" />
            </label>
            <input
              type="text"
              id="block"
              placeholder="Enter your Block"
              value={block}
              onChange={handleBlockChange }
            />
          </div>
          <div className="form-group">
            <label htmlFor="roomno">
              <BsFillPersonFill className="icon" />
            </label>
            <input
              type="text"
              placeholder="Enter your Room Number"
              id="roomno"
              value={roomNo}
              onChange={handleRoomnoChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">
              <BiSolidLock className="icon" />
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default Register;
