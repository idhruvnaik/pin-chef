import React, { Component } from 'react';
import ReactStars from "react-rating-stars-component";
import UserPhoto from '../assets/images/photo2.png';
import UserPost from '../assets/images/bannerFeed2.png';
import PostMenu from '../assets/png_icons/Post menu icon@2x.png';
import CommentIcon from '../assets/png_icons/Comment icon@2x.png';
import EmptyHeart from '../assets/png_icons/Empty heart@2x.png';
import PostShare from '../assets/png_icons/Post Share count@2x.png';
import SmallRightArrow from '../assets/png_icons/Right green arrow.png'
import RightArrow from '../assets/png_icons/Right green arrow@2x.png';
import LeftBack from '../assets/png_icons/Green back arrow.png'
import BellIcon from '../assets/png_icons/Bell icon@2x.png'
import Help from '../assets/png_icons/Help@2x.png'
import Share from '../assets/png_icons/share settings@2x.png'
import Star from '../assets/png_icons/Yellow star@2x.png'
import FAQ from '../assets/png_icons/Faq icon on menu.png'
import Terms from '../assets/png_icons/terms icon on menu.png'
import ContactUs from '../assets/png_icons/contact-us icon on menu.png'
import LargeFAQ from '../assets/png_icons/Faq icon on menu@2x.png'
import LargeTerms from '../assets/png_icons/terms icon on menu@2x.png'
import LargeContactUs from '../assets/png_icons/contact-us icon on menu@2x.png'
import LargeDeleteAccount from '../assets/png_icons/Delete settings@2x.png'
import LargeLogout from '../assets/png_icons/Logout@2x.png'
import LargeLocationSettings from '../assets/png_icons/Location settings@2x.png'
import LargeEmailSettings from '../assets/png_icons/email settings@2x.png'
import LargePhone from '../assets/png_icons/phone icon@2x.png'
import LargeName from '../assets/png_icons/name icon@2x.png'
import TermsLogo from '../assets/png_icons/terms and privacy bullet icon@2x.png'
import Home from './home'

import Switch from "react-switch";
import { PushMenu } from 'react-push-menu';
import Popup from 'reactjs-popup';
import ReactDOM, { render } from 'react-dom';
import { Provider } from "react-redux";
import configureStore from "../store";
import { getChefById } from '../services/apiOperations';
import { reactLocalStorage } from 'reactjs-localstorage';
import $ from 'jquery';

import { getUserData } from '../services/apiOperations';

export default class settings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            checked: false,
            user_details: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.logout = this.logout.bind(this);
        this.getUserData = this.getUserData.bind(this);
        this.token = this.props.token;
        this.user_id = this.props.user_id;

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

    logout() {
        window.sessionStorage.clear();
        reactLocalStorage.clear();
        window.location.reload();
    }

    async getUserData() {
        var user_details = await getChefById(this.user_id, this.token);
        if (user_details.status == false) {
            ReactDOM.render(
                <Provider store={configureStore}>
                    <h1>Error occurs while fetching user's data</h1>
                </Provider>, document.getElementById('settings-sec'));
            $("#settings-sec").css("padding-top", "50px");
        } else {
            this.setState({
                user: user_details
            });
        }
    }

    open_menu(menu_class) {
        var menu_siblings = $('.' + menu_class).siblings();
        menu_siblings.each(function () {
            $(this).css('display', 'none');
        })
        // for(i=0; i < menu_siblings.length; i++){
        //     menu_siblings[i].css('display', 'none');
        // }
        // $('.profile').css('display', 'none');
        $('.' + menu_class).css('display', 'block');
    }

    componentDidMount() {
        this.getUserData();
    }

    render() {
        return (
            <div className="settings-content" id="settings-sec">
                {/* <ul className="switch-content">
                    <li onClick={this.active} className="nav-active" id="food">MY PROFILE</li>
                </ul> */}
                <div className="profile">
                    <div className="primary-details">
                        <div className="l-div">
                            <div className="profile-img-container">
                                <img src={this.state.user && this.state.user.chef.profile_image ? this.state.user.chef.profile_image : null}></img>
                                <h1 style={{ display: this.state.user && this.state.user.chef.profile_image ? "none" : "block" }}>{this.state.user && this.state.user.chef.user_name[0]}</h1>
                            </div>
                            <div className="user-detail-container">
                                <h3>{this.state.user && this.state.user.chef.user_name}</h3>
                                <h5>{this.state.user && this.state.user.chef.name}</h5>
                            </div>
                        </div>
                        <div style={{ paddingRight: "4px", marginTop: "20px" }}>
                            <div style={{ textAlignLast: "right" }}>
                                <img src={RightArrow} onClick={() => this.open_menu('my_profile')} style={{ cursor: "pointer" }}></img>
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
                    <div className="setting_activity" onClick={() => this.open_menu('help')}>
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
                    <div className="switch-content">
                        <div>
                            <img src={LeftBack} onClick={() => this.open_menu('profile')}></img>
                        </div>
                        <div>
                            <h2>HELP</h2>
                        </div>
                    </div>
                    <div className="help_activity" onClick={() => this.open_menu('faq')}>
                        <div className="menu_details">
                            <div className="menu_icon">
                                <img src={LargeFAQ}></img>
                            </div>
                            <div className="menu_name">
                                <h3>FAQ</h3>
                            </div>
                        </div>
                        <div className="other_things">
                            <img src={SmallRightArrow}></img>
                        </div>
                    </div>
                    <div className="help_activity" onClick={() => this.open_menu('terms_privacy_policy')}>
                        <div className="menu_details">
                            <div className="menu_icon">
                                <img src={LargeTerms}></img>
                            </div>
                            <div className="menu_name">
                                <h3>terms &amp; privacy policy</h3>
                            </div>
                        </div>
                        <div className="other_things">
                            <img src={SmallRightArrow}></img>
                        </div>
                    </div>
                    <div className="help_activity" onClick={() => this.open_menu('contact_us')}>
                        <div className="menu_details">
                            <div className="menu_icon">
                                <img src={LargeContactUs}></img>
                            </div>
                            <div className="menu_name">
                                <h3>contact us</h3>
                            </div>
                        </div>
                        <div className="other_things">
                            <img src={SmallRightArrow}></img>
                        </div>
                    </div>
                </div>
                <div className="faq">
                    <div className="switch-content">
                        <div>
                            <img src={LeftBack} onClick={() => this.open_menu('help')}></img>
                        </div>
                        <div>
                            <img src={FAQ} style={{ marginRight: "5px" }}></img>
                            <h3>FAQ</h3>
                        </div>
                    </div>
                </div>
                <div className="terms_privacy_policy">
                    <div className="switch-content">
                        <div>
                            <img src={LeftBack} onClick={() => this.open_menu('help')}></img>
                        </div>
                        <div>
                            <img src={Terms} style={{ marginRight: "5px" }}></img>
                            <h3>TERMS &amp; PRIVACY POLICY</h3>
                        </div>
                    </div>
                    <div className="policies">
                        <div className="policy">
                            <div>
                                <img src={TermsLogo}></img>
                            </div>
                            <div>
                                <h3>Age Restriction Rules</h3>
                                <p>You have to create a new post for a screening. After this you can add the file you want to go live with or just use your camera to do it.</p>
                                <p>You have to create a new post for a screening. After this you can add the file you want to go live with or just use your camera to do it.</p>
                                <p>You have to create a new post for a screening. After this you can add the file you want to go live with or just use your camera to do it.</p>
                            </div>
                        </div>
                        <div className="policy">
                            <div>
                                <img src={TermsLogo}></img>
                            </div>
                            <div>
                                <h3>California Law</h3>
                                <p>You have to create a new post for a screening. After this you can add the file you want to go live with or just use your camera to do it.</p>
                            </div>
                        </div>
                        <div className="policy">
                            <div>
                                <img src={TermsLogo}></img>
                            </div>
                            <div>
                                <h3>Age Restriction Rules</h3>
                                <p>You have to create a new post for a screening. After this you can add the file you want to go live with or just use your camera to do it.</p>
                                <p>You have to create a new post for a screening. After this you can add the file you want to go live with or just use your camera to do it.</p>
                                <p>You have to create a new post for a screening. After this you can add the file you want to go live with or just use your camera to do it.</p>
                            </div>
                        </div>
                        <div className="policy">
                            <div>
                                <img src={TermsLogo}></img>
                            </div>
                            <div>
                                <h3>Age Restriction Rules</h3>
                                <p>You have to create a new post for a screening. After this you can add the file you want to go live with or just use your camera to do it.</p>
                                <p>You have to create a new post for a screening. After this you can add the file you want to go live with or just use your camera to do it.</p>
                                <p>You have to create a new post for a screening. After this you can add the file you want to go live with or just use your camera to do it.</p>
                            </div>
                        </div>
                        <div className="policy">
                            <div>
                                <img src={TermsLogo}></img>
                            </div>
                            <div>
                                <h3>Age Restriction Rules</h3>
                                <p>You have to create a new post for a screening. After this you can add the file you want to go live with or just use your camera to do it.</p>
                                <p>You have to create a new post for a screening. After this you can add the file you want to go live with or just use your camera to do it.</p>
                                <p>You have to create a new post for a screening. After this you can add the file you want to go live with or just use your camera to do it.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact_us">
                    <div className="switch-content">
                        <div>
                            <img src={LeftBack} onClick={() => this.open_menu('help')}></img>
                        </div>
                        <div>
                            <img src={ContactUs} style={{ marginRight: "5px" }}></img>
                            <h3>CONTACT US</h3>
                        </div>
                    </div>
                    <div style={{ height: "100%" }}>
                        <div className="instruction">
                            <div>
                                <img src={TermsLogo}></img>
                            </div>
                            <div>
                                <h3>Please fill the form below and submit suggestion, feedback, or any advertisement related questions</h3>
                            </div>
                        </div>
                        <div className="feedback">
                            <form action='' id="feedbackform" onSubmit={this.login_user}>
                                <div>
                                    <h3>Name</h3>
                                    <input type="text" id="username" placeholder="Enter name"></input>
                                </div>
                                <div>
                                    <h3>Email<span style={{ color: "red" }}> *</span></h3>
                                    <input type="text" id="email" placeholder="Enter email" required></input>
                                </div>
                                <div>
                                    <h3>Subject</h3>
                                    <input type="text" id="subject" placeholder="Enter subject"></input>
                                </div>
                                <div>
                                    <h3>Message<span style={{ color: "red" }}> *</span></h3>
                                    <input type="text" id="subject" placeholder="Enter message" required></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="my_profile">
                    <div className="switch-content">
                        <div>
                            <img src={LeftBack} onClick={() => this.open_menu('profile')}></img>
                        </div>
                        <div>
                            <h2>MY PROFILE</h2>
                        </div>
                    </div>
                    <div className="profile_activity">
                        <div className="menu_details">
                            <div className="menu_icon">
                                <img src={LargeName}></img>
                            </div>
                            <div className="menu_name">
                                <h3>{this.state.user && this.state.user.chef.user_name}</h3>
                            </div>
                        </div>
                        <div className="other_things">
                        </div>
                    </div>
                    <div className="profile_activity">
                        <div className="menu_details">
                            <div className="menu_icon">
                                <img src={LargePhone}></img>
                            </div>
                            <div className="menu_name">
                                <h3>{this.state.user && this.state.user.chef.mobile}</h3>
                            </div>
                        </div>
                        <div className="other_things">
                        </div>
                    </div>
                    <div className="profile_activity" style={{cursor: "not-allowed"}}>
                        <div className="menu_details">
                            <div className="menu_icon">
                                <img src={LargeEmailSettings}></img>
                            </div>
                            <div className="menu_name">
                                <h3>{this.state.user && this.state.user.chef.email}</h3>
                            </div>
                        </div>
                        <div className="other_things">
                        </div>
                    </div>
                    <div className="profile_activity">
                        <div className="menu_details">
                            <div className="menu_icon">
                                <img src={LargeLocationSettings}></img>
                            </div>
                            <div className="menu_name">
                                <h3>{this.state.user && this.state.user.chef.chef_details.location}</h3>
                            </div>
                        </div>
                        <div className="other_things">
                        </div>
                    </div>
                    <Popup
                        trigger={
                            <div className="profile_activity">
                                <div className="menu_details">
                                    <div className="menu_icon">
                                        <img src={LargeDeleteAccount}></img>
                                    </div>
                                    <div className="menu_name">
                                        <h3 style={{ color: "#BF2604" }}>Delete Account</h3>
                                    </div>
                                </div>
                                <div className="other_things">
                                </div>
                            </div>}
                        position="center center"
                        closeOnDocumentClick
                        modal
                        nested
                    >
                        {close => (
                            <div className="logout-popup">
                                <div className="confirmation">
                                    <h3>ARE YOU SURE?</h3>
                                </div>
                                <div className="question">
                                    You are about to delete your account, this can not be undone. You will loose all saved info.
                                </div>
                                <div className="actions">
                                    <button type="button" onClick={close}>Cancle</button>
                                    <button type="button" onClick={() => this.logout()}>Delete</button>
                                </div>
                            </div>
                        )}
                    </Popup> 
                    <Popup
                        trigger={
                            <div className="profile_activity">
                                <div className="menu_details">
                                    <div className="menu_icon">
                                        <img src={LargeLogout}></img>
                                    </div>
                                    <div className="menu_name">
                                        <h3 style={{ color: "#BF2604" }}>Logout</h3>
                                    </div>
                                </div>
                                <div className="other_things">
                                </div>
                            </div>}
                        position="center center"
                        closeOnDocumentClick
                        modal
                        nested
                    >
                        {close => (
                            <div className="logout-popup">
                                <div className="confirmation">
                                    <h3>ARE YOU SURE?</h3>
                                </div>
                                <div className="question">
                                    Do you want to logout?
                                </div>
                                <div className="actions">
                                    <button type="button" onClick={close}>Cancle</button>
                                    <button type="button" onClick={() => this.logout()}>Log Out</button>
                                </div>
                            </div>
                        )}
                    </Popup>
                </div>
            </div>
        );
    }
}