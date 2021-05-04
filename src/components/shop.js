import React, { Component } from 'react';
import ReactStars from "react-rating-stars-component";
import ReactDOM, { render } from 'react-dom';
import { Provider } from "react-redux";
import configureStore from "../store";
import FoodFilter from './foodFilters';
import ServiceFilter from './serviceFilters';
import { getAllChef, getAllFood, getAllServices, likeFood, unlikeFood, likeService, unlikeService, AddItemToCart, getItemFromCart } from '../services/apiOperations';

import PostMenu from '../assets/png_icons/Post menu icon@2x.png';
import CommentIcon from '../assets/svg/Comment icon.svg';
import EmptyHeart from '../assets/svg/Like button empty.svg';
import FullHeart from '../assets/svg/Like button full.svg';
import PostShare from '../assets/svg/Post Share count.svg';
import LocationIcon from '../assets/svg/Location.svg';
import AddToCart from '../assets/svg/add-to-cart on icon.svg'
import Cart from '../assets/svg/Cart.svg'
import LeftBack from '../assets/png_icons/Green back arrow.png'
import Popup from 'reactjs-popup';

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
        this.open_menu = this.open_menu.bind(this);
        this.add_food_to_cart = this.add_food_to_cart.bind(this);
        this.add_service_to_cart = this.add_service_to_cart.bind(this);
        this.initialize_food_from_cart = this.initialize_food_from_cart.bind(this);
        this.initialize_services_from_cart = this.initialize_services_from_cart.bind(this);
        this.setPopUp = this.setPopUp.bind(this);
        this.state = {
            food: [],
            services: [],
            food_from_cart: [],
            services_from_cart: []
        }

        this.ratingChanged = (newRating) => {
            document.querySelector('.each_service .primary-details .rattings .given_rattings').innerHTML = newRating;
        };

        this.active = (e) => {
            var element = e.target.id;
            if (element == "food"){
                $('.number_of_food_services')[0].innerHTML = this.state.food_from_cart.length;
            } else{
                $('.number_of_food_services')[0].innerHTML = this.state.services_from_cart.length;
            }
            $(".sec").hide();
            $("#" + element + "-sec").show();
            $('.nav-active').removeClass('nav-active');
            e.target.classList.add('nav-active');
            if (element == "food"){
                ReactDOM.render(
                    <Provider store={configureStore}>
                        <FoodFilter/>
                    </Provider>, document.getElementById('filter-div'));
            } else if (element == "service"){
                ReactDOM.render(
                    <Provider store={configureStore}>
                        <ServiceFilter/>
                    </Provider>, document.getElementById('filter-div'));
            }
        }

    }

    async initialize_chefs() {
        let chef_result = await getAllChef(this.user_id, this.token);
        if (chef_result.length > 0) {
            if (chef_result.status == false) {
                return [];
            } else {
                return chef_result;
            }
        } else {
            return [];
        }
    }

    async initialize_food() {
        let food_result = await getAllFood(this.user_id, this.token);
        let chef_result = await this.initialize_chefs();
        if (chef_result.length > 0) {
            if (food_result.length > 0) {
                if (food_result.status == false) {
                    console.log(food_result.message);
                    ReactDOM.render(
                        <Provider store={configureStore}>
                            <h1>{food_result.message}</h1>
                        </Provider>, document.getElementById('food-sec'));
                    $("#food-sec").css("padding-top", "50px");
                } else {
                    food_result.map(function (item) {
                        let chef_details = chef_result.find(chef => chef._id == item.chef_id);
                        item.chef = chef_details;
                    })
                }
            }

            this.setState({
                food: food_result
            });
        } else {
            ReactDOM.render(
                <Provider store={configureStore}>
                    <h1>There is no Food found.</h1>
                </Provider>, document.getElementById('food-sec'));
            $("#food-sec").css("padding-top", "50px");
        }
    }

    async initialize_food_from_cart() {
        let food_result = await getItemFromCart(this.user_id, "food", this.token);
        if (food_result.status && food_result.status == false) {
            console.log(food_result.message);
        } else {
            this.setState({
                food_from_cart: food_result
            })
        }
    }

    async initialize_services_from_cart() {
        let service_result = await getItemFromCart(this.user_id, "service", this.token);
        console.log(service_result, "init service form cart");
        if (service_result.status && service_result.status == false) {
            console.log(service_result.message);
        } else {
            this.setState({
                services_from_cart: service_result
            })
        }
    }

    async initialize_services() {
        let service_result = await getAllServices(this.user_id, this.token);
        let chef_result = await this.initialize_chefs();
        if (chef_result.length > 0) {
            if (service_result.length > 0) {
                if (service_result.status == false) {
                    console.log(service_result.message);
                    ReactDOM.render(
                        <Provider store={configureStore}>
                            <NoServices />
                        </Provider>, document.getElementById('service-sec'));
                } else {
                    service_result.map(function (item) {
                        let chef_details = chef_result.find(chef => chef._id == item.chef_id);
                        item.chef = chef_details;
                    })
                }
            }

            this.setState({
                services: service_result
            });
        } else {
            ReactDOM.render(
                <Provider store={configureStore}>
                    <NoServices />
                </Provider>, document.getElementById('service-sec'));
        }
    }

    async like_unlike_food(e) {
        if (e.target.className == "false") {
            let result = await likeFood(this.user_id, e.target.id, this.token);
            if (result.status && result.status == false) {
                console.log(result.message);
            } else {
                let food = [...this.state.food];
                food.map((each_food) => {
                    if (each_food._id == e.target.id) {
                        each_food.likes = each_food.likes + 1;
                        each_food.is_like = true;
                    }
                })
                this.setState({
                    food: food
                })
            }
        } else {
            let result = await unlikeFood(this.user_id, e.target.id, this.token);
            if (result.status && result.status == false) {
                console.log(result.message);
            } else {
                let food = [...this.state.food];
                food.map((each_food) => {
                    if (each_food._id == e.target.id) {
                        each_food.likes = each_food.likes - 1;
                        each_food.is_like = false;
                    }
                })
                this.setState({
                    food: food
                })
            }
        }
    }

    async like_unlike_service(e) {
        if (e.target.className == "false") {
            let result = await likeService(this.user_id, e.target.id, this.token);
            if (result.status && result.status == false) {
                console.log(result.message);
            } else {
                let services = [...this.state.services];
                services.map((service) => {
                    if (service._id == e.target.id) {
                        service.likes = service.likes + 1;
                        service.is_like = true;
                    }
                })
                this.setState({
                    services: services
                })
            }
        } else {
            let result = await unlikeService(this.user_id, e.target.id, this.token);
            if (result.status && result.status == false) {
                console.log(result.message);
            } else {
                let services = [...this.state.services];
                services.map((service) => {
                    if (service._id == e.target.id) {
                        service.likes = service.likes - 1;
                        service.is_like = false;
                    }
                })
                this.setState({
                    services: services
                })
            }
        }
    }

    componentDidMount() {
        this.initialize_food();
        this.initialize_services();
        this.initialize_food_from_cart();
        this.initialize_services_from_cart();
    }

    open_menu(menu_class, header_flag) {
        var menu_siblings = $('.' + menu_class).siblings();
        menu_siblings.each(function () {
            $(this).css('display', 'none');
        })
        $('.' + menu_class).css('display', 'block');
        if (header_flag) {
            $('.shop-content .switch-content').css("display", "flex");
        }
    }

    async add_food_to_cart(food_id) {
        let food_details = this.state.food.find(each_food => each_food._id == food_id);
        if(this.state.food_from_cart.length > 0){
            if(this.state.food_from_cart[0].chef_id == food_details.chef_id){
                var data = {
                    user_id: this.user_id,
                    chef_id: food_details.chef_id,
                    item_id: food_details._id,
                    order_type: "food",
                    title: food_details.food_name,
                    qty: 1,
                    price: food_details.price
                }
                let result = await AddItemToCart(data, this.token);
                if (result.status && result.status == false) {
                    console.log(result.message);
                } else {
                    this.initialize_food_from_cart();
                    console.log("in else");
                }
            } else{
                console.log("First remove food item of chef id: " + this.state.food_from_cart[0].chef_id + " from cart.");
            }
        }
    }

    async add_service_to_cart(service_id) {
        let service_details = this.state.services.find(service => service._id == service_id);
        if(this.state.services_from_cart.length > 0){
            if(this.state.services_from_cart[0].chef_id == service_details.chef_id){
                var data = {
                    user_id: this.user_id,
                    chef_id: service_details.chef_id,
                    item_id: service_details._id,
                    order_type: "service",
                    title: service_details.food_name,
                    qty: 1,
                    price: service_details.price
                }
                let result = await AddItemToCart(data, this.token);
                if (result.status && result.status == false) {
                    console.log(result.message);
                } else {
                    this.initialize_services_from_cart();
                    console.log("in else");
                }
            } else{
                console.log("First remove service item of chef id: " + this.state.food_from_cart[0].chef_id + " from cart.");
            }
        }
    }

    setPopUp(){
        if (window.screen.width < 281) {
            $('#popup-root .popup-content').css("top", "126.4px");
            $('#popup-root .popup-content').css("left", "150.713px");
        } else if(window.screen.width < 321){
            $('#popup-root .popup-content').css("left", "194.075px");
        } else if(window.screen.width < 361){
            $('#popup-root .popup-content').css("left", "209.075px");
        } else if(window.screen.width < 376){
            $('#popup-root .popup-content').css("left", "222.075px");
        } else if(window.screen.width < 415){
            $('#popup-root .popup-content').css("top", "130.6px");
            $('#popup-root .popup-content').css("left", "254.075px");
        }
    }

    render() {
        return (
            <div className="shop-content">
                <ul className="switch-content" style={{ justifyContent: "space-between", paddingRight: "30px", paddingLeft: "30px" }}>
                    <li onClick={this.active} className="nav-active" id="food">Food</li>
                    <li onClick={this.active} className="" id="service">Services</li>
                    <li>
                        <img src={AddToCart} onClick={() => this.open_menu('food_cart', false)}></img>
                        <div className="number_of_food_services">{this.state.food_from_cart.length}</div>
                    </li>
                </ul>
                <div className="food sec active" id="food-sec">
                    {this.state.food.length > 0 && this.state.food.map((item) => {
                        return (
                            <div className="each_food">
                                <div className="primary-details">
                                    <div className="l-div">
                                        <div className="profile-img-container">
                                            <img src={item.chef && item.chef.profile_image}></img>
                                        </div>
                                        <div className="user-detail-container">
                                            <h3>{item.chef && item.chef.user_name}</h3>
                                            <h5>{item.chef && item.chef.chef_details.position}</h5>
                                        </div>
                                    </div>
                                    <div style={{ paddingRight: "4px" }}>
                                        <div style={{ textAlignLast: "right" }} className="post-option">
                                            <img src={PostMenu}></img>
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "flex-end" }}>
                                            <div className="recipe_rattings">{item.rate}</div>
                                            <ReactStars
                                                count={5}
                                                value={item.rate}
                                                onChange={null}
                                                isHalf={true}
                                                activeColor="#ffd700"
                                                edit={false}
                                            />
                                        </div>
                                        <div>
                                            <i>{item.available.delivery ? "Delivery" : ''} {item.available.pickup ? "+ Pick up/Takeaway" : ''}</i>
                                        </div>
                                    </div>
                                </div>
                                <img className="userpost" src={item.food_content}></img>
                                <div className="food-price">
                                    <b>{item.food_name} - ${item.price}</b>
                                </div>
                                <div className="add-cart">
                                    <img src={AddToCart} onClick={() => this.add_food_to_cart(item._id)}></img>
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
                                            <img src={item.is_like ? FullHeart : EmptyHeart} id={item._id} onClick={this.like_unlike_food} className={item.is_like.toString()}></img>
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
                                            <img src={item.chef && item.chef.profile_image}></img>
                                        </div>
                                        <div className="user-detail-container">
                                            <h3>{item.chef && item.chef.user_name}</h3>
                                            <h5>{item.chef && item.chef.chef_details.position}</h5>
                                        </div>
                                    </div>
                                    <div style={{ paddingRight: "4px" }}>
                                        <div style={{ textAlignLast: "right" }} className="post-option">
                                            <Popup
                                                trigger={<img src={PostMenu} style={{cursor: "pointer"}}></img>}
                                                position="left top"
                                                closeOnDocumentClick
                                                offsetX={-50}
                                                offsetY={15}
                                                onOpen={this.setPopUp}
                                            >
                                                <div className="menu">
                                                    <div className="menu-item">Follow Chef</div>
                                                    <div className="menu-item">Add to favourites</div>
                                                    <div className="menu-item">Contact Chef</div>
                                                    <div className="menu-item">Report</div>
                                                </div>
                                            </Popup>
                                        </div>
                                        <div style={{ display: "flex" }}>
                                            <div className="recipe_rattings">{item.rate}</div>
                                            <ReactStars
                                                count={5}
                                                onChange={null}
                                                value={item.rate}
                                                isHalf={true}
                                                activeColor="#ffd700"
                                                edit={false}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <img className="userpost" src={item.service_content}></img>
                                <div className="food-price">
                                    <b>{item.service_type} - ${item.price}</b>
                                </div>
                                <div className="add-cart">
                                    <img src={AddToCart} onClick={() => this.add_service_to_cart(item._id)}></img>
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
                                            <img src={item.is_like ? FullHeart : EmptyHeart} id={item._id} onClick={this.like_unlike_service} className={item.is_like.toString()}></img>
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
                <div className="food_cart">
                    <div className="food_from_cart">
                        <div className="switch-content">
                            <div>
                                <img src={LeftBack} onClick={() => this.open_menu('food', true)}></img>
                            </div>
                            <div>
                                <h3>CHECKOUT</h3>
                            </div>
                        </div>
                        <div className="head-container">
                            <h5 className="date">13 October, 2020- 1:24 PM</h5>
                            <div className="l-div">
                            </div>
                            <div className="content">
                                <table>
                                    <thead>
                                        <th>Item</th>
                                        <th>QTY</th>
                                        <th>Price</th>
                                        <th>Amount</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Cook and Deliver</td>
                                            <td>1 <span className="plus-icon">+</span></td>
                                            <td>$23</td>
                                            <td>$23</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="total-detail">
                                    <h4>Sub total <span>$ 23.00</span></h4>
                                    <h4>Tax: <span>% 8</span></h4>
                                    <h3>Total: $ 39.84</h3>
                                </div>
                                <div className="details-section">
                                    <h3>Order Type &nbsp;<span className="mandate">*</span></h3>
                                    <div className="order-type">
                                        <div>
                                            <input type="radio" name="order_type"></input>Pick up/Takeaway
                                        </div>
                                        <div>
                                            <input type="radio" name="order_type"></input>Delivery
                                        </div>
                                    </div>
                                </div>
                                <div className="details-section">
                                    <h3>Delivery Day &nbsp;<span className="mandate">*</span></h3>
                                    <textarea placeholder="User address"></textarea>
                                </div>
                                <div className="details-section">
                                    <h3>Delivery Time &nbsp;<span className="mandate">*</span></h3>
                                    <textarea placeholder="Select a time"></textarea>
                                </div>
                                <div className="details-section">
                                    <h3>Chef Adress</h3>
                                    <textarea placeholder="Chef address"></textarea>
                                </div>
                                <div className="details-section">
                                    <h3>Extra notes</h3>
                                    <textarea placeholder="User address"></textarea>
                                </div>
                                <div className="details-section">
                                    <h3>Payment Method &nbsp;<span className="mandate">*</span></h3>
                                    <textarea placeholder="Select a payment method"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}