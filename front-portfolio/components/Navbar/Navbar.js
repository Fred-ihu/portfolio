import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  console.log("Navbar");
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);

  return (
    <nav
      className="navbar py-5 px-3"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item ml-6" href="https://bulma.io">
          <img
            src="https://bulma.io/images/bulma-logo.png"
            width="112"
            height="28"
          />
        </a>

        <a
          role="button"
          className={`navbar-burger ${openHamburgerMenu ? `burger is-active` : `burger`}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={() => setOpenHamburgerMenu(!openHamburgerMenu)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div className={`navbar-menu ${openHamburgerMenu ? `burger is-active` : null}`}>
        <div className="navbar-end">
          <div className="navbar-item">
            <Link href="/">
              <a className="is-clickable mr-5 txt-link">Accueil</a>
            </Link>
            <Link href="/realisations">
              <a className="is-clickable mr-5 txt-link">Réalisations</a>
            </Link>
            <Link href="contact">
              <a className="button is-rounded is-primary is-outlined mr-6 animation-btn">
                Contactez-moi
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
