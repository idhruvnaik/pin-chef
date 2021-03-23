import React, { Component } from 'react';
import ReactStars from "react-rating-stars-component";
import UserPhoto from '../assets/images/photo2.png';
import FollowersIcon from '../assets/png_icons/followers icon.png'
import { addTokenToState, getAllChef } from '../services/apiOperations';
import { connect } from "react-redux";
// import { useHistory  } from 'react-router-dom';

import LocationIcon from '../assets/png_icons/Location outlined@2x.png'

import $ from 'jquery';

class chef extends React.Component {
    constructor(props) {
        super(props);

        this.token = this.props.token;
        this.initialize_chefs = this.initialize_chefs.bind(this);
        this.state = {
            chefs: []
        }

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
    }

    async initialize_chefs(){
        let chef_result = await getAllChef(this.token);
        if(chef_result.length > 0){
            if(chef_result.status == false){
                this.setState({
                    chefs: []});
            } else{
                this.setState({
                    chefs: chef_result});
            }
        }  else{
            this.setState({
                chefs: []});
        }
    }

    componentDidMount() {
        this.initialize_chefs();
    }

    render() {
        return (
            <div className="chef-content">
                <ul className="switch-content">
                    <li onClick={this.active} className="nav-active" id="all-chef">All Chefs</li>
                    <li onClick={this.active} className="" id="following-chef">Following Chefs</li>
                </ul>
                <div className="all_chefs sec active" id="all-chef-sec">
                    {this.state.chefs.map((item) => {
                        return (
                            <div className="chef">
                                <div className="chef_details">
                                    <img src={item.profile_image}></img>
                                    <ReactStars
                                        count={5}
                                        onChange={null}
                                        size={24}
                                        isHalf={true}
                                        activeColor="#ffd700"
                                    />
                                    <span><b>{item.ratting}/10</b></span>
                                </div>
                                <div className="chef_content">
                                    <div className="followers">
                                        <h4>{item.user_name}</h4>
                                        <div className="follower-count">
                                            <div>
                                                <img src={FollowersIcon}></img>
                                                <span>{item.followerCount} Followers</span>
                                            </div>
                                            <button type="button">{item.is_follow ? "Follow": "Unfollow"}</button>
                                        </div>
                                    </div>
                                    <h5>{item.chef_details.position}</h5>
                                    <h5>{item.chef_details.specialty.join(", ")}</h5>
                                    <p>{item.chef_details.background_info}</p>
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
                    {this.chefs.map(function (item) {
                        return (
                            <div className="chef">
                                <div className="chef_details">
                                    <img src={item.desktop_icon}></img>
                                    <ReactStars
                                        count={5}
                                        onChange={null}
                                        isHalf={true}
                                        activeColor="#ffd700"
                                    />
                                    <span><b>{item.ratting}/10</b></span>
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
                                        <img src={LocationIcon}></img>
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