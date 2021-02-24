import React from 'react';
import ReactDOM from 'react-dom';
import CommonComponents from './commonComponents'
import User from '../assets/svg/User';
import GlobalStyles from '../styles/GlobalStyles';
import './commonComponents.css'
import './userFeeds.css'
import FinalLogo from '../assets/images/Logo-small.png'
import Filter from '../assets/images/filter.png'
import LocationIcon from '../assets/png_icons/Login_Sign up, Splash/Location icon black.png'
import SearchIcon from '../assets/png_icons/Login_Sign up, Splash/search icon.png'
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
import PinChefPng from '../assets/png_icons/PinchefBlog.png'

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

export default function UserFeeds() {
  function _renderSkipButton() {
    return (
      <text
        style={{
          marginTop: 10,
          fontFamily: GlobalStyles.font.fontFamilyBold,
          fontSize: 18,
          color: GlobalStyles.color.white,
          fontWeight: '100',
        }}>
        Skip
      </text>
    );
  };

  function mark_active(e) {
    console.log(window.innerWidth);
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
  };
  
  return (
    <div className="outer-layout">
        <div className="upper-bar">
            <img src={FinalLogo}></img>
            <img src={Filter}></img>
            <img src={LocationIcon}></img>
            <span><b>All</b></span>
            <img src={SearchIcon}></img>
            <div className="top-r">
                <select className="form-control">
                    <option>EN</option>
                </select>
            <User />
            </div>
        </div>
        <div className="user-pallet">
            <div className="filter-div">
                <h4 className="reset-btn">RESET</h4>
                <div class="radio-list-container">
                    <div class="radio-group">
                        <label>Dates</label>
                        <ul>
                            <li><input type="radio" name="date"/> Today</li>
                            <li><input type="radio" name="date"/> Yesterday</li>
                            <li><input type="radio" name="date"/> This week</li>
                            <li><input type="radio" name="date"/> Custom</li>
                        </ul>
                    </div>
                    <div class="radio-group">
                        <label>Dietary</label>
                        <ul>
                            <li><input type="radio" name="date"/> Vegan</li>
                            <li><input type="radio" name="date"/> Vegetarian</li>
                            <li><input type="radio" name="date"/> Halal</li>
                            <li><input type="radio" name="date"/> Kosher</li>
                        </ul>
                    </div>
                    <div class="radio-group">
                    <label>Cusines</label>
                    <ul>
                        <li><input type="radio" name="date"/> European</li>
                        <li><input type="radio" name="date"/> Cuban</li>
                        <li><input type="radio" name="date"/> Russian</li>
                        <li><input type="radio" name="date"/> Turkish</li>
                        <li><input type="radio" name="date"/> Vegan</li>
                        <li><input type="radio" name="date"/> Vegetarian</li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="user-content"></div>
            <div className="pinchef-content">
                <div className="pin-chef-btn-container">
                    <img src={PinChefPng}></img>
                    <img src={PinChefPng}></img>
                    <img src={PinChefPng}></img>
                    <img src={PinChefPng}></img>
                    <img src={PinChefPng}></img>
                </div>              
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