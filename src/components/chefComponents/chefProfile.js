import React, { useState } from 'react';
import { resetPaasword, addTokenToState, CreateUserProfile } from '../../services/apiOperations';
import { connect } from "react-redux";
import FPBack from '../../assets/svg/fp-back-icon.svg';
import ProfileImage from '../../assets/svg/profile-image.svg';
import DeletePhoto from '../../assets/svg/Delete photo.svg';
import PhoneInput from 'react-phone-input-2';
import LocationIcon from '../../assets/svg/location-popoup.svg'
import InfoIcon from "../../assets/svg/info icon red.svg"
import 'react-phone-input-2/lib/style.css';
import './chefProfile.scss';
import SlidingPane from "react-sliding-pane";
import TimePicker from 'react-time-picker';
import Popup from 'reactjs-popup';
import Switch from "react-switch";
import $ from 'jquery';

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    addTokenToState: (token_details) => dispatch(addTokenToState(token_details))
})


class ChefProfile extends React.Component {
    constructor(props) {
        super(props);
        // if (this.props.token_details.token) {
        //     this.token = this.props.token_details.token.auth_token;
        //     this.user_id = this.props.token_details.token.id;
        // } else {
        //     this.props.history.push(
        //         {
        //             pathname: '/User'
        //         }
        //     );
        // }
        this.create_profile = this.create_profile.bind(this);
        this.back_to_login = this.back_to_login.bind(this);
        this.get_profile_img = this.get_profile_img.bind(this);
        this.delete_profile_img = this.delete_profile_img.bind(this);
        this.redirect_homepage = this.redirect_homepage.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            contr: '',
            open_location: false,
            checked: false
        }
    }

    async create_profile(event) {
        event.preventDefault();
        var user = document.querySelector('.name_container #user').value;
        if ($('.profile-image-container img')[0].src == ProfileImage) {
            var image = null;
        } else {
            var image = document.getElementById('upload').files[0];
        }
        let result = await CreateUserProfile(this.user_id, image, user, this.state.contr, this.token);
        if (result.status == false) {
            console.log(result.message);
            // if (result.message.includes("401")) {
            //     $('#errorMessage')[0].innerHTML = "User is not exists or not authorized to perform this action.";
            // } else {
            //     $('#errorMessage')[0].innerHTML = result.message;
            // }
        } else {
            this.setState({
                open_location: true
            });
        }
    }

    delete_profile_img(e) {
        $('.profile-image-container img')[0].src = ProfileImage;
        e.target.src = '';
        $('.profile-image-container img').css("border-radius", "0%");
    }
    get_profile_img(e) {
        var selectedFile = document.getElementById('upload').files[0];
        var reader = new FileReader();
        reader.onload = (event) => {
            $('.profile-image-container img')[0].src = event.target.result;
        };
        $('.profile-image-container').css("border-radius", "50%");
        $('.profile-image-container img').css("width", "100%");
        $('.profile-image-container img').css("height", "100%");
        $('.profile-image-container img').css("border-radius", "50%");
        $('.delete_photo img')[0].src = DeletePhoto;
        $('.delete_photo').css("position", "relative");
        $('.delete_photo').css("bottom", "44px");
        $('.delete_photo').css("left", "44px");
        reader.readAsDataURL(selectedFile);
    }

    handleChange(checked) {
        this.setState({ checked });
    }

    back_to_login() {
        this.props.history.goBack();
    }

    redirect_homepage() {
        this.props.history.push(
            {
                pathname: '/Homepage'
            }
        );
    }

    render() {
        return (
            <div className="outer-layout chef-profile-page" style={{ backgroundColor: "#555", backgroundImage: "none" }}>
                <SlidingPane
                    className="chef-profile-creation"
                    overlayClassName="chef-profile-overlay-class"
                    isOpen={true}
                    from={"bottom"}
                    title="Chef Profile INFO"
                    subtitle=""
                    width="100%"
                    closeIcon={null}
                    hideHeader={true}
                    onRequestClose={() => {
                        this.setState({ isTCPopup: false });
                    }}
                    onAfterOpen={() => {
                        $('.slide-pane__header').css("background-color", "#5B5353");
                        $('.slide-pane__header').css("color", "white");
                        $('.slide-pane__header').css("border-radius", "15px");
                        $('.slide-pane__header').css("border-bottom-left-radius", "0px");
                        if (window.screen.width > 1100) {
                            $('.chef-profile-creation').css('width', "50%");
                        }
                    }}
                >
                    <div className="chef-profile">
                        <div className="chef-profile-header">
                            Chef Profile INFO
                        </div>
                        <div className="details">
                            <div className="instructions">
                                Please fill in all info about yourself and what services you are willing to offer to customers.
                            </div>
                            <div className="identity-details">
                                <div className="desktop-icon">
                                    <img src={ProfileImage}></img>
                                </div>
                                <div className="primary-details">
                                    <div className="individual-details">
                                        <div className="input-name">Name & Last Name &nbsp;<span>*</span></div>
                                        <input type="text" placeholder="Real name and last name"></input>
                                    </div>
                                    <div className="individual-details">
                                        <div className="input-name">User ID-Nickname</div>
                                        <input type="text" placeholder="ex: JohnDoe23"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Phone Number &nbsp;<span>*</span></div>
                                <input type="text" placeholder="ex: JohnDoe23"></input>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Date of Birth &nbsp;<span>*</span></div>
                                <input type="text" placeholder="ex: JohnDoe23"></input>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Gender</div>
                                <input type="text" placeholder="ex. Female, Male, etc."></input>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Position &nbsp;<span>*</span></div>
                                <input type="text" placeholder="ex: Head Chef, Pastry Chef, Home Chef, etc."></input>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Languages</div>
                                <input type="text" placeholder="ex: English, Spanish, etc."></input>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Cuisine Specialties</div>
                                <input type="text" placeholder="ex: English, Spanish, etc."></input>
                            </div>
                            <div className="individual-details long-input">
                                <div className="input-name">Short Ad Intro</div>
                                <input type="text" placeholder="ex: English, Spanish, etc."></input>
                            </div>
                            <div className="individual-details long-input">
                                <div className="input-name">Full Background Info</div>
                                <input type="text" placeholder="ex: English, Spanish, etc."></input>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Address/Location &nbsp;<span>*</span></div>
                                <input type="text" placeholder="ex: English, Spanish, etc."></input>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Service hours &nbsp;<span>*</span></div>
                                <Popup
                                    trigger={<input type="radio" name="service_hours" class=""></input>}
                                    position="center center"
                                    closeOnDocumentClick
                                    modal
                                    nested
                                >
                                    {close => (
                                        <div className="timerange-popup">
                                            <div className="pop-up-heading">
                                                Select Hours
                                            </div>
                                            <div className="timeranges">
                                                <div className="timerange">
                                                    <div className="day">Monday</div>
                                                    <Switch onChange={this.handleChange} checked={this.state.checked} uncheckedIcon={false} checkedIcon={false} />
                                                    <TimePicker
                                                        // onChange={onChange}
                                                        value={"10:10"}
                                                        isOpen={false}
                                                        className="custom-time-picker"
                                                        disableClock={true}
                                                        // disabled={true}
                                                        // minuteAriaLabel="Minute"
                                                        clearIcon={null}
                                                    />
                                                    &nbsp;-&nbsp;
                                                    <TimePicker
                                                        // onChange={onChange}
                                                        value={"10:10"}
                                                        isOpen={false}
                                                        className="custom-time-picker"
                                                        disableClock={true}
                                                        // disabled={true}
                                                        // minuteAriaLabel="Minute"
                                                        clearIcon={null}
                                                    />
                                                    <span>+</span>
                                                </div>
                                                <div className="timerange">
                                                    <div className="day">Tuesday</div>
                                                    <Switch onChange={this.handleChange} checked={this.state.checked} uncheckedIcon={false} checkedIcon={false} />
                                                    <TimePicker
                                                        // onChange={onChange}
                                                        value={"10:10"}
                                                        isOpen={false}
                                                        className="custom-time-picker"
                                                        disableClock={true}
                                                        // disabled={true}
                                                        // minuteAriaLabel="Minute"
                                                        clearIcon={null}
                                                    />
                                                    &nbsp;-&nbsp;
                                                    <TimePicker
                                                        // onChange={onChange}
                                                        value={"10:10"}
                                                        isOpen={false}
                                                        className="custom-time-picker"
                                                        disableClock={true}
                                                        // disabled={true}
                                                        // minuteAriaLabel="Minute"
                                                        clearIcon={null}
                                                    />
                                                    <span>+</span>
                                                </div>
                                                <div className="timerange">
                                                    <div className="day">Wednesday</div>
                                                    <Switch onChange={this.handleChange} checked={this.state.checked} uncheckedIcon={false} checkedIcon={false} />
                                                    <TimePicker
                                                        // onChange={onChange}
                                                        value={"10:10"}
                                                        isOpen={false}
                                                        className="custom-time-picker"
                                                        disableClock={true}
                                                        // disabled={true}
                                                        // minuteAriaLabel="Minute"
                                                        clearIcon={null}
                                                    />
                                                    &nbsp;-&nbsp;
                                                    <TimePicker
                                                        // onChange={onChange}
                                                        value={"10:10"}
                                                        isOpen={false}
                                                        className="custom-time-picker"
                                                        disableClock={true}
                                                        // disabled={true}
                                                        // minuteAriaLabel="Minute"
                                                        clearIcon={null}
                                                    />
                                                    <span>+</span>
                                                </div>
                                                <div className="timerange">
                                                    <div className="day">Thursday</div>
                                                    <Switch onChange={this.handleChange} checked={this.state.checked} uncheckedIcon={false} checkedIcon={false} />
                                                    <TimePicker
                                                        // onChange={onChange}
                                                        value={"10:10"}
                                                        isOpen={false}
                                                        className="custom-time-picker"
                                                        disableClock={true}
                                                        // disabled={true}
                                                        // minuteAriaLabel="Minute"
                                                        clearIcon={null}
                                                    />
                                                    &nbsp;-&nbsp;
                                                    <TimePicker
                                                        // onChange={onChange}
                                                        value={"10:10"}
                                                        isOpen={false}
                                                        className="custom-time-picker"
                                                        disableClock={true}
                                                        // disabled={true}
                                                        // minuteAriaLabel="Minute"
                                                        clearIcon={null}
                                                    />
                                                    <span>+</span>
                                                </div>
                                                <div className="timerange">
                                                    <div className="day">Friday</div>
                                                    <Switch onChange={this.handleChange} checked={this.state.checked} uncheckedIcon={false} checkedIcon={false} />
                                                    <TimePicker
                                                        // onChange={onChange}
                                                        value={"10:10"}
                                                        isOpen={false}
                                                        className="custom-time-picker"
                                                        disableClock={true}
                                                        // disabled={true}
                                                        // minuteAriaLabel="Minute"
                                                        clearIcon={null}
                                                    />
                                                    &nbsp;-&nbsp;
                                                    <TimePicker
                                                        // onChange={onChange}
                                                        value={"10:10"}
                                                        isOpen={false}
                                                        className="custom-time-picker"
                                                        disableClock={true}
                                                        // disabled={true}
                                                        // minuteAriaLabel="Minute"
                                                        clearIcon={null}
                                                    />
                                                    <span>+</span>
                                                </div>
                                                <div className="timerange">
                                                    <div className="day">Saturday</div>
                                                    <Switch onChange={this.handleChange} checked={this.state.checked} uncheckedIcon={false} checkedIcon={false} />
                                                    <TimePicker
                                                        // onChange={onChange}
                                                        value={"10:10"}
                                                        isOpen={false}
                                                        className="custom-time-picker"
                                                        disableClock={true}
                                                        // disabled={true}
                                                        // minuteAriaLabel="Minute"
                                                        clearIcon={null}
                                                    />
                                                    &nbsp;-&nbsp;
                                                    <TimePicker
                                                        // onChange={onChange}
                                                        value={"10:10"}
                                                        isOpen={false}
                                                        className="custom-time-picker"
                                                        disableClock={true}
                                                        // disabled={true}
                                                        // minuteAriaLabel="Minute"
                                                        clearIcon={null}
                                                    />
                                                    <span>+</span>
                                                </div>
                                                <div className="timerange">
                                                    <div className="day">Sunday</div>
                                                    <Switch onChange={this.handleChange} checked={this.state.checked} uncheckedIcon={false} checkedIcon={false} />
                                                    <TimePicker
                                                        // onChange={onChange}
                                                        value={"10:10"}
                                                        isOpen={false}
                                                        className="custom-time-picker"
                                                        disableClock={true}
                                                        // disabled={true}
                                                        // minuteAriaLabel="Minute"
                                                        clearIcon={null}
                                                    />
                                                    &nbsp;-&nbsp;
                                                    <TimePicker
                                                        // onChange={onChange}
                                                        value={"10:10"}
                                                        isOpen={false}
                                                        className="custom-time-picker"
                                                        disableClock={true}
                                                        // disabled={true}
                                                        // minuteAriaLabel="Minute"
                                                        clearIcon={null}
                                                    />
                                                    <span>+</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </Popup>
                                Selected Hours
                                <input type="radio" name="service_hours" class=""></input>24/7 with booking
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Services <span style={{ color: "#656565" }}>(Select all options that apply)</span></div>
                                <input type="radio" name="services" class=""></input>Cook and Deliver
                                <input type="radio" name="services" class=""></input>Cook and Ship
                                <input type="radio" name="services" class=""></input>Cook for Pick up/Takeaway
                                <input type="radio" name="services" class=""></input>Go to Guests address to cook
                                <input type="radio" name="services" class=""></input>Host Guests and cook
                                <input type="radio" name="services" class=""></input>Cook Live with Chef
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Minimum purchase Service total amount</div>
                                <div className="price-details">
                                    <div>$</div>
                                    <input type="text" placeholder="Enter min. price"></input>
                                </div>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Minimum purchase Service total amount</div>
                                <div className="price-range">
                                    <div>$</div>
                                    <input style={{ borderRadius: "0px" }} type="text" placeholder="Enter min. price"></input>
                                    <input type="text" placeholder="Enter max. price"></input>
                                </div>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Hourly rate</div>
                                <div className="price-details">
                                    <div>$</div>
                                    <input type="text" placeholder="Enter price"></input>
                                </div>
                            </div>
                            <div className="payment">
                                <div className="input-name">Accepting direct service payment methods</div>
                                <div className="note">
                                    <div>
                                        <img src={InfoIcon}></img>
                                    </div>
                                    <div>
                                        Options selected now will have to be connected to your own payment account later in settings for you to be able to make any of your added services active.
                                    </div>
                                </div>
                                <input type="radio" name="Payments" class=""></input>Stripe
                                <input type="radio" name="Payments" class=""></input>Paypal
                                <input type="radio" name="Payments" class=""></input>Cash on Delivery
                                <input type="radio" name="Payments" class=""></input>Credit Card on Delivery
                            </div>
                        </div>
                    </div>
                </SlidingPane>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChefProfile)