import React, { useState } from 'react';
import { resetPaasword, addTokenToState } from '../services/apiOperations';
import { connect } from "react-redux";
import FPBack from '../assets/svg/fp-back-icon.svg';
import showPassword from '../assets/png_icons/Show password icon.png';
import HidePassword from '../assets/png_icons/Hide password icon.png';
import ProfileImage from '../assets/svg/profile-image.svg';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import './userProfile.scss'
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
        // if (this.props.location.email) {
        //     this.email = this.props.location.email;
        // } else {
        //     this.props.history.push(
        //         {
        //             pathname: '/User'
        //         }
        //     );
        // }
        this.reset_password = this.reset_password.bind(this);
        this.back_to_login = this.back_to_login.bind(this);
        this.ShowPassword = this.ShowPassword.bind(this);
        this.setCountry = this.setCountry.bind(this);
        this.state = {
            contr: ''
        }
    }

    async reset_password(event) {
        event.preventDefault();
        var user = document.querySelector('#loginform #user').value;
        let password = document.querySelector('#loginform #password').value;
        let message = "Both passwords are required must be same.";
        if (user.length > 0 && password.length > 0) {
            if (user != password) {
                $('#errorMessage')[0].innerHTML = message;
            } else {
                let result = await resetPaasword(this.email, user);
                if (result.status == false) {
                    if (result.message.includes("401")) {
                        $('#errorMessage')[0].innerHTML = "User is not exists or not authorized to perform this action.";
                    } else {
                        $('#errorMessage')[0].innerHTML = result.message;
                    }
                } else {
                    this.props.history.push(
                        {
                            pathname: '/User'
                        }
                    );
                }
            }
        } else {
            $('#errorMessage')[0].innerHTML = message;
        }
    }

    back_to_login() {
        this.props.history.goBack();
    }
    ShowPassword(e) {
        var parentClass = e.target.parentElement.className;
        if (parentClass == "user_symbol") {
            var input_id = "user"
        } else {
            var input_id = "password"
        }
        if ($('.' + parentClass + ' .active_password').length > 0) {
            $('.' + parentClass + ' .active_password')[0].src = showPassword;
            $('.' + parentClass + ' .active_password').removeClass('active_password');
            $('#loginform #' + input_id)[0].type = "text";
            if (parentClass == "password_symbol") {
                $('.' + input_id + '_input .symbol').css("padding-top", "24px");
            }
        } else {
            $('#loginform #' + input_id)[0].type = "password";
            $('.' + parentClass + ' #active_password').addClass('active_password');
            $('.active_password')[0].src = HidePassword;
            if (parentClass == "password_symbol") {
                $('.' + input_id + '_input .symbol').css("padding-top", "22px");
            }
        }
    };

    setCountry() {

    }

    render() {
        return (
            <div className="outer-layout user-profile-page" style={{ backgroundColor: "#555", backgroundImage: "none" }}>
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
                        <div className="profile-iamge-container">
                            <img src={ProfileImage}></img>
                        </div>
                        <form action='' id="loginform" onSubmit={this.reset_password}>
                            <div className="username_container">
                                <label htmlFor="username">Name/Lastname</label>&nbsp;&nbsp;<span style={{ color: "red" }}>*</span>
                            </div>
                            <div className="user_input">
                                <div className="name_container">
                                    <input type="text" id="user" placeholder="Enter name and last name"></input>
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
                                            // country={'us'}
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
                                <input type="submit" value="Done" className="submit"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)