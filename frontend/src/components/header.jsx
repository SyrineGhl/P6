import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img
          src="https://cdn.discordapp.com/attachments/1081227920770596865/1116666734104031292/LOGO.png"
          alt="Logo Kasa"
        />
      </Link>
      <ul>
        <li>
          <a href="/">ACCUEIL</a>
        </li>
        <li>
          <a href="/a-propos">À PROPOS</a>
        </li>
      </ul>
    </header>
  );
};
export default Header;
