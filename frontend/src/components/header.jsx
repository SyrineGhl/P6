import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo-kasa">
        <Link to="/">
          <img
            src="https://cdn.discordapp.com/attachments/1081227920770596865/1116666734104031292/LOGO.png"
            alt="Logo Kasa" width={210} height={68}
          />
        </Link>
      </div>
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
