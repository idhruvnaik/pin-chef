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
import TermsLogo from '../assets/png_icons/terms and privacy bullet icon@2x.png'
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

    open_menu(menu_class) {
        var menu_siblings = $('.'+menu_class).siblings();
        console.log(menu_siblings);
        menu_siblings.each(function(){
            $( this ).css('display', 'none');
        })
        // for(i=0; i < menu_siblings.length; i++){
        //     menu_siblings[i].css('display', 'none');
        // }
        // $('.profile').css('display', 'none');
        $('.'+menu_class).css('display', 'block');
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
                            <img src={FAQ} style={{marginRight:"5px"}}></img>
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
                            <img src={Terms} style={{marginRight:"5px"}}></img>
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
                            <img src={ContactUs} style={{marginRight:"5px"}}></img>
                            <h3>CONTACT US</h3>
                        </div>
                    </div>
                    <div style={{height:"100%"}}>
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
                                    <h3>Email<span style={{color:"red"}}> *</span></h3>
                                    <input type="text" id="email" placeholder="Enter email" required></input>
                                </div>
                                <div>
                                    <h3>Subject</h3>
                                    <input type="text" id="subject" placeholder="Enter subject"></input>
                                </div>
                                <div>
                                    <h3>Message<span style={{color:"red"}}> *</span></h3>
                                    <input type="text" id="subject" placeholder="Enter message" required></input>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );  
    }
}