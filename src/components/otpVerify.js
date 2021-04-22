import React, { useState } from 'react';
import { useSpring, animated } from "react-spring";
import { verifyOtp, addTokenToState, resetOTP } from '../services/apiOperations';
import { connect } from "react-redux";
import './otpVerify.css'
import OtpInput from 'react-otp-input';
import IncorrectPin from '../assets/png_icons/incorrect pin icon.png'
import EmailIcon from '../assets/svg/resend-otp-email.svg';
import FPBack from '../assets/svg/fp-back-icon.svg';
import InvalidOTP from '../assets/svg/incorrect pin icon.svg'
import CorrectOTP from '../assets/svg/correct-otp.svg'
import Popup from 'reactjs-popup';
import OTP from './otpFields';
import $ from 'jquery';
// import ade from './getToken'

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    addTokenToState: (token_details) => dispatch(addTokenToState(token_details))
})


class VerifyOTP extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.location.email) {
            // this.email = this.props.token_details.token.user_name;
            this.email = this.props.location.email;
            this.redirect = this.props.location.redirect;
        } else {
            this.props.history.push(
                {
                    pathname: '/User'
                }
            );
        }
        this.saveotp = this.saveotp.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.resend_otp = this.resend_otp.bind(this);
        this.back_to_parent = this.back_to_parent.bind(this);
        this.state = {
            otp: '',
            resend_otp_flag: false
        };
        console.log(this);
    }

    handleChange(otp) {
        this.setState({ otp });
    };

    async saveotp() {
        var username = this.email;
        let result = await verifyOtp(username, this.state.otp);
        console.log(result, "from verify OTP result");
        if (result) {
            if (result.status == false) {
                // var submit_otp = document.querySelector('.verify_otp button');
                // // submit_otp.innerHTML = "!";
                // // submit_otp.style.backgroundColor = "#D62929";
                // submit_otp.style.backgroundImage = IncorrectPin;
                // submit_otp.style.width = "1.5em";
                $('.verify_otp button').css("display", "none");
                $('.verify_otp img').css("display", "block");
                $('.verify_otp img')[0].src = InvalidOTP;
                // $('.verify_otp img').css("margin-left", "8px");
            } else {
                $('.verify_otp button').css("display", "none");
                $('.verify_otp img').css("display", "block");
                $('.verify_otp img')[0].src = CorrectOTP;
                this.props.history.push(
                    {
                        pathname: this.redirect,
                        email: username
                    }
                );
            }
        }
    }

    async resend_otp() {
        let result = await resetOTP(this.email);
        if (result.status == false) {
            this.setState({
                resend_otp_flag: true
            });
        }
    }
    back_to_parent(){
        this.props.history.goBack();
    }

    render() {
        return (
            <div className="outer-layout verify-otp-page" style={{ backgroundColor: "#555", backgroundImage: "none" }}>
                <div className="otp-container">
                    <div className="login-register">
                        <div className="heading">
                            <div>
                                <img src={FPBack} onClick={this.back_to_parent}></img>
                            </div>
                            <div>VERIFY</div>
                        </div>
                        <div className="user_mail">{this.email}</div>
                        <div className="tooltip">Enter 6 digits OTP</div>
                        <div className="actual_otp">
                            <OTP onOtpChange={this.handleChange} />
                            <div className="verify_otp">
                                <img src={InvalidOTP} onClick={this.saveotp}></img>
                                <button type="button" onClick={this.saveotp}>OK</button>
                            </div>
                        </div>
                        <Popup
                            trigger={<div className="resend_email">Resend Email</div>}
                            position="center center"
                            closeOnDocumentClick
                            modal
                            nested
                            onOpen={this.resend_otp}
                            // disabled={this.state.resend_otp_flag}
                            close={true}
                        >
                            {close => (
                                <div className="resend-otp-popup" onLoad={this.state.resend_otp_flag ? close : null} >
                                    <div className="icon">
                                        <img src={EmailIcon}></img>
                                    </div>
                                    <div className="pop-up-instructions">
                                        OTP sent once more to your registered email. Please check your email and try again.
                                    </div>
                                    <div className="actions">
                                        <button type="button" onClick={close}>OK</button>
                                    </div>
                                </div>
                            )}
                        </Popup>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VerifyOTP)