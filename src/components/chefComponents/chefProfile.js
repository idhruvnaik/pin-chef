import React, { useState } from 'react';
import { addTokenToState, CreateUserProfile, UpdateChefProfile } from '../../services/apiOperations';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { getISOByParam, getAllInfoByISO } from 'iso-country-currency';
import { connect } from "react-redux";
import FPBack from '../../assets/svg/fp-back-icon.svg';
import ProfileImage from '../../assets/svg/profile-image.svg';
import DeletePhoto from '../../assets/svg/Delete photo.svg';
import PhoneInput from 'react-phone-input-2';
import DatePicker from 'react-date-picker';
import LocationIcon from '../../assets/svg/location-popoup.svg'
import InfoIcon from "../../assets/svg/info icon red.svg"
import AddCusine from "../../assets/svg/Add-Cusine.svg"
import 'react-phone-input-2/lib/style.css';
import 'react-notifications/lib/notifications.css';
import './chefProfile.scss';
import SlidingPane from "react-sliding-pane";
import TimePicker from 'react-time-picker';
import Popup from 'reactjs-popup';
import Switch from "react-switch";
import $ from 'jquery';
import SelectSearch from "react-dropdown-select";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';


const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    addTokenToState: (token_details) => dispatch(addTokenToState(token_details))
})

const cusines = [
    {
        username: 'Afghani'
    },
    {
        username: 'African'
    },
    {
        username: 'Albanian'
    },
    {
        username: 'American'
    },
    {
        username: 'Apulian'
    },
    {
        username: 'Arabic'
    },
    {
        username: 'Argentinean'
    },
    {
        username: 'Armenian'
    },
    {
        username: 'Asian'
    },
    {
        username: 'Assyrian'
    },
    {
        username: 'Australian'
    },
    {
        username: 'Austrian'
    },
    {
        username: 'Bahamian'
    },
    {
        username: 'Bangladeshi'
    },
    {
        username: 'Basque'
    },
    {
        username: 'Beijing cuisine'
    },
    {
        username: 'Belgian'
    },
    {
        username: 'Brazilian'
    },
    {
        username: 'British'
    },
    {
        username: 'Bulgarian'
    },
    {
        username: 'Burmese'
    },
    {
        username: 'Cajun & Creole'
    },
    {
        username: 'Cambodian'
    },
    {
        username: 'Campania'
    },
    {
        username: 'Canadian'
    },
    {
        username: 'Cantonese'
    },
    {
        username: 'Caribbean'
    },
    {
        username: 'Catalan'
    },
    {
        username: 'Central American'
    },
    {
        username: 'Central Asian'
    },
    {
        username: 'Central European'
    },
    {
        username: 'Central-Italian'
    },
    {
        username: 'Chilean'
    },
    {
        username: 'Chinese'
    },
    {
        username: 'Colombian'
    },
    {
        username: 'Contemporary'
    },
    {
        username: 'Croatian'
    },
    {
        username: 'Cuban'
    },
    {
        username: 'Czech'
    },
    {
        username: 'Danish'
    },
    {
        username: 'Deli'
    },
    {
        username: 'Eastern European'
    },
    {
        username: 'Ecuadorean'
    },
    {
        username: 'Egyptian'
    },

    {
        username: 'Emilian'
    },
    {
        username: 'Ethiopian'
    },
    {
        username: 'European'
    },
    {
        username: 'Filipino'
    },
    {
        username: 'French'
    },
    {
        username: 'Fusion'
    },
    {
        username: 'Georgian'
    },
    {
        username: 'German'
    },
    {
        username: 'Greek'
    },
    {
        username: 'Hawaiian'
    },
    {
        username: 'Healthy'
    },
    {
        username: 'Hong Kong'
    },
    {
        username: 'Hungarian'
    },
    {
        username: 'Indian'
    },
    {
        username: 'Indonesian'
    },
    {
        username: 'International'
    },
    {
        username: 'Irish'
    },
    {
        username: 'Israeli'
    },
    {
        username: 'Italian'
    },
    {
        username: 'Jamaican'
    },
    {
        username: 'Japanese'
    },
    {
        username: 'Japanese Fusion'
    },
    {
        username: 'Kaiseki'
    },
    {
        username: 'Korean'
    },
    {
        username: 'Latin'
    },
    {
        username: 'Lazio'
    },
    {
        username: 'Lebanese'
    },
    {
        username: 'Malaysian'
    },
    {
        username: 'Mediterranean'
    },
    {
        username: 'Mexican'
    },
    {
        username: 'Middle Eastern'
    },
    {
        username: 'Moroccan'
    },
    {
        username: 'Native American'
    },
    {
        username: 'Neapolitan'
    },
    {
        username: 'Nepali'
    },
    {
        username: 'New Zealand'
    },
    {
        username: 'Nigerian'
    },
    {
        username: 'Nonya'
    },
    {
        username: 'Northern-Italian'
    },
    {
        username: 'NorthWestern Chinese'
    },
    {
        username: 'Norwegian'
    },
    {
        username: 'Pakistani'
    },
    {
        username: 'Persian'
    },
    {
        username: 'Peruvian'
    },
    {
        username: 'Pizza'
    },
    {
        username: 'Polish'
    },
    {
        username: 'Polynesian'
    },
    {
        username: 'Portuguese'
    },
    {
        username: 'Puerto Rican'
    },
    {
        username: 'Romagna'
    },
    {
        username: 'Romana'
    },
    {
        username: 'Romanian'
    },
    {
        username: 'Russian'
    },
    {
        username: 'Salvadoran'
    },
    {
        username: 'Sardinian'
    },
    {
        username: 'Scandinavian'
    },
    {
        username: 'Scottish'
    },
    {
        username: 'Shanghai'
    },
    {
        username: 'Sicilian'
    },
    {
        username: 'Singaporean'
    },
    {
        username: 'South American'
    },
    {
        username: 'Southern-Italian'
    },
    {
        username: 'Southwestern'
    },
    {
        username: 'Spanish'
    },
    {
        username: 'Sri Lankan'
    },
    {
        username: 'Sushi'
    },
    {
        username: 'Swedish'
    },
    {
        username: 'Swiss'
    },
    {
        username: 'Szechuan'
    },
    {
        username: 'Taiwanese'
    },
    {
        username: 'Thai'
    },
    {
        username: 'Tibetan'
    },
    {
        username: 'Tunisian'
    },
    {
        username: 'Turkish'
    },
    {
        username: 'Turkmen'
    },
    {
        username: 'Tuscan'
    },
    {
        username: 'Ukrainian'
    },
    {
        username: 'Uzbek'
    },
    {
        username: 'Venezuelan'
    },
    {
        username: 'Vietusernamese'
    },
    {
        username: 'Xinjiang'
    },
    {
        username: 'Yunnan'
    },

]


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
        this.get_time = this.get_time.bind(this);
        this.save_profile = this.save_profile.bind(this);
        this.add_cusine = this.add_cusine.bind(this);
        this.add_new_cusine = this.add_new_cusine.bind(this);
        this.set_location = this.set_location.bind(this);
        this.show_words_count = this.show_words_count.bind(this);
        // this.createNotification = this.createNotification.bind(this);
        this.state = {
            contr: '',
            dob: null,
            current_location: null,
            selected_country: {},
            address: null,
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
            monday_count: [{
                start_time: "10:10",
                end_time: "22:10",
                symbol: "+"
            }],
            tuesday_count: [{
                start_time: "10:10",
                end_time: "22:10",
                symbol: "+"
            }],
            wednesday_count: [{
                start_time: "10:10",
                end_time: "22:10",
                symbol: "+"
            }],
            thursday_count: [{
                start_time: "10:10",
                end_time: "22:10",
                symbol: "+"
            }],
            friday_count: [{
                start_time: "10:10",
                end_time: "22:10",
                symbol: "+"
            }],
            saturday_count: [{
                start_time: "10:10",
                end_time: "22:10",
                symbol: "+"
            }],
            sunday_count: [{
                start_time: "10:10",
                end_time: "22:10",
                symbol: "+"
            }],
            selected_cusine: [],
            options: cusines
        }

        // this.createNotification = (type) => {
        //     return () => {
        //         switch (type) {
        //             case 'info':
        //                 NotificationManager.info('Info message');
        //                 break;
        //             case 'success':
        //                 NotificationManager.success('Success message', 'Title here');
        //                 break;
        //             case 'warning':
        //                 NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
        //                 break;
        //             case 'error':
        //                 NotificationManager.error('Error message', 'Click me!', 5000, () => {
        //                     alert('callback');
        //                 });
        //                 break;
        //         };
        //     };
        // }
    }

    async save_profile() {
        var first_name = $("#first_name")[0].value;
        var position = $('#position')[0].value;
        var min_range = $(".price-range #min-price")[0].value;
        var max_range = $(".price-range #max-price")[0].value;
        var services = [];
        var payments = [];
        var sh = [];
        var selected_cusines = [];
        if ($('.image-upload img')[0].src == ProfileImage) {
            var image = null;
            NotificationManager.error('Desktop Icon is required.', 'ERROR', 4000);
        } else {
            var image = document.getElementsByClassName('upload')[0].files[0];
            let result = await CreateUserProfile(this.user_id, image, null, null, this.token);
            if (result.status == false) {
                NotificationManager.warning('Failed to set Desktop Icon for chef.', 'WARNING', 4000);
            }
            $(".flex-c #service").map((index, item) => {
                if (item.checked) {
                    services.push(item.value);
                }
            });
            $(".flex-c #payment").map((index, item) => {
                if (item.checked) {
                    payments.push(item.value);
                }
            });
            this.state.selected_cusine.map((index, item) => {
                selected_cusines.push(item.username);
            });
            $("input#service-hours").map((index, item) => {
                if (item.checked) {
                    if (item.value == "Selected Hours") {
                        if (!this.state.monday_disable) {
                            var temp = {
                                day: "monday",
                                time: this.state.monday_count
                            }
                            sh.push(temp);
                        }
                        if (!this.state.tuesday_disable) {
                            var temp = {
                                day: "tuesday",
                                time: this.state.tuesday_count
                            }
                            sh.push(temp);
                        }
                        if (!this.state.wednesday_disable) {
                            var temp = {
                                day: "wednesday",
                                time: this.state.wednesday_count
                            }
                            sh.push(temp);
                        }
                        if (!this.state.thursday_disable) {
                            var temp = {
                                day: "thursday",
                                time: this.state.thursday_count
                            }
                            sh.push(temp);
                        }
                        if (!this.state.friday_disable) {
                            var temp = {
                                day: "friday",
                                time: this.state.friday_count
                            }
                            sh.push(temp);
                        }
                        if (!this.state.saturday_disable) {
                            var temp = {
                                day: "saturday",
                                time: this.state.saturday_count
                            }
                            sh.push(temp);
                        }
                        if (!this.state.sunday_disable) {
                            var temp = {
                                day: "sunday",
                                time: this.state.sunday_count
                            }
                            sh.push(temp);
                        }
                    } else {
                        sh = [
                            {
                                day: "monday",
                                time: [
                                    {
                                        start_time: "00:00",
                                        end_time: "23:59"
                                    }
                                ]
                            },
                            {
                                day: "tuesday",
                                time: [
                                    {
                                        start_time: "00:00",
                                        end_time: "23:59"
                                    }
                                ]
                            },
                            {
                                day: "wednesday",
                                time: [
                                    {
                                        start_time: "00:00",
                                        end_time: "23:59"
                                    }
                                ]
                            },
                            {
                                day: "thursday",
                                time: [
                                    {
                                        start_time: "00:00",
                                        end_time: "23:59"
                                    }
                                ]
                            },
                            {
                                day: "friday",
                                time: [
                                    {
                                        start_time: "00:00",
                                        end_time: "23:59"
                                    }
                                ]
                            },
                            {
                                day: "saturday",
                                time: [
                                    {
                                        start_time: "00:00",
                                        end_time: "23:59"
                                    }
                                ]
                            },
                            {
                                day: "sunday",
                                time: [
                                    {
                                        start_time: "00:00",
                                        end_time: "23:59"
                                    }
                                ]
                            }
                        ]
                    }
                }
            });
            if (first_name.length > 0 && this.state.contr.length > 0 && position.length > 0 && min_range.length > 0 && max_range.length > 0 && sh.length > 0 && this.state.selected_cusine.length > 0) {
                var data = {
                    id: this.user_id,
                    user_name: $("#user_id")[0].value,
                    name: first_name,
                    mobile: this.state.contr,
                    dob: this.state.dob,
                    gender: $('#gender')[0].value,
                    position: position,
                    languages: $("#languages")[0].value.split(","),
                    specialty: selected_cusines,
                    sort_intro: $("#short_intro")[0].value,
                    background_info: $("#full_info")[0].value,
                    service_hour: sh,
                    service: services,
                    min_purchase_amt: $('#min-price')[0].value,
                    minAmount: min_range,
                    maxAmount: max_range,
                    service_location: this.state.current_location,
                    address: this.state.address,
                    payment_type: payments,
                    hourly_rate: $("#hourly-rate")[0].value,
                    currency: this.state.selected_country.iso
                }
                let result = await UpdateChefProfile(data, this.token)
                if (result.status == false) {
                    return NotificationManager.error(result.message, 'ERROR', 4000);
                } else {
                    this.redirect_homepage()
                }
            } else {
                NotificationManager.error('Fill up all required fields.', 'ERROR', 3000);
            }
        }
    }

    delete_profile_img(e) {
        $('.image-upload img')[0].src = ProfileImage;
        e.target.src = '';
        $('.image-upload img').css("border-radius", "0%");
    }
    get_profile_img(e) {
        var selectedFile = document.getElementsByClassName('upload')[0].files[0];
        var reader = new FileReader();
        reader.onload = (event) => {
            $('.image-upload img')[0].src = event.target.result;
        };
        $('.image-upload').css("border-radius", "50%");
        $('.image-upload img').css("width", "100%");
        $('.image-upload img').css("height", "100%");
        $('.image-upload img').css("border-radius", "50%");
        $('.delete_photo img')[0].src = DeletePhoto;
        $('.delete_photo').css("position", "relative");
        $('.delete_photo').css("top", "40px");
        $('.delete_photo').css("right", "34px");
        reader.readAsDataURL(selectedFile);
    }

    set_location(location){
        this.setState({ address: location.label });
        this.setState({ current_location: location.value.terms[0].value });
        var country = location.value.terms[location.value.terms.length - 1].value;
        try{
            var country_details = getAllInfoByISO(getISOByParam('countryName', country));
            this.setState({ selected_country: country_details });
        } catch (error){
            NotificationManager.error(error.message, 'ERROR', 5000);
        }

    }

    mondayHandleChange(checked) {
        this.setState({ monday_checked: checked });
        this.setState({ monday_disable: !checked });
        if (checked) {
            $("#monday .disable_span").css("right", "0px");
        } else {
            $("#monday .disable_span").css("right", "20px")
        }
    }
    tuesdayHandleChange(checked) {
        this.setState({ tuesday_checked: checked });
        this.setState({ tuesday_disable: !checked });
        if (checked) {
            $("#tuesday .disable_span").css("right", "0px");
        } else {
            $("#tuesday .disable_span").css("right", "20px")
        }
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

    back_to_login() {
        this.props.history.goBack();
    }

    redirect_homepage() {
        this.props.history.push(
            {
                pathname: '/Chef/Home'
            }
        );
    }

    add_cusine(cusines) {
        // console.log(cusines);
        // this.setState({ selected_cusine: cusines })
        // let existing_cusines = [...this.state.selected_cusine];
        // existing_cusines.push(cusines[0]);
        this.setState({selected_cusine: cusines});
    }

    show_words_count(e){
        if(e.target.value != ''){
            if(e.target.value.trim().length > 0){
                $(".word_count")[0].innerHTML = e.target.value.length;
            }
        } else{
            $(".word_count")[0].innerHTML = '0';
        }
    }

    add_new_cusine() {
        if ($("#new_cusine")[0].value.length > 0) {
            let options = [...this.state.options];
            let existing_cusine = options.filter(cusine => cusine.username.toLowerCase() == $("#new_cusine")[0].value.toLowerCase());
            if(existing_cusine.length > 0){
                NotificationManager.warning('Cusine is already in the list.', 'WARNING', 3000);
            } else{
                options.push({
                    username: $("#new_cusine")[0].value
                })
                this.setState({ options });
                let cusines = [...this.state.selected_cusine];
                cusines.push({
                    username: $("#new_cusine")[0].value
                });
                this.setState({selected_cusine: cusines});
            }
        } else {
            NotificationManager.error('Cusine Name is required.', 'ERROR', 3000);
        }
    }

    add_range(e, day) {
        var count_id = e.target.id;
        let temp = {
            start_time: "10:10",
            end_time: "22:10",
            symbol: "X"
        }
        if (e.target.innerHTML == "+") {
            if (day == "monday") {
                let monday_count = [...this.state.monday_count];
                monday_count.push(temp);
                this.setState({ monday_count });
            } else if (day == "tuesday") {
                let tuesday_count = [...this.state.tuesday_count];
                tuesday_count.push(temp);
                this.setState({ tuesday_count });
            } else if (day == "wednesday") {
                let wednesday_count = [...this.state.wednesday_count];
                wednesday_count.push(temp);
                this.setState({ wednesday_count });
            } else if (day == "thursday") {
                let thursday_count = [...this.state.thursday_count];
                thursday_count.push(temp);
                this.setState({ thursday_count });
            } else if (day == "friday") {
                let friday_count = [...this.state.friday_count];
                friday_count.push(temp);
                this.setState({ friday_count });
            } else if (day == "saturday") {
                let saturday_count = [...this.state.saturday_count];
                saturday_count.push(temp);
                this.setState({ saturday_count });
            } else if (day == "sunday") {
                let sunday_count = [...this.state.sunday_count];
                sunday_count.push(temp);
                this.setState({ sunday_count });
            }
        } else {
            if (day == "monday") {
                let monday_count = [...this.state.monday_count];
                monday_count.map((item, index) => {
                    if (index == count_id) {
                        monday_count.splice(index, 1);
                    }
                })
                this.setState({ monday_count });
            } else if (day == "tuesday") {
                let tuesday_count = [...this.state.tuesday_count];
                tuesday_count.map((item, index) => {
                    if (index == count_id) {
                        tuesday_count.splice(index, 1);
                    }
                })
                this.setState({ tuesday_count });
            } else if (day == "wednesday") {
                let wednesday_count = [...this.state.wednesday_count];
                wednesday_count.map((item, index) => {
                    if (index == count_id) {
                        wednesday_count.splice(index, 1);
                    }
                })
                this.setState({ wednesday_count });
            } else if (day == "thursday") {
                let thursday_count = [...this.state.thursday_count];
                thursday_count.map((item, index) => {
                    if (index == count_id) {
                        thursday_count.splice(index, 1);
                    }
                })
                this.setState({ thursday_count });
            } else if (day == "friday") {
                let friday_count = [...this.state.friday_count];
                friday_count.map((item, index) => {
                    if (index == count_id) {
                        friday_count.splice(index, 1);
                    }
                })
                this.setState({ friday_count });
            } else if (day == "saturday") {
                let saturday_count = [...this.state.saturday_count];
                saturday_count.map((item, index) => {
                    if (index == count_id) {
                        saturday_count.splice(index, 1);
                    }
                })
                this.setState({ saturday_count });
            } else if (day == "sunday") {
                let sunday_count = [...this.state.sunday_count];
                sunday_count.map((item, index) => {
                    if (index == count_id) {
                        sunday_count.splice(index, 1);
                    }
                })
                this.setState({ sunday_count });
            }
        }
    }

    open_custom_cusine(e) {
        if (e.target.innerHTML == "+") {
            $(".add-cusine").css("display", "flex");
            $("#addCusine")[0].innerHTML = "x";
            $("#addCusine").css("color", "#BF2604");
            $("#addCusine").css("font-size", "14pt");
            $("#new_cusine")[0].value = null;
        } else {
            $(".add-cusine").css("display", "none");
            $("#addCusine")[0].innerHTML = "+";
            $("#addCusine").css("color", "#469A09");
            $("#addCusine").css("font-size", "18pt");
        }
    }

    get_time(time, state_name, index, key_name) {
        if( state_name == "monday_count"){
            let monday_count = [...this.state.monday_count];
            monday_count[index][key_name] = time;
            this.setState({ monday_count });
        } else if( state_name == "tuesday_count" ){
            let tuesday_count = [...this.state.tuesday_count];
            tuesday_count[index][key_name] = time;
            this.setState({ tuesday_count });
        } else if( state_name == "wednesday_count" ){
            let wednesday_count = [...this.state.wednesday_count];
            wednesday_count[index][key_name] = time;
            this.setState({ wednesday_count });
        } else if( state_name == "thursday_count" ){
            let thursday_count = [...this.state.thursday_count];
            thursday_count[index][key_name] = time;
            this.setState({ thursday_count });
        } else if( state_name == "friday_count" ){
            let friday_count = [...this.state.friday_count];
            friday_count[index][key_name] = time;
            this.setState({ friday_count });
        } else if( state_name == "saturday_count" ){
            let saturday_count = [...this.state.saturday_count];
            saturday_count[index][key_name] = time;
            this.setState({ saturday_count });
        } else{
            let sunday_count = [...this.state.sunday_count];
            sunday_count[index][key_name] = time;
            this.setState({ sunday_count });
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
                                    <div class="image-upload">
                                        <label for="file-input">
                                            <img src={ProfileImage}></img>
                                        </label>
                                        <input id="file-input" type="file" accept=".jpg,.png,.PNG,.jpeg" onChange={this.get_profile_img} className="upload" />
                                    </div>
                                    <div className="delete_photo">
                                        <img src={null} onClick={this.delete_profile_img}></img>
                                    </div>
                                </div>
                                <div className="primary-details">
                                    <div className="individual-details">
                                        <div className="input-name">Name & Last Name &nbsp;<span>*</span></div>
                                        <input id="first_name" type="text" className="field" placeholder="Real name and last name" autoCapitalize="words"></input>
                                    </div>
                                    <div className="individual-details">
                                        <div className="input-name">User ID-Nickname</div>
                                        <input type="text" id="user_id" className="field" placeholder="ex: JohnDoe23"></input>
                                    </div>
                                </div>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Phone Number &nbsp;<span>*</span></div>
                                <PhoneInput
                                    country={'us'}
                                    placeholder="XXX XXX XXXX"
                                    // countryCodeEditable={false}
                                    // enableSearch={true}
                                    value={this.state.contr}
                                    onChange={phone => this.setState({ contr: phone })}
                                />
                            </div>
                            <div className="dob">
                                <div className="input-name">Date of Birth &nbsp;<span>*</span></div>
                                <DatePicker
                                    onChange={dob => this.setState({ dob })}
                                    value={new Date()}
                                    calendarIcon={null}
                                    clearIcon={null}
                                    disableCalendar={true}
                                    required={true}
                                    maxDate={new Date(new Date().getTime() - 60*60*24*365*13*1000)}
                                />
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Gender</div>
                                <input id="gender" type="text" className="field" placeholder="ex. Female, Male, etc."></input>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Position &nbsp;<span>*</span></div>
                                <input id="position" type="text" className="field" placeholder="ex: Head Chef, Pastry Chef, Home Chef, etc."></input>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Languages</div>
                                <input type="text" id="languages" className="field" placeholder="ex: English, Spanish, etc."></input>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Cuisine Specialties &nbsp;<span>*</span></div>
                                <SelectSearch values={this.state.selected_cusine} keepSelectedInList={true} options={this.state.options} multi={true} labelField="username" valueField="username" sortBy="username" color="green" searchable={true} searchBy="username" placeholder="Select" onChange={(values) => this.add_cusine(values)} />
                            </div>
                            Cuisine not in list? <u style={{ fontFamily: "custom-fonts-bold" }} >Add Cuisine</u> <span id="addCusine" style={{ color: "#469A09", fontSize: "18pt", fontFamily: "custom-fonts-bold", cursor: "pointer" }} onClick={this.open_custom_cusine}>+</span>
                            <div className="add-cusine">
                                <input id="new_cusine" type="text" placeholder="Write cuisine name"></input>
                                <img src={AddCusine} onClick={this.add_new_cusine}></img>
                            </div>
                            <div className="individual-details long-input" style={{marginTop: "5px"}}>
                                <div className="input-name">Short Ad Intro</div>
                                <textarea id="short_intro" maxlength="300" placeholder="ex: English, Spanish, etc." onKeyUp={this.show_words_count}></textarea>
                                <p>Word Count: <span class="word_count">0</span>/300</p>
                            </div>
                            <div className="individual-details long-input">
                                <div className="input-name">Full Background Info</div>
                                {/* <input id="full_info" type="text" className="field" placeholder="ex: English, Spanish, etc."></input> */}
                                <textarea id="full_info" placeholder="ex: English, Spanish, etc."></textarea>
                            </div>
                            <div className="individual-details location">
                                <div className="input-name">Address/Location &nbsp;<span>*</span></div>
                                <GooglePlacesAutocomplete
                                    placeholder="Country, city, state or zip code"
                                    apiKey="abc"
                                    selectProps={{
                                        onChange: this.set_location,
                                    }}
                                />
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Service hours &nbsp;<span>*</span></div>
                                <div className="f-sb">
                                    <div>
                                        <Popup
                                            trigger={<input id="service-hours" type="radio" name="service_hours" className="" value="Selected Hours"></input>}
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
                                                                                onChange={value => this.get_time(value, "monday_count", index, "start_time")}
                                                                                value={item.start_time}
                                                                                isOpen={false}
                                                                                className="custom-time-picker"
                                                                                disableClock={true}
                                                                                disabled={this.state.monday_disable}
                                                                                // minuteAriaLabel="Minute"
                                                                                clearIcon={null}
                                                                            />
                                                                            &nbsp;-&nbsp;
                                                                            <TimePicker
                                                                                onChange={value => this.get_time(value, "monday_count", index, "end_time")}
                                                                                value={item.end_time}
                                                                                isOpen={false}
                                                                                className="custom-time-picker"
                                                                                disableClock={true}
                                                                                disabled={this.state.monday_disable}
                                                                                // minuteAriaLabel="Minute"
                                                                                clearIcon={null}
                                                                            />
                                                                            <span id={index} onClick={event => this.add_range(event, "monday")} className="symbol">{item.symbol}</span>
                                                                            <div className="disable_span" style={{ right: this.state.monday_checked ? "0px" : "20px" }}></div>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>
                                                        </div>
                                                        <div className="timerange">
                                                            <div className="day">Tuesday</div>
                                                            <Switch onChange={this.tuesdayHandleChange} checked={this.state.tuesday_checked} uncheckedIcon={false} checkedIcon={false} />
                                                            <div className="multiple-ranges">
                                                                {this.state.tuesday_count.map((item, index) => {
                                                                    return (
                                                                        <div className="each-range" style={{ marginBottom: "5px" }}>
                                                                            <TimePicker
                                                                                onChange={value => this.get_time(value, "tuesday_count", index, "start_time")}
                                                                                value={item.start_time}
                                                                                isOpen={false}
                                                                                className="custom-time-picker"
                                                                                disableClock={true}
                                                                                disabled={this.state.tuesday_disable}
                                                                                // minuteAriaLabel="Minute"
                                                                                clearIcon={null}
                                                                            />
                                                                            &nbsp;-&nbsp;
                                                                            <TimePicker
                                                                                onChange={value => this.get_time(value, "tuesday_count", index, "end_time")}
                                                                                value={item.end_time}
                                                                                isOpen={false}
                                                                                className="custom-time-picker"
                                                                                disableClock={true}
                                                                                disabled={this.state.tuesday_disable}
                                                                                // minuteAriaLabel="Minute"
                                                                                clearIcon={null}
                                                                            />
                                                                            <span id={index} onClick={event => this.add_range(event, "tuesday")} className="symbol">{item.symbol}</span>
                                                                            <div className="disable_span" style={{ right: this.state.tuesday_checked ? "0px" : "20px" }}></div>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>
                                                        </div>
                                                        <div className="timerange">
                                                            <div className="day">Wednesday</div>
                                                            <Switch onChange={this.wednesdayHandleChange} checked={this.state.wednesday_checked} uncheckedIcon={false} checkedIcon={false} />
                                                            <div className="multiple-ranges">
                                                                {this.state.wednesday_count.map((item, index) => {
                                                                    return (
                                                                        <div className="each-range" style={{ marginBottom: "5px" }}>
                                                                            <TimePicker
                                                                                onChange={value => this.get_time(value, "wednesday_count", index, "start_time")}
                                                                                value={item.start_time}
                                                                                isOpen={false}
                                                                                className="custom-time-picker"
                                                                                disableClock={true}
                                                                                disabled={this.state.wednesday_disable}
                                                                                // minuteAriaLabel="Minute"
                                                                                clearIcon={null}
                                                                            />
                                                                            &nbsp;-&nbsp;
                                                                            <TimePicker
                                                                                onChange={value => this.get_time(value, "wednesday_count", index, "end_time")}
                                                                                value={item.end_time}
                                                                                isOpen={false}
                                                                                className="custom-time-picker"
                                                                                disableClock={true}
                                                                                disabled={this.state.wednesday_disable}
                                                                                // minuteAriaLabel="Minute"
                                                                                clearIcon={null}
                                                                            />
                                                                            <span id={index} onClick={event => this.add_range(event, "wednesday")} className="symbol">{item.symbol}</span>
                                                                            <div className="disable_span" style={{ right: this.state.wednesday_checked ? "0px" : "20px" }}></div>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>
                                                        </div>
                                                        <div className="timerange">
                                                            <div className="day">Thursday</div>
                                                            <Switch onChange={this.thursdayHandleChange} checked={this.state.thursday_checked} uncheckedIcon={false} checkedIcon={false} />
                                                            <div className="multiple-ranges">
                                                                {this.state.thursday_count.map((item, index) => {
                                                                    return (
                                                                        <div className="each-range" style={{ marginBottom: "5px" }}>
                                                                            <TimePicker
                                                                                onChange={value => this.get_time(value, "thursday_count", index, "start_time")}
                                                                                value={item.start_time}
                                                                                isOpen={false}
                                                                                className="custom-time-picker"
                                                                                disableClock={true}
                                                                                disabled={this.state.thursday_disable}
                                                                                // minuteAriaLabel="Minute"
                                                                                clearIcon={null}
                                                                            />
                                                                            &nbsp;-&nbsp;
                                                                            <TimePicker
                                                                                onChange={value => this.get_time(value, "thursday_count", index, "end_time")}
                                                                                value={item.end_time}
                                                                                isOpen={false}
                                                                                className="custom-time-picker"
                                                                                disableClock={true}
                                                                                disabled={this.state.thursday_disable}
                                                                                // minuteAriaLabel="Minute"
                                                                                clearIcon={null}
                                                                            />
                                                                            <span id={index} onClick={event => this.add_range(event, "thursday")} className="symbol">{item.symbol}</span>
                                                                            <div className="disable_span" style={{ right: this.state.thursday_checked ? "0px" : "20px" }}></div>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>
                                                        </div>
                                                        <div className="timerange">
                                                            <div className="day">Friday</div>
                                                            <Switch onChange={this.fridayHandleChange} checked={this.state.friday_checked} uncheckedIcon={false} checkedIcon={false} />
                                                            <div className="multiple-ranges">
                                                                {this.state.friday_count.map((item, index) => {
                                                                    return (
                                                                        <div className="each-range" style={{ marginBottom: "5px" }}>
                                                                            <TimePicker
                                                                                onChange={value => this.get_time(value, "friday_count", index, "start_time")}
                                                                                value={item.start_time}
                                                                                isOpen={false}
                                                                                className="custom-time-picker"
                                                                                disableClock={true}
                                                                                disabled={this.state.friday_disable}
                                                                                // minuteAriaLabel="Minute"
                                                                                clearIcon={null}
                                                                            />
                                                                            &nbsp;-&nbsp;
                                                                            <TimePicker
                                                                                onChange={value => this.get_time(value, "friday_count", index, "end_time")}
                                                                                value={item.end_time}
                                                                                isOpen={false}
                                                                                className="custom-time-picker"
                                                                                disableClock={true}
                                                                                disabled={this.state.friday_disable}
                                                                                // minuteAriaLabel="Minute"
                                                                                clearIcon={null}
                                                                            />
                                                                            <span id={index} onClick={event => this.add_range(event, "friday")} className="symbol">{item.symbol}</span>
                                                                            <div className="disable_span" style={{ right: this.state.friday_checked ? "0px" : "20px" }}></div>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>
                                                        </div>
                                                        <div className="timerange">
                                                            <div className="day">Saturday</div>
                                                            <Switch onChange={this.saturdayHandleChange} checked={this.state.saturday_checked} uncheckedIcon={false} checkedIcon={false} />
                                                            <div className="multiple-ranges">
                                                                {this.state.saturday_count.map((item, index) => {
                                                                    return (
                                                                        <div className="each-range" style={{ marginBottom: "5px" }}>
                                                                            <TimePicker
                                                                                onChange={value => this.get_time(value, "saturday_count", index, "start_time")}
                                                                                value={item.start_time}
                                                                                isOpen={false}
                                                                                className="custom-time-picker"
                                                                                disableClock={true}
                                                                                disabled={this.state.saturday_disable}
                                                                                // minuteAriaLabel="Minute"
                                                                                clearIcon={null}
                                                                            />
                                                                            &nbsp;-&nbsp;
                                                                            <TimePicker
                                                                                onChange={value => this.get_time(value, "saturday_count", index, "end_time")}
                                                                                value={item.end_time}
                                                                                isOpen={false}
                                                                                className="custom-time-picker"
                                                                                disableClock={true}
                                                                                disabled={this.state.saturday_disable}
                                                                                // minuteAriaLabel="Minute"
                                                                                clearIcon={null}
                                                                            />
                                                                            <span id={index} onClick={event => this.add_range(event, "saturday")} className="symbol">{item.symbol}</span>
                                                                            <div className="disable_span" style={{ right: this.state.saturday_checked ? "0px" : "20px" }}></div>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>
                                                        </div>
                                                        <div className="timerange">
                                                            <div className="day">Sunday</div>
                                                            <Switch onChange={this.sundayHandleChange} checked={this.state.sunday_checked} uncheckedIcon={false} checkedIcon={false} />
                                                            <div className="multiple-ranges">
                                                                {this.state.sunday_count.map((item, index) => {
                                                                    return (
                                                                        <div className="each-range" style={{ marginBottom: "5px" }}>
                                                                            <TimePicker
                                                                                onChange={value => this.get_time(value, "sunday_count", index, "start_time")}
                                                                                value={item.start_time}
                                                                                isOpen={false}
                                                                                className="custom-time-picker"
                                                                                disableClock={true}
                                                                                disabled={this.state.sunday_disable}
                                                                                // minuteAriaLabel="Minute"
                                                                                clearIcon={null}
                                                                            />
                                                                            &nbsp;-&nbsp;
                                                                            <TimePicker
                                                                                onChange={value => this.get_time(value, "sunday_count", index, "end_time")}
                                                                                value={item.end_time}
                                                                                isOpen={false}
                                                                                className="custom-time-picker"
                                                                                disableClock={true}
                                                                                disabled={this.state.sunday_disable}
                                                                                // minuteAriaLabel="Minute"
                                                                                clearIcon={null}
                                                                            />
                                                                            <span id={index} onClick={event => this.add_range(event, "sunday")} className="symbol">{item.symbol}</span>
                                                                            <div className="disable_span" style={{ right: this.state.sunday_checked ? "0px" : "20px" }}></div>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </Popup>
                                        Selected Hours
                                    </div>
                                    <div>
                                        <input id="service-hours" type="radio" name="service_hours" className="" value="24/7"></input>24/7 with booking
                                    </div>
                                </div>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Services <span style={{ color: "#656565" }}>(Select all options that apply)</span></div>
                                <div className="flex-c">
                                    <div>
                                        <input id="service" type="checkbox" className="" value="Cook and Deliver"></input>
                                        <span>Cook and Deliver</span>
                                    </div>
                                    <div>
                                        <input id="service" type="checkbox" className="" value="Cook and Ship"></input>
                                        <span>Cook and Ship</span>
                                    </div>
                                    <div>
                                        <input id="service" type="checkbox" className="" value="Cook for Pick up/Takeaway"></input>
                                        <span>Cook for Pick up/Takeaway</span>
                                    </div>
                                    <div>
                                        <input id="service" type="checkbox" className="" value="Go to Guests address to cook"></input>
                                        <span>Go to Guests address to cook</span>
                                    </div>
                                    <div>
                                        <input id="service" type="checkbox" className="" value="Host Guests and cook"></input>
                                        <span>Host Guests and cook</span>
                                    </div>
                                    <div>
                                        <input id="service" type="checkbox" className="" value="Cook Live with Chef"></input>
                                        <span>Cook Live with Chef</span>
                                    </div>
                                </div>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Minimum purchase Service total amount</div>
                                <div className="price-details">
                                    <div>{Object.keys(this.state.selected_country).length > 0 ? this.state.selected_country.symbol : ''}</div>
                                    <input type="number" id="min-price" className="field" placeholder="Enter min. price"></input>
                                </div>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Service Price Range &nbsp;<span>*</span></div>
                                <div className="price-range">
                                    <div>{Object.keys(this.state.selected_country).length > 0 ? this.state.selected_country.symbol : ''}</div>
                                    <input id="min-price" style={{ borderRadius: "0px" }} className="field" type="number" placeholder="Enter min. price"></input>
                                    <input id="max-price" type="number" className="field" placeholder="Enter max. price"></input>
                                </div>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Hourly rate</div>
                                <div className="price-details">
                                    <div>{Object.keys(this.state.selected_country).length > 0 ? this.state.selected_country.symbol : ''}</div>
                                    <input id="hourly-rate" type="number" className="field" placeholder="Enter price"></input>
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
                                        <input id="payment" type="checkbox" name="Payments" className="" value="Stripe"></input>
                                        <span>Stripe</span>
                                    </div>
                                    <div>
                                        <input id="payment" type="checkbox" name="Payments" className="" value="Paypal"></input>
                                        <span>Paypal</span>
                                    </div>
                                    <div>
                                        <input id="payment" type="checkbox" name="Payments" className="" value="Cash on Delivery"></input>
                                        <span>Cash on Delivery</span>
                                    </div>
                                    <div>
                                        <input id="payment" type="checkbox" name="Payments" className="" value="Credit Card on Delivery"></input>
                                        <span>Credit Card on Delivery</span>
                                    </div>
                                </div>
                            </div>
                            <div className="individual-details">
                                <div className="input-name">Locations you give service to &nbsp;<span>*</span></div>
                                <div className="price-details">
                                    <textarea id="full_info" placeholder="If you have delivery, which areas you deliver to, if you offer services to a specific area or other locations."></textarea>
                                </div>
                            </div>
                            <div className="save_profile">
                                <button type="button" onClick={this.save_profile}>SAVE</button>
                            </div>
                        </div>
                        <NotificationContainer />
                    </div>
                </SlidingPane>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChefProfile)