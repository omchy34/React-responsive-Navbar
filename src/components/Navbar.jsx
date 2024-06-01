import React, { useState } from "react";
import "./Navbar.css";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [nav, setnav] = useState(false);

  function handdleClick() {
    setnav(!nav);
    console.log(nav);
  }

  return (
    <div className="nav">
      <div className="navLinks">
        <div className="logo">Logo</div>
        <ul className={nav ? 'active' : 'ul'}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Gallery</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>

        <p onClick={handdleClick}>{nav ? (<RxCross2 className="cross" />) : (<IoMenu className="menu" onClick={handdleClick} />)}</p>
      </div>
    </div>
  );
};

export default Navbar;
