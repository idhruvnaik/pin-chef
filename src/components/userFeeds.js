import React from 'react';
import ReactDOM, { render } from 'react-dom';
import $ from 'jquery';


import Ads from './advertises'
import FilterDiv from './filter'
import HomeSection from './home';
import ChefSection from './chef';
import ShopSection from './shop';
import StarSection from './star';

import './commonComponents.css'
import './userFeeds.css'
import './user-feeds.scss'
import './common.scss'
import './media.scss'

import User from '../assets/svg/User';
import FinalLogo from '../assets/images/Logo-small.png'
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

const bar_icons = {
    "home": Home,
    "home_selected": Home_selected,
    "chef": Chef,
    "chef_selected": Chef_selected,
    "shop": Shop,
    "shop_selected": Shop_selected,
    "star": Star,
    "star_selected": Star_selected,
    "settings": Settings,
    "settings_selected": Settings_selected
}


export default function UserFeeds() {

    function showSection(element) {
        $(".active").attr('src', bar_icons[$(".active")[0].id]);
        $(".active").removeClass('active');
        $("#" + element).addClass('active');
        $(".active").attr('src', bar_icons[element + '_selected']);

        if (element == 'home') {
            ReactDOM.render(<HomeSection />, document.getElementById('menu-bar'));
        }else if(element == 'chef'){
            ReactDOM.render(<ChefSection />, document.getElementById('menu-bar'));
        }else if(element == 'shop'){
            ReactDOM.render(<ShopSection />, document.getElementById('menu-bar'));
        }else if(element == 'star'){
            ReactDOM.render(<StarSection />, document.getElementById('menu-bar'));
        }
    }

    return (
        <div className="outer-layout user-feed-page" style={{ background: "none" }}>
            <div className="upper-bar">
                <div className="l-div">
                    <img src={FinalLogo} className="pin-chef-logo"></img>
                </div>
                <div className="m-div">
                    <div className="location-div">
                        <img src={LocationIcon}></img>
                        <span>All</span>
                    </div>
                    <div className="search-div">
                        <input placeholder="Search here.." type="text" className="search-box" />
                        <img src={SearchIcon}></img>
                    </div>
                </div>
                <div className="r-div">
                    <select className="form-control">
                        <option>EN</option>
                        <option>FR</option>
                        <option>EU</option>
                    </select>
                    <User />
                </div>
            </div>
            
            <div className="user-pallet">
                <FilterDiv />
                <div className="menu-bar" id="menu-bar"></div>
                <Ads />
            </div>

            <div className="footer">
                <div className="nav-item">
                    <img src={Home} className="active" id="home" height="28" onClick={() => showSection('home')}></img>
                </div>
                <div className="nav-item">
                    <img src={Chef} id="chef" className="" height="28" onClick={() => showSection('chef')}></img>
                </div>
                <div className="nav-item">
                    <img src={Shop} id="shop" className="" height="28" onClick={() => showSection('shop')}></img>
                </div>
                <div className="nav-item">
                    <img src={Star} id="star" className="" height="28" onClick={() => showSection('star')}></img>
                </div>
                <div className="nav-item">
                    <img src={Settings} id="settings" className="" height="28" onClick={() => showSection('setting')}></img>
                </div>
            </div>
        </div>
    );
}