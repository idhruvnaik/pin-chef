import React, { useState } from 'react';
import { resetPaasword, addTokenToState, CreateUserProfile, getAddressFromCoordinates } from '../services/apiOperations';
import { connect } from "react-redux";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import FPBack from '../assets/svg/fp-back-icon.svg';
import ProfileImage from '../assets/svg/profile-image.svg';
import DeletePhoto from '../assets/svg/Delete photo.svg';
import PhoneInput from 'react-phone-input-2';
import LocationIcon from '../assets/svg/location-popoup.svg'
import 'react-phone-input-2/lib/style.css';
import './userProfile.scss';
import Popup from 'reactjs-popup';
import $ from 'jquery';

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    addTokenToState: (token_details) => dispatch(addTokenToState(token_details))
})


class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.token_details.token) {
            this.token = this.props.token_details.token.auth_token;
            this.user_id = this.props.token_details.token.id;
        } else {
            this.props.history.push(
                {
                    pathname: '/User'
                }
            );
        }
        this.create_profile = this.create_profile.bind(this);
        this.back_to_login = this.back_to_login.bind(this);
        this.get_profile_img = this.get_profile_img.bind(this);
        this.delete_profile_img = this.delete_profile_img.bind(this);
        this.redirect_homepage = this.redirect_homepage.bind(this);
        this.state = {
            contr: '',
            open_location: false,
            lat: null,
            longt: null
        }
        navigator.geolocation.getCurrentPosition((position) => {
            this.setState({
                lat: position.coords.latitude,
                longt: position.coords.longitude
            })
        }, (error) => {
            NotificationManager.warning(error.message, 'ALERT', 4000);
        });
    }
        

    async create_profile(event) {
        event.preventDefault();
        var user = document.querySelector('.name_container #user').value;
        if ($('.profile-image-container img')[0].src == ProfileImage) {
            var image = null;
        } else {
            var image = document.getElementById('upload').files[0];
        }
        let result = await CreateUserProfile(this.user_id, image, user, this.state.contr, this.token);
        if (result.status == false) {
            NotificationManager.error(result.message, 'ERROR', 4000);
        } else {
            this.setState({
                open_location: true
            });
            if (this.state.lat && this.state.longt){
                let address = await getAddressFromCoordinates(this.state.lat, this.state.longt);
                if (address.status = "OK"){
                    if (address.results.length > 0){
                        console.log(address.results[0].formatted_address);
                        setTimeout(() => { this.redirect_homepage(); }, 2000);
                    }
                }
            } else{
                NotificationManager.info('User have not allowed to USE location.', 'WARNING', 4000);
            }
        }
    }

    delete_profile_img(e) {
        $('.profile-image-container img')[0].src = ProfileImage;
        e.target.src = '';
        $('.profile-image-container img').css("border-radius", "0%");
    }
    get_profile_img(e) {
        var selectedFile = document.getElementById('upload').files[0];
        var reader = new FileReader();
        reader.onload = (event) => {
            $('.profile-image-container img')[0].src = event.target.result;
        };
        $('.profile-image-container').css("border-radius", "50%");
        $('.profile-image-container img').css("width", "100%");
        $('.profile-image-container img').css("height", "100%");
        $('.profile-image-container img').css("border-radius", "50%");
        $('.delete_photo img')[0].src = DeletePhoto;
        $('.delete_photo').css("position", "relative");
        $('.delete_photo').css("bottom", "44px");
        $('.delete_photo').css("left", "44px");
        reader.readAsDataURL(selectedFile);
    }

    back_to_login() {
        this.props.history.goBack();
    }

    redirect_homepage() {
        this.props.history.push(
            {
                pathname: '/Homepage'
            }
        );
    }

    render() {
        return (
            <div className="outer-layout user-profile-page" style={{ backgroundColor: "#555", backgroundImage: "none" }}>
                {console.log(this, "from user profile creation")}
                <div className="rp-container">
                    <div className="login-register">
                        <div className="heading">
                            <div>
                                <img src={FPBack} onClick={this.back_to_login}></img>
                            </div>
                            <div>
                                Create Profile
                            </div>
                        </div>
                        <div className="profile-image-container">
                            <div>
                                <input type="file" id="upload" hidden accept=".jpg,.png,.PNG,.jpeg" onChange={this.get_profile_img} />
                                <label for="upload">
                                    <img src={ProfileImage}></img>
                                </label>
                            </div>
                        </div>
                        <div className="delete_photo">
                            <img src={null} onClick={this.delete_profile_img}></img>
                        </div>
                        <form action='' id="loginform" onSubmit={this.create_profile}>
                            <div className="username_container">
                                <label htmlFor="username">Name/Lastname</label>&nbsp;&nbsp;<span style={{ color: "red" }}>*</span>
                            </div>
                            <div className="user_input">
                                <div className="name_container">
                                    <input type="text" id="user" placeholder="Enter name and last name" required></input>
                                </div>
                            </div>
                            <div className="password_container">
                                <label htmlFor="userid">User ID-Nickname </label>
                            </div>
                            <div className="password_input">
                                <div>
                                    <input type="text" id="userID" placeholder="ex: JohnDoe23"></input>
                                </div>
                            </div>
                            <div className="username_container">
                                <label htmlFor="username">Mobile Number</label>&nbsp;&nbsp;<span style={{ color: "#707070" }}>(optional)</span>
                            </div>
                            <div className="user_input">
                                <div className="name_container">
                                    <div className="symbol">
                                        <PhoneInput
                                            country={'us'}
                                            placeholder="XXX XXX XXXX"
                                            // countryCodeEditable={false}
                                            // enableSearch={true}
                                            value={this.state.contr}
                                            onChange={phone => this.setState({ contr: phone })}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="kept_sign_in">
                                <input type="submit" value="Continue" className="submit"></input>
                            </div>
                        </form>
                    </div>
                </div>
                <NotificationContainer />
                <Popup
                    open={this.state.open_location}
                    position="center center"
                    closeOnDocumentClick
                    modal
                    nested
                >
                    {close => (
                        <div className="logout-popup">
                            <div className="confirmation">
                                <h3>CONGRATULATIONS!</h3>
                                <img src={LocationIcon}></img>
                            </div>
                            <div className="question">
                                Thank you for signing up!<br />Enjoy the app. Please allow to use your location for us to help your search. 
                            </div>
                            <div className="actions">
                            </div>
                        </div>
                    )}
                </Popup>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);