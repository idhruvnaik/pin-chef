import React from 'react';
import ReactDOM, { render } from 'react-dom';
import User from '../assets/svg/User';
import GlobalStyles from '../styles/GlobalStyles';
import './commonComponents.css'
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
import Recipe_time from '../assets/png_icons/time recipe.png'
import Location from '../assets/png_icons/Location outlined@2x.png'
import Food from '../assets/png_icons/mexicanFood.png'
import MasterShare from '../assets/png_icons/Masterclass Share btn@2x.png'
import BookClass from '../assets/png_icons/Book Masterclass icon.png'
import MasterclassTime from '../assets/png_icons/Masterclass Time icon.png'
import MasterclassClockIcon from '../assets/png_icons/Masterclass clock icon.png'
import { getSettingsAuth } from '../services/apiOperations';
import FollowersIcon from '../assets/png_icons/followers icon.png'

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
        recipe_name: "Beef Taco",
        recipe_type: "Mexican",
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
        recipe_name: "Beef Taco",
        recipe_type: "Mexican",
        likes: 0,
        comments: 0,
        share: 0,
        location: "Miami, FL",
        time: "45 min ago",
        post_content: "It was great night as we were at catering for a wedding. Thank you all of the staff that helped us to make event such a wonderful and delicious."
    }
]

const emaster_classes = [
    {
        recipe_name: "PIZZA",
        recipe_image: Food,
        recipe_type: "Italian",
        recipe_diet: "Vegan",
        chef_name: "Jenah Stephanson",
        chef_desktop_icon: UserPhoto,
        ingredients: "pepper, flour, orange juice",
        recipe_description: "Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.",
        price: "25",
        date: "Feb 20 - UTC",
        time: "12:30",
        remaining_time: "2:30",
        available_tickets: "34"
    },
    {
        recipe_name: "PIZZA",
        recipe_image: Food,
        recipe_type: "Italian",
        recipe_diet: "Vegan",
        chef_name: "Jenah Stephanson",
        chef_desktop_icon: UserPhoto,
        ingredients: "pepper, flour, orange juice",
        recipe_description: "Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.Come and enjoy cooking the yummiest Pizza you have ever seen.",
        price: "25",
        date: "Feb 20 - UTC",
        time: "12:30",
        remaining_time: "2:30",
        available_tickets: "34"
    }
]

const chefs = [
    {
        id: 1,
        desktop_icon: UserPhoto,
        ratting: "5.6",
        user_name: "Matt Wilson",
        no_of_followers: "25",
        designation: "Executive chef",
        specialization: "French, Italian, Caucasian",
        address: "Come to address",
        location: "Miami, FL"
    },
    {
        id: 2,
        desktop_icon: UserPhoto,
        ratting: "5.6",
        user_name: "Matt Wilson",
        no_of_followers: "25",
        designation: "Executive chef",
        specialization: "French, Italian, Caucasian",
        address: "Come to address",
        location: "Miami, FL"
    },
    {
        id: 3,
        desktop_icon: UserPhoto,
        ratting: "5.6",
        user_name: "Matt Wilson",
        no_of_followers: "25",
        designation: "Executive chef",
        specialization: "French, Italian, Caucasian",
        address: "Come to address",
        location: "Miami, FL"
    },
    {
        id: 4,
        desktop_icon: UserPhoto,
        ratting: "5.6",
        user_name: "Matt Wilson",
        no_of_followers: "25",
        designation: "Executive chef",
        specialization: "French, Italian, Caucasian",
        address: "Come to address",
        location: "Miami, FL"
    }
]
const foods = [
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
        rattings: "5.6",
        delivery_status: "Delivery + Pick up/Takeaway",
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
        rattings: "5.6",
        delivery_status: "Delivery + Pick up/Takeaway",
        post_content: "It was great night as we were at catering for a wedding. Thank you all of the staff that helped us to make event such a wonderful and delicious."
    }
]
export default function UserFeeds() {

    // function render() {
    //     console.log("user feed loaded")
    // }
    window.onload = function () {
        var intian_content = document.getElementsByClassName('switch-content');
        // intian_content[0].children[0].style.borderBottom = "2px solid #7d7d7e";
        //  intian_content[0].children[0].classList.add("active");
        document.getElementsByClassName("home-content")[0].style.visibility = "visible";
        // document.getElementsByClassName('feeds')[0].style.visibility = "visible";
        document.getElementsByClassName('recipes')[0].style.visibility = "hidden";
        document.getElementsByClassName('e-masterclass')[0].style.visibility = "hidden";
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
            console.log("inside iffff");
            console.log(class_to_make_visible);
            document.getElementsByClassName(class_to_make_visible)[0].style.visibility = "visible";
            console.log("after issss");
        }
    }
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
            document.getElementsByClassName("home-content")[0].style.visibility = "visible";
            document.getElementsByClassName("chef-content")[0].style.visibility = "hidden";
            document.getElementsByClassName("star-content")[0].style.visibility = "hidden";
            document.getElementsByClassName("shop-content")[0].style.visibility = "hidden";
            document.getElementsByClassName("settings-content")[0].style.visibility = "hidden";
            visible_div('feeds');
        } else if (final_current == "Chef") {
            document.getElementsByClassName("home-content")[0].style.visibility = "hidden";
            document.getElementsByClassName("chef-content")[0].style.visibility = "visible";
            document.getElementsByClassName("star-content")[0].style.visibility = "hidden";
            document.getElementsByClassName("shop-content")[0].style.visibility = "hidden";
            document.getElementsByClassName("settings-content")[0].style.visibility = "hidden";
            visible_div('all_chefs');
        } else if (final_current == "Star") {
            document.getElementsByClassName("home-content")[0].style.visibility = "hidden";
            document.getElementsByClassName("chef-content")[0].style.visibility = "hidden";
            document.getElementsByClassName("star-content")[0].style.visibility = "visible";
            document.getElementsByClassName("shop-content")[0].style.visibility = "hidden";
            document.getElementsByClassName("settings-content")[0].style.visibility = "hidden";
            visible_div('feeds_2');
        } else if (final_current == "Shop") {
            document.getElementsByClassName("home-content")[0].style.visibility = "hidden";
            document.getElementsByClassName("chef-content")[0].style.visibility = "hidden";
            document.getElementsByClassName("star-content")[0].style.visibility = "hidden";
            document.getElementsByClassName("shop-content")[0].style.visibility = "visible";
            document.getElementsByClassName("settings-content")[0].style.visibility = "hidden";
            visible_div('food');
        } else {
            document.getElementsByClassName("home-content")[0].style.visibility = "hidden";
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
        var current_class = document.getElementsByClassName('current')[0].id.toLowerCase();
        var active_class = document.querySelector('.' + current_class + '-content .active');
        if (active_class) {
            active_class.classList.remove("active");
        }
        // document.getSelection(e.target).baseNode.parentElement.style.borderBottom = "2px solid #7d7d7e";
        document.getSelection(e.target).baseNode.parentElement.classList.add("active");
        if (e.target.innerHTML == "Feeds") {
            document.getElementsByClassName('feeds')[0].style.visibility = "visible";
            document.getElementsByClassName('recipes')[0].style.visibility = "hidden";
            document.getElementsByClassName('e-masterclass')[0].style.visibility = "hidden";
        } else if (e.target.innerHTML == "Recipes") {
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
        } else if (e.target.innerHTML == "Feeds") {
            document.getElementsByClassName('feeds_2')[0].style.visibility = "visible";
            document.getElementsByClassName('recipes_2')[0].style.visibility = "hidden";
            document.getElementsByClassName('foodservices')[0].style.visibility = "hidden";
            document.getElementsByClassName('my_purchases')[0].style.visibility = "hidden";
        } else if (e.target.innerHTML == "Recipes") {
            document.getElementsByClassName('feeds_2')[0].style.visibility = "hidden";
            document.getElementsByClassName('recipes_2')[0].style.visibility = "visible";
            document.getElementsByClassName('foodservices')[0].style.visibility = "hidden";
            document.getElementsByClassName('my_purchases')[0].style.visibility = "hidden";
        } else if (e.target.innerHTML == "FoodsServices") {
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

    return (
        <div className="outer-layout user-feed-page" style={{ background: "none" }}>
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
                                <li><input type="radio" name="date" /> Today</li>
                                <li><input type="radio" name="date" /> Yesterday</li>
                                <li><input type="radio" name="date" /> This week</li>
                                <li><input type="radio" name="date" /> Custom</li>
                            </ul>
                        </div>
                        <div className="radio-group">
                            <label>Dietary</label>
                            <ul>
                                <li><input type="radio" name="dietary" /> Vegan</li>
                                <li><input type="radio" name="dietary" /> Vegetarian</li>
                                <li><input type="radio" name="dietary" /> Halal</li>
                                <li><input type="radio" name="dietary" /> Kosher</li>
                            </ul>
                        </div>
                        <div className="radio-group">
                            <label>Cusines</label>
                            <ul>
                                <li><input type="radio" name="cusines" /> European</li>
                                <li><input type="radio" name="cusines" /> Cuban</li>
                                <li><input type="radio" name="cusines" /> Russian</li>
                                <li><input type="radio" name="cusines" /> Turkish</li>
                                <li><input type="radio" name="cusines" /> Vegan</li>
                                <li><input type="radio" name="cusines" /> Vegetarian</li>
                            </ul>
                        </div>
                        <div className="radio-group">
                            <label>Price</label>
                            <input className="slider" type="range" min="0" max="1" step="0.01" value="0.5"></input>
                        </div>
                    </div>
                </div>
                <div className="menu-bar">
                    <div className="home-content">
                        <ul className="switch-content">
                            <li onClick={make_active} className="active">Feeds</li>
                            <li onClick={make_active} className="">Recipes</li>
                            <li onClick={make_active} className="">e-Masterclass</li>
                        </ul>
                        <div className="feeds">
                            {feeds.map(function (item) {
                                return (
                                    <div className="feed">
                                        <div className="primary-details">
                                            <div className="l-div">
                                                <div className="profile-img-container">
                                                    <img src={item.desktop_icon}></img>
                                                </div>
                                                <div className="user-detail-container">
                                                    <h3>{item.user_name}</h3>
                                                    <h5>{item.user_description}</h5>
                                                </div>
                                            </div>
                                            <div className="post-option"><img src={PostMenu}></img></div>
                                        </div>
                                        <div className="post-image">
                                            <img className="userpost" src={item.post}></img>
                                        </div>
                                        <div className="post-activity">
                                            <div className="l-div">
                                                <div className="activity">
                                                    <img src={EmptyHeart}></img>
                                                    <span>{item.likes}</span>
                                                </div>
                                                <div className="activity">
                                                    <img src={CommentIcon}></img>
                                                    <span>{item.comments}</span>
                                                </div>
                                                <div className="activity">
                                                    <img src={PostShare}></img>
                                                    <span>{item.share}</span>
                                                </div>
                                            </div>
                                            <div className="r-div">
                                                <div className="activity">
                                                    <img src={Location}></img>
                                                    <span>{item.location}</span>
                                                </div>
                                                <div className="activity">
                                                    <img src={Time}></img>
                                                    <span>{item.time}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="post-content">{item.post_content}</div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="recipes">
                            {recipes.map(function (item) {
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
                                            <div className="recipe_details">
                                                <h4>{item.recipe_name}&nbsp;&nbsp;&nbsp;&nbsp;({item.recipe_type})</h4>
                                            </div>
                                            <div className="activities">
                                                <div className="activity">
                                                    <img src={PostShare}></img>
                                                    <p>{item.share}</p>
                                                </div>
                                                <div className="activity">
                                                    <img src={CommentIcon}></img>
                                                    <p>{item.comments}</p>
                                                </div>
                                                <div className="activity">
                                                    <img src={EmptyHeart}></img>
                                                    <p>{item.likes}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="time">
                                            <img src={Recipe_time}></img>
                                            <p>{item.time}</p>
                                        </div>
                                        <div className="post-content">
                                            <h4>Ingredients</h4>
                                            <p>{item.post_content}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="e-masterclass">
                            {emaster_classes.map(function (item) {
                                return (
                                    <div className="order">
                                        <div className="order_details">
                                            <div style={{ width: "100%" }}>
                                                <center><h3>{item.recipe_name}</h3></center>
                                                <img src={item.recipe_image}></img>
                                                <img className="share" src={MasterShare}></img>
                                            </div>
                                            <p><span><b>{item.recipe_type}</b></span></p>
                                            <p><span><b>{item.recipe_diet}</b></span></p>
                                        </div>
                                        <div className="order_content">
                                            <div className="user_details">
                                                <img src={item.chef_desktop_icon}></img>
                                                <h4>{item.chef_name}</h4>
                                                <img src={BookClass}></img>
                                            </div>
                                            <div className="order_description">
                                                <p>{item.recipe_description}</p>
                                                <p><b>Ingredients:</b> {item.ingredients}</p>
                                            </div>
                                            <div className="other_details">
                                                <div><b>$ <span className="price">{item.price}</span></b></div>
                                                <div className="class_date_time">
                                                    <img src={MasterclassTime}></img>
                                                    <span>{item.date} -</span>
                                                    <div className="time">{item.time}</div>
                                                </div>
                                                <div className="remaining_time">
                                                    <img src={MasterclassClockIcon}></img>
                                                    <div>{item.remaining_time}</div>
                                                </div>
                                            </div>
                                            <div className="ticket_status">
                                                Available Tickets <b>{item.available_tickets}</b>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="chef-content">
                        <ul className="switch-content">
                            <li onClick={make_active} className="">All Chefs</li>
                            <li onClick={make_active} className="">Following Chefs</li>
                        </ul>
                        <div className="all_chefs">
                            {chefs.map(function (item) {
                                return (
                                    <div className="chef">
                                        <div className="chef_details">
                                            <img src={item.desktop_icon}></img>
                                            <p><b>{item.ratting}/10</b></p>
                                        </div>
                                        <div className="chef_content">
                                            <div className="followers">
                                                <div>
                                                    <p>
                                                        <b>{item.user_name}</b>
                                                    </p>
                                                </div>
                                                <div>
                                                    <p>
                                                        <img src={FollowersIcon}></img>
                                                        <b>&nbsp;&nbsp;{item.no_of_followers} Followers</b>
                                                    </p>
                                                    <button type="button">Follow</button>
                                                </div>
                                            </div>
                                            <p>{item.designation}</p>
                                            <p>{item.specialization}</p>
                                            <p>{item.address}</p>
                                            <div className="location">
                                                <img src={Location}></img>
                                                &nbsp;&nbsp;{item.location}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="following_chefs">
                            {chefs.map(function (item) {
                                return (
                                    <div className="chef">
                                        <div className="chef_details">
                                            <img src={item.desktop_icon}></img>
                                            <p><b>{item.ratting}/10</b></p>
                                        </div>
                                        <div className="chef_content">
                                            <div className="followers">
                                                <div>
                                                    <p>
                                                        <b>{item.user_name}</b>
                                                    </p>
                                                </div>
                                                <div>
                                                    <p>
                                                        <img src={FollowersIcon}></img>
                                                        <b>&nbsp;&nbsp;{item.no_of_followers} Followers</b>
                                                    </p>
                                                    <button type="button">Unfollow</button>
                                                </div>
                                            </div>
                                            <p>{item.designation}</p>
                                            <p>{item.specialization}</p>
                                            <p>{item.address}</p>
                                            <div className="location">
                                                <img src={Location}></img>
                                                &nbsp;&nbsp;{item.location}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="shop-content">
                        <ul className="switch-content">
                            <li onClick={make_active} className="">Food</li>
                            <li onClick={make_active} className="">Services</li>
                        </ul>
                        <div className="food">
                            {foods.map(function (item) {
                                return (
                                    <div className="each_food">
                                        <div className="primary-details">
                                            <div className="profile-img-container">
                                                <img src={item.desktop_icon}></img>
                                            </div>
                                            <div className="username">
                                                <p><b>{item.user_name}</b></p>
                                                <p>{item.user_description}</p>
                                            </div>
                                            <div>
                                                <img src={PostMenu}></img>
                                                <div className="rattings">
                                                    <p>Ratting = {item.rattings}/10</p>
                                                    <p><i>{item.delivery_status}</i></p>
                                                </div>
                                                <div className="delivery">

                                                </div>
                                            </div>
                                        </div>
                                        <img className="userpost" src={item.post}></img>
                                        <div className="post-activity">
                                            <div className="l-div">
                                                <div className="activity">
                                                    <img style={{marginRight: "5px"}} src={Location}></img>
                                                    <p>{item.location}</p>
                                                </div>
                                                <div className="activity">
                                                    <p>2 Miles Away</p>
                                                </div>
                                            </div>
                                            <div className="r-div">
                                                <div className="activity">
                                                    <img src={EmptyHeart}></img>
                                                    <p>{item.likes}</p>
                                                </div>
                                                <div className="activity">
                                                    <img src={CommentIcon}></img>
                                                    <p>{item.comments}</p>
                                                </div>
                                                <div className="activity" style={{marginRight:"0px"}}>
                                                    <img src={PostShare}></img>
                                                    <p>{item.share}</p>
                                                </div>
                                            </div>                                            
                                        </div>
                                        <div className="post-content">
                                            <p>{item.post_content}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="services"></div>
                    </div>
                    <div className="star-content">
                        <ul className="switch-content">
                            <li onClick={make_active} className="">Feeds</li>
                            <li onClick={make_active} className="">Recipes</li>
                            <li onClick={make_active} className="">FoodsServices</li>
                            <li onClick={make_active} className="">My Purchases</li>
                        </ul>
                        <div className="feeds_2"></div>
                        <div className="recipes_2"></div>
                        <div className="foodservices"></div>
                        <div className="my_purchases"></div>
                    </div>
                    <div className="settings-content">
                    </div>
                </div>
                <Ads />
            </div>
            <div className="bottom-bar">
                <div>
                    <img src={Home_selected} id="Home" className="current" height="28" onClick={mark_active}></img>
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