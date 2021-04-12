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
import showPassword from '../assets/png_icons/Show password icon.png';
import HidePassword from '../assets/png_icons/Hide password icon.png';
import Password from '../assets/svg/Password icon.svg'
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
// const mapStateToProps = state => ({
//     ...state
// });

// const mapDispatchToProps = dispatch => ({
//     addToken: () => dispatch(addToken),
//     donotAddToken: () => dispatch(donotAddToken)
// });

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
        this.open_terms = this.open_terms.bind(this);
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
    };
    change_user() {
        var user = document.querySelector('#user_choice span').innerHTML;
        if (user.startsWith('I AM A CHEF')) {
            document.querySelector('#user_choice span').innerHTML = "LOOKING FOR CHEF >";
            user_role = 2;
        } else {
            document.querySelector('#user_choice span').innerHTML = "I AM A CHEF >";
            user_role = 1;
        }
    }

    async login_user(event) {
        event.preventDefault();
        let username = document.querySelector('#loginform #username').value;
        let password = document.querySelector('#loginform #password').value;
        let remember = document.querySelector('#forgot #signin_storage #storeToken').checked;
        console.log(this);
        let result = await verifyLogin(username, password, remember)
        if (result) {
            if (result.auth_token) {
                if (result.roleID == user_role) {
                    result.remember = remember;
                    reactLocalStorage.setObject(
                        'token_details',
                        result
                    );
                    console.log(result);
                    console.log(this);
                    this.props.addTokenToState(result);
                    // this.props.history.push(
                    //     {            
                    //         pathname: '/Verifyotp',
                    //         email: document.querySelector('#loginform #username').value
                    //     }
                    // );
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
                        $('#errorMessage')[0].innerHTML = "User is not user";
                    } else {
                        $('#errorMessage')[0].innerHTML = "User is not Chef";
                    }
                }
            } else {
                if (result.message.includes("401")) {
                    $('#errorMessage')[0].innerHTML = "User is not exists or not authorized to perform this action.";
                } else {
                    $('#errorMessage')[0].innerHTML = result.message;
                }

                console.log(result.message);
            }
        }
    }

    async register_user(event) {
        event.preventDefault();
        var data = {
            "email": document.querySelector('#registerform #email').value,
            "user_name": document.querySelector('#registerform #user_id').value,
            "password": document.querySelector('#registerform #password').value,
            "roleID": user_role,
            "default_sub_type": "basic"
        }
        console.log(data);
        let resp = await registerUser(data);
        console.group("from register_user");
        console.log(resp);
        console.log(this);
        this.props.addTokenToState(resp);
        // const dispatch = useDispatch(() => dispatch(addToken()));
        this.props.history.push(
            {
                pathname: '/Verifyotp',
                email: document.querySelector('#registerform #email').value
            }
        );
    };
    save_token(a) {
        if (a.ctrlKey || a.metaKey) {
            console.log("inside if");
            document.getElementById('storeToken').checked = false;
        }
    };
    ShowPassword() {
        console.log("show password");
        if ($('.active_password').length > 0) {
            $('.active_password')[0].src = showPassword;
            $('.active_password').removeClass('active_password');
            $('#loginform #password')[0].type = "text";
            $('.password_input .symbol').css("padding-top", "24px");
        } else {
            $('#loginform #password')[0].type = "password";
            $('#active_password').addClass('active_password');
            $('.active_password')[0].src = HidePassword;
            $('.password_input .symbol').css("padding-top", "22px");
        }
    };
    open_terms(){
        this.setState({
            isTCPopup: true
        })
    }

    render() {
        return (
            <div className="outer-layout user-reg-page" style={{ backgroundColor: "#555", backgroundImage: "none" }}>
                <div className="container">
                    <div className="login-register">
                        <div className="form-headers">
                            <div style={{ width: "20%" }}>
                                <Mail />
                            </div>
                            <div className="nav-buttons">
                                <button id="loginBtn" className='active' onClick={this.login} >SIGN IN </button>
                                <button id="registerBtn" onClick={this.registration}>SIGN UP</button>
                            </div>
                        </div>
                        <div id="user_choice">
                            <span onClick={this.change_user}>I AM A CHEF &gt;</span>
                        </div>
                        <div className="form-group">
                            <form action='' id="loginform" onSubmit={this.login_user}>
                                <div className="username_container">
                                    <label htmlFor="username">email/id</label>
                                </div>
                                <div className="user_input">
                                    <div className="symbol">
                                        <img src={Email}></img>
                                    </div>
                                    <div>
                                        <div id="errorMessage"></div>
                                        <input type="text" id="username" placeholder="ex: johndoe@pinchef.io"></input>
                                    </div>
                                </div>
                                <div className="password_container">
                                    <label htmlFor="password">password</label>
                                </div>
                                <div className="password_input">
                                    <div>
                                        <div>
                                            <img src={Password}></img>
                                        </div>
                                        <input type="password" id="password" placeholder="ex: PinChefisthebest!"></input>
                                        <div className="symbol">
                                            <img src={HidePassword} id="active_password" className="active_password" onClick={this.ShowPassword}></img>
                                        </div>
                                    </div>
                                </div>
                                <input type="submit" value="Continue" className="submit"></input>
                            </form>
                            <form action="" id="registerform" onSubmit={this.register_user}>
                                <label htmlFor="email">Email</label>
                                <div className="email_input">
                                    <input type="text" id="email" placeholder="Enter email address" required></input>
                                </div>
                                <label htmlFor="password">Password</label>
                                <div className="reg_password_input">
                                    <input type="password" id="password" placeholder="Enter Password"></input>
                                </div>
                                <label htmlFor="user_id">User ID-Nickname</label>
                                <div className="reg_user_input">
                                    <input type="text" id="user_id" placeholder="ex: JohnDoe23"></input>
                                </div>
                                <input type="submit" value="Continue" className="submit"></input>
                            </form>
                        </div>
                        <div id="forgot">
                            <div id="signin_storage">
                                <input type="radio" name="user_sign_in" id="storeToken" onClick={this.save_token.bind(this)}></input>Keep me signed in
                            </div>
                        </div>
                        <div className="multi-login">
                            <div>
                                <AppleIcon /> &nbsp;
                                <FbIcon /> &nbsp;
                                <GoogleIcon /> &nbsp;
                            </div>
                            <a href="" style={{ color: "#FFD54F", textShadow: "2px 2px grey", textDecoration: "none", cursor: "pointer" }}>FORGOT PASSWORD</a>
                        </div>
                        <div id="note">
                            Signing In or Signing Up means you accept our <u onClick={this.open_terms}><b>Terms/Conditions</b></u> &amp; <u onClick={this.open_terms}><b>Privacy Policy</b></u>
                        </div>
                        <SlidingPane
                            className="pop-up-services"
                            overlayClassName="some-custom-overlay-class"
                            isOpen={this.state.isTCPopup}
                            from={"bottom"}
                            title="Terms & Conditions"
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