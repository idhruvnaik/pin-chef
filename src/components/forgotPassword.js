import React, { useState } from 'react';
import { useSpring, animated } from "react-spring";
import { forgotPassword, addTokenToState } from '../services/apiOperations';
import { connect } from "react-redux";
import './forgotPassword.scss'
import OtpInput from 'react-otp-input';
import IncorrectPin from '../assets/png_icons/incorrect pin icon.png'
import Email from '../assets/svg/Email icon.svg';
import FPBack from '../assets/svg/fp-back-icon.svg';
import $ from 'jquery';

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    addTokenToState: (token_details) => dispatch(addTokenToState(token_details))
})


class ForgotPassword extends React.Component {
    constructor(props) {
        super(props);
        this.get_password = this.get_password.bind(this);
        this.back_to_login = this.back_to_login.bind(this);
    }

    async get_password(event) {
        event.preventDefault();
        var username = document.querySelector('#loginform #username').value;
        if (username) {
            let result = await forgotPassword(username);
            console.log(result, "from get password");
            if (result.status == false) {
                if (result.message.includes("401")) {
                    $('#errorMessage')[0].innerHTML = "User is not exists or not authorized to perform this action.";
                } else {
                    $('#errorMessage')[0].innerHTML = result.message;
                }
            } else {
                this.props.history.push(
                    {            
                        pathname: '/Verifyotp',
                        email: result.email,
                        redirect: "/User/ResetPassword"
                    }
                );
            }
        } else {
            $('#errorMessage')[0].innerHTML = "For forgot password Username/Email ID is necessary.";
        }
        console.log(username, "from forgot password");
    }

    back_to_login(){
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="outer-layout forgot-passwword-page" style={{ backgroundColor: "#555", backgroundImage: "none" }}>
                <div className="fp-container">
                    <div className="login-register">
                        <div className="heading">
                            <div>
                                <img src={FPBack} onClick={this.back_to_login}></img>
                            </div>
                            <div>
                                Forgot Password
                            </div>
                        </div>
                        <form action='' id="loginform" onSubmit={this.get_password}>
                            <div className="username_container">
                                <label htmlFor="username">Email/ID</label>
                            </div>
                            <div className="user_input">
                                <div className="name_container">
                                    <div className="symbol">
                                        <img src={Email}></img>
                                    </div>
                                    <div>
                                        <div id="errorMessage"></div>
                                        <input type="text" id="username" placeholder="Enter email or ID"></input>
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

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)