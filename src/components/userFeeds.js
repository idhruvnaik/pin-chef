import React from 'react';
import ReactDOM, { render } from 'react-dom';
import $ from 'jquery';
import { Provider } from "react-redux";
import configureStore from "../store";
import { addTokenToState, getAllChef } from '../services/apiOperations';
import { connect } from "react-redux";
import {reactLocalStorage} from 'reactjs-localstorage';

import Ads from './advertises';
import FeedFilter from './feedFilters';
import AllChefFilter from './allChefFilters';
import FoodFilter from './foodFilters';
import HomeSection from './home';
import ChefSection from './chef';
import ShopSection from './shop';
import StarSection from './star';
import SettingsSection from './settings';

import './commonComponents.css'
import './userFeeds.css'
import './user-feeds.scss'
import './common.scss'
import './media.scss'

import User from '../assets/svg/User';
import FinalLogo from '../assets/images/Logo-small.png'
import LocationIcon from '../assets/png_icons/Login_Sign up, Splash/Location icon black.png'
import SearchIcon from '../assets/png_icons/Login_Sign up, Splash/search icon.png'
import Home from '../assets/png_icons/Home.png'
import Home_selected from '../assets/png_icons/Home_selected.png'
import Chef from '../assets/png_icons/Chef.png'
import Chef_selected from '../assets/png_icons/Chef_selected.png'
import Shop from '../assets/png_icons/Shop.png'
import Shop_selected from '../assets/png_icons/Shop_selected.png'
import Star from '../assets/png_icons/Star.png'
import Star_selected from '../assets/png_icons/Star_selected.png'
import Settings from '../assets/png_icons/Settings.png'
import Settings_selected from '../assets/png_icons/Settings_selected.png'

const bar_icons = {
    "home": Home,
    "home_selected": Home_selected,
    "chef": Chef,
    "chef_selected": Chef_selected,
    "shop": Shop,
    "shop_selected": Shop_selected,
    "star": Star,
    "star_selected": Star_selected,
    "settings": Settings,
    "settings_selected": Settings_selected
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    addTokenToState:(token_details) => dispatch(addTokenToState(token_details))
})

class UserFeeds extends React.Component {
    constructor(props){
        super(props);
        this.showSection = this.showSection.bind(this);
        this.like_post = this.like_post.bind(this);
        // this.initialize_chefs = this.initialize_chefs.bind(this);
        this.state = {
            token: '',
            user_id: ''
        }
        this.state.like_post = this.like_post;
    
        if (this.props.token_details.token){
            console.log("jo token male to");
            this.state.token = this.props.token_details.token.auth_token;
            this.state.user_id = this.props.token_details.token.id;
            console.log(this, "from user feeds");
        } else{
            console.log("token na male to local storage ni value");
            var token_details = reactLocalStorage.getObject(
                'token_details'
            );
            console.log(token_details);
            if(window.sessionStorage.getItem("userFeeds")){
                console.log("jo reload thjayu hoy to");
                this.props.addTokenToState(token_details);
                this.state.token = token_details.auth_token;
                this.state.user_id = token_details.id;
                console.log(this, "token added to redux");
            } else{
                if (token_details.remember){
                    console.log("jo reload na thayu hoy peli j vaar homepage par aave to checking remember value")
                    console.log(token_details.remember);
                    this.props.addTokenToState(token_details);
                    this.state.token = token_details.auth_token;
                    this.state.user_id = token_details.id;
                    console.log("added token to redux");
                } else{
                    console.log("redirecting to login case in last scenario.");
                    this.props.history.push(
                        {            
                            pathname: '/User'
                        }
                    );
                }
            }
        }
    }

    showSection(element) {
        if ($('.current').length > 0){
            $(".current")[0].src = bar_icons[$('.current')[0].id];
            $(".current").removeClass('current');
        }
        $("#"+element).addClass('current');
        $("#"+element)[0].src = bar_icons[element + '_selected'];
        // $(".active").attr('src', bar_icons[$(".active")[0].id]);
        // $(".active").removeClass('active');
        // $(".active").attr('src', bar_icons[element + '_selected']);

        if (element == 'home') {
            ReactDOM.render(
                <Provider store={configureStore}>
                    <HomeSection {...this.state}/>
                </Provider>, document.getElementById('menu-bar'));
            ReactDOM.render(
                <Provider store={configureStore}>
                    <FeedFilter/>
                </Provider>, document.getElementById('filter-div'));
        }else if(element == 'chef'){
            ReactDOM.render(
                <Provider store={configureStore}>
                    <ChefSection {...this.state}/>
                </Provider>, document.getElementById('menu-bar'));
            ReactDOM.render(
                <Provider store={configureStore}>
                    <AllChefFilter/>
                </Provider>, document.getElementById('filter-div'));         
        }else if(element == 'shop'){
            ReactDOM.render(
                <Provider store={configureStore}>
                    <ShopSection {...this.state}/>
                </Provider>, document.getElementById('menu-bar'));
            ReactDOM.render(
                <Provider store={configureStore}>
                    <FoodFilter/>
                </Provider>, document.getElementById('filter-div'));
        }else if(element == 'star'){
            ReactDOM.render(
                <Provider store={configureStore}>
                    <StarSection {...this.state}/>
                </Provider>, document.getElementById('menu-bar'));
        } else{
            ReactDOM.render(
                <Provider store={configureStore}>
                    <SettingsSection {...this.state}/>
                </Provider>, document.getElementById('menu-bar'));
        }
    }

    like_post(e){
        console.log(e);
    }

    componentDidMount() {
        window.sessionStorage.setItem("userFeeds", true);
    }

    // async initialize_chefs(){
    //     let chef_result = await getAllChef(this.state.token);
    //     console.log(chef_result, "chef_result from userFeeds");
    //     if(chef_result.length > 0){
    //         if(chef_result.status == false){
    //             this.setState({
    //                 chefs: []});
    //         } else{
    //             this.setState({
    //                 chefs: chef_result});
    //         }
    //     }  else{
    //         this.setState({
    //             chefs: []});
    //     }
    // }

    // componentDidMount() {
    //     this.initialize_chefs();
    // }

    render(){
        console.log(window.sessionStorage.getItem("userFeeds"));
        return (
            <div className="outer-layout user-feed-page" style={{ background: "none" }}>
                <div className="header">
                    <div className="l-div">
                        <img src={FinalLogo} className="pin-chef-logo"></img>
                    </div>
                    <div className="m-div">
                        <div className="location-div">
                            <img src={LocationIcon}></img>
                            <span>All</span>
                        </div>
                        <div className="search-div">
                            <input placeholder="Search here.." type="text" className="search-box" />
                            <img src={SearchIcon}></img>
                        </div>
                    </div>
                    <div className="r-div">
                        <select className="form-control">
                            <option>EN</option>
                            <option>FR</option>
                            <option>EU</option>
                        </select>
                        <User />
                    </div>
                </div>
                
                <div className="user-pallet">
                    <div className="filter-div" id="filter-div">
                        <FeedFilter />
                    </div>
                    <div className="menu-bar" id="menu-bar">
                        <HomeSection {...this.state}/>
                    </div>
                    <Ads />
                </div>

                <div className="footer">
                    <div className="nav-item">
                        <img src={Home_selected} className="current" id="home" height="28" onClick={() => this.showSection('home')}></img>
                    </div>
                    <div className="nav-item">
                        <img src={Chef} id="chef" className="" height="28" onClick={() => this.showSection('chef')}></img>
                    </div>
                    <div className="nav-item">
                        <img src={Shop} id="shop" className="" height="28" onClick={() => this.showSection('shop')}></img>
                    </div>
                    <div className="nav-item">
                        <img src={Star} id="star" className="" height="28" onClick={() => this.showSection('star')}></img>
                    </div>
                    <div className="nav-item">
                        <img src={Settings} id="settings" className="" height="28" onClick={() => this.showSection('settings')}></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserFeeds)