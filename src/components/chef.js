import React, { Component } from 'react';
import ReactStars from "react-rating-stars-component";
import UserPhoto from '../assets/images/photo2.png';
import FollowersIcon from '../assets/png_icons/followers icon.png'
import { addTokenToState, getAllChef, getAllFollowedChef, followChef, unfollowChef, getAllPostsByChefID } from '../services/apiOperations';
import { connect } from "react-redux";
// import { useHistory  } from 'react-router-dom';

import LocationIcon from '../assets/svg/Location.svg';
import ExpandNotification from '../assets/svg/Profile Back btn.svg'
import expandIcon from '../assets/svg/Icon ionic-ios-arrow-back.svg'
import LeftBack from '../assets/png_icons/Green back arrow.png'

import $ from 'jquery';

class chef extends React.Component {
    constructor(props) {
        super(props);

        this.token = this.props.token;
        this.user_id = this.props.user_id;
        this.initialize_chefs = this.initialize_chefs.bind(this);
        this.initialize_followed_chefs = this.initialize_followed_chefs.bind(this);
        this.follow_unfollow_chef = this.follow_unfollow_chef.bind(this);
        this.expand_bginfo = this.expand_bginfo.bind(this);
        this.open_chef_profile = this.open_chef_profile.bind(this);
        this.open_menu = this.open_menu.bind(this);
        this.getAllPosts = this.getAllPosts.bind(this);
        this.state = {
            chefs: [],
            followed_chefs: [],
            chef: {},
            posts: []
        }

        this.active = (e) => {
            var element = e.target.id;
            $(".sec").hide();
            $("#" + element + "-sec").show();
            $('.nav-active').removeClass('nav-active');
            e.target.classList.add('nav-active');
        }

        this.active_section_from_profile = (e) => {
            var element = e.target.id;
            var element_siblings = $('#' + element + "-sec").siblings();
            element_siblings.each(function () {
                $(this).css('display', 'none');
            })
            $("#" + element + "-sec").css("display", "block");
            $('.active').removeClass('active');
            e.target.classList.add('active');
        }
    }

    async initialize_chefs() {
        let chef_result = await getAllChef(this.user_id, this.token);
        if (chef_result.length > 0) {
            if (chef_result.status == false) {
                this.setState({
                    chefs: []
                });
            } else {
                this.setState({
                    chefs: chef_result
                });
            }
        } else {
            this.setState({
                chefs: []
            });
        }
    }

    async getAllPosts(chef_id) {
        var postsresult = await getAllPostsByChefID(chef_id, this.token);
        if(postsresult.length > 0){
            if(postsresult.status == false){
                this.setState({
                    posts: []});
            } else{
                this.setState({
                    posts: postsresult});
            }
        }  else{
            this.setState({
                posts: []});
        }
    }

    async initialize_followed_chefs() {
        let chef_result = await getAllFollowedChef(this.user_id, this.token);
        if (chef_result.length > 0) {
            if (chef_result.status == false) {
                this.setState({
                    followed_chefs: []
                });
            } else {
                this.setState({
                    followed_chefs: chef_result
                });
            }
        } else {
            this.setState({
                followed_chefs: []
            });
        }
    }

    componentDidMount() {
        this.initialize_chefs();
        this.initialize_followed_chefs();
    }

    async follow_unfollow_chef(e) {
        if (e.target.innerHTML.toLowerCase() == "follow") {
            let result = await followChef(this.user_id, e.target.id, this.token);
            if (result.status && result.status == false) {
                console.log(result.message);
            } else {
                this.initialize_chefs();
                this.initialize_followed_chefs();
            }
        } else {
            let result = await unfollowChef(this.user_id, e.target.id, this.token);
            if (result.status && result.status == false) {
                console.log(result.message);
            } else {
                this.initialize_chefs();
                this.initialize_followed_chefs();
            }
        }
    }

    expand_bginfo(chef_id) {
        console.log(chef_id, "from expand bginfo");
        console.log($('#' + chef_id));
        $('#' + chef_id).css("height", "fit-content");
        // console.log(document.querySelector('#' + chef_id + " #chef_background_info p"));
        $('#' + chef_id + " #chef_background_info p").css("overflow", "visible");
        $('#' + chef_id + " #chef_background_info p").css("width", "100%");
        $('#' + chef_id + " #chef_background_info p").css("white-space", "inherit");
        $('#' + chef_id + " #chef_background_info img").css("display", "none");
    }

    open_menu(section, header_flag) {
        var menu_siblings = $('.' + section).siblings();
        menu_siblings.each(function () {
            $(this).css('display', 'none');
        })
        $('.' + section).css('display', 'block');
        if (header_flag) {
            $('.chef-content .switch-content').css("display", "flex");
        }
    }

    open_chef_profile(chef_id, source) {
        console.log(chef_id, "open chef profile");
        let chef_details = this.state.chefs.find(chef => chef._id == chef_id);
        chef_details.source = source
        this.setState({ chef: chef_details });
        this.getAllPosts(chef_id);
        this.open_menu("chef-profile", false);
    }

    render() {
        return (
            <div className="chef-content">
                <ul className="switch-content">
                    <li onClick={this.active} className="nav-active" id="all-chef">All Chefs</li>
                    <li onClick={this.active} className="" id="following-chef">Following Chefs</li>
                </ul>
                <div className="all_chefs sec active" id="all-chef-sec">
                    {this.state.chefs && this.state.chefs.length > 0 && this.state.chefs.map((item) => {
                        return (
                            <div className="chef">
                                <div className="chef_details">
                                    <img src={item.profile_image} onClick={() => this.open_chef_profile(item._id, "all_chefs")}></img>
                                    <ReactStars
                                        count={5}
                                        onChange={null}
                                        isHalf={true}
                                        value={item.chef_details.rate}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <span><b>{item.chef_details.rate}/5</b></span>
                                </div>
                                <div className="chef_content">
                                    <div className="followers">
                                        <h4>{item.user_name}</h4>
                                        <div className="follower-count">
                                            <div>
                                                <img src={FollowersIcon}></img>
                                                <span>{item.followerCount} Followers</span>
                                            </div>
                                            <button type="button" id={item._id} onClick={this.follow_unfollow_chef}>{item.is_follow ? "Unfollow" : "Follow"}</button>
                                        </div>
                                    </div>
                                    <h5>{item.chef_details.position}</h5>
                                    <h5>{item.chef_details.specialty.join(", ")}</h5>
                                    <div id="chef_background_info">
                                        <p>{item.chef_details.background_info}</p> &nbsp;&nbsp;&nbsp;
                                        <img src={item.chef_details.background_info && item.chef_details.background_info.length > 15 ? expandIcon : null} onClick={() => this.expand_bginfo(item._id)}></img>
                                    </div>
                                    <div className="location" style={{ color: "green" }}>
                                        <img src={LocationIcon}></img>
                                        <span>{item.chef_details.service_location}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="following_chefs sec" id="following-chef-sec">
                    {this.state.followed_chefs.map((item) => {
                        return (
                            <div className="chef" id={item._id}>
                                <div className="chef_details">
                                    <img src={item.profile_image} onClick={() => this.open_chef_profile(item._id, "following_chefs")}></img>
                                    <ReactStars
                                        count={5}
                                        onChange={null}
                                        isHalf={true}
                                        value={item.chef_details.rate}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <span><b>{item.chef_details.rate}/5</b></span>
                                </div>
                                <div className="chef_content">
                                    <div className="followers">
                                        <h4>{item.user_name}</h4>
                                        <div className="follower-count">
                                            <div>
                                                <img src={FollowersIcon}></img>
                                                <span>{item.followerCount} Followers</span>
                                            </div>
                                            <button type="button" id={item._id} onClick={this.follow_unfollow_chef}>Unfollow</button>
                                        </div>
                                    </div>
                                    <p>{item.chef_details.position}</p>
                                    <p>{item.chef_details.specialty.join(", ")}</p>
                                    <div id="chef_background_info">
                                        <p>{item.chef_details.background_info}</p> &nbsp;&nbsp;&nbsp;
                                        <img src={item.chef_details.background_info && item.chef_details.background_info.length > 15 ? expandIcon : null} onClick={() => this.expand_bginfo(item._id)}></img>
                                    </div>
                                    <div className="location" style={{ color: "green" }}>
                                        <img src={LocationIcon}></img>
                                        &nbsp;&nbsp;{item.chef_details.service_location}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="chef-profile" id="chef-profile-sec">
                    <div className="chef">
                        <div className="chef-details">
                            <ul class="switch-content">
                                <div>
                                    <img src={LeftBack} onClick={() => this.open_menu(this.state.chef.source, true)}></img>
                                </div>
                                <div>
                                    <li class="chef-profile-header">Profile</li>
                                </div>
                                <div class="chef-profile-activities">
                                    <div><img src="/static/media/Send chat to chef.4777d89f.svg"></img></div>
                                    <div><img src="/static/media/Share chef profile icon.dd5f10d6.svg"></img></div>
                                </div>
                            </ul>
                            <div className="banner-image">
                                <img src={this.state.chef && this.state.chef.banner_image}></img>
                            </div>
                            <div className="other-details">
                                <div className="desktop-icon">
                                    <img src={this.state.chef && this.state.chef.profile_image}></img>
                                    <h4>{this.state.chef.chef_details && this.state.chef.chef_details.service_location}</h4>
                                </div>
                                <div className="about-chef">
                                    <div className="name-followers">
                                        <h3>{this.state.chef && this.state.chef.name}</h3>
                                        <h4>{this.state.chef && this.state.chef.followerCount} Followers</h4>
                                    </div>
                                    <div>
                                        {this.state.chef.chef_details && this.state.chef.chef_details.position}
                                    </div>
                                    <div>
                                        {this.state.chef.chef_details && this.state.chef.chef_details.specialty.join(", ")}
                                    </div>
                                    <div>{this.state.chef.chef_details && this.state.chef.chef_details.sort_intro}</div>
                                </div>
                            </div>
                            <div className="chef-ratting">
                                {this.state.chef.chef_details && this.state.chef.chef_details.rate}/5.0 &nbsp;&nbsp;&nbsp;
                                <ReactStars
                                    count={5}
                                    value={this.state.chef.chef_details && this.state.chef.chef_details.rate}
                                    size={24}
                                    onChange={null}
                                    isHalf={true}
                                    edit={false}
                                    activeColor="#ffd700"
                                />
                            </div>
                            <div className="chef_bg_details">
                                {this.state.chef.chef_details && this.state.chef.chef_details.background_info}
                            </div>
                        </div>
                        <div className="chef-posts">
                            <ul className="switch-content">
                                <li onClick={this.active_section_from_profile} className="active" id="photos">
                                    Photos
                                </li>
                                <li onClick={this.active_section_from_profile} className="" id="info">
                                    Info
                                </li>
                                <li onClick={this.active_section_from_profile} className="" id="notifications">
                                    Notifications
                                </li>
                            </ul>
                            <div>
                                <div id="photos-sec">
                                    {this.state.posts.length > 0 && this.state.posts.map((item) => {
                                        return (
                                            <div className="each_photo">
                                                <img src={item.post_content}></img>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div id="info-sec">
                                    <ul>
                                        <li>
                                            <b>PERSONAL SUMMARY: </b>{this.state.chef.chef_details && this.state.chef.chef_details.background_info}
                                        </li>
                                        <li>
                                            <b>DOB: </b>{this.state.chef.chef_details && new Date(this.state.chef.chef_details.date_of_birth).toDateString()}
                                        </li>
                                        <li>
                                            <b>POSITION: </b>{this.state.chef.chef_details && this.state.chef.chef_details.position}
                                        </li>
                                        <li>
                                            <b>LANGUAGES: </b>{this.state.chef.chef_details && this.state.chef.chef_details.languages.join(", ")}
                                        </li>
                                        <li>
                                            <b>AVAILABLILTY: </b>Full time
                                        </li>
                                        <li>
                                            <b>KEY SKILL: </b>Cleanliness, Food preparation, Attention to detail
                                        </li>
                                    </ul>
                                </div>
                                <div id="notifications-sec">
                                    <div className="notification">
                                        <div className="user-icon">
                                            <img src="http://35.175.243.253:8080/public?path=C:/Users/Administrator/Desktop/pinChef_Backend/uploads/605725bffc5a6814d0155004/profile/605725bffc5a6814d0155004-1616324109069.jpg"></img>
                                        </div>
                                        <div className="notification-details">
                                            <div className="notification-type">
                                                <h5>Matt Wilson</h5>
                                                <h5>New Food Order</h5>
                                            </div>
                                            <div className="notification-time">
                                                <span>13 October, 2020- 1:24 PM</span>
                                                <img src={ExpandNotification}></img>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default chef