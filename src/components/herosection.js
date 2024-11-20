import React from 'react';
import '../styles.js/HeroSection.css';
import hero from '../assets/hero.jpeg';
import { RxTriangleRight } from "react-icons/rx";
import { FaLongArrowAltRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="heroContent">
        <h1 className="h1">
          <span className="boldText">Sell CRE Faster</span> with OMs & Ads created in <span className="boldText">minutes</span>
        </h1>
        <p className="p">Create beautiful Commercial Real Estate Offering Memorandums, Flyers & Ads in minutes with our AI powered platform</p>
       
       <div className='buttonContainer'>
       <button className="thisbutton">Try for free <FaLongArrowAltRight style={{ color:"white", marginLeft:"10px"}}/></button>
       <button className="demo"><RxTriangleRight style={{ color:"white", marginLeft:"10px", backgroundColor:"#6c5be3", borderRadius:"50%",}}/> Watch Demo</button>
       </div>
      </div>
      <div className="heroImage">
        <img src={hero} alt="Hero" />
      </div>
    </section>
  );
}
