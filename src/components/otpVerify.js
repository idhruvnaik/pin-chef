import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { verifyOtp } from '../services/apiOperations';
import './otpVerify.css'
import OtpInput from 'react-otp-input';
import IncorrectPin from '../assets/png_icons/incorrect pin icon.png'
import OTP from './otpFields'

export default function VerifyOTP() {
    const location = useLocation();

    function saveotp(){
        var username = location.email;
        var otp = "123456";
        verifyOtp(username, otp).then(function(result){
            if (result){
                console.log(result);
                if(result.status == false){
                    console.log("in status false if");
                    var submit_otp = document.querySelector('.verify_otp button');
                    // submit_otp.innerHTML = "!";
                    // submit_otp.style.backgroundColor = "#D62929";
                    submit_otp.style.backgroundImage = IncorrectPin;
                    // submit_otp.style.width = "1.5em";   
                }
            }
        })
        
    }
    return (
        <div className="outer-layout" style={{backgroundColor: "#555", backgroundImage: "none" }}>
            <div className="otp-container">
                <div className="login-register">
                    <div className="heading">VERIFY</div>
                    <div className="user_mail">{location.email}</div>
                    <div className="tooltip">Enter 6 digits OTP</div>
                    <div className="actual_otp">
                        <OTP/>
                        <div className="verify_otp">
                            <button type="button" onClick={saveotp} style={{backgroundImage: "url(IncorrectPin)", backgroundSize: "cover", backgroundPosition: "center center"}}>OK</button>
                        </div>
                    </div>
                    <div className="resend_email">Resend Email</div>
                </div>
            </div>
        </div>
    );
}

// export default connect(mapStateToProps, mapDispatchToProps)(VerifyOTP)