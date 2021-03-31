import React, { Component } from 'react';
import ReactStars from "react-rating-stars-component";
import UserPhoto from '../../assets/images/photo2.png';
import FollowersIcon from '../../assets/png_icons/followers icon.png'
import { getChefById, getAllPostsByChefID } from '../../services/apiOperations';
import { connect } from "react-redux";
// import { useHistory  } from 'react-router-dom';

import SendChat from '../../assets/svg/Send chat to chef.svg'
import ExpandNotification from '../../assets/svg/􀆉 Back btn.svg'
import DownArrow from '../../assets/png_icons/down-arrow-icon.png'
import LocationIcon from '../../assets/svg/Location outlined.svg'
import ShareProfile from '../../assets/svg/Share chef profile icon.svg'
import $ from 'jquery';

class chef extends React.Component {
    constructor(props) {
        super(props);

        this.token = this.props.token;
        this.user_id = this.props.user_id;
        this.getAllPosts = this.getAllPosts.bind(this);
        this.initialize_chef = this.initialize_chef.bind(this);

        this.state = {
            chef: {},
            posts: []
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

    async getAllPosts() {
        var postsresult = await getAllPostsByChefID(this.user_id, this.token);
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

    async initialize_chef(){
        let chef_result = await getChefById(this.user_id, this.token);
        if(chef_result.status && chef_result.status == false){
            this.setState({
                chef: {}});
        } else{
            this.setState({
                chef: chef_result});
        }
    }

    componentDidMount() {
        this.initialize_chef();
        this.getAllPosts();
    }

    render() {
        return (
            <div className="chef-content">
                <ul className="switch-content">
                    <li className="chef-profile-header">Profile</li>
                    <div className="chef-profile-activities">
                        <div>
                            <img src={SendChat}></img>
                        </div>
                        <div>
                            <img src={ShareProfile}></img>
                        </div>
                    </div>
                </ul>
                <div className="chef-profile" id="chef-profile-sec">
                    <div className="chef">
                        <div className="chef-details">
                            <div className="banner-image">
                                <img src={this.state.chef.chef && this.state.chef.chef.banner_image}></img>
                            </div>
                            <div className="other-details">
                                <div className="desktop-icon">
                                    <img src={this.state.chef.chef && this.state.chef.chef.profile_image}></img>
                                    <h4>{this.state.chef.chef && this.state.chef.chef.chef_details.service_location}</h4>
                                </div>
                                <div className="about-chef">
                                    <div className="name-followers">
                                        <h3>Matt Wilson</h3>
                                        <h4>{this.state.chef && this.state.chef.followerCount} Followers</h4>
                                    </div>
                                    <div>
                                        {this.state.chef.chef && this.state.chef.chef.chef_details.position}
                                    </div>
                                    <div>
                                        {this.state.chef.chef && this.state.chef.chef.chef_details.specialty.join(", ")}
                                    </div>
                                    <div>{this.state.chef.chef && this.state.chef.chef.chef_details.sort_intro}</div>
                                </div>
                            </div>
                            <div className="chef-ratting">
                                {this.state.chef.chef && this.state.chef.chef.chef_details.rate}/5.0 &nbsp;&nbsp;&nbsp;
                                <ReactStars
                                    count={5}
                                    value={this.state.chef.chef && this.state.chef.chef.chef_details.rate}
                                    size={24}
                                    onChange={null}
                                    isHalf={true}
                                    edit={false}
                                    activeColor="#ffd700"
                                />
                            </div>
                            <div className="chef_bg_details">
                                {this.state.chef.chef && this.state.chef.chef.chef_details.background_info}
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
                                    {console.log(this.state)}
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
                                            <b>PERSONAL SUMMARY: </b>{this.state.chef.chef && this.state.chef.chef.chef_details.background_info}
                                        </li>
                                        <li>
                                            <b>DOB: </b>{this.state.chef.chef && this.state.chef.chef.chef_details.date_of_birth}
                                        </li>
                                        <li>
                                            <b>POSITION: </b>{this.state.chef.chef && this.state.chef.chef.chef_details.position}
                                        </li>
                                        <li>
                                            <b>LANGUAGES: </b>{this.state.chef.chef && this.state.chef.chef.chef_details.languages.join(", ")}
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