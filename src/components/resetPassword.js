import React, { useState } from 'react';
import { useSpring, animated } from "react-spring";
import { resetPaasword, addTokenToState } from '../services/apiOperations';
import { connect } from "react-redux";
import './resetPassword.scss'
import OtpInput from 'react-otp-input';
import IncorrectPin from '../assets/png_icons/incorrect pin icon.png'
import FPBack from '../assets/svg/fp-back-icon.svg';
import showPassword from '../assets/svg/show password.svg';
import HidePassword from '../assets/svg/Hide password.svg';
import Password from '../assets/svg/Password icon.svg'
import $ from 'jquery';

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    addTokenToState: (token_details) => dispatch(addTokenToState(token_details))
})


class ResetPassword extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.location.email) {
            this.email = this.props.location.email;
        } else {
            this.props.history.push(
                {
                    pathname: '/User'
                }
            );
        }
        this.reset_password = this.reset_password.bind(this);
        this.ShowPassword = this.ShowPassword.bind(this);
        this.clear_errors = this.clear_errors.bind(this);
    }

    async reset_password(event) {
        event.preventDefault();
        var user = document.querySelector('#loginform #user').value;
        let password = document.querySelector('#loginform #password').value;
        let message = "New & Confirm password must be the same.";
        if(user.length > 0 && password.length > 0){
            if (user != password){
                $('#errorMessage')[0].innerHTML = message;
            } else{
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
        } else{
            $('#errorMessage')[0].innerHTML = message;
        }
    }

    ShowPassword(e) {
        var parentClass = e.target.parentElement.className;
        if(parentClass == "user_symbol"){
            var input_id="user"
        } else{
            var input_id="password"
        }
        if ($('.' + parentClass + ' .active_password').length > 0) {
            $('.' + parentClass + ' .active_password')[0].src = showPassword;
            $('.' + parentClass + ' .active_password').removeClass('active_password');
            $('#loginform #' + input_id)[0].type = "text";
            if(parentClass == "password_symbol"){
                $('.'+ input_id +'_input .symbol').css("padding-top", "26px");
            }
        } else {
            $('#loginform #' + input_id)[0].type = "password";
            $('.' + parentClass + ' #active_password').addClass('active_password');
            $('.' + parentClass + ' .active_password')[0].src = HidePassword;
            if(parentClass == "password_symbol"){
                $('.'+ input_id +'_input .symbol').css("padding-top", "22px");
            }
        }
    };

    clear_errors(){
        $('#errorMessage')[0].innerHTML = null;
    }

    render() {
        return (
            <div className="outer-layout reset-passwword-page" style={{ backgroundColor: "#555", backgroundImage: "none" }}>
                <div className="rp-container">
                    <div className="login-register">
                        <div className="heading">
                            <div>
                                Reset Password
                            </div>
                        </div>
                        <form action='' id="loginform" onSubmit={this.reset_password}>
                            <div className="username_container">
                                <label htmlFor="username">New Password</label>
                            </div>
                            <div className="user_input">
                                <div className="name_container">
                                    <div className="symbol">
                                        <img src={Password}></img>
                                    </div>
                                    <div>
                                        <div id="errorMessage"></div>
                                        <input type="password" id="user" placeholder="Enter new password" onFocus={this.clear_errors}></input>
                                    </div>
                                    <div className="user_symbol">
                                        <img src={HidePassword} id="active_password" className="active_password" onClick={this.ShowPassword}></img>
                                    </div>
                                </div>
                            </div>
                            <div className="password_container">
                                <label htmlFor="password">Confirm Password</label>
                            </div>
                            <div className="password_input">
                                <div>
                                    <div>
                                        <img src={Password}></img>
                                    </div>
                                    <input type="password" id="password" placeholder="Repeat new password" onFocus={this.clear_errors}></input>
                                    <div className="password_symbol">
                                        <img src={HidePassword} id="active_password" className="active_password" onClick={this.ShowPassword}></img>
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

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)