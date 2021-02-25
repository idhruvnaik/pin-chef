import React from 'react';
import User from '../assets/svg/User';
import './commonComponents.css'
import FinalLogo from '../assets/images/Logo-small.png'


export default function CommonHeader() {
  
  return (
    <div className="upper-bar">
    <img src={FinalLogo}></img>
    <div className="top-r">
        <select className="form-control">
            <option>EN</option>
        </select>
        <User />
    </div>
    </div>
  );
}