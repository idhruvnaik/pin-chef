import React, { Component } from 'react';
import ReactStars from "react-rating-stars-component";
import ReactDOM, { render } from 'react-dom';
import { Provider } from "react-redux";
import configureStore from "../store";
import { getAllChef, getAllFood, getAllServices, likeFood, unlikeFood, likeService, unlikeService } from '../services/apiOperations';

import UserPhoto from '../assets/images/photo2.png';
import UserPost from '../assets/images/bannerFeed2.png';
import PostMenu from '../assets/png_icons/Post menu icon@2x.png';
import CommentIcon from '../assets/png_icons/Comment icon@2x.png';
import EmptyHeart from '../assets/png_icons/Empty heart (2).png';
import FullHeart from '../assets/png_icons/Filled heart.png';
import PostShare from '../assets/png_icons/Post Share count@2x.png';
import LocationIcon from '../assets/png_icons/Location outlined@2x.png';

import NoServices from '../assets/svg/NoServicesPost';
import $ from 'jquery';

export default class home extends Component {

    constructor(props) {
        super(props);
        this.token = this.props.token;
        this.user_id = this.props.user_id;
        this.initialize_chefs = this.initialize_chefs.bind(this);
        this.initialize_food = this.initialize_food.bind(this);
        this.initialize_services = this.initialize_services.bind(this);
        this.like_unlike_food = this.like_unlike_food.bind(this);
        this.like_unlike_service = this.like_unlike_service.bind(this);
        this.state = {
            food: [],
            services: []
        }

        this.ratingChanged = (newRating) => {
            document.querySelector('.each_service .primary-details .rattings .given_rattings').innerHTML = newRating;
        };

        this.active = (e) => {
            var element = e.target.id;
            $(".sec").hide();
            $("#" + element + "-sec").show();
            $('.nav-active').removeClass('nav-active');
            e.target.classList.add('nav-active');
        }

    }

    async initialize_chefs(){
        let chef_result = await getAllChef(this.user_id, this.token);
        if(chef_result.length > 0){
            if(chef_result.status == false){
                return [];
            } else{
                return chef_result;
            }
        }  else{
            return [];
        }
    }

    async initialize_food(){
        let food_result = await getAllFood(this.user_id, this.token);
        let chef_result = await this.initialize_chefs();
        if(chef_result.length > 0){
            if(food_result.length > 0){
                if(food_result.status == false){
                    console.log(food_result.message);
                    ReactDOM.render(
                        <Provider store={configureStore}>
                            <h1>{food_result.message}</h1>
                        </Provider>, document.getElementById('food-sec'));
                    $("#food-sec").css("padding-top", "50px");
                }else{
                    food_result.map(function (item) {
                        let chef_details = chef_result.find(chef => chef._id == item.chef_id);
                        item.chef = chef_details;
                    })
                }
            }

            this.setState({
                food: food_result});
        }  else{
            ReactDOM.render(
                <Provider store={configureStore}>
                    <h1>There is no Food found.</h1>
                </Provider>, document.getElementById('food-sec'));
            $("#food-sec").css("padding-top", "50px");
        }
    }

    async initialize_services(){
        let service_result = await getAllServices(this.user_id, this.token);
        let chef_result = await this.initialize_chefs();
        if(chef_result.length > 0){
            if(service_result.length > 0){
                if(service_result.status == false){
                    console.log(service_result.message);
                    ReactDOM.render(
                        <Provider store={configureStore}>
                            <NoServices />
                        </Provider>, document.getElementById('service-sec'));
                }else{
                    service_result.map(function (item) {
                        let chef_details = chef_result.find(chef => chef._id == item.chef_id);
                        item.chef = chef_details;
                    })
                }
            }

            this.setState({
                services: service_result});
        }  else{
            ReactDOM.render(
                <Provider store={configureStore}>
                    <NoServices />
                </Provider>, document.getElementById('service-sec'));
        }
    }

    async like_unlike_food(e) {
        console.log(e, "from like unlike food");
        if (e.target && e.target.src == EmptyHeart ){
            let result = await likeFood(this.user_id, e.target.id, this.token);
            if (result.status && result.status == false){
                console.log(result.message);
            } else{
                this.initialize_food();
            }
        } else {
            let result = await unlikeFood(this.user_id, e.target.id, this.token);
            if (result.status && result.status == false){
                console.log(result.message);
            } else{
                this.initialize_food();
            }
        }
    }

    async like_unlike_service(e) {
        console.log(e, "from like unlike service");
        if (e.target && e.target.src == EmptyHeart ){
            let result = await likeService(this.user_id, e.target.id, this.token);
            if (result.status && result.status == false){
                console.log(result.message);
            } else{
                this.initialize_services();
            }
        } else {
            let result = await unlikeService(this.user_id, e.target.id, this.token);
            if (result.status && result.status == false){
                console.log(result.message);
            } else{
                this.initialize_services();
            }
        }
    }

    componentDidMount() {
        this.initialize_food();
        this.initialize_services();
    }

    render() {
        return (
            <div className="shop-content">
                <ul className="switch-content">
                    <li onClick={this.active} className="nav-active" id="food">Food</li>
                    <li onClick={this.active} className="" id="service">Services</li>
                </ul>
                <div className="food sec active" id="food-sec">
                    {this.state.food.length > 0 && this.state.food.map((item) => {
                        return (
                            <div className="each_food">
                                <div className="primary-details">
                                    <div className="l-div">
                                        <div className="profile-img-container">
                                            <img src={item.chef.profile_image}></img>
                                        </div>
                                        <div className="user-detail-container">
                                            <h3>{item.chef.user_name}</h3>
                                            <h5>{item.chef.chef_details.position}</h5>
                                        </div>
                                    </div>
                                    <div style={{ paddingRight: "4px" }}>
                                        <div style={{ textAlignLast: "right" }} className="post-option">
                                            <img src={PostMenu}></img>
                                        </div>
                                        <div style={{ display: "flex" }}>
                                            <div className="recipe_rattings">{item.rate}</div>
                                            <ReactStars
                                                count={5}
                                                value={item.rate}
                                                onChange={null}
                                                isHalf={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                        <div>
                                            <i>{item.available.delivery ? "Delivery": ''} {item.available.pickup ? "+ Pick up/Takeaway": ''}</i>
                                        </div>
                                    </div>
                                </div>
                                <img className="userpost" src={item.food_content}></img>
                                <div className="food-price">
                                    <b>{item.food_name} - ${item.price}</b>
                                </div>
                                <div className="post-activity">
                                    <div className="l-div">
                                        <div className="activity">
                                            <img style={{ marginRight: "5px" }} src={LocationIcon}></img>
                                            <p>{item.location}</p>
                                        </div>
                                        <div className="activity">
                                            <p>2 Miles Away</p>
                                        </div>
                                    </div>
                                    <div className="r-div">
                                        <div className="activity">
                                            <img src={item.is_like ? FullHeart : EmptyHeart} id={item._id} onClick={this.like_unlike_food} height="30"></img>
                                            <p>{item.likes}</p>
                                        </div>
                                        <div className="activity">
                                            <img src={CommentIcon}></img>
                                            <p>{item.comments}</p>
                                        </div>
                                        <div className="activity" style={{ marginRight: "0px" }}>
                                            <img src={PostShare}></img>
                                            <p>{item.share}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-content">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="services sec" id="service-sec">
                    {this.state.services.length > 0 && this.state.services.map((item) => {
                        return (
                            <div className="each_service">
                                <div className="primary-details">
                                    <div className="l-div">
                                        <div className="profile-img-container">
                                            <img src={item.chef.profile_image}></img>
                                        </div>
                                        <div className="user-detail-container">
                                            <h3>{item.chef.user_name}</h3>
                                            <h5>{item.chef.chef_details.position}</h5>
                                        </div>
                                    </div>
                                    <div style={{ paddingRight: "4px" }}>
                                        <div style={{ textAlignLast: "right" }} className="post-option">
                                            <img src={PostMenu}></img>
                                        </div>
                                        <div style={{ display: "flex" }}>
                                            <div className="recipe_rattings">{item.rate}</div>
                                            <ReactStars
                                                count={5}
                                                onChange={null}
                                                value={item.rate}
                                                isHalf={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <img className="userpost" src={item.service_content}></img>
                                <div className="food-price">
                                    <b>{item.service_type} - ${item.price}</b>
                                </div>
                                <div className="post-activity">
                                    <div className="l-div">
                                        <div className="activity">
                                            <img style={{ marginRight: "5px" }} src={LocationIcon}></img>
                                            <p>{item.location}</p>
                                        </div>
                                        <div className="activity">
                                            <p>2 Miles Away</p>
                                        </div>
                                    </div>
                                    <div className="r-div">
                                        <div className="activity">
                                            <img src={item.is_like ? FullHeart : EmptyHeart} id={item._id} onClick={this.like_unlike_service} height="30"></img>
                                            <p>{item.likes}</p>
                                        </div>
                                        <div className="activity">
                                            <img src={CommentIcon}></img>
                                            <p>{item.comments}</p>
                                        </div>
                                        <div className="activity" style={{ marginRight: "0px" }}>
                                            <img src={PostShare}></img>
                                            <p>{item.share}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-content">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}