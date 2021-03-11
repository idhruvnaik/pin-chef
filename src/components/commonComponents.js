import React from 'react';
import User from '../assets/svg/User';
import GlobalStyles from '../styles/GlobalStyles';
import './commonComponents.css'
import FinalLogo from '../assets/images/Logo-small.png'
import Home from '../assets/png_icons/Home.png'
import Home_selected from '../assets/png_icons/Home_selected.png'
import Chef from '../assets/png_icons/Chef.png'
import Chef_selected from '../assets/png_icons/Chef_selected.png'
import Shop from '../assets/png_icons/Shop.png'
import Shop_selected from '../assets/png_icons/Shop_selected.png'
import Star from '../assets/png_icons/Star.png'
import Star_selected from '../assets/png_icons/Star_selected.png'
import Settings from '../assets/png_icons/Settings.png'
import Settings_selected from '../assets/png_icons/Settings_selected.png'

const bar_icons = {
    "Home": Home,
    "Home_selected": Home_selected,
    "Chef": Chef,
    "Chef_selected": Chef_selected,
    "Shop": Shop,
    "Shop_selected": Shop_selected,
    "Star": Star,
    "Star_selected": Star_selected,
    "Settings": Settings,
    "Settings_selected": Settings_selected
}

export default function CommonComponents() {

  function mark_active(e) {
    var current_class = document.getElementsByClassName('current');
    if (current_class.length > 0){
        var current_id = current_class[0].id;
        current_class[0].src = bar_icons[current_id];
        current_class[0].classList.remove("current");
    }
    var element_id = e.target.id;
    var selected_element = element_id + "_selected";
    var current_element = document.getElementById(element_id);
    current_element.src = bar_icons[selected_element];
    current_element.classList.add("current");
  }
  
  return (
    <div className="outer-layout">
      <div className="upper-bar">
        <img src={FinalLogo}></img>
        <div className="top-r">
          <select className="form-control">
              <option>EN</option>
          </select>
          <User />
        </div>
      </div>

      <div className="bottom-bar">
        <div>
          <img src={Home} id="Home" height="28" onClick={mark_active}></img>
        </div>
        <div>
          <img src={Chef} id="Chef" height="28" onClick={mark_active}></img>
        </div>
        <div>
          <img src={Shop} id="Shop" height="28" onClick={mark_active}></img>
        </div>
        <div>
          <img src={Star} id="Star" height="28" onClick={mark_active}></img>
        </div>
        <div>
          <img src={Settings} id="Settings" height="28" onClick={mark_active}></img>
        </div>
      </div>
    </div>

  );
}