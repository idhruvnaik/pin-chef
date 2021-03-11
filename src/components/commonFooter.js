import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './commonComponents.css'
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

import HomeSection from './home'

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

export default function CommonFooter() {

    function show(element) {
    }

    return (
        <div className="bottom-bar">
            <div>
                <img src={Home} id="Home" height="28" onClick={() => show(HomeSection)}></img>
            </div>
            <div>
                <img src={Chef} id="Chef" height="28" onClick={show(HomeSection)}></img>
            </div>
            <div>
                <img src={Shop} id="Shop" height="28" onClick={show(HomeSection)}></img>
            </div>
            <div>
                <img src={Star} id="Star" height="28" onClick={show(HomeSection)}></img>
            </div>
            <div>
                <img src={Settings} id="Settings" height="28" onClick={show(HomeSection)}></img>
            </div>
        </div>
    );
}