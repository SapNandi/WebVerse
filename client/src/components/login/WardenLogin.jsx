import axios from "axios";
import { useContext, useState} from "react";
import { StateContext } from "../../contexts/StateContext";
import { useNavigate } from "react-router-dom";
import "./login.css"; // Import the CSS file for the component
// import {MdAccountCircle} from 'react-icons/md'
import { MdAccountCircle } from "react-icons/md";
import { BiSolidLock } from "react-icons/bi";
import { BsFillPersonFill } from "react-icons/bs";
const WardenLogin = () => {
  const { warden, setWarden } = useContext(StateContext);
  const [block, setBlock] = useState("");
  const [password, setPassword] = useState("");

  const handleBlockChange = (event) => {
    setBlock(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here, e.g., send username and password to the server
    console.log("Username:", block);
    console.log("Password:", password);
    axios
      .post(`http://localhost:8000/api/v1/warden/auth/login`, {
        block,
        password,
      })
      .then(function (response) {
        console.log(response);
        if (response) {
          setWarden(response.data)
          navigate("/warden");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // Reset the form
    setBlock("");
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
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="Block">
            <BsFillPersonFill className="icon" />
          </label>
          <input
            type="text"
            id="Block"
            placeholder="Block"
            value={block}
            onChange={handleBlockChange}
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
      </form>
    </div>
  );
};

export default WardenLogin;
