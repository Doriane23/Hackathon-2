import "./Navbar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import Login from "../Login/Login";

function showMenu() {
  const menuBurgerIcon = document.getElementsByClassName("menuBurger-icon");
  const menuBurger = document.getElementsByClassName("menuBurger");

  menuBurgerIcon[0].classList.toggle("menuBurger-icon-active");
  menuBurger[0].classList.toggle("menuBurger-active");
}

function Navbar() {
  const [openLogin, setOpenLogin] = useState(false);
  return (
    <div>
      <nav className="navbar">
        <a className="navlogo" href="/">
          <img
            className="imghome"
            src="src\assets\logowhite.png"
            alt="loreallogo"
          />
        </a>

        <div className="searchcontainer">
          <input className="searchinput" type="text" placeholder="Search..." />
        </div>

        <ul className="navList">
          <Link to="/" className="navLabel">
            <li className="navSelect">Home</li>
          </Link>
          <a className="navLabel" href="/chariot">
            <li className="navSelect">Chariot 🛒</li>
          </a>

          <li>
            <button
              type="button"
              className="navSelect"
              onClick={() => {
                setOpenLogin(true);
              }}
            > Account
            </button>
          </li>
          {openLogin && <Login closeLogin={setOpenLogin} />}
        </ul>

        <div
          className="menuBurger-icon"
          onClick={showMenu}
          aria-hidden="true"
        />
      </nav>
      <ul className="menuBurger">
        <a className="navLabel" href="/">
          <li className="navSelect">Home</li>
        </a>
        <a className="navLabel" href="/">
          <li className="navSelect">Account</li>
        </a>
        <a className="navLabel" href="/contacts">
          <li className="navSelect">Chariot 🛒</li>
        </a>
      </ul>
    </div>
  );
}

export default Navbar;
