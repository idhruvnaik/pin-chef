import React, { Component } from 'react';
import ReactStars from "react-rating-stars-component";
import UserPhoto from '../assets/images/photo2.png';
import UserPost from '../assets/images/bannerFeed2.png';
import PostMenu from '../assets/png_icons/Post menu icon@2x.png';
import CommentIcon from '../assets/png_icons/Comment icon@2x.png';
import EmptyHeart from '../assets/png_icons/Empty heart@2x.png';
import PostShare from '../assets/png_icons/Post Share count@2x.png';

import $ from 'jquery';

export default class home extends Component {

    constructor(props) {
        super(props);

        this.foods = [
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

        this.services = [
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

        this.ratingChanged = (newRating) => {
            document.querySelector('.each_service .primary-details .rattings .given_rattings').innerHTML = newRating;
        };

        this.active = (e) => {
            var element = e.target.id;
            $(".sec").hide();
            $("#" + element + "-sec").show();
            $('.nav-active').removeClass('nav-active');
            e.target.classList.add('nav-active');
        }

    }

    render() {
        return (
            <div className="shop-content">
                <ul className="switch-content">
                    <li onClick={this.active} className="nav-active" id="food">Food</li>
                    <li onClick={this.active} className="" id="service">Services</li>
                </ul>
                <div className="food sec active" id="food-sec">
                    {this.foods.map(function (item) {
                        return (
                            <div className="each_food">
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
                                    <div style={{ paddingRight: "4px" }}>
                                        <div style={{ textAlignLast: "right" }} className="post-option">
                                            <img src={PostMenu}></img>
                                        </div>
                                        <div style={{ display: "flex" }}>
                                            <div className="recipe_rattings">5</div>
                                            <ReactStars
                                                count={5}
                                                onChange={null}
                                                isHalf={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <img className="userpost" src={item.post}></img>
                                <div className="food-price">
                                    <b>Vegan Soft Tacos - $25</b>
                                </div>
                                <div className="post-activity">
                                    <div className="l-div">
                                        <div className="activity">
                                            <img style={{ marginRight: "5px" }} src={Location}></img>
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
                                        <div className="activity" style={{ marginRight: "0px" }}>
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
                <div className="services sec" id="service-sec">
                    {this.services.map(function (item) {
                        return (
                            <div className="each_service">
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
                                    <div style={{ paddingRight: "4px" }}>
                                        <div style={{ textAlignLast: "right" }} className="post-option">
                                            <img src={PostMenu}></img>
                                        </div>
                                        <div style={{ display: "flex" }}>
                                            <div className="recipe_rattings">5</div>
                                            <ReactStars
                                                count={5}
                                                onChange={null}
                                                isHalf={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <img className="userpost" src={item.post}></img>
                                <div className="food-price">
                                    <b>Vegan Soft Tacos - $25</b>
                                </div>
                                <div className="post-activity">
                                    <div className="l-div">
                                        <div className="activity">
                                            <img style={{ marginRight: "5px" }} src={Location}></img>
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
                                        <div className="activity" style={{ marginRight: "0px" }}>
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
            </div>
        );
    }
}