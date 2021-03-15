import React from 'react';
import User from '../assets/svg/User';
import './commonComponents.css'
import FinalLogo from '../assets/images/Logo-small.png'


export default function CommonHeader() {
  
  return (
    <div className="header">
    <div className="l-div"><img src={FinalLogo}></img></div>
    <div className="r-div">
        <select className="form-control">
            <option>EN</option>
        </select>
        <User />
    </div>
    </div>
  );
}