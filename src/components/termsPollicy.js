import React, { useState } from 'react';
import SlidingPane from "react-sliding-pane";
import './userReg.scss';
import './userReg.css';
import TermsLogo from '../assets/png_icons/terms and privacy bullet icon@2x.png';
import Terms from '../assets/svg/terms icon on menu.svg';
import $ from 'jquery';

export default class TermsPolicy extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="outer-layout terms-page" style={{ backgroundColor: "#555", backgroundImage: "none" }}>
                <SlidingPane
                    className="pop-up-services"
                    overlayClassName="some-custom-overlay-class"
                    isOpen={true}
                    from={"bottom"}
                    title="Terms/Conditions & Privacy Policy"
                    subtitle=""
                    width="100%"
                    closeIcon={null}
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
        );
    }
}