import React, { useState } from 'react';
import { resetPaasword, addTokenToState, CreateUserProfile } from '../../services/apiOperations';
import { connect } from "react-redux";
import FPBack from '../../assets/svg/fp-back-icon.svg';
import ProfileImage from '../../assets/svg/profile-image.svg';
import DeletePhoto from '../../assets/svg/Delete photo.svg';
import PhoneInput from 'react-phone-input-2';
import LocationIcon from '../../assets/svg/location-popoup.svg'
import InfoIcon from "../../assets/svg/info icon red.svg"
import AddCusine from "../../assets/svg/Add-Cusine.svg"
import 'react-phone-input-2/lib/style.css';
import './chefProfile.scss';
import SlidingPane from "react-sliding-pane";
import TimePicker from 'react-time-picker';
import Popup from 'reactjs-popup';
import Switch from "react-switch";
import $ from 'jquery';
import SelectSearch from "react-dropdown-select";

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
        this.mondayHandleChange = this.mondayHandleChange.bind(this);
        this.sundayHandleChange = this.sundayHandleChange.bind(this);
        this.saturdayHandleChange = this.saturdayHandleChange.bind(this);
        this.fridayHandleChange = this.fridayHandleChange.bind(this);
        this.thursdayHandleChange = this.thursdayHandleChange.bind(this);
        this.tuesdayHandleChange = this.tuesdayHandleChange.bind(this);
        this.wednesdayHandleChange = this.wednesdayHandleChange.bind(this);
        this.add_range = this.add_range.bind(this);
        this.state = {
            contr: '',
            open_location: false,
            monday_checked: false,
            tuesday_checked: false,
            wednesday_checked: false,
            thursday_checked: false,
            friday_checked: false,
            saturday_checked: false,
            sunday_checked: false,
            monday_disable: true,
            tuesday_disable: true,
            wednesday_disable: true,
            thursday_disable: true,
            friday_disable: true,
            saturday_disable: true,
            sunday_disable: true,
            monday_count: ["+", "x"],

            options: [
                {
                    id: 1,
                    name: "Leanne Graham",
                    username: "Bret",
                    email: "Sincere@april.biz",
                    address: {
                        street: "Kulas Light",
                        suite: "Apt. 556",
                        city: "Gwenborough",
                        zipcode: "92998-3874",
                        geo: {
                            lat: "-37.3159",
                            lng: "81.1496"
                        }
                    },
                    phone: "1-770-736-8031 x56442",
                    website: "hildegard.org",
                    company: {
                        name: "Romaguera-Crona",
                        catchPhrase: "Multi-layered client-server neural-net",
                        bs: "harness real-time e-markets"
                    }
                },
                {
                    id: 2,
                    disabled: true,
                    name: "Ervin Howell",
                    username: "Antonette",
                    email: "Shanna@melissa.tv",
                    address: {
                        street: "Victor Plains",
                        suite: "Suite 879",
                        city: "Wisokyburgh",
                        zipcode: "90566-7771",
                        geo: {
                            lat: "-43.9509",
                            lng: "-34.4618"
                        }
                    },
                    phone: "010-692-6593 x09125",
                    website: "anastasia.net",
                    company: {
                        name: "Deckow-Crist",
                        catchPhrase: "Proactive didactic contingency",
                        bs: "synergize scalable supply-chains"
                    }
                },
                {
                    id: 3,
                    name: "Clementine Bauch",
                    username: "Samantha",
                    email: "Nathan@yesenia.net",
                    address: {
                        street: "Douglas Extension",
                        suite: "Suite 847",
                        city: "McKenziehaven",
                        zipcode: "59590-4157",
                        geo: {
                            lat: "-68.6102",
                            lng: "-47.0653"
                        }
                    },
                    phone: "1-463-123-4447",
                    website: "ramiro.info",
                    company: {
                        name: "Romaguera-Jacobson",
                        catchPhrase: "Face to face bifurcated interface",
                        bs: "e-enable strategic applications"
                    }
                },
                {
                    id: 4,
                    name: "Patricia Lebsack",
                    username: "Karianne",
                    email: "Julianne.OConner@kory.org",
                    address: {
                        street: "Hoeger Mall",
                        suite: "Apt. 692",
                        city: "South Elvis",
                        zipcode: "53919-4257",
                        geo: {
                            lat: "29.4572",
                            lng: "-164.2990"
                        }
                    },
                    phone: "493-170-9623 x156",
                    website: "kale.biz",
                    company: {
                        name: "Robel-Corkery",
                        catchPhrase: "Multi-tiered zero tolerance productivity",
                        bs: "transition cutting-edge web services"
                    }
                },
                {
                    id: 5,
                    name: "Chelsey Dietrich",
                    username: "Kamren",
                    email: "Lucio_Hettinger@annie.ca",
                    address: {
                        street: "Skiles Walks",
                        suite: "Suite 351",
                        city: "Roscoeview",
                        zipcode: "33263",
                        geo: {
                            lat: "-31.8129",
                            lng: "62.5342"
                        }
                    },
                    phone: "(254)954-1289",
                    website: "demarco.info",
                    company: {
                        name: "Keebler LLC",
                        catchPhrase: "User-centric fault-tolerant solution",
                        bs: "revolutionize end-to-end systems"
                    }
                },
                {
                    id: 6,
                    name: "Mrs. Dennis Schulist",
                    username: "Leopoldo_Corkery",
                    email: "Karley_Dach@jasper.info",
                    address: {
                        street: "Norberto Crossing",
                        suite: "Apt. 950",
                        city: "South Christy",
                        zipcode: "23505-1337",
                        geo: {
                            lat: "-71.4197",
                            lng: "71.7478"
                        }
                    },
                    phone: "1-477-935-8478 x6430",
                    website: "ola.org",
                    company: {
                        name: "Considine-Lockman",
                        catchPhrase: "Synchronised bottom-line interface",
                        bs: "e-enable innovative applications"
                    }
                },
                {
                    id: 7,
                    name: "Kurtis Weissnat",
                    username: "Elwyn.Skiles",
                    email: "Telly.Hoeger@billy.biz",
                    address: {
                        street: "Rex Trail",
                        suite: "Suite 280",
                        city: "Howemouth",
                        zipcode: "58804-1099",
                        geo: {
                            lat: "24.8918",
                            lng: "21.8984"
                        }
                    },
                    phone: "210.067.6132",
                    website: "elvis.io",
                    company: {
                        name: "Johns Group",
                        catchPhrase: "Configurable multimedia task-force",
                        bs: "generate enterprise e-tailers"
                    }
                },
                {
                    id: 8,
                    name: "Nicholas Runolfsdottir V",
                    username: "Maxime_Nienow",
                    email: "Sherwood@rosamond.me",
                    address: {
                        street: "Ellsworth Summit",
                        suite: "Suite 729",
                        city: "Aliyaview",
                        zipcode: "45169",
                        geo: {
                            lat: "-14.3990",
                            lng: "-120.7677"
                        }
                    },
                    phone: "586.493.6943 x140",
                    website: "jacynthe.com",
                    company: {
                        name: "Abernathy Group",
                        catchPhrase: "Implemented secondary concept",
                        bs: "e-enable extensible e-tailers"
                    }
                },
                {
                    id: 9,
                    name: "Glenna Reichert",
                    username: "Delphine",
                    email: "Chaim_McDermott@dana.io",
                    address: {
                        street: "Dayna Park",
                        suite: "Suite 449",
                        city: "Bartholomebury",
                        zipcode: "76495-3109",
                        geo: {
                            lat: "24.6463",
                            lng: "-168.8889"
                        }
                    },
                    phone: "(775)976-6794 x41206",
                    website: "conrad.com",
                    company: {
                        name: "Yost and Sons",
                        catchPhrase: "Switchable contextually-based project",
                        bs: "aggregate real-time technologies"
                    }
                },
                {
                    id: 10,
                    name: "Clementina DuBuque",
                    username: "Moriah.Stanton",
                    email: "Rey.Padberg@karina.biz",
                    address: {
                        street: "Kattie Turnpike",
                        suite: "Suite 198",
                        city: "Lebsackbury",
                        zipcode: "31428-2261",
                        geo: {
                            lat: "-38.2386",
                            lng: "57.2232"
                        }
                    },
                    phone: "024-648-3804",
                    website: "ambrose.net",
                    company: {
                        name: "Hoeger LLC",
                        catchPhrase: "Centralized empowering task-force",
                        bs: "target end-to-end models"
                    }
                }
            ]
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

    mondayHandleChange(checked) {
        this.setState({ monday_checked: checked });
        this.setState({ monday_disable: !checked });
        if (checked) {
            $("#monday span").css("opacity", "1");
        } else {
            $("#monday span").css("opacity", "0.6")
        }
    }
    tuesdayHandleChange(checked) {
        this.setState({ tuesday_checked: checked });
        this.setState({ tuesday_disable: !checked });
    }
    wednesdayHandleChange(checked) {
        this.setState({ wednesday_checked: checked });
        this.setState({ wednesday_disable: !checked });
    }
    thursdayHandleChange(checked) {
        this.setState({ thursday_checked: checked });
        this.setState({ thursday_disable: !checked });
    }
    fridayHandleChange(checked) {
        this.setState({ friday_checked: checked });
        this.setState({ friday_disable: !checked });
    }
    saturdayHandleChange(checked) {
        this.setState({ saturday_checked: checked });
        this.setState({ saturday_disable: !checked });
    }
    sundayHandleChange(checked) {
        this.setState({ sunday_checked: checked });
        this.setState({ sunday_disable: !checked });
    }
    // disable_time(key, value){
    //     this.setState({ key:value });
    // }

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

    add_range(e) {
        console.log(e);
        var count_id = e.target.id;
        if (e.target.innerHTML == "+") {
            let monday_count = [...this.state.monday_count];
            monday_count.push("x");
            this.setState({ monday_count })
        } else {

        }
    }

    open_custom_cusine(e) {
        if (e.target.innerHTML == "+") {
            $(".add-cusine").css("display", "flex");
            $("#addCusine")[0].innerHTML = "x";
            $("#addCusine").css("color", "#BF2604");
            $("#addCusine").css("font-size", "14pt");
        } else {
            $(".add-cusine").css("display", "none");
            $("#addCusine")[0].innerHTML = "+";
            $("#addCusine").css("color", "#469A09");
            $("#addCusine").css("font-size", "18pt");
        }
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
                                        <input type="text" className="field" placeholder="Real name and last name"></input>
                                    </div>
                                    <div className="individual-details">
                                        <div className="input-name">User ID-Nickname</div>
                                        <input type="text" className="field" placeholder="ex: JohnDoe23"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Phone Number &nbsp;<span>*</span></div>
                                <input type="text" className="field" placeholder="ex: JohnDoe23"></input>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Date of Birth &nbsp;<span>*</span></div>
                                <input type="text" className="field" placeholder="ex: JohnDoe23"></input>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Gender</div>
                                <input type="text" className="field" placeholder="ex. Female, Male, etc."></input>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Position &nbsp;<span>*</span></div>
                                <input type="text" className="field" placeholder="ex: Head Chef, Pastry Chef, Home Chef, etc."></input>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Languages</div>
                                <input type="text" className="field" placeholder="ex: English, Spanish, etc."></input>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Cuisine Specialties</div>
                                <SelectSearch options={this.state.options} labelField="username" searchable={true} searchBy="username" />
                            </div>
                            Cuisine not in list? <u style={{ fontFamily: "custom-fonts-bold" }} >Add Cuisine</u> <span id="addCusine" style={{ color: "#469A09", fontSize: "18pt", fontFamily: "custom-fonts-bold", cursor: "pointer" }} onClick={this.open_custom_cusine}>+</span>
                            <div className="add-cusine">
                                <input type="text" placeholder="Write cuisine name"></input>
                                <img src={AddCusine}></img>
                            </div>
                            <div className="individual-details long-input">
                                <div className="input-name">Short Ad Intro</div>
                                <input type="text" className="field" placeholder="ex: English, Spanish, etc."></input>
                            </div>
                            <div className="individual-details long-input">
                                <div className="input-name">Full Background Info</div>
                                <input type="text" className="field" placeholder="ex: English, Spanish, etc."></input>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Address/Location &nbsp;<span>*</span></div>
                                <input type="text" className="field" placeholder="ex: English, Spanish, etc."></input>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Service hours &nbsp;<span>*</span></div>
                                <div className="f-sb">
                                    <Popup
                                        trigger={<input type="radio" name="service_hours" className=""></input>}
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
                                                    <div className="timerange" id="monday">
                                                        <div className="day">Monday</div>
                                                        <Switch onChange={this.mondayHandleChange} checked={this.state.monday_checked} uncheckedIcon={false} checkedIcon={false} />
                                                        <div className="multiple-ranges">
                                                            {this.state.monday_count.map((item, index) => {
                                                                return (
                                                                    <div className="each-range" style={{ marginBottom: "5px" }}>
                                                                        <TimePicker
                                                                            // onChange={onChange}
                                                                            value={"10:10"}
                                                                            isOpen={false}
                                                                            className="custom-time-picker"
                                                                            disableClock={true}
                                                                            disabled={this.state.monday_disable}
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
                                                                            disabled={this.state.monday_disable}
                                                                            // minuteAriaLabel="Minute"
                                                                            clearIcon={null}
                                                                        />
                                                                        <span id={index} onClick={this.add_range}>{item}</span>
                                                                    </div>
                                                                )
                                                            })}
                                                            {/* {((i=0) => {
                                                            console.log("outer while loop");
                                                            while (i <= this.state.monday_count, i++) {
                                                                console.log("inside while loop");
                                                                return (
                                                                    <div style={{ marginBottom: "5px" }}>
                                                                        <TimePicker
                                                                            // onChange={onChange}
                                                                            value={"10:10"}
                                                                            isOpen={false}
                                                                            className="custom-time-picker"
                                                                            disableClock={true}
                                                                            disabled={this.state.monday_disable}
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
                                                                            disabled={this.state.monday_disable}
                                                                            // minuteAriaLabel="Minute"
                                                                            clearIcon={null}
                                                                        />
                                                                        <span>+</span>
                                                                    </div>
                                                                )
                                                            }
                                                            console.log(this.state.monday_count);
                                                        })} */}
                                                            {/* <div style={{ marginBottom: "5px" }}>
                                                            <TimePicker
                                                                // onChange={onChange}
                                                                value={"10:10"}
                                                                isOpen={false}
                                                                className="custom-time-picker"
                                                                disableClock={true}
                                                                disabled={this.state.monday_disable}
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
                                                                disabled={this.state.monday_disable}
                                                                // minuteAriaLabel="Minute"
                                                                clearIcon={null}
                                                            />
                                                            <span>+</span>
                                                        </div>
                                                        <div>
                                                            <TimePicker
                                                                // onChange={onChange}
                                                                value={"10:10"}
                                                                isOpen={false}
                                                                className="custom-time-picker"
                                                                disableClock={true}
                                                                disabled={this.state.monday_disable}
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
                                                                disabled={this.state.monday_disable}
                                                                // minuteAriaLabel="Minute"
                                                                clearIcon={null}
                                                            />
                                                            <span>x</span>
                                                        </div> */}
                                                        </div>
                                                    </div>
                                                    <div className="timerange">
                                                        <div className="day">Tuesday</div>
                                                        <Switch onChange={this.tuesdayHandleChange} checked={this.state.tuesday_checked} uncheckedIcon={false} checkedIcon={false} />
                                                        <TimePicker
                                                            // onChange={onChange}
                                                            value={"10:10"}
                                                            isOpen={false}
                                                            className="custom-time-picker"
                                                            disableClock={true}
                                                            disabled={this.state.tuesday_disable}
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
                                                            disabled={this.state.tuesday_disable}
                                                            // minuteAriaLabel="Minute"
                                                            clearIcon={null}
                                                        />
                                                        <span>+</span>
                                                    </div>
                                                    <div className="timerange">
                                                        <div className="day">Wednesday</div>
                                                        <Switch onChange={this.wednesdayHandleChange} checked={this.state.wednesday_checked} uncheckedIcon={false} checkedIcon={false} />
                                                        <TimePicker
                                                            // onChange={onChange}
                                                            value={"10:10"}
                                                            isOpen={false}
                                                            className="custom-time-picker"
                                                            disableClock={true}
                                                            disabled={this.state.wednesday_disable}
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
                                                            disabled={this.state.wednesday_disable}
                                                            // minuteAriaLabel="Minute"
                                                            clearIcon={null}
                                                        />
                                                        <span>+</span>
                                                    </div>
                                                    <div className="timerange">
                                                        <div className="day">Thursday</div>
                                                        <Switch onChange={this.thursdayHandleChange} checked={this.state.thursday_checked} uncheckedIcon={false} checkedIcon={false} />
                                                        <TimePicker
                                                            // onChange={onChange}
                                                            value={"10:10"}
                                                            isOpen={false}
                                                            className="custom-time-picker"
                                                            disableClock={true}
                                                            disabled={this.state.thursday_disable}
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
                                                            disabled={this.state.thursday_disable}
                                                            // minuteAriaLabel="Minute"
                                                            clearIcon={null}
                                                        />
                                                        <span>+</span>
                                                    </div>
                                                    <div className="timerange">
                                                        <div className="day">Friday</div>
                                                        <Switch onChange={this.fridayHandleChange} checked={this.state.friday_checked} uncheckedIcon={false} checkedIcon={false} />
                                                        <TimePicker
                                                            // onChange={onChange}
                                                            value={"10:10"}
                                                            isOpen={false}
                                                            className="custom-time-picker"
                                                            disableClock={true}
                                                            disabled={this.state.friday_disable}
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
                                                            disabled={this.state.friday_disable}
                                                            // minuteAriaLabel="Minute"
                                                            clearIcon={null}
                                                        />
                                                        <span>+</span>
                                                    </div>
                                                    <div className="timerange">
                                                        <div className="day">Saturday</div>
                                                        <Switch onChange={this.saturdayHandleChange} checked={this.state.saturday_checked} uncheckedIcon={false} checkedIcon={false} />
                                                        <TimePicker
                                                            // onChange={onChange}
                                                            value={"10:10"}
                                                            isOpen={false}
                                                            className="custom-time-picker"
                                                            disableClock={true}
                                                            disabled={this.state.saturday_disable}
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
                                                            disabled={this.state.saturday_disable}
                                                            // minuteAriaLabel="Minute"
                                                            clearIcon={null}
                                                        />
                                                        <span>+</span>
                                                    </div>
                                                    <div className="timerange">
                                                        <div className="day">Sunday</div>
                                                        <Switch onChange={this.sundayHandleChange} checked={this.state.sunday_checked} uncheckedIcon={false} checkedIcon={false} />
                                                        <TimePicker
                                                            // onChange={onChange}
                                                            value={"10:10"}
                                                            isOpen={false}
                                                            className="custom-time-picker"
                                                            disableClock={true}
                                                            disabled={this.state.sunday_disable}
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
                                                            disabled={this.state.sunday_disable}
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
                                <input type="radio" name="service_hours" className=""></input>24/7 with booking
                                </div>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Services <span style={{ color: "#656565" }}>(Select all options that apply)</span></div>
                                <div className="flex-c">
                                    <div>
                                        <input type="checkbox" className=""></input>
                                        <span>Cook and Deliver</span>
                                    </div>
                                    <div>
                                        <input type="checkbox" className=""></input>
                                        <span>Cook and Ship</span>
                                    </div>
                                    <div>
                                        <input type="checkbox" className=""></input>
                                        <span>Cook for Pick up/Takeaway</span>
                                    </div>
                                    <div>
                                        <input type="checkbox" className=""></input>
                                        <span>Go to Guests address to cook</span>
                                    </div>
                                    <div>
                                        <input type="checkbox" className=""></input>
                                        <span>Host Guests and cook</span>
                                    </div>
                                    <div>
                                        <input type="checkbox" className=""></input>
                                        <span>Cook Live with Chef</span>
                                    </div>
                                </div>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Minimum purchase Service total amount</div>
                                <div className="price-details">
                                    <div>$</div>
                                    <input type="text" className="field" placeholder="Enter min. price"></input>
                                </div>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Minimum purchase Service total amount</div>
                                <div className="price-range">
                                    <div>$</div>
                                    <input style={{ borderRadius: "0px" }} className="field" type="text" placeholder="Enter min. price"></input>
                                    <input type="text" className="field" placeholder="Enter max. price"></input>
                                </div>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Hourly rate</div>
                                <div className="price-details">
                                    <div>$</div>
                                    <input type="text" className="field" placeholder="Enter price"></input>
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
                                <div className="flex-c">
                                    <div>
                                        <input type="radio" name="Payments" className=""></input>
                                        <span>Stripe</span>
                                    </div>
                                    <div>
                                        <input type="radio" name="Payments" className=""></input>
                                        <span>Paypal</span>
                                    </div>
                                    <div>
                                        <input type="radio" name="Payments" className=""></input>
                                        <span>Cash on Delivery</span>
                                    </div>
                                    <div>
                                        <input type="radio" name="Payments" className=""></input>
                                        <span>Credit Card on Delivery</span>
                                    </div>
                                </div>
                            </div>
                            <div className="save_profile">
                                <button type="button">SAVE</button>
                            </div>
                        </div>
                    </div>
                </SlidingPane>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChefProfile)