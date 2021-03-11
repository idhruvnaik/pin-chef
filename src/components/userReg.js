import React, { useState } from 'react';
import { useSpring, animated } from "react-spring";
import { getSettingsAuth, verifyLogin } from '../services/apiOperations';
import { connect } from "react-redux";
import { addToken, donotAddToken } from "../services/actions";
import Popup from 'reactjs-popup';
import {reactLocalStorage} from 'reactjs-localstorage';
import './userReg.css'
// import 'reactjs-popup/dist/index.css';

var user_role = 2;
const mapStateToProps = state => ({
    ...state
});
  
const mapDispatchToProps = dispatch => ({
    addToken: () => dispatch(addToken),
    donotAddToken: () => dispatch(donotAddToken)
});

function UserReg(props) {
    function registration() {
        var loginBtn = document.getElementById("loginBtn");
        var registerBtn = document.getElementById("registerBtn");
        var loginform = document.getElementById("loginform");
        var registerform = document.getElementById("registerform");
        var forgot = document.getElementById("forgot");
        registerform.style.left='0px';
        registerform.style.opacity='1';
        loginform.style.left='-500px';
        loginform.style.opacity='0';
        forgot.style.left='-500px';
        forgot.style.opacity='0';
        registerBtn.classList.add('active');
        loginBtn.classList.remove('active');

    }

    function login() {
        var loginBtn = document.getElementById("loginBtn");
        var registerBtn = document.getElementById("registerBtn");
        var loginform = document.getElementById("loginform");
        var registerform = document.getElementById("registerform");
        var forgot = document.getElementById("forgot");
        loginform.style.left='0px';
        loginform.style.opacity='1';
        forgot.style.left='0px';
        forgot.style.opacity='1';
        registerform.style='500px';
        loginBtn.classList.add('active');
        registerBtn.classList.remove('active');
        registerform.style.opacity='0';
    }
    function change_user(){
        var user = document.querySelector('#user_choice span').innerHTML;
        if (user.startsWith('I AM A CHEF')){
            document.querySelector('#user_choice span').innerHTML = "LOOKING FOR CHEF >";
            user_role = 1;
        } else{
            document.querySelector('#user_choice span').innerHTML = "I AM A CHEF >";
            user_role = 2;
        }
    }
    function login_user(event){
        event.preventDefault();
        let username = document.querySelector('#loginform #username').value;
        let password = document.querySelector('#loginform #password').value;
        let remember = document.querySelector('#forgot #signin_storage #storeToken').checked;
        verifyLogin(username, password, remember).then(function(result){
            if (result){
                if (result.auth_token){
                    if(result.roleID == user_role){
                        reactLocalStorage.setObject(
                            'token_details', 
                            {'user': result.user_name, 'token': result.auth_token, remember: remember }
                        );
                        props.history.push(
                            {            
                                pathname: '/Verifyotp',
                                email: document.querySelector('#loginform #username').value
                            }
                        );  
                    }else{
                        if(result.roleID == 2){
                            console.log("User is not Chef");
                        }else{
                            console.log("User is not user");
                        }
                    }
                }else{
                    console.log(result.message);
                }
            }
        })
    }
    function register_user(event){
        event.preventDefault();
        props.history.push(
            {            
                pathname: '/Verifyotp',
                email: document.querySelector('#registerform #email').value
            }
        );
    }
    function save_token(){
        console.log("checkbox badalyu");
    }
    function start_flow() {
        console.log("to shuru kare");
        console.log(props);
        
        getSettingsAuth(
            "/auth/login", 
            'post', 
            {"password": "12345678","user_name":"dhaval_123"},
            {
                "Authorization": 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJkaGF2YWxfMTIzIiwiaWF0IjoxNjE1MDI2MDk5LCJleHAiOjE2NDY1NjIwOTl9.yNES4EIwDDiexyspU6nbkEZ5cpMKEi_QLHy2EZZcxPI',
                "Access-Control-Allow-Origin": "*"
            }
        )
            // .then(res => {
            //     console.log("resp");
            //     console.log(res)
            //     if(res.status===200){
            //         console.log(res.data);
            //     }
            // })
        // return (
        //   <Router>
        //     <Switch>
        //       <Route path='/Homepage' component={()=><UserFeeds/>} />
        //     </Switch>
        //   </Router>
        // );
        // props.history.push({
        //   pathname:"/Homepage",
        // });
    };
  return (
    <div className="outer-layout" style={{backgroundColor: "#555", backgroundImage: "none" }}>
        <div className="container">
            <div className="login-register">
                <div className="nav-buttons">
                    <button id="loginBtn" className='active' onClick={login} >SIGN IN </button>
                    <button id="registerBtn" onClick={registration}>SIGN UP</button>
                </div>
                <div id="user_choice">
                    <span onClick={change_user}>I AM A CHEF &gt;</span>
                </div>
                <div className="form-group">
                    <form action='' id="loginform" onSubmit={login_user}>
                        <label htmlFor="username">email/id</label>
                        <input type="text" id="username" placeholder="ex: johndoe@pinchef.io"></input>
                        <label htmlFor="password">password</label>
                        <input type="text" id="password" placeholder="ex: PinChefisthebest!"></input>
                        <input type="submit" value="Continue" className="submit"></input>
                    </form>
                    <form action="" id="registerform" onSubmit={register_user}>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" placeholder="Enter email address"></input>
                        <label htmlFor="user_id">User ID-Nickname</label>
                        <input type="text" id="user_id" placeholder="ex: JohnDoe23"></input>
                        <label htmlFor="password">Password</label>
                        <input type="text" id="password" placeholder="Enter Password"></input>
                        <label htmlFor="confirmpassword">Confirm Password</label>
                        <input type="text" id="confirmpassword" placeholder="Re-enter Password"></input>
                        <input type="submit" value="Continue" className="submit"></input>
                    </form>
                </div>
                <div id="forgot">
                    <div id="signin_storage">
                        <input type="radio" name="user_sign_in" id="storeToken" onChange={save_token}></input>Keep me signed in
                    </div>
                    <a href="" style={{color:"#FFD54F"}}>FORGOT PASSWORD</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(UserReg)