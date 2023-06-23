import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { StateContext } from "./contexts/StateContext";
import Login from "./components/login/Login";
import "./App.css";
import Register from "./components/Register/Register";
import Student from "./components/student/Student";
import Warden from "./components/warden/Warden";
import Home from "./components/Home/Home";
import WardenLogin from "./components/login/wardenLogin";
import FacultyLogin from "./components/login/facultyLogin";
export default function App() {
  const [warden, setWarden] = useState("");
  return (
    <>
      <div className="App">
        <StateContext.Provider value={{ warden, setWarden }}>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/student" element={<Student />} />
              <Route path="/login" element={<Login />} />
              <Route path="/loginWarden" element={<WardenLogin />} />
              <Route path="/loginFaculty" element={<FacultyLogin />} />
              <Route path="/warden"  element={<Warden />} />
            </Routes>
          </Router>
        </StateContext.Provider>
      </div>
    </>
  );
}
