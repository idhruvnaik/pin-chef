import React, { useState } from 'react';
import { useSpring, animated } from "react-spring";
import { getSettingsAuth } from '../services/apiOperations';
import { connect } from "react-redux";
import { addToken, donotAddToken } from "../services/actions";
import Popup from 'reactjs-popup';
import './userReg.css'
// import 'reactjs-popup/dist/index.css';


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
        <div className="start">
            <button type="button" onClick={start_flow}>START</button>
        </div>
        <div class="container">
            <div class="login-register">
                <div class="nav-buttons">
                    <button id="loginBtn" class='active' onClick={login} >SIGN IN </button>
                    <button id="registerBtn" onClick={registration}>SIGN UP</button>
                </div>
                <div class="form-group">
                    <form action="" id="loginform">
                        <label for="username">email/id</label>
                        <input type="text" id="username"></input>
                        <label for="password">password</label>
                        <input type="text" id="password"></input>
                        <input type="submit" value="Continue" class="submit"></input>
                    </form>
                    <form action="" id="registerform">
                        <label for="fullname">fullname</label>
                        <input type="text" id="fullname"></input>
                        <label for="email">email</label>
                        <input type="text" id="email"></input>
                        <label for="passwword">password</label>
                        <input type="text" id="password"></input>
                        <label for="confirmpassword">confirm password</label>
                        <input type="text" id="confirmpassword"></input>
                        <input type="submit" value="Continue" class="submit"></input>
                    </form>
                </div>
                <div id="forgot">
                    <a href="" style={{color:"#FFD54F"}}>FORGOT PASSWORD</a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(UserReg)