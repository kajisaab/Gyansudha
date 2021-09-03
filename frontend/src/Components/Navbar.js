import React, { useState } from "react";
import "../Styles/Navbar.css";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [click, setClick] = useState(false);

  const shrinkNavbar = () => {
    if (window.scrollY > 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const handleClick = () => {
    setClick(!click);
  };

  const closeMobileMenu = () => {
    setClick(false);
  };

  // useEffect(() => {
  //   showDropDown();
  // }, []);

  // const showDropDown = () => {
  //   if (window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // };

  console.log(click);

  window.addEventListener("scroll", shrinkNavbar);
  // window.addEventListener("resize", showDropDown);

  return (
    <>
      <div className={navbar ? "nav-shrink" : "nav-large"}>
        <div className="navbarContainer">
          <div
            className={
              navbar ? "shrink-title-logo-container" : "title-logo-container"
            }
          >
            <Link to="/random">
              <img src="" alt="logo from db" className="logo" />
            </Link>
            <div className="logo-name">GES TEXT FROM DB</div>
          </div>

          <div
            className={navbar ? "menuiconcontainer" : "blankmenuiconcontainer"}
          >
            <div className="navmenu" onClick={handleClick}>
              <i className="icon">
                {click ? (
                  <CloseIcon fontSize="large" />
                ) : (
                  <MenuIcon fontSize="large" />
                )}
              </i>
            </div>
            <div
              className={click ? "dropdowncontainer" : "blankdropdowncontainer"}
            >
              <li className="navitems">
                <Link
                  to="/aboutus"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About us
                </Link>
              </li>
              <li className="navitems">
                <Link
                  to="/teamus"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Teams us
                </Link>
              </li>
              <li className="navitems">
                <Link
                  to="/randomus"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Random us
                </Link>
              </li>
              <li className="navitems">
                <Link
                  to="/likeus"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  LIke us
                </Link>
              </li>
              <li className="navitems">
                <Link
                  to="/aboutus"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About us
                </Link>
              </li>
              <li className="navitems">
                <Link
                  to="/aboutus"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  About us
                </Link>
              </li>
            </div>
          </div>

          <div className={navbar ? "navigation-container" : "blank-container"}>
            <li className="navitems">
              <Link to="/aboutus" className="nav-links">
                About us
              </Link>
            </li>
            <li className="navitems">
              <Link to="/team" className="nav-links">
                Team
              </Link>
            </li>
            <li className="navitems">
              <Link to="/random" className="nav-links">
                Random
              </Link>
            </li>
            <li className="navitems">
              <Link to="/aman" className="nav-links">
                Aman
              </Link>
            </li>
            <li className="navitems">
              <Link to="/kaji" className="nav-links">
                Kaji
              </Link>
            </li>
            <li className="navitems">
              <Link to="/kaji" className="nav-links">
                Khadka
              </Link>
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
