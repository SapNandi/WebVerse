import "./navbar.css";
import PropTypes from 'prop-types';
function Navbar(props) {
  return (
    <nav className="navbar">
      <span className="navbar-toggle" id="js-navbar-toggle">
        <i className="fas fa-bars"></i>
      </span>

      <a className="navbar-brand" href="#">
        <img
          src="./images/dsclogo.jpg"
          alt=""
          width="50"
          height="45"
          className="img-thumbnail"
        ></img>
      </a>

      <a href="#" className="logo">
        {props.title}
      </a>
      <ul className="main-nav" id="js-menu">
        <li>
          <a href="#" className="nav-links">
            CREATE FUND
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            DONATE
          </a>
        </li>
        <li>
          <a href="#" className="nav-links">
            HOW IT WORKS?
          </a>
        </li>
      </ul>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
