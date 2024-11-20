import React, { useEffect, useRef } from 'react';
import '../styles.js/DrawerMenu.css';
import { SiFraunhofergesellschaft } from "react-icons/si";
import { CiLock } from "react-icons/ci";

export default function DrawerMenu({ closeMenu }) {

  const drawerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        closeMenu(); 
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeMenu]);

  return (
    <div className="drawerMenu" ref={drawerRef}>
      <div className="closeBtn">
        <SiFraunhofergesellschaft className="logoIcon" />
        Sell<strong>CRE</strong>.ai
        </div>
        <div className="button">
      <button>Features</button>
      <button>Pricing</button>
      <button><CiLock />Login</button>
      <button style={{ backgroundColor: "#7a6bfd", textAlign: "center" }}>Try for free</button>
    </div>
    </div>
  );
}
