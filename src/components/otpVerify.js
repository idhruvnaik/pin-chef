import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { useSpring, animated } from "react-spring";
import { getSettingsAuth } from '../services/apiOperations';
import { connect } from "react-redux";
import { addToken, donotAddToken } from "../services/actions";
import Popup from 'reactjs-popup';
import './otpVerify.css'
import OtpInput from 'react-otp-input';
import OTP from './otpFields'
// import 'reactjs-popup/dist/index.css';

export default function VerifyOTP() {
    const location = useLocation();
    var external_otp = '';
    console.log(location.email);
    function handleChange(otp){
        console.log(otp);
        console.log(typeof(external_otp));
        external_otp = otp;
        console.log(typeof(external_otp));
        console.log(external_otp);
    }
    function saveotp(otp){
        console.log(otp);
        console.log("otp aayu");
    }
    return (
        <div className="outer-layout" style={{backgroundColor: "#555", backgroundImage: "none" }}>
            <div className="otp-container">
                <div className="login-register">
                    <div className="heading">VERIFY</div>
                    <div className="user_mail">marry@yahoo.com</div>
                    <div className="tooltip">Enter 6 digits OTP</div>
                    <div className="actual_otp">
                        <OTP/>
                        <div className="verify_otp">
                            <button type="button">OK</button>
                        </div>
                    </div>
                    <div className="resend_email">Resend Email</div>
                </div>
            </div>
        </div>
    );
}

// export default connect(mapStateToProps, mapDispatchToProps)(VerifyOTP)