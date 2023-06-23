import axios from "axios";
import { useContext } from "react";
import { StateContext } from "../../contexts/StateContext";
// import { FaCamera } from "react-icons/fa";
import "./warden.css";
// import Navbar from "../navbar/Navbar";
import { useState } from "react";
// import { useEffect } from "react";

const Warden = () => {
  const [user, setUser] = useState("");
  const { warden } = useContext(StateContext);
  console.log(warden.data.name);

  axios.get("http://localhost:8000/api/v1/warden/me/", {
      headers: { Authorization: `Bearer ${warden.token}` },
    })
    .then((res) => {
      setUser(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <>
      <div className="wardenPage">
        <nav className="navbar">
          <span className="navbar-toggle" id="js-navbar-toggle">
            <i className="fas fa-bars"></i>
          </span>

          <a className="navbar-brand" href="#">
            {warden.data.name}
            <small className="navbar-brandtag">BLOCK:{warden.data.block}</small>
          </a>

          <ul className="main-nav" id="js-menu">
            <li>
              <a href="#" className="nav-links">
                Complaints
              </a>
            </li>
            <li>
              <a href="#" className="nav-links">
                Leaves
              </a>
            </li>
            <li>
              <a href="#" className="nav-links">
                Rooms
              </a>
            </li>
          </ul>
        </nav>
        <div className="sidebar"></div>
      </div>
    </>
  );
};

export default Warden;
