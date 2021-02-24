import React from 'react';
import { randomCssColor } from '../random-css-color';
import logo from '../images/logo.svg'

const LayoutOne = ({ children }) => {
  return (
    <div className="layout one" >
       <header className="header">
        <p><img src={logo} /></p>
        <ul class='headerMenu'>
       
            <li className='header-li'>
              <a href="#">How Does it Work?</a>
            </li>
            <li className='header-li'>
                <a href="#">Solutions </a>
              </li>
              <li className='header-li'>
                <a href="#">Pricing</a>
              </li>
              <li className='header-li'>
                <a href="#">Tools</a>
              </li>
              <li className='header-li'>
                <a href="#">Blog</a>
              </li>

        </ul>
        <div>
        <button style={{borderRadius:'45px'}} variant="success" className='btn-succses'>Get Started for Free</button>
        <span   className='login'>Login</span>
        </div>
        
      </header>
      {children}
    </div>
    
  );
};

export default LayoutOne;
