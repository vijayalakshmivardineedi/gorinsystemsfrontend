import React from 'react';
import '../styles.js/PropertyTypes.css';
import { TbBuildingFactory } from "react-icons/tb";
import { PiMapPinSimpleAreaLight } from "react-icons/pi";
import { LuHotel } from "react-icons/lu";
import { ImOffice } from "react-icons/im";
import { CiShop } from "react-icons/ci";
import { GiFamilyHouse } from "react-icons/gi";

export default function PropertyTypes() {
  const types = [
    { name: 'Retail', icon: CiShop },
    { name: 'Multi-Family', icon: GiFamilyHouse },
    { name: 'Office', icon: ImOffice },
    { name: 'Industrial', icon: TbBuildingFactory },
    { name: 'Hotel', icon: LuHotel },
    { name: 'Land', icon: PiMapPinSimpleAreaLight },
  ];

  return (
    <section className="propertyTypes">
      <h5 style={{ color: "#6c5be3" }}>Create OMs and Ads for</h5>
      <h2>Various Real Estate Property Types</h2>
      <div className="typeGrid">
        {types.map((type, index) => (
          <div key={index} className="typeCard">
            <type.icon className="typeIcon" />
            <p>{type.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
