import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { verifyOtp, addTokenToState } from '../services/apiOperations';
import { connect } from "react-redux";
import './otpVerify.css'
import OtpInput from 'react-otp-input';
import IncorrectPin from '../assets/png_icons/incorrect pin icon.png'
import OTP from './otpFields'

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    addTokenToState:(token_details) => dispatch(addTokenToState(token_details))
})


// const location = useLocation();

class VerifyOTP extends React.Component {
    constructor(props){
        super(props);
        // const location = useLocation();
        console.log(this.props);
        this.email = this.props.token_details.token.user_name;
        this.saveotp = this.saveotp.bind(this);
    }

    async saveotp(){
        var username = this.email;
        var otp = "152523";
        let result = await verifyOtp(username, otp, this.props.token_details.token.auth_token);
        if (result){
            console.log(result);
            console.log(this.props);
            if(result.status == false){
                console.log("in status false if");
                var submit_otp = document.querySelector('.verify_otp button');
                // submit_otp.innerHTML = "!";
                // submit_otp.style.backgroundColor = "#D62929";
                submit_otp.style.backgroundImage = IncorrectPin;
                // submit_otp.style.width = "1.5em";   
            }else {
                this.props.history.push(
                    {            
                        pathname: '/Homepage'
                    }
                );
            }
        }        
    }

    render() {
        return (
            <div className="outer-layout" style={{backgroundColor: "#555", backgroundImage: "none" }}>
                <div className="otp-container">
                    <div className="login-register">
                        <div className="heading">VERIFY</div>
                        <div className="user_mail">{this.email}</div>
                        <div className="tooltip">Enter 6 digits OTP</div>
                        <div className="actual_otp">
                            <OTP/>
                            <div className="verify_otp">
                                <button type="button" onClick={this.saveotp} style={{backgroundImage: "url(IncorrectPin)", backgroundSize: "cover", backgroundPosition: "center center"}}>OK</button>
                            </div>
                        </div>
                        <div className="resend_email">Resend Email</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyOTP)