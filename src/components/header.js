import React from 'react';
import '../styles.js/Header.css';
import { RiMenu3Line } from "react-icons/ri";
import { SiFraunhofergesellschaft } from "react-icons/si";
import { CiLock } from "react-icons/ci";

export default function Header({ setIsOpen }) {
  return (
    <header className="header">
      <div className="logo">
        <SiFraunhofergesellschaft className="logoIcon" />
        Sell<strong>CRE</strong>.ai
      </div>
      <nav>
        <ul className="navLinks">
          <li>Features</li>
          <li>Pricing</li>
          <li><CiLock />Login</li>
          <button style={{backgroundColor: "#7a6bfd" }} className="tryForFreeBtn">Try for free</button>
        </ul>
        <button className="menuBtn" onClick={() => setIsOpen(true)}>
          <RiMenu3Line />
        </button>
      </nav>
    </header>
  );
}
