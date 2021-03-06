import React, { useState } from 'react';
import SlidingPane from "react-sliding-pane";
import { withRouter } from 'react-router-dom';
import { useSpring, animated } from "react-spring";
import { verifyLogin, registerUser, addTokenToState } from '../services/apiOperations';
import { connect } from "react-redux";
import { addToken } from "../services/actions";
import Popup from 'reactjs-popup';
import { reactLocalStorage } from 'reactjs-localstorage';
import './userReg.scss';
import './userReg.css';
import Email from '../assets/svg/Email icon.svg';
import showPassword from '../assets/svg/show password.svg';
import HidePassword from '../assets/svg/Hide password.svg';
import Password from '../assets/svg/Password icon.svg'
import RoleChangeIcon from '../assets/svg/role-change-icon.svg'
import TermsLogo from '../assets/png_icons/terms and privacy bullet icon@2x.png'
import Terms from '../assets/svg/terms icon on menu.svg'
import LeftBack from '../assets/png_icons/Green back arrow.png'

import AppleIcon from '../assets/svg/AppleSignin'
import FbIcon from '../assets/svg/FacebookSignin'
import GoogleIcon from '../assets/svg/GoogleSignin'
import Mail from '../assets/svg/MailIcon';
import $ from 'jquery';
// import 'reactjs-popup/dist/index.css';

var user_role = 1;

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    addTokenToState: (token_details) => dispatch(addTokenToState(token_details))
})

class UserReg extends React.Component {
    constructor(props) {
        super(props);
        this.register_user = this.register_user.bind(this);
        this.registration = this.registration.bind(this);
        this.login = this.login.bind(this);
        this.change_user = this.change_user.bind(this);
        this.login_user = this.login_user.bind(this);
        this.ShowPassword = this.ShowPassword.bind(this);
        this.ShowRegistrationPassword = this.ShowRegistrationPassword.bind(this);
        this.open_terms = this.open_terms.bind(this);
        this.get_password = this.get_password.bind(this);
        this.clear_errors = this.clear_errors.bind(this);
        this.state = {
            isTCPopup: false
        }
    }
    registration() {
        $('#loginform').css('display', 'none');
        $('#registerform').css('display', 'block');
        var loginBtn = document.getElementById("loginBtn");
        var registerBtn = document.getElementById("registerBtn");
        var loginform = document.getElementById("loginform");
        var registerform = document.getElementById("registerform");
        var forgot = document.getElementById("forgot");
        registerform.style.left = '0px';
        registerform.style.opacity = '1';
        loginform.style.left = '-500px';
        loginform.style.opacity = '0';
        forgot.style.left = '-500px';
        forgot.style.opacity = '0';
        registerBtn.classList.add('active');
        loginBtn.classList.remove('active');
        $('#note').css("display", "none");
        $('.multi-login').css("display", "none");
        $('#registerform #errorMessage').html(null);
        $('#registerform input')[0].value = null;
        $('#registerform input')[1].value = null;
    };

    login() {
        $('#registerform').css('display', 'none');
        $('#loginform').css('display', 'block');
        var loginBtn = document.getElementById("loginBtn");
        var registerBtn = document.getElementById("registerBtn");
        var loginform = document.getElementById("loginform");
        var registerform = document.getElementById("registerform");
        var forgot = document.getElementById("forgot");
        loginform.style.left = '0px';
        loginform.style.opacity = '1';
        forgot.style.left = '0px';
        forgot.style.opacity = '1';
        registerform.style = '500px';
        loginBtn.classList.add('active');
        registerBtn.classList.remove('active');
        registerform.style.opacity = '0';
        $('#note').css("display", "block");
        $('.multi-login').css("display", "flex");
        $('#loginform #errorMessage').html(null);
        $('#loginform #passwordErrorMessage').html(null);
        $('#loginform input')[0].value = null;
        $('#loginform input')[1].value = null;
    };
    change_user() {
        var user = document.querySelector('#user_choice span').innerHTML;
        if (user.startsWith('I AM A CHEF')) {
            document.querySelector('#user_choice span').innerHTML = "LOOKING FOR CHEF ";
            user_role = 2;
        } else {
            document.querySelector('#user_choice span').innerHTML = "I AM A CHEF ";
            user_role = 1;
        }
    }

    async get_password() {
        this.props.history.push(
            {
                pathname: '/User/ForgotPassword'
            }
        );
    }
    async login_user(event) {
        event.preventDefault();
        let username = document.querySelector('#loginform #username').value;
        let password = document.querySelector('#loginform #password').value;
        let remember = document.querySelector('.kept_sign_in #signin_storage #storeToken').checked;
        if (username.length > 0) {
            if (password.length > 0) {
                let result = await verifyLogin(username, password, remember)
                if (result) {
                    if (result.auth_token) {
                        if (result.roleID == user_role) {
                            result.remember = remember;
                            reactLocalStorage.setObject(
                                'token_details',
                                result
                            );
                            this.props.addTokenToState(result);
                            if (result.roleID == 2) {
                                this.props.history.push(
                                    {
                                        pathname: '/Chef/Home'
                                    }
                                );
                            } else {
                                this.props.history.push(
                                    {
                                        pathname: '/Homepage'
                                    }
                                );
                            }

                        } else {
                            if (result.roleID == 2) {
                                $('#loginform #errorMessage')[0].innerHTML = "Select correct platform (Chef or User)";
                            } else {
                                $('#loginform #errorMessage')[0].innerHTML = "Select correct platform (Chef or User)";
                            }
                        }
                    } else {
                        if(result.message.toLowerCase().includes("password")){
                            $('#loginform #passwordErrorMessage')[0].innerHTML = result.message;
                        } else if (result.message.includes("401")) {
                            $('#loginform #errorMessage')[0].innerHTML = "User is not exists or not authorized to perform this action.";
                        } else {
                            $('#loginform #errorMessage')[0].innerHTML = result.message;
                        }

                        console.log(result.message);
                    }
                }
            } else{
                $('#loginform #passwordErrorMessage')[0].innerHTML = "Enter Password alert";
            }
        } else{
            $('#loginform #errorMessage')[0].innerHTML = "Enter Email/ID";
        }
    }

    async register_user(event) {
        event.preventDefault();
        let email = document.querySelector('#registerform #username').value;
        console.log(email, "from register user");
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (re.test(email)) {
            let username = re.exec(email)[1];
            var data = {
                email: email,
                user_name: username,
                password: document.querySelector('#registerform #password').value,
                roleID: user_role
            }
            console.log(data);
            let result = await registerUser(data);
            if (result) {
                if (result.status == false) {
                    console.log("inside status flase");
                    console.log(result.message.includes("password"));
                    console.log("result.message")
                    if (result.message.toLowerCase().includes("password")){
                        $('#registerform #passwordErrorMessage')[0].innerHTML = result.message;
                    } else{
                        $('#registerform #errorMessage')[0].innerHTML = result.message;
                    }
                } else {
                    if (result.temp_id) {
                        result.remember = false;
                        result.roleID = user_role;
                        console.log(result);
                        reactLocalStorage.setObject(
                            'token_details',
                            result
                        );
                        this.props.addTokenToState(result);
                        if (user_role == 1) {
                            this.props.history.push(
                                {
                                    pathname: '/Verifyotp',
                                    email: email,
                                    temp_id: result.temp_id,
                                    remember: result.remember,
                                    roleID: result.roleID,
                                    redirect: "/User/CreateProfile"
                                }
                            );
                        } else {
                            this.props.history.push(
                                {
                                    pathname: '/Verifyotp',
                                    email: email,
                                    temp_id: result.temp_id,
                                    remember: result.remember,
                                    roleID: result.roleID,
                                    redirect: "/Chef/CreateProfile"
                                }
                            );
                        }
                    }
                }
            }
        } else {
            $('#registerform #errorMessage')[0].innerHTML = "Invalid Email ID.";
        }
        // this.props.addTokenToState(resp);
    };
    save_token(a) {
        console.log($(a.target).hasClass("selected"), "from save token");
        if($(a.target).hasClass("selected")){
            a.target.checked = false;
            $(a.target).removeClass("selected");
        } else{
            document.getElementById('storeToken').checked = true;
            $(a.target).addClass("selected")
        }
    };
    ShowPassword() {
        if ($('.active_password').length > 0) {
            $('.active_password')[0].src = showPassword;
            $('.active_password').removeClass('active_password');
            $('#loginform #password')[0].type = "text";
            $('#loginform .password_input .symbol').css("padding-top", "26px");
        } else {
            $('#loginform #password')[0].type = "password";
            $('#active_password').addClass('active_password');
            $('.active_password')[0].src = HidePassword;
            $('#loginform .password_input .symbol').css("padding-top", "22px");
        }
    };
    ShowRegistrationPassword() {
        console.log("show password");
        if ($('.registration_password').length > 0) {
            $('.registration_password')[0].src = showPassword;
            $('.registration_password').removeClass('registration_password');
            $('#registerform #password')[0].type = "text";
            $('#registerform .password_input .symbol').css("padding-top", "26px");
        } else {
            $('#registerform #password')[0].type = "password";
            $('#registration_password').addClass('registration_password');
            $('.registration_password')[0].src = HidePassword;
            $('#registerform .password_input .symbol').css("padding-top", "22px");
        }
    };
    open_terms() {
        this.setState({
            isTCPopup: true
        })
    }
    clear_errors(){
        $('#registerform #errorMessage')[0].innerHTML = null;
        $('#registerform #passwordErrorMessage')[0].innerHTML = null;
        $('#loginform #passwordErrorMessage')[0].innerHTML = null;
        $('#loginform #errorMessage')[0].innerHTML = null;
    }

    render() {
        return (
            <div className="outer-layout user-reg-page" style={{ backgroundColor: "#555", backgroundImage: "none" }}>
                <div className="container">
                    <div className="login-register">
                        <div id="user_choice">
                            <div onClick={this.change_user}>
                                <span>
                                    I AM A CHEF
                                </span>
                                <img src={RoleChangeIcon}></img>
                            </div>
                        </div>
                        <div className="form-headers">
                            <div style={{ width: "20%" }}>
                                <Mail />
                            </div>
                            <div className="nav-buttons">
                                <button id="loginBtn" className='active' onClick={this.login} >SIGN IN </button>
                                <button id="registerBtn" onClick={this.registration}>SIGN UP</button>
                            </div>
                        </div>
                        <div className="form-group">
                            <form action='' id="loginform" onSubmit={this.login_user}>
                                <div className="username_container">
                                    <label htmlFor="username">Email/ID</label>
                                </div>
                                <div className="user_input">
                                    <div className="symbol">
                                        <img src={Email}></img>
                                    </div>
                                    <div>
                                        <div id="errorMessage"></div>
                                        <input type="text" id="username" placeholder="ex: johndoe@gmail.com or johndoe" autoCapitalize="off" onFocus={this.clear_errors}></input>
                                    </div>
                                </div>
                                <div className="password_container">
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="password_input">
                                    <div className="input_container">
                                        <div>
                                            <img src={Password}></img>
                                        </div>
                                        <div className="actual_password_input">
                                            <div id="passwordErrorMessage"></div>
                                            <input type="password" id="password" placeholder="ex: PinChefisthebest!" onFocus={this.clear_errors}></input>
                                        </div>
                                        <div className="symbol">
                                            <img src={HidePassword} id="active_password" className="active_password" onClick={this.ShowPassword}></img>
                                        </div>
                                    </div>
                                </div>
                                <div className="kept_sign_in">
                                    <div id="signin_storage">
                                        <input type="radio" name="user_sign_in" className="" id="storeToken" onClick={this.save_token} ></input>
                                        <span>Keep me signed in</span>
                                    </div>
                                    <div>
                                        <input type="submit" value="Continue" className="submit"></input>
                                    </div>
                                </div>
                            </form>
                            <form action="" id="registerform" onSubmit={this.register_user}>
                                <div className="username_container">
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="user_input">
                                    <div className="name_container">
                                        <div className="symbol">
                                            <img src={Email}></img>
                                        </div>
                                        <div>
                                            <div id="errorMessage"></div>
                                            <input type="text" id="username" placeholder="Enter email address" autoCapitalize="off" onFocus={this.clear_errors} required></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="password_container">
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="password_input">
                                    <div className="input_container">
                                        <div>
                                            <img src={Password}></img>
                                        </div>
                                        <div className="actual_password_input">
                                            <div id="passwordErrorMessage"></div>
                                            <input type="password" id="password" placeholder="Enter Password" onFocus={this.clear_errors} required></input>
                                        </div>
                                        <div className="symbol">
                                            <img src={HidePassword} id="registration_password" className="registration_password" onClick={this.ShowRegistrationPassword}></img>
                                        </div>
                                    </div>
                                </div>
                                <input type="submit" value="Continue" className="submit"></input>
                            </form>
                        </div>
                        <div className="multi-login">
                            <div>
                                <AppleIcon /> &nbsp;
                                <FbIcon /> &nbsp;
                                <GoogleIcon /> &nbsp;
                            </div>
                            <span id="forgot" style={{ color: "#FFD54F", textShadow: "2px 2px grey", textDecoration: "none", cursor: "pointer" }} onClick={this.get_password}>FORGOT PASSWORD</span>
                        </div>
                        <div id="note">
                            Signing In or Signing Up means you accept our <span onClick={this.open_terms}><u><b>Terms/Conditions</b></u> &amp; <u><b>Privacy Policy</b></u></span>
                        </div>
                        <SlidingPane
                            className="pop-up-services"
                            overlayClassName="some-custom-overlay-class"
                            isOpen={this.state.isTCPopup}
                            from={"bottom"}
                            title="Terms/Conditions & Privacy Policy"
                            subtitle=""
                            width="100%"
                            onRequestClose={() => {
                                this.setState({ isTCPopup: false });
                            }}
                            onAfterOpen={() => {
                                $('.slide-pane__header').css("background-color", "#5B5353");
                                $('.slide-pane__header').css("color", "white");
                                $('.slide-pane__header').css("border-radius", "15px");
                                $('.slide-pane__header').css("border-bottom-left-radius", "0px");
                                if (window.screen.width > 1100) {
                                    $('.pop-up-services').css('width', "50%");
                                }
                            }}
                        >
                            <div className="terms_privacy_policy">
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
                        </SlidingPane>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(UserReg));