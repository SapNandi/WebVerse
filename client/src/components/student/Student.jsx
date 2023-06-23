import axios from "axios";
import { useContext } from "react";
// import Card from "../Card/Card";
import { StateContext } from "../../contexts/StateContext";
// import { FaCamera } from "react-icons/fa";
import "./student.css";

// import Navbar from "../navbar/Navbar";
import { useState } from "react";
import { useEffect } from "react";
// import { useEffect } from "react";

const Student = () => {
  const [leave, setLeave] = useState([]);
  const { stud } = useContext(StateContext);
  console.log(stud.data);
  const [leaveType, setLeaveType] = useState("");
  const [leaveDate, setLeaveDate] = useState("");
  const [leaveTime, setLeaveTime] = useState("");
  const [leaveDuration, setLeaveDuration] = useState("");

  const handleLeaveTypeChange = (event) => {
    setLeaveType(event.target.value);
  };

  const handleLeaveDateChange = (event) => {
    setLeaveDate(event.target.value);
  };
  const handleLeaveTimeChange = (event) => {
    setLeaveTime(event.target.value);
  };
  const handleLeaveDurationChange = (event) => {
    setLeaveDuration(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(username);
    axios
      .post(
        "http://localhost:8000/api/v1/student/leave/",
        {
          leaveType,
          leaveDate,
          leaveTime,
          leaveDuration,
        },
        { headers: { Authorization: `Bearer ${stud.token}` } }
      )
      .then(function (response) {
        console.log(response);
        if (response) {
          alert("Leave Successfully Sent!! You Can see the messages Below");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // Reset the form
    setLeaveType("");
    setLeaveDate("");
    setLeaveTime("");
    setLeaveDuration("");
  };

  axios
    .get("http://localhost:8000/api/v1/student/me/", {
      headers: { Authorization: `Bearer ${stud.token}` },
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

    useEffect(() => {

      axios
        .get("http://localhost:8000/api/v1/student/leave/", {
          headers: { Authorization: `Bearer ${stud.token}` },
        })
        .then((res) => {
          // setStudent(res.data);
          setLeave(res.data.data);
          // console.log(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
     
    },[])
    const handleDelete = (id) => {
      axios.delete(`http://localhost:8000/api/v1/student/leave/:${id}` , {
        headers: { Authorization: `Bearer ${stud.token}` },
      }).then((res) => {
        // setStudent(res.data);
        // setLeave(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    }

  return (
    <>
      <div className="wardenPage">
        <nav className="navbar">
          <span className="navbar-toggle" id="js-navbar-toggle">
            <i className="fas fa-bars"></i>
          </span>

          <a className="navbar-brand" href="#">
            {stud.data.name}
            <small className="navbar-brandtag">BLOCK:{stud.data.block}</small>
          </a>
          <a className="navbar-brand" href="#">
            {stud.data.regNo}
            <small className="navbar-brandtag">
              BLOCK:{stud.data.messType}
            </small>
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
        <div className="sidebar">
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="leaveType">
                {/* <BsFillPersonFill className="icon" /> */}
              </label>
              <input
                type="text"
                id="leaveType"
                placeholder="Leave Type"
                value={leaveType}
                onChange={handleLeaveTypeChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="leaveDate">
                {/* <BsFillPersonFill className="icon" /> */}
              </label>
              <input
                type="Date"
                id="leaveDate"
                placeholder="Registration Number"
                value={leaveDate}
                onChange={handleLeaveDateChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="time">
                {/* <BsFillPersonFill className="icon" /> */}
              </label>
              <input
                type="time"
                id="time"
                placeholder="Enter the time"
                value={leaveTime}
                onChange={handleLeaveTimeChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="duration">
                {/* <BsFillPersonFill className="icon" /> */}
              </label>
              <input
                type="text"
                placeholder="Enter your Room Number"
                id="duration"
                value={leaveDuration}
                onChange={handleLeaveDurationChange}
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="show">
          <div className="card">
            {leave.map((item) => (
              <div className="cardItem" key={item.id}>
                <h1>
                  {item.leaveType} for {item.leaveDuration}
                </h1>
                <p>On {item.leaveDate}</p>
                <p>status of Approval: {item.isApproved}</p>
                <p>Status of Rejected: {item.isRejected}</p>
                <a onClick={()=>{handleDelete(item.id)}} href="#">Delete</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;
