import "./Home.css";
import { PiStudentFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { GiTeacher } from "react-icons/gi";
import { SiBitwarden } from "react-icons/si";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home">
        <div className="student">
          <div className="card">
            <div className="img">
              <PiStudentFill />
            </div>

            <button
              className="btn"
              type="submit"
              onClick={() => navigate("/login")}
            >
              Student
            </button>
          </div>
        </div>
        <div className="warden">
          <div className="card">
            <div className="img">
              <SiBitwarden />
            </div>
            <button className="btn" onClick={() => navigate("/loginWarden")} type="submit">
              Warden
            </button>
          </div>
        </div>
        <div className="faculty">
          <div className="card">
            <div className="img">
              <GiTeacher />
            </div>

            <button className="btn" onClick={() => navigate("/facultyWarden")} type="submit">
              Faculty
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
