import React, { Component } from 'react';
import ReactStars from "react-rating-stars-component";
import UserPhoto from '../../assets/images/photo2.png';
import UserPost from '../../assets/images/bannerFeed2.png';
import PostMenu from '../../assets/png_icons/Post menu icon@2x.png';
import CommentIcon from '../../assets/png_icons/Comment icon@2x.png';
import EmptyHeart from '../../assets/png_icons/Empty heart@2x.png';
import PostShare from '../../assets/png_icons/Post Share count@2x.png';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import SmallRightArrow from '../../assets/png_icons/Right green arrow.png'
import RightArrow from '../../assets/png_icons/Right green arrow@2x.png';
import LeftBack from '../../assets/png_icons/Green back arrow.png'
import BellIcon from '../../assets/svg/Notifications icon.svg'
import Help from '../../assets/svg/Help icon.svg'
import Payment from '../../assets/svg/Payment methods icon.svg'
import Subscribe from '../../assets/svg/Subscription icon.svg'
import Share from '../../assets/svg/Share icon.svg'
import Star from '../../assets/svg/Rate icon.svg'
import Detailed_info from '../../assets/svg/detailed-info.svg'
import FAQ from '../../assets/svg/Faq icon on menu.svg'
import Terms from '../../assets/svg/terms icon on menu.svg'
import ContactUs from '../../assets/svg/contact_us.svg'
import LargeFAQ from '../../assets/svg/Faq icon on menu.svg'
import LargeTerms from '../../assets/svg/terms icon on menu.svg'
import LargeContactUs from '../../assets/svg/contact_us.svg'
import LargeDeleteAccount from '../../assets/svg/Delete.svg'
import LargeLogout from '../../assets/svg/logout.svg'
import EditBannerImage from '../../assets/svg/Cover Photo button.svg'
import LargeLocationSettings from '../../assets/svg/location-settings.svg'
import LargeEmailSettings from '../../assets/svg/email.svg'
import LargePhone from '../../assets/svg/smartphone.svg'
import LargeName from '../../assets/svg/name.svg'
import ProfileImage from '../../assets/svg/profile-image.svg';
import DeletePhoto from '../../assets/svg/Delete photo.svg';
import InfoIcon from "../../assets/svg/info icon red.svg";
import DatePicker from 'react-date-picker';
import AddCusine from "../../assets/svg/Add-Cusine.svg"
import PhoneInput from 'react-phone-input-2';
import TermsLogo from '../../assets/png_icons/terms and privacy bullet icon@2x.png';
import DefaultCover from '../../assets/png_icons/Chef_Default_Cover.png';
import Home from './home';
import CropImage from '../cropImages';

import Switch from "react-switch";
import SelectSearch from "react-dropdown-select";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import TimePicker from 'react-time-picker';
import { PushMenu } from 'react-push-menu';
import Popup from 'reactjs-popup';
import ReactDOM, { render } from 'react-dom';
import { Provider } from "react-redux";
import configureStore from "../../store";
import { getChefById, DeleteAccount } from '../../services/apiOperations';
import { reactLocalStorage } from 'reactjs-localstorage';
import $ from 'jquery';

import { getUserData } from '../../services/apiOperations';

export default class settings extends Component {

    constructor(props) {
        super(props);

        this.state = {
            checked: false,
            user_details: null,
            banner_crop_popup: false,
            banner_source_image: null,
            bannerCropUrl: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleServiceChange = this.handleServiceChange.bind(this);
        this.logout = this.logout.bind(this);
        this.getUserData = this.getUserData.bind(this);
        this.service_upload = this.service_upload.bind(this);
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

    async delete_account() {
        var user_details = await DeleteAccount(this.user_id, this.token);
        if (user_details.status == false) {
            return NotificationManager.error(user_details.message, 'ERROR', 4000);
        } else {
            this.props.history.push(
                {
                    pathname: '/User'
                }
            );
        }
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

    service_upload(e) {
        var selectedFile = e.target.files[0];
        var reader = new FileReader();
        // $('.image-preview img')[0].title = selectedFile.name;
        reader.onload = (event) => {
          // $('.image-preview img')[0].src = event.target.result;
          this.setState({
            banner_source_image: event.target.result
          })
        };
        reader.readAsDataURL(selectedFile);
        this.setState({
            banner_crop_popup: true
        });
    }

    handleServiceChange(otp) {
        this.setState({
          banner_crop_popup: false
        });
        this.setState({ bannerCropUrl: otp });
        var reader = new FileReader();
        reader.onload = (event) => {
          // $('.image-preview img')[0].src = event.target.result;
          // this.setState({ src: event.target.result })
          $('#banner-icon')[0].src = event.target.result;
        };
        $('#banner-icon')[0].src = reader.readAsDataURL(otp);
    };

    render() {
        return (
            <div className="settings-content" id="settings-sec">
                {/* <ul className="switch-content">
                    <li onClick={this.active} className="nav-active" id="food">MY PROFILE</li>
                </ul> */}
                <Popup
                    open={this.state.banner_crop_popup}
                    position="center center"
                    closeOnDocumentClick
                    modal
                    nested
                >
                    {close => (
                        <CropImage onOtpChange={this.handleServiceChange} image_source={this.state.banner_source_image} close_popup={close} crop_height={51} />
                    )}
                </Popup>
                <div className="profile">
                    {console.log(this.state, "from setting")}
                    <div className="primary-details">
                        <div className="l-div">
                            <div className="profile-img-container">
                                <img src={this.state.user && this.state.user.chef && this.state.user.chef.profile_image ? this.state.user.chef.profile_image : null}></img>
                                <h1 style={{ display: this.state.user && this.state.user.chef && this.state.user.chef.profile_image ? "none" : "block" }}>{this.state.user && this.state.user.chef && this.state.user.chef.name[0]}</h1>
                            </div>
                            <div className="user-detail-container">
                                <h3>{this.state.user && this.state.user.chef && this.state.user.chef.name}</h3>
                                <h5>{this.state.user && this.state.user.chef && this.state.user.chef.user_name}</h5>
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
                                <img src={Payment}></img>
                            </div>
                            <div className="menu_name">
                                <h3>payment methods</h3>
                            </div>
                        </div>
                        <div className="other_things"></div>
                    </div>
                    <div className="setting_activity">
                        <div className="menu_details">
                            <div className="menu_icon">
                                <img src={Subscribe}></img>
                            </div>
                            <div className="menu_name">
                                <h3>SUBSCRIPTIONS</h3>
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
                                <div>
                                    <input type="submit" value="Send" className="send_queries"></input>
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
                    <div className="cover-photo">
                        <div className="banner">
                            <img src={this.state.user && this.state.user.chef && this.state.user.chef.banner_image ? this.state.user.chef.banner_image : DefaultCover} id="banner-icon"></img>
                        </div>
                        <div className="chef-images">
                            <div className="desktop-icon">
                                <img src={this.state.user && this.state.user.chef && this.state.user.chef.profile_image}></img>
                            </div>
                            <div>
                                <div class="image-upload">
                                    <label for="file-input">
                                        <img src={EditBannerImage} style={{ cursor: "pointer" }}></img>
                                    </label>
                                    <input id="file-input" type="file" accept=".jpg,.png,.PNG,.jpeg" style={{ display: "none" }} onChange={this.service_upload} className="upload" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="profile_activity">
                        <div className="menu_details">
                            <div className="menu_icon">
                                <img src={LargeName}></img>
                            </div>
                            <div className="menu_name">
                                <h3>{this.state.user && this.state.user.chef && this.state.user.chef.name}</h3>
                            </div>
                        </div>
                        <div className="other_things">
                        </div>
                    </div>
                    <div className="profile_activity">
                        <div className="menu_details">
                            <div className="menu_icon">
                                <img src={LargeName}></img>
                            </div>
                            <div className="menu_name">
                                <h3>{this.state.user && this.state.user.chef && this.state.user.chef.user_name}</h3>
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
                                <h3>{this.state.user && this.state.user.chef && this.state.user.chef.mobile}</h3>
                            </div>
                        </div>
                        <div className="other_things">
                        </div>
                    </div>
                    <div className="profile_activity" style={{ cursor: "not-allowed" }}>
                        <div className="menu_details">
                            <div className="menu_icon">
                                <img src={LargeEmailSettings}></img>
                            </div>
                            <div className="menu_name">
                                <h3>{this.state.user && this.state.user.chef && this.state.user.chef.email}</h3>
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
                                <h3>{this.state.user && this.state.user.chef && this.state.user.chef.chef_details.location}</h3>
                            </div>
                        </div>
                        <div className="other_things">
                        </div>
                    </div>
                    <div className="profile_activity">
                        <div className="menu_details" onClick={() => this.open_menu('detailed_info')}>
                            <div className="menu_icon">
                                <img src={Detailed_info}></img>
                            </div>
                            <div className="menu_name">
                                <h3>Detailed Info</h3>
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
                                    <button type="button" onClick={() => this.delete_account()}>Delete</button>
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
                <div className="detailed_info">
                    {console.log(this.state, "from detailed info")}
                    <div className="switch-content">
                        <div>
                            <img src={LeftBack} onClick={() => this.open_menu('my_profile')}></img>
                        </div>
                        <div>
                            <h2>DETAIL CHEF INFO</h2>
                        </div>
                    </div>
                    <div className="details">
                        <div className="identity-details">
                            <div className="desktop-icon">
                                <div class="image-upload">
                                    <label for="file-input">
                                        <img src={ProfileImage}></img>
                                    </label>
                                    <input id="file-input" type="file" accept=".jpg,.png,.PNG,.jpeg" className="upload" />
                                </div>
                                <div className="delete_photo">
                                    <img src={null} onClick={this.delete_profile_img}></img>
                                </div>
                            </div>
                            <div className="primary-details">
                                <div className="individual-details">
                                    <div className="input-name">Name & Last Name &nbsp;<span>*</span></div>
                                    <input id="first_name" type="text" className="field" placeholder="Real name and last name" autoCapitalize="words" value={this.state.user && this.state.user.chef && this.state.user.chef.name}></input>
                                </div>
                                <div className="individual-details">
                                    <div className="input-name">User ID-Nickname</div>
                                    <input type="text" id="user_id" className="field" placeholder="ex: JohnDoe23" value={this.state.user && this.state.user.chef && this.state.user.chef.user_name}></input>
                                </div>
                            </div>
                        </div>
                        <div className="individual-details">
                            <div className="input-name">Phone Number &nbsp;<span>*</span></div>
                            <PhoneInput
                                country={'us'}
                                placeholder="XXX XXX XXXX"
                                // countryCodeEditable={false}
                                // enableSearch={true}
                                value={this.state.user && this.state.user.chef && this.state.user.chef.mobile}
                                onChange={phone => this.setState({ contr: phone })}
                            />
                        </div>
                        <div className="dob">
                            <div className="input-name">Date of Birth &nbsp;<span>*</span></div>
                            <DatePicker
                                onChange={dob => this.setState({ dob })}
                                value={new Date()}
                                calendarIcon={null}
                                clearIcon={null}
                                disableCalendar={true}
                                required={true}
                            // maxDate={new Date(new Date().getTime() - 60 * 60 * 24 * 365 * 13 * 1000)}
                            />
                        </div>
                        <div className="individual-details">
                            <div className="input-name">Gender</div>
                            <input id="gender" type="text" className="field" placeholder="ex. Female, Male, etc." value={this.state.user && this.state.user.chef && this.state.user.chef.chef_details.gender}></input>
                        </div>
                        <div className="individual-details">
                            <div className="input-name">Position &nbsp;<span>*</span></div>
                            <input id="position" type="text" className="field" placeholder="ex: Head Chef, Pastry Chef, Home Chef, etc." value={this.state.user && this.state.user.chef && this.state.user.chef.chef_details.position}></input>
                        </div>
                        <div className="individual-details">
                            <div className="input-name">Languages</div>
                            <input type="text" id="languages" className="field" placeholder="ex: English, Spanish, etc." value={this.state.user && this.state.user.chef && this.state.user.chef.chef_details.languages.join(", ")}></input>
                        </div>
                        <div className="individual-details">
                            <div className="input-name">Cuisine Specialties &nbsp;<span>*</span></div>
                            <SelectSearch values={this.state.selected_cusine} keepSelectedInList={true} options={this.state.options} multi={true} labelField="username" valueField="username" sortBy="username" color="green" searchable={true} searchBy="username" placeholder="Select" onChange={(values) => this.add_cusine(values)} />
                        </div>
                        Cuisine not in list? <u style={{ fontFamily: "custom-fonts-bold" }} >Add Cuisine</u> <span id="addCusine" style={{ color: "#469A09", fontSize: "18pt", fontFamily: "custom-fonts-bold", cursor: "pointer" }} onClick={this.open_custom_cusine}>+</span>
                        <div className="add-cusine">
                            <input id="new_cusine" type="text" placeholder="Write cuisine name"></input>
                            <img src={AddCusine} onClick={this.add_new_cusine}></img>
                        </div>
                        <div className="individual-details long-input" style={{ marginTop: "5px" }}>
                            <div className="input-name">Short Ad Intro</div>
                            <textarea id="short_intro" maxlength="300" placeholder="ex: English, Spanish, etc." onKeyUp={this.show_words_count} value={this.state.user && this.state.user.chef && this.state.user.chef.chef_details.sort_intro}></textarea>
                            <p>Word Count: <span class="word_count">{this.state.user && this.state.user.chef && this.state.user.chef.chef_details.sort_intro.length}</span>/300</p>
                        </div>
                        <div className="individual-details long-input">
                            <div className="input-name">Full Background Info</div>
                            <textarea id="full_info" placeholder="ex: English, Spanish, etc." value={this.state.user && this.state.user.chef && this.state.user.chef.chef_details.background_info}></textarea>
                        </div>
                        {/* <div className="individual-details location">
                            <div className="input-name">Address/Location &nbsp;<span>*</span></div>
                            <GooglePlacesAutocomplete
                                placeholder="Country, city, state or zip code"
                                apiKey="abc"
                                selectProps={{
                                    onChange: this.set_location,
                                }}
                            />
                        </div> */}
                        {/* <div className="individual-details">
                            <div className="input-name">Service hours &nbsp;<span>*</span></div>
                            <div className="f-sb">
                                <div>
                                    <Popup
                                        trigger={<input id="service-hours" type="radio" name="service_hours" className="" value="Selected Hours"></input>}
                                        position="center center"
                                        closeOnDocumentClick
                                        modal
                                        nested
                                    >
                                        {close => (
                                            <div className="timerange-popup">
                                                <div className="pop-up-heading">
                                                    Select Hours
                                                    </div>
                                                <div className="timeranges">
                                                    <div className="timerange" id="monday">
                                                        <div className="day">Monday</div>
                                                        <Switch onChange={this.mondayHandleChange} checked={this.state.monday_checked} uncheckedIcon={false} checkedIcon={false} />
                                                        <div className="multiple-ranges">
                                                            {this.state.monday_count.map((item, index) => {
                                                                return (
                                                                    <div className="each-range" style={{ marginBottom: "5px" }}>
                                                                        <TimePicker
                                                                            onChange={value => this.get_time(value, "monday_count", index, "start_time")}
                                                                            value={item.start_time}
                                                                            isOpen={false}
                                                                            className="custom-time-picker"
                                                                            disableClock={true}
                                                                            disabled={this.state.monday_disable}
                                                                            // minuteAriaLabel="Minute"
                                                                            clearIcon={null}
                                                                        />
                                                                            &nbsp;-&nbsp;
                                                                        <TimePicker
                                                                            onChange={value => this.get_time(value, "monday_count", index, "end_time")}
                                                                            value={item.end_time}
                                                                            isOpen={false}
                                                                            className="custom-time-picker"
                                                                            disableClock={true}
                                                                            disabled={this.state.monday_disable}
                                                                            // minuteAriaLabel="Minute"
                                                                            clearIcon={null}
                                                                        />
                                                                        <span id={index} onClick={event => this.add_range(event, "monday")} className="symbol">{item.symbol}</span>
                                                                        <div className="disable_span" style={{ right: this.state.monday_checked ? "0px" : "20px" }}></div>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                    <div className="timerange">
                                                        <div className="day">Tuesday</div>
                                                        <Switch onChange={this.tuesdayHandleChange} checked={this.state.tuesday_checked} uncheckedIcon={false} checkedIcon={false} />
                                                        <div className="multiple-ranges">
                                                            {this.state.tuesday_count.map((item, index) => {
                                                                return (
                                                                    <div className="each-range" style={{ marginBottom: "5px" }}>
                                                                        <TimePicker
                                                                            onChange={value => this.get_time(value, "tuesday_count", index, "start_time")}
                                                                            value={item.start_time}
                                                                            isOpen={false}
                                                                            className="custom-time-picker"
                                                                            disableClock={true}
                                                                            disabled={this.state.tuesday_disable}
                                                                            // minuteAriaLabel="Minute"
                                                                            clearIcon={null}
                                                                        />
                                                                            &nbsp;-&nbsp;
                                                                        <TimePicker
                                                                            onChange={value => this.get_time(value, "tuesday_count", index, "end_time")}
                                                                            value={item.end_time}
                                                                            isOpen={false}
                                                                            className="custom-time-picker"
                                                                            disableClock={true}
                                                                            disabled={this.state.tuesday_disable}
                                                                            // minuteAriaLabel="Minute"
                                                                            clearIcon={null}
                                                                        />
                                                                        <span id={index} onClick={event => this.add_range(event, "tuesday")} className="symbol">{item.symbol}</span>
                                                                        <div className="disable_span" style={{ right: this.state.tuesday_checked ? "0px" : "20px" }}></div>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                    <div className="timerange">
                                                        <div className="day">Wednesday</div>
                                                        <Switch onChange={this.wednesdayHandleChange} checked={this.state.wednesday_checked} uncheckedIcon={false} checkedIcon={false} />
                                                        <div className="multiple-ranges">
                                                            {this.state.wednesday_count.map((item, index) => {
                                                                return (
                                                                    <div className="each-range" style={{ marginBottom: "5px" }}>
                                                                        <TimePicker
                                                                            onChange={value => this.get_time(value, "wednesday_count", index, "start_time")}
                                                                            value={item.start_time}
                                                                            isOpen={false}
                                                                            className="custom-time-picker"
                                                                            disableClock={true}
                                                                            disabled={this.state.wednesday_disable}
                                                                            // minuteAriaLabel="Minute"
                                                                            clearIcon={null}
                                                                        />
                                                                            &nbsp;-&nbsp;
                                                                        <TimePicker
                                                                            onChange={value => this.get_time(value, "wednesday_count", index, "end_time")}
                                                                            value={item.end_time}
                                                                            isOpen={false}
                                                                            className="custom-time-picker"
                                                                            disableClock={true}
                                                                            disabled={this.state.wednesday_disable}
                                                                            // minuteAriaLabel="Minute"
                                                                            clearIcon={null}
                                                                        />
                                                                        <span id={index} onClick={event => this.add_range(event, "wednesday")} className="symbol">{item.symbol}</span>
                                                                        <div className="disable_span" style={{ right: this.state.wednesday_checked ? "0px" : "20px" }}></div>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                    <div className="timerange">
                                                        <div className="day">Thursday</div>
                                                        <Switch onChange={this.thursdayHandleChange} checked={this.state.thursday_checked} uncheckedIcon={false} checkedIcon={false} />
                                                        <div className="multiple-ranges">
                                                            {this.state.thursday_count.map((item, index) => {
                                                                return (
                                                                    <div className="each-range" style={{ marginBottom: "5px" }}>
                                                                        <TimePicker
                                                                            onChange={value => this.get_time(value, "thursday_count", index, "start_time")}
                                                                            value={item.start_time}
                                                                            isOpen={false}
                                                                            className="custom-time-picker"
                                                                            disableClock={true}
                                                                            disabled={this.state.thursday_disable}
                                                                            // minuteAriaLabel="Minute"
                                                                            clearIcon={null}
                                                                        />
                                                                            &nbsp;-&nbsp;
                                                                        <TimePicker
                                                                            onChange={value => this.get_time(value, "thursday_count", index, "end_time")}
                                                                            value={item.end_time}
                                                                            isOpen={false}
                                                                            className="custom-time-picker"
                                                                            disableClock={true}
                                                                            disabled={this.state.thursday_disable}
                                                                            // minuteAriaLabel="Minute"
                                                                            clearIcon={null}
                                                                        />
                                                                        <span id={index} onClick={event => this.add_range(event, "thursday")} className="symbol">{item.symbol}</span>
                                                                        <div className="disable_span" style={{ right: this.state.thursday_checked ? "0px" : "20px" }}></div>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                    <div className="timerange">
                                                        <div className="day">Friday</div>
                                                        <Switch onChange={this.fridayHandleChange} checked={this.state.friday_checked} uncheckedIcon={false} checkedIcon={false} />
                                                        <div className="multiple-ranges">
                                                            {this.state.friday_count.map((item, index) => {
                                                                return (
                                                                    <div className="each-range" style={{ marginBottom: "5px" }}>
                                                                        <TimePicker
                                                                            onChange={value => this.get_time(value, "friday_count", index, "start_time")}
                                                                            value={item.start_time}
                                                                            isOpen={false}
                                                                            className="custom-time-picker"
                                                                            disableClock={true}
                                                                            disabled={this.state.friday_disable}
                                                                            // minuteAriaLabel="Minute"
                                                                            clearIcon={null}
                                                                        />
                                                                            &nbsp;-&nbsp;
                                                                        <TimePicker
                                                                            onChange={value => this.get_time(value, "friday_count", index, "end_time")}
                                                                            value={item.end_time}
                                                                            isOpen={false}
                                                                            className="custom-time-picker"
                                                                            disableClock={true}
                                                                            disabled={this.state.friday_disable}
                                                                            // minuteAriaLabel="Minute"
                                                                            clearIcon={null}
                                                                        />
                                                                        <span id={index} onClick={event => this.add_range(event, "friday")} className="symbol">{item.symbol}</span>
                                                                        <div className="disable_span" style={{ right: this.state.friday_checked ? "0px" : "20px" }}></div>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                    <div className="timerange">
                                                        <div className="day">Saturday</div>
                                                        <Switch onChange={this.saturdayHandleChange} checked={this.state.saturday_checked} uncheckedIcon={false} checkedIcon={false} />
                                                        <div className="multiple-ranges">
                                                            {this.state.saturday_count.map((item, index) => {
                                                                return (
                                                                    <div className="each-range" style={{ marginBottom: "5px" }}>
                                                                        <TimePicker
                                                                            onChange={value => this.get_time(value, "saturday_count", index, "start_time")}
                                                                            value={item.start_time}
                                                                            isOpen={false}
                                                                            className="custom-time-picker"
                                                                            disableClock={true}
                                                                            disabled={this.state.saturday_disable}
                                                                            // minuteAriaLabel="Minute"
                                                                            clearIcon={null}
                                                                        />
                                                                            &nbsp;-&nbsp;
                                                                        <TimePicker
                                                                            onChange={value => this.get_time(value, "saturday_count", index, "end_time")}
                                                                            value={item.end_time}
                                                                            isOpen={false}
                                                                            className="custom-time-picker"
                                                                            disableClock={true}
                                                                            disabled={this.state.saturday_disable}
                                                                            // minuteAriaLabel="Minute"
                                                                            clearIcon={null}
                                                                        />
                                                                        <span id={index} onClick={event => this.add_range(event, "saturday")} className="symbol">{item.symbol}</span>
                                                                        <div className="disable_span" style={{ right: this.state.saturday_checked ? "0px" : "20px" }}></div>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                    <div className="timerange">
                                                        <div className="day">Sunday</div>
                                                        <Switch onChange={this.sundayHandleChange} checked={this.state.sunday_checked} uncheckedIcon={false} checkedIcon={false} />
                                                        <div className="multiple-ranges">
                                                            {this.state.sunday_count.map((item, index) => {
                                                                return (
                                                                    <div className="each-range" style={{ marginBottom: "5px" }}>
                                                                        <TimePicker
                                                                            onChange={value => this.get_time(value, "sunday_count", index, "start_time")}
                                                                            value={item.start_time}
                                                                            isOpen={false}
                                                                            className="custom-time-picker"
                                                                            disableClock={true}
                                                                            disabled={this.state.sunday_disable}
                                                                            // minuteAriaLabel="Minute"
                                                                            clearIcon={null}
                                                                        />
                                                                            &nbsp;-&nbsp;
                                                                        <TimePicker
                                                                            onChange={value => this.get_time(value, "sunday_count", index, "end_time")}
                                                                            value={item.end_time}
                                                                            isOpen={false}
                                                                            className="custom-time-picker"
                                                                            disableClock={true}
                                                                            disabled={this.state.sunday_disable}
                                                                            // minuteAriaLabel="Minute"
                                                                            clearIcon={null}
                                                                        />
                                                                        <span id={index} onClick={event => this.add_range(event, "sunday")} className="symbol">{item.symbol}</span>
                                                                        <div className="disable_span" style={{ right: this.state.sunday_checked ? "0px" : "20px" }}></div>
                                                                    </div>
                                                                )
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </Popup>
                                        Selected Hours
                                    </div>
                                <div>
                                    <input id="service-hours" type="radio" name="service_hours" className="" value="24/7"></input>24/7 with booking
                                    </div>
                            </div>
                        </div> */}
                        <div className="individual-details">
                            <div className="input-name">Services <span style={{ color: "#656565" }}>(Select all options that apply)</span></div>
                            <div className="flex-c">
                                <div>
                                    <input id="service" type="checkbox" className="" value="Cook and Deliver"></input>
                                    <span>Cook and Deliver</span>
                                </div>
                                <div>
                                    <input id="service" type="checkbox" className="" value="Cook and Ship"></input>
                                    <span>Cook and Ship</span>
                                </div>
                                <div>
                                    <input id="service" type="checkbox" className="" value="Cook for Pick up/Takeaway"></input>
                                    <span>Cook for Pick up/Takeaway</span>
                                </div>
                                <div>
                                    <input id="service" type="checkbox" className="" value="Go to Guests address to cook"></input>
                                    <span>Go to Guests address to cook</span>
                                </div>
                                <div>
                                    <input id="service" type="checkbox" className="" value="Host Guests and cook"></input>
                                    <span>Host Guests and cook</span>
                                </div>
                                <div>
                                    <input id="service" type="checkbox" className="" value="Cook Live with Chef"></input>
                                    <span>Cook Live with Chef</span>
                                </div>
                            </div>
                        </div>
                        <div className="individual-details">
                            <div className="input-name">Minimum purchase Service total amount</div>
                            <div className="price-details">
                                <div>$</div>
                                <input type="number" id="min-price" className="field" placeholder="Enter min. price" value={this.state.user && this.state.user.chef && this.state.user.chef.chef_details.min_purchase_amt}></input>
                            </div>
                        </div>
                        <div className="individual-details">
                            <div className="input-name">Service Price Range &nbsp;<span>*</span></div>
                            <div className="price-range">
                                <div>$</div>
                                <input id="min-price" style={{ borderRadius: "0px" }} className="field" type="number" placeholder="Enter min. price" value={this.state.user && this.state.user.chef && this.state.user.chef.chef_details.service_price_range.min}></input>
                                <input id="max-price" type="number" className="field" placeholder="Enter max. price" value={this.state.user && this.state.user.chef && this.state.user.chef.chef_details.service_price_range.max}></input>
                            </div>
                        </div>
                        <div className="individual-details">
                            <div className="input-name">Hourly rate</div>
                            <div className="price-details">
                                <div>$</div>
                                <input id="hourly-rate" type="number" className="field" placeholder="Enter price" value={this.state.user && this.state.user.chef && this.state.user.chef.chef_details.hourly_rate}></input>
                            </div>
                        </div>
                        <div className="payment">
                            <div className="input-name">Accepting direct service payment methods</div>
                            <div className="note">
                                <div>
                                    <img src={InfoIcon}></img>
                                </div>
                                <div>
                                    Options selected now will have to be connected to your own payment account later in settings for you to be able to make any of your added services active.
                                    </div>
                            </div>
                            <div className="flex-c">
                                <div>
                                    <input id="payment" type="checkbox" name="Payments" className="" value="Stripe" checked={this.state.user && this.state.user.chef && this.state.user.chef.chef_details.payment.includes("Stripe") ? true : false}></input>
                                    <span>Stripe</span>
                                </div>
                                <div>
                                    <input id="payment" type="checkbox" name="Payments" className="" value="Paypal" checked={this.state.user && this.state.user.chef && this.state.user.chef.chef_details.payment.includes("Paypal") ? true : false}></input>
                                    <span>Paypal</span>
                                </div>
                                <div>
                                    <input id="payment" type="checkbox" name="Payments" className="" value="Cash on Delivery" checked={this.state.user && this.state.user.chef && this.state.user.chef.chef_details.payment.includes("Cash on Delivery") ? true : false}></input>
                                    <span>Cash on Delivery</span>
                                </div>
                                <div>
                                    <input id="payment" type="checkbox" name="Payments" className="" value="Credit Card on Delivery" checked={this.state.user && this.state.user.chef && this.state.user.chef.chef_details.payment.includes("Credit Card on Delivery") ? true : false}></input>
                                    <span>Credit Card on Delivery</span>
                                </div>
                            </div>
                        </div>
                        <div className="individual-details">
                            <div className="input-name">Locations you give service to &nbsp;<span>*</span></div>
                            <div className="price-details">
                                <textarea id="full_info" placeholder="If you have delivery, which areas you deliver to, if you offer services to a specific area or other locations."></textarea>
                            </div>
                        </div>
                        <div className="save_profile">
                            <button type="button" onClick={this.save_profile}>SAVE</button>
                        </div>
                    </div>
                </div>
                <NotificationContainer />
            </div>
        );
    }
}