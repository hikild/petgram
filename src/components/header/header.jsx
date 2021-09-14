import React from "react";
import { Link } from "react-router-dom";
import Pets from "../../assets/pets.svg";
import "./header.scss";

function Header() {
  return (
    <div className="header">
      <h1 className="title">Petgram</h1>
      <nav className="nav">
      <Link className="logo" to="/" aria-label="Petgram - Home">
        <img src={Pets} />
      </Link>
        <Link className="login" to="/login">
          Sign in / Sign up
        </Link>
      </nav>
    </div>
  );
}

export default Header;
