import React from 'react';
import './advertises.scss'
import PinChefTv from '../assets/png_icons/Pinchef TV.png'
import PinchefNews from '../assets/png_icons/Pinchef News.png'
import PinchefTravel from '../assets/png_icons/Pinchef Travel.png'
import PinchefBlog from '../assets/png_icons/Pinchef Blog.png'
import PinchefBook from '../assets/png_icons/Pinchef Books.png'

export default function Ads() {
  
    return (
        <div className="pinchef-content">
            <img src={PinChefTv}></img>
            <img src={PinchefNews}></img>
            <img src={PinchefBlog}></img>
            <img src={PinchefBook}></img>
            <img src={PinchefTravel}></img>  
            <div className="pin-chef-ads">Google Ads</div>
            <div className="pin-chef-ads">Google Ads</div>
        </div>
    );
}