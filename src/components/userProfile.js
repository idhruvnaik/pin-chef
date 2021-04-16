import React, { useState } from 'react';
import { resetPaasword, addTokenToState, CreateUserProfile } from '../services/apiOperations';
import { connect } from "react-redux";
import FPBack from '../assets/svg/fp-back-icon.svg';
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
        this.state = {
            contr: ''
        }
    }

    async create_profile(event) {
        event.preventDefault();
        var user = document.querySelector('.name_container #user').value;
        let result = await CreateUserProfile(this.user_id, "image", user, this.state.contr, this.token);
        if (result.status == false) {
            if (result.message.includes("401")) {
                $('#errorMessage')[0].innerHTML = "User is not exists or not authorized to perform this action.";
            } else {
                $('#errorMessage')[0].innerHTML = result.message;
            }
        } else {
            this.props.history.push(
                {
                    pathname: '/Homepage'
                }
            );
        }
    }

    back_to_login() {
        this.props.history.goBack();
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
                                <input type="submit" value="Continue" className="submit"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)