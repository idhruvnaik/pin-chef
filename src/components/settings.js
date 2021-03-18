import React, { Component } from 'react';
import ReactStars from "react-rating-stars-component";
import UserPhoto from '../assets/images/photo2.png';
import UserPost from '../assets/images/bannerFeed2.png';
import PostMenu from '../assets/png_icons/Post menu icon@2x.png';
import CommentIcon from '../assets/png_icons/Comment icon@2x.png';
import EmptyHeart from '../assets/png_icons/Empty heart@2x.png';
import PostShare from '../assets/png_icons/Post Share count@2x.png';
import RightArrow from '../assets/png_icons/Right green arrow@2x.png';
import BellIcon from '../assets/png_icons/Bell icon@2x.png'
import Help from '../assets/png_icons/Help@2x.png'
import Share from '../assets/png_icons/share settings@2x.png'
import Star from '../assets/png_icons/Yellow star@2x.png'
import Home from './home'

import Switch from "react-switch";
import { PushMenu } from 'react-push-menu';
import $ from 'jquery';

export default class settings extends Component {

    constructor(props) {
        super(props);

        this.state = { checked: false };
        this.handleChange = this.handleChange.bind(this);

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

        this.data = {
            menu: {
                header: 'All Categories',
                children: [
                    {
                        name: 'About',
                        id: 1,
                        link: '/about',
                        children: [
                            { name: 'Mission', id: 11, link: null, children: [] },
                            { name: 'Objectives', id: 12, link: null, children: [] },
                            {
                                name: 'Goals',
                                id: 13,
                                link: '/about/goals',
                                children: [
                                    { name: 'Charity', id: 131, link: null, children: [] },
                                    { name: 'Clean Environment Plan', id: 132, link: null, children: [] },
                                ],
                            },
                        ],
                    },
                    { name: 'Services', id: 2, link: '/services', children: [] },
                    { name: 'People', id: 3, link: '/people', children: [] },
                    { name: 'Careers', id: 4, link: '/careers', children: [] },
                    { name: 'Contact', id: 5, link: null, children: [] },
                ],
            },
        };

    }

    handleChange(checked) {
        this.setState({ checked });
    }

    open_help() {
        $('.profile').css('display', 'none');
        $('.help').css('display', 'block');
    }

    render() {
        return (
            <div className="settings-content">
                {/* <ul className="switch-content">
                    <li onClick={this.active} className="nav-active" id="food">MY PROFILE</li>
                </ul> */}
                <div className="profile">
                    <div className="primary-details">
                        <div className="l-div">
                            <div className="profile-img-container">
                                <img src={UserPhoto}></img>
                            </div>
                            <div className="user-detail-container">
                                <h3>John Doe</h3>
                                <h5>User ID/Name</h5>
                            </div>
                        </div>
                        <div style={{ paddingRight: "4px", marginTop: "20px" }}>
                            <div style={{ textAlignLast: "right" }}>
                                <img src={RightArrow}></img>
                            </div>
                        </div>
                    </div>
                    <div className="setting_activity">
                        <div className="menu_details">
                            <div className="menu_icon">
                                <img src={BellIcon}></img>
                            </div>
                            <div className="menu_name">
                                <h3>notifications</h3>
                            </div>
                        </div>
                        <div className="other_things">
                            <Switch onChange={this.handleChange} checked={this.state.checked} uncheckedIcon={false} checkedIcon={false} />
                        </div>
                    </div>
                    <div className="setting_activity" onClick={this.open_help}>
                        <div className="menu_details">
                            <div className="menu_icon">
                                <img src={Help}></img>
                            </div>
                            <div className="menu_name">
                                <h3>help</h3>
                            </div>
                        </div>
                        <div className="other_things"></div>
                    </div>
                    <div className="setting_activity">
                        <div className="menu_details">
                            <div className="menu_icon">
                                <img src={Share}></img>
                            </div>
                            <div className="menu_name">
                                <h3>share with friend</h3>
                            </div>
                        </div>
                        <div className="other_things"></div>
                    </div>
                    <div className="setting_activity">
                        <div className="menu_details">
                            <div className="menu_icon">
                                <img src={Star}></img>
                            </div>
                            <div className="menu_name">
                                <h3>rate our app</h3>
                            </div>
                        </div>
                        <div className="other_things"></div>
                    </div>
                </div>
                <div className="help">
                    <ul className="switch-content">
                        <li onClick={this.active} className="nav-active" id="food">MY PROFILE</li>
                    </ul>
                    {/* <h3>tamili habibi mastibini hear</h3> */}
                    {/* <PushMenu
                        backIcon={<RightArrow />}
                        openOnMount
                        expanderComponent={RightArrow}
                        linkComponent={Home}
                        nodes={this.data.menu}
                        propMap={{ url: 'link' }}
                    >
                        <Home />
                    </PushMenu> */}
                </div>
            </div>
        );  
    }
}