import React from 'react';
// import { randomCssColor } from '../random-css-color';
import chart from '../images/chart.jpg'

const LayoutThree = () => {
  return (
    <div className="layout-three" >
      <div className='left-content'>
        <h1> <b>Meet Hexometer, your AI sidekick that works
        24/7 to catch problems before they affectyour business.</b></h1>
        <h4>Every day your website can face an increasing range of threats. Server
        problems, slow landing pages, broken links, frustrating mobile
        experiences, embarrassing spelling mistakes, changing SEO rules, 3rd
     party services breaking, or security issues that put your business at risk.</h4>

<h4>To make matters worse, these issues can linger unnoticed, wasting your ad-budget and costing your business lost sales.</h4>

<h4>Hexometer monitors your website 24/7, to catch Availability,
   Performance, User experience, SEO, Health and Security problems, 
   before they affect your customers</h4>
      </div>
<div className='rigth-contnet'>
<img src={chart} />
</div>
    </div>
  );
};

export default LayoutThree;
