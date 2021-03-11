import React from 'react';
import ReactDOM, { render } from 'react-dom';
import User from '../assets/svg/User';
import './commonComponents.css'
import Ads from './advertises'
import FilterDiv from './filter'
import './userFeeds.css'
import './user-feeds.scss'
import './media.scss'
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

import HomeSection from './home';
import ChefSection from './chef';
import ShopSection from './shop';
import StarSection from './star';

import $ from 'jquery';

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
    window.onload = function () {
        // var intian_content = document.getElementsByClassName('switch-content');
        // intian_content[0].children[0].style.borderBottom = "2px solid #7d7d7e";
        //  intian_content[0].children[0].classList.add("active");
        // document.getElementsByClassName("home-content")[0].style.visibility = "visible";
        // document.getElementsByClassName('feeds')[0].style.visibility = "visible";
        // document.getElementsByClassName('recipes')[0].style.visibility = "hidden";
        // document.getElementsByClassName('e-masterclass')[0].style.visibility = "hidden";
    };
    function visible_div(class_to_make_visible) {
        document.getElementsByClassName('feeds')[0].style.visibility = "hidden";
        document.getElementsByClassName('recipes')[0].style.visibility = "hidden";
        document.getElementsByClassName('e-masterclass')[0].style.visibility = "hidden";

        document.getElementsByClassName('all_chefs')[0].style.visibility = "hidden";
        document.getElementsByClassName('following_chefs')[0].style.visibility = "hidden";

        document.getElementsByClassName('food')[0].style.visibility = "hidden";
        document.getElementsByClassName('services')[0].style.visibility = "hidden";

        document.getElementsByClassName('feeds_2')[0].style.visibility = "hidden";
        document.getElementsByClassName('recipes_2')[0].style.visibility = "hidden";
        document.getElementsByClassName('foodservices')[0].style.visibility = "hidden";
        document.getElementsByClassName('my_purchases')[0].style.visibility = "hidden";

        if (class_to_make_visible) {
            document.getElementsByClassName(class_to_make_visible)[0].style.visibility = "visible";
        }
    }
    const ratingChanged = (newRating) => {
        document.querySelector('.each_service .primary-details .rattings .given_rattings').innerHTML = newRating;
    };
    function mark_active(e) {
        if (document.querySelector('.' + e.target.id.toLowerCase() + '-content .switch-content')) {
            if (document.querySelector('.' + e.target.id.toLowerCase() + '-content .switch-content .active')) {
                document.querySelector('.' + e.target.id.toLowerCase() + '-content .switch-content .active').classList.remove("active");
            }
            document.querySelector('.' + e.target.id.toLowerCase() + '-content .switch-content li:nth-child(1)').classList.add("active");
        }
        var current_class = document.getElementsByClassName('current');
        if (current_class.length > 0) {
            var current_id = current_class[0].id;
            current_class[0].src = bar_icons[current_id];
            current_class[0].classList.remove("current");
        }
        var element_id = e.target.id;
        var selected_element = element_id + "_selected";
        var current_element = document.getElementById(element_id);
        current_element.src = bar_icons[selected_element];
        current_element.classList.add("current");
        var final_current = document.getElementsByClassName("current")[0].id;
        if (final_current == "Home") {
            // document.getElementsByClassName("home-content")[0].style.visibility = "visible";
            document.getElementsByClassName("chef-content")[0].style.visibility = "hidden";
            document.getElementsByClassName("star-content")[0].style.visibility = "hidden";
            document.getElementsByClassName("shop-content")[0].style.visibility = "hidden";
            document.getElementsByClassName("settings-content")[0].style.visibility = "hidden";
            visible_div('feeds');
        } else if (final_current == "Chef") {
            // document.getElementsByClassName("home-content")[0].style.visibility = "hidden";
            document.getElementsByClassName("chef-content")[0].style.visibility = "visible";
            document.getElementsByClassName("star-content")[0].style.visibility = "hidden";
            document.getElementsByClassName("shop-content")[0].style.visibility = "hidden";
            document.getElementsByClassName("settings-content")[0].style.visibility = "hidden";
            visible_div('all_chefs');
        } else if (final_current == "Star") {
            // document.getElementsByClassName("home-content")[0].style.visibility = "hidden";
            document.getElementsByClassName("chef-content")[0].style.visibility = "hidden";
            document.getElementsByClassName("star-content")[0].style.visibility = "visible";
            document.getElementsByClassName("shop-content")[0].style.visibility = "hidden";
            document.getElementsByClassName("settings-content")[0].style.visibility = "hidden";
            visible_div('feeds_2');
        } else if (final_current == "Shop") {
            // document.getElementsByClassName("home-content")[0].style.visibility = "hidden";
            document.getElementsByClassName("chef-content")[0].style.visibility = "hidden";
            document.getElementsByClassName("star-content")[0].style.visibility = "hidden";
            document.getElementsByClassName("shop-content")[0].style.visibility = "visible";
            document.getElementsByClassName("settings-content")[0].style.visibility = "hidden";
            visible_div('food');
        } else {
            // document.getElementsByClassName("home-content")[0].style.visibility = "hidden";
            document.getElementsByClassName("chef-content")[0].style.visibility = "hidden";
            document.getElementsByClassName("star-content")[0].style.visibility = "hidden";
            document.getElementsByClassName("shop-content")[0].style.visibility = "hidden";
            document.getElementsByClassName("settings-content")[0].style.visibility = "visible";
            visible_div('');
        }
    };

    function make_active(e) {
        // getSettingsAuth()
        //     .then(res => {
        //         console.log("resp");
        //         console.log(res)
        //         if(res.status===200){
        //             console.log("success");
        //         }
        //     })
        console.log(e.target.innerHTML);
        var current_class = document.getElementsByClassName('current')[0].id.toLowerCase();
        var active_class = document.querySelector('.' + current_class + '-content .active');
        if (active_class) {
            active_class.classList.remove("active");
        }
        // document.getSelection(e.target).baseNode.parentElement.style.borderBottom = "2px solid #7d7d7e";
        document.getSelection(e.target).baseNode.parentElement.classList.add("active");
        if (e.target.innerHTML == "Feeds" && e.target.parentElement.parentElement.classList[0] == "home-content") {
            document.getElementsByClassName('feeds')[0].style.visibility = "visible";
            document.getElementsByClassName('recipes')[0].style.visibility = "hidden";
            document.getElementsByClassName('e-masterclass')[0].style.visibility = "hidden";
        } else if (e.target.innerHTML == "Recipes" && e.target.parentElement.parentElement.classList[0] == "home-content") {
            document.getElementsByClassName('recipes')[0].style.visibility = "visible";
            document.getElementsByClassName('feeds')[0].style.visibility = "hidden";
            document.getElementsByClassName('e-masterclass')[0].style.visibility = "hidden";
        } else if (e.target.innerHTML == "e-Masterclass") {
            document.getElementsByClassName('recipes')[0].style.visibility = "hidden";
            document.getElementsByClassName('feeds')[0].style.visibility = "hidden";
            document.getElementsByClassName('e-masterclass')[0].style.visibility = "visible";
        } else if (e.target.innerHTML == "All Chefs") {
            document.getElementsByClassName('all_chefs')[0].style.visibility = "visible";
            document.getElementsByClassName('following_chefs')[0].style.visibility = "hidden";
        } else if (e.target.innerHTML == "Following Chefs") {
            document.getElementsByClassName('all_chefs')[0].style.visibility = "hidden";
            document.getElementsByClassName('following_chefs')[0].style.visibility = "visible";
        } else if (e.target.innerHTML == "Food") {
            document.getElementsByClassName('food')[0].style.visibility = "visible";
            document.getElementsByClassName('services')[0].style.visibility = "hidden";
        } else if (e.target.innerHTML == "Services") {
            document.getElementsByClassName('food')[0].style.visibility = "hidden";
            document.getElementsByClassName('services')[0].style.visibility = "visible";
        } else if (e.target.innerHTML == "Feeds" && e.target.parentElement.parentElement.classList[0] == "star-content") {
            document.getElementsByClassName('feeds_2')[0].style.visibility = "visible";
            document.getElementsByClassName('recipes_2')[0].style.visibility = "hidden";
            document.getElementsByClassName('foodservices')[0].style.visibility = "hidden";
            document.getElementsByClassName('my_purchases')[0].style.visibility = "hidden";
        } else if (e.target.innerHTML == "Recipes" && e.target.parentElement.parentElement.classList[0] == "star-content") {
            document.getElementsByClassName('feeds_2')[0].style.visibility = "hidden";
            document.getElementsByClassName('recipes_2')[0].style.visibility = "visible";
            document.getElementsByClassName('foodservices')[0].style.visibility = "hidden";
            document.getElementsByClassName('my_purchases')[0].style.visibility = "hidden";
        } else if (e.target.innerHTML == "Foods&amp;Services") {
            document.getElementsByClassName('feeds_2')[0].style.visibility = "hidden";
            document.getElementsByClassName('recipes_2')[0].style.visibility = "hidden";
            document.getElementsByClassName('foodservices')[0].style.visibility = "visible";
            document.getElementsByClassName('my_purchases')[0].style.visibility = "hidden";
        } else if (e.target.innerHTML == "My Purchases") {
            document.getElementsByClassName('feeds_2')[0].style.visibility = "hidden";
            document.getElementsByClassName('recipes_2')[0].style.visibility = "hidden";
            document.getElementsByClassName('foodservices')[0].style.visibility = "hidden";
            document.getElementsByClassName('my_purchases')[0].style.visibility = "visible";
        }
    };

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

            <div className="bottom-bar">
                <div>
                    <img src={Home} className="active" id="home" height="28" onClick={() => showSection('home')}></img>
                </div>
                <div>
                    <img src={Chef} id="chef" className="" height="28" onClick={() => showSection('chef')}></img>
                </div>
                <div>
                    <img src={Shop} id="shop" className="" height="28" onClick={() => showSection('shop')}></img>
                </div>
                <div>
                    <img src={Star} id="star" className="" height="28" onClick={() => showSection('star')}></img>
                </div>
                <div>
                    <img src={Settings} id="settings" className="" height="28" onClick={() => showSection('setting')}></img>
                </div>
            </div>
        </div>
    );
}