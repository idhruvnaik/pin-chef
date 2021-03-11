import React, { Component } from 'react';
import ReactStars from "react-rating-stars-component";
import UserPhoto from '../assets/images/photo2.png';
import FollowersIcon from '../assets/png_icons/followers icon.png'

import $ from 'jquery';

export default class chef extends Component {

    constructor(props) {
        super(props);

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

    render() {
        return (
            <div className="chef-content">
                <ul className="switch-content">
                    <li onClick={this.active} className="" id="all-chef">All Chefs</li>
                    <li onClick={this.active} className="" id="following-chef">Following Chefs</li>
                </ul>
                <div className="all_chefs sec active" id="all-chef-sec">
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
                                    <h5>{item.designation}</h5>
                                    <h5>{item.specialization}</h5>
                                    <p>{item.address}</p>
                                    <div className="location" style={{ color: "green" }}>
                                        <img src={Location}></img>
                                        <span>{item.location}</span>
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