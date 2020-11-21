import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`navbar ${show && "navbar-black"}`}>
      <img
        className="nav-logo"
        src="https://raw.githubusercontent.com/CleverProgrammers/pwj-netflix-clone/master/assets/logo.png"
        alt="logo"
      />
      <img
        className="nav-avatar"
        src="https://raw.githubusercontent.com/CleverProgrammers/pwj-netflix-clone/master/assets/profile__logo.png"
        alt="login"
      />
    </div>
  );
}

export default Nav;
