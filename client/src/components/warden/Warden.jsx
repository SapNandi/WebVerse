import axios from "axios";
import { useContext } from "react";
import { StateContext } from "../../contexts/StateContext";
import { FaCamera } from "react-icons/fa";
import "./warden.css";

const Warden = () => {
  const { warden } = useContext(StateContext);
  console.log(warden);
  axios
    .get("http://localhost:8000/api/v1/warden/me/", {
      headers: { Authorization: `Bearer ${warden}` },
    })
    .then((res) => {
      console.log(res);
    });
  return (
    <>
      <div className="profile">
        <div className="profile-bg"></div>
        <section className="container">
          <aside className="profile-image">
            <a className="camera" href="#">
              <FaCamera />
            </a>
          </aside>
          <section className="profile-info">
            <h1 className="first-name">Angela</h1>
            <h1 className="second-name">Yun He</h1>
            <h2>ABOUT</h2>
            <p>
             
            </p>

            <aside className="social-media-icons">
              <a
                href="https://twitter.com/zephybite"
                target="_blank"
                rel="noreferrer"
              >
                <FaCamera />
              </a>
              <a
                href="https://codepen.io/zephyo"
                target="_blank"
                rel="noreferrer"
              >
                <FaCamera />
              </a>
              <a
                href="https://github.com/zephyo"
                target="_blank"
                rel="noreferrer"
              >
                <FaCamera />
              </a>
              <a
                href="https://medium.com/@zephyo"
                target="_blank"
                rel="noreferrer"
              >
                <FaCamera />
              </a>
            </aside>
          </section>
        </section>
        <section className="statistics">
          <button className="icon arrow left"></button>
          <button className="icon arrow right"></button>
          <p>
            <strong>29</strong> Followers
          </p>
          <p>
            <strong>184</strong> Following
          </p>
          <p>
            <strong>6</strong> Likes
          </p>
        </section>
        <button className="icon close"></button>
      </div>
    </>
  );
};

export default Warden;
