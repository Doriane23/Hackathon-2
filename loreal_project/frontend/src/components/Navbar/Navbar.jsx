import "./Navbar.scss";

function showMenu() {
  const menuBurgerIcon = document.getElementsByClassName("menuBurger-icon");
  const menuBurger = document.getElementsByClassName("menuBurger");

  menuBurgerIcon[0].classList.toggle("menuBurger-icon-active");
  menuBurger[0].classList.toggle("menuBurger-active");
}

function Navbar() {
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
          <a className="navLabel" href="/">
            <li className="navSelect">Home</li>
          </a>
          <a className="navLabel" href="/account">
            <li className="navSelect">Account</li>
          </a>
          <a className="navLabel" href="/chariot">
            <li className="navSelect">Chariot 🛒</li>
          </a>
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
        <a className="navLabel" href="/makeadrink">
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
