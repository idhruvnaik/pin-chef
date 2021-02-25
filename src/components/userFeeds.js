import React from 'react';
import ReactDOM from 'react-dom';
import User from '../assets/svg/User';
import GlobalStyles from '../styles/GlobalStyles';
import './commonComponents.css'
import CommonFooter from './commonFooter'
import Ads from './advertises'
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
import UserPhoto from '../assets/images/photo2.png'
import UserPost from '../assets/images/bannerFeed2.png'
import PostMenu from '../assets/png_icons/Post menu icon@2x.png'
import CommentIcon from '../assets/png_icons/Comment icon@2x.png'
import EmptyHeart from '../assets/png_icons/Empty heart@2x.png'
import PostShare from '../assets/png_icons/Post Share count@2x.png'
import Time from '../assets/png_icons/time recipe@2x.png'
import Location from '../assets/png_icons/Location outlined@2x.png'

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

const feeds = [
    {
        id: 1,
        desktop_icon: UserPhoto,
        user_name: "Jenah Stephonson",
        user_description: "Home chef",
        post: UserPost,
        likes: 0,
        comments: 0,
        share: 0,
        location: "Miami, FL",
        time: "45 min ago",
        post_content: "It was great night as we were at catering for a wedding. Thank you all of the staff that helped us to make event such a wonderful and delicious."
    },
    {
        id: 2,
        desktop_icon: UserPhoto,
        user_name: "Jenah Stephonson",
        user_description: "Home chef",
        post: UserPost,
        likes: 0,
        comments: 0,
        share: 0,
        location: "Miami, FL",
        time: "45 min ago",
        post_content: "It was great night as we were at catering for a wedding. Thank you all of the staff that helped us to make event such a wonderful and delicious."
    }
]

const recipes = [
    {
        id: 1,
        desktop_icon: UserPhoto,
        user_name: "Jenah Stephonson",
        user_description: "Home chef",
        post: UserPost,
        likes: 0,
        comments: 0,
        share: 0,
        location: "Miami, FL",
        time: "45 min ago",
        post_content: "It was great night as we were at catering for a wedding. Thank you all of the staff that helped us to make event such a wonderful and delicious."
    },
    {
        id: 2,
        desktop_icon: UserPhoto,
        user_name: "Jenah Stephonson",
        user_description: "Home chef",
        post: UserPost,
        likes: 0,
        comments: 0,
        share: 0,
        location: "Miami, FL",
        time: "45 min ago",
        post_content: "It was great night as we were at catering for a wedding. Thank you all of the staff that helped us to make event such a wonderful and delicious."
    }
]

export default function UserFeeds() {
    window.onload = function (){
        console.log("load kiya re");
        var intian_content = document.getElementsByClassName('switch-content');
        intian_content[0].children[0].style.borderBottom = "2px solid #7d7d7e";
        intian_content[0].children[0].classList.add("active");
        document.getElementsByClassName('feeds')[0].style.visibility = "visible";
        document.getElementsByClassName('recipes')[0].style.visibility = "hidden";
        document.getElementsByClassName('e-masterclass')[0].style.visibility = "hidden";
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

    function make_active(e) {
        var active_class = document.getElementsByClassName('active');
        if (active_class.length > 0){
            active_class[0].style.borderBottom = "none";
            active_class[0].classList.remove("active");
        }
        document.getSelection(e.target).baseNode.parentElement.style.borderBottom = "2px solid #7d7d7e";
        document.getSelection(e.target).baseNode.parentElement.classList.add("active");
        if (e.target.innerHTML == "Feeds"){
            document.getElementsByClassName('feeds')[0].style.visibility = "visible";
            document.getElementsByClassName('recipes')[0].style.visibility = "hidden";
            document.getElementsByClassName('e-masterclass')[0].style.visibility = "hidden";
        }else if (e.target.innerHTML == "Recipes"){
            document.getElementsByClassName('recipes')[0].style.visibility = "visible";
            document.getElementsByClassName('feeds')[0].style.visibility = "hidden";
            document.getElementsByClassName('e-masterclass')[0].style.visibility = "hidden";
        }else {
            document.getElementsByClassName('recipes')[0].style.visibility = "hidden";
            document.getElementsByClassName('feeds')[0].style.visibility = "hidden";
            document.getElementsByClassName('e-masterclass')[0].style.visibility = "visible";
        }
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
                    <div className="radio-list-container">
                        <div className="radio-group">
                            <label>Dates</label>
                            <ul>
                                <li><input type="radio" name="date"/> Today</li>
                                <li><input type="radio" name="date"/> Yesterday</li>
                                <li><input type="radio" name="date"/> This week</li>
                                <li><input type="radio" name="date"/> Custom</li>
                            </ul>
                        </div>
                        <div className="radio-group">
                            <label>Dietary</label>
                            <ul>
                                <li><input type="radio" name="dietary"/> Vegan</li>
                                <li><input type="radio" name="dietary"/> Vegetarian</li>
                                <li><input type="radio" name="dietary"/> Halal</li>
                                <li><input type="radio" name="dietary"/> Kosher</li>
                            </ul>
                        </div>
                        <div className="radio-group">
                            <label>Cusines</label>
                            <ul>
                                <li><input type="radio" name="cusines"/> European</li>
                                <li><input type="radio" name="cusines"/> Cuban</li>
                                <li><input type="radio" name="cusines"/> Russian</li>
                                <li><input type="radio" name="cusines"/> Turkish</li>
                                <li><input type="radio" name="cusines"/> Vegan</li>
                                <li><input type="radio" name="cusines"/> Vegetarian</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="user-content">
                <ul className="switch-content">
                    <li onClick={make_active} className="">Feeds</li>
                    <li onClick={make_active} className="">Recipes</li>
                    <li onClick={make_active} className="">e-Masterclass</li>
                </ul>
                <div className="feeds">
                {feeds.map(function(item) {
                    return (
                        <div className="feed">
                            <div className="primary-details">
                            <img src={item.desktop_icon}></img>
                            <div className="username">
                                <p><b>{item.user_name}</b></p>
                                <p>{item.user_description}</p>
                            </div>
                            <img src={PostMenu}></img>
                        </div>
                            <img className="userpost" src={item.post}></img>
                            <div className="post-activity">
                            <div className="activity">
                                <img src={EmptyHeart}></img>
                                <p>{item.likes}</p>
                            </div>
                            <div className="activity">
                                <img src={CommentIcon}></img>
                                <p>{item.comments}</p>
                            </div>
                            <div className="activity">
                                <img src={PostShare}></img>
                                <p>{item.share}</p>
                            </div>
                            <div className="activity">
                                <img src={Location}></img>
                                <p>{item.location}</p>
                            </div>
                            <div className="activity">
                                <img src={Time}></img>
                                <p>{item.time}</p>
                            </div>
                        </div>
                            <div className="post-content">
                                <p>{item.post_content}</p>
                            </div>
                        </div>
                    )
                })}
                </div>
                <div className="recipes">
                {recipes.map(function(item) {
                    return (
                        <div className="recipe">
                            <div className="primary-details">
                            <img src={item.desktop_icon}></img>
                            <div className="username">
                                <p><b>{item.user_name}</b></p>
                                <p>{item.user_description}</p>
                            </div>
                            <img src={PostMenu}></img>
                        </div>
                            <img className="userpost" src={item.post}></img>
                            <div className="post-activity">
                            <div className="activity">
                                <img src={EmptyHeart}></img>
                                <p>{item.likes}</p>
                            </div>
                            <div className="activity">
                                <img src={CommentIcon}></img>
                                <p>{item.comments}</p>
                            </div>
                            <div className="activity">
                                <img src={PostShare}></img>
                                <p>{item.share}</p>
                            </div>
                            <div className="activity">
                                <img src={Location}></img>
                                <p>{item.location}</p>
                            </div>
                            <div className="activity">
                                <img src={Time}></img>
                                <p>{item.time}</p>
                            </div>
                        </div>
                            <div className="post-content">
                                <p>{item.post_content}</p>
                            </div>
                        </div>
                    )
                })}
                </div>
                <div className="e-masterclass"></div>
            </div>
                <Ads />
            </div>
            <CommonFooter />
        </div>
  );
}