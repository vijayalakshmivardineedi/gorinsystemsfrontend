import React from 'react';
import '../styles.js/SampleOMs.css';
import retail from '../assets/retail.jpeg';
import multifamily from '../assets/multifamily.jpeg';
import office from '../assets/office.jpeg';

export default function SampleOMs() {
  const samples = [
    { title: 'Retail OM', image: retail },
    { title: 'Multi-Family OM', image: multifamily},
    { title: 'Office OM', image: office },
  ];

  return (
    <section className="samples" style={{backgroundColor:"#664FDC"}}>
      
      <div className='innerGrid'>
      <h1>Sample OMs created with our platform</h1>
      <div className="sampleGrid">
        {samples.map((sample, index) => (
          <div key={index} className="sampleCard">
            <img src={sample.image} alt={sample.title} />
            <h3>{sample.title}</h3>
            <button style={{backgroundColor: "#664FDC" }} className="tryForFreeBtn">View Sample Template</button>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}
