import React, { Component } from 'react';
import ReactStars from "react-rating-stars-component";
import UserPhoto from '../../assets/images/photo2.png';
import FollowersIcon from '../../assets/png_icons/followers icon.png'
import { addTokenToState, getAllChef } from '../../services/apiOperations';
import { connect } from "react-redux";
// import { useHistory  } from 'react-router-dom';

import SendChat from '../../assets/svg/Send chat to chef.svg'
import ShareProfile from '../../assets/svg/Share chef profile icon.svg'
import $ from 'jquery';

class chef extends React.Component {
    constructor(props) {
        super(props);
        console.log("chef class");
        console.log(this.props);
        console.log(this);

        this.getAllChefAPI = this.getAllChefAPI.bind(this);

        // if (this.props.token_details.token){
        //     this.token = this.props.token_details.token.auth_token;
        // } else{
        //     // this.history = useHistory();
        //     // this.history.push("/User");
        //     // hashHistory.push('/User');
        //     // this.props.history.push(
        //     //     {            
        //     //         pathname: '/User'
        //     //     }
        //     // );
        // }

        this.chefs = [
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

    async getAllChefAPI() {
        var result = await getAllChef('/chef/getAll', this.token);
        if (result) {
            if (result.status == false) {

            } else {

            }
        }
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
                                <img src="http://35.175.243.253:8080/public?path=C:/Users/Administrator/Desktop/pinChef_Backend/uploads/605725bffc5a6814d0155004/profile/banner/605725bffc5a6814d0155004-1616324367377.jpg"></img>
                            </div>
                            <div className="other-details">
                                <div className="desktop-icon">
                                    <img src={UserPhoto}></img>
                                    <h4>Miami, FL</h4>
                                </div>
                                <div className="about-chef">
                                    <div className="name-followers">
                                        <h3>Matt Wilson</h3>
                                        <h4>25 Followers</h4>
                                    </div>
                                    <div>
                                        Executive Chef
                                    </div>
                                    <div>
                                        French, Italian, Spanish, Caucasian
                                    </div>
                                    <div>Come to address, cook live, cook and…</div>
                                </div>
                            </div>
                            <div className="chef-ratting">
                                4.5/5.0 &nbsp;&nbsp;&nbsp;
                                <ReactStars
                                    count={5}
                                    value={4.5}
                                    size={24}
                                    onChange={null}
                                    isHalf={true}
                                    edit={false}
                                    activeColor="#ffd700"
                                />
                            </div>
                            <div className="chef_bg_details">
                                Do you want to eat better?  Do want time back in your day? Chef Matt can prepare your meals in your very own home. Maybe you are too busy to cook, tired of take out food, have dietary restrictions, or you are recuperating.  Let Chef Matt give you time back in your busy life.
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
                                    this is photos section
                                </div>
                                <div id="info-sec">
                                    this is info section
                                </div>
                                <div id="notifications-sec">
                                    this is notification section
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="following_chefs sec" id="following-chef-sec">
                    {this.chefs.map(function (item) {
                        return (
                            <div className="chef">
                                <div className="chef_details">
                                    <img src={item.desktop_icon}></img>
                                    <p><b>{item.ratting}/10</b></p>
                                </div>
                                <div className="chef_content">
                                    <div className="followers">
                                        <h4>{item.user_name}</h4>
                                        <div className="follower-count">
                                            <div>
                                                <img src={FollowersIcon}></img>
                                                <span>{item.no_of_followers} Followers</span>
                                            </div>
                                            <button type="button">Follow</button>
                                        </div>
                                    </div>
                                    <p>{item.designation}</p>
                                    <p>{item.specialization}</p>
                                    <p>{item.address}</p>
                                    <div className="location" style={{ color: "green" }}>
                                        <img src={Location}></img>
                                        &nbsp;&nbsp;{item.location}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}
export default chef