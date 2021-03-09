import React, { useState } from 'react';
import { useSpring, animated } from "react-spring";
import { getSettingsAuth } from '../services/apiOperations';
import { connect } from "react-redux";
import { addToken, donotAddToken } from "../services/actions";
import Popup from 'reactjs-popup';
import './otpVerify.css'
import OtpInput from 'react-otp-input';
// import 'reactjs-popup/dist/index.css';

const state = { otp: '' };
export default function VerifyOTP() {
    function saveotp(otp){
        console.log(otp);
        console.log("otp aayu");
        console.log(state);
    }
    return (
        <div className="outer-layout" style={{backgroundColor: "#555", backgroundImage: "none" }}>
            <div class="otp-container">
                <div class="login-register">
                    <div className="heading">VERIFY</div>
                    <div className="user_mail">marry@yahoo.com</div>
                    <div className="tooltip">Enter 6 digits OTP</div>
                    <div className="actual_otp">
                        <OtpInput
                            onChange={otp => console.log(otp)}
                            numInputs={6}
                            isInputSecure={true}
                            containerStyle={"each_otp_container"}
                            inputStyle={{width: "3em"}}
                            placeholder={"______"}
                        />
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