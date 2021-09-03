import "./Navbar.scss";
import logo from "../../images/logo.png";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Navbar() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <nav className="nav" id="navbar">
      <div className="nav-container">
        <img src={logo} className="nav-logo" alt="Logo" onClick={scrollToTop} />
        <ul className="nav-items list">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Hello
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              CV
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
