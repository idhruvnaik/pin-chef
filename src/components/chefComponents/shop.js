import React, { Component } from 'react';
import ReactStars from "react-rating-stars-component";
import UserPhoto from '../../assets/images/photo2.png';
import UserPost from '../../assets/images/bannerFeed2.png';
import PostMenu from '../../assets/png_icons/Post menu icon@2x.png';
import CommentIcon from '../../assets/png_icons/Comment icon@2x.png';
import EmptyHeart from '../../assets/png_icons/Empty heart@2x.png';
import PostShare from '../../assets/png_icons/Post Share count@2x.png';
import RefreshIcon from "../../assets/png_icons/refresh-icon.png";
import RightArrowIcon from "../../assets/png_icons/right-arrow-icon.png";
import DownArrowIcon from "../../assets/png_icons/down-arrow-icon.png";
import CopyIcon from "../../assets/png_icons/copy-icon.png";
import ChefMasterClassFilter from './chefMasterClassFilters';
import ReactDOM, { render } from 'react-dom';
import { Provider } from "react-redux";
import configureStore from "../../store";

import $ from 'jquery';

export default class home extends Component {

    constructor(props) {
        super(props);

        this.foods = [
            {
                id: 1,
                desktop_icon: UserPhoto,
                user_name: "Jenah Stephonson",
                user_description: "Home chef",
                post: UserPost,
                likes: 0,
                comments: 0,
                share: 0,
                location: "Miami, FL",
                time: "45 min ago",
                rattings: "5.6",
                delivery_status: "Delivery + Pick up/Takeaway",
                post_content: "It was great night as we were at catering for a wedding. Thank you all of the staff that helped us to make event such a wonderful and delicious."
            },
            {
                id: 2,
                desktop_icon: UserPhoto,
                user_name: "Jenah Stephonson",
                user_description: "Home chef",
                post: UserPost,
                likes: 0,
                comments: 0,
                share: 0,
                location: "Miami, FL",
                time: "45 min ago",
                rattings: "5.6",
                delivery_status: "Delivery + Pick up/Takeaway",
                post_content: "It was great night as we were at catering for a wedding. Thank you all of the staff that helped us to make event such a wonderful and delicious."
            }
        ]

        this.services = [
            {
                id: 1,
                desktop_icon: UserPhoto,
                user_name: "Jenah Stephonson",
                user_description: "Home chef",
                post: UserPost,
                likes: 0,
                comments: 0,
                share: 0,
                location: "Miami, FL",
                time: "45 min ago",
                rattings: "5.6",
                delivery_status: "Delivery + Pick up/Takeaway",
                post_content: "It was great night as we were at catering for a wedding. Thank you all of the staff that helped us to make event such a wonderful and delicious."
            },
            {
                id: 2,
                desktop_icon: UserPhoto,
                user_name: "Jenah Stephonson",
                user_description: "Home chef",
                post: UserPost,
                likes: 0,
                comments: 0,
                share: 0,
                location: "Miami, FL",
                time: "45 min ago",
                rattings: "5.6",
                delivery_status: "Delivery + Pick up/Takeaway",
                post_content: "It was great night as we were at catering for a wedding. Thank you all of the staff that helped us to make event such a wonderful and delicious."
            }
        ]

        this.ratingChanged = (newRating) => {
            document.querySelector('.each_service .primary-details .rattings .given_rattings').innerHTML = newRating;
        };

        this.active = (e) => {
            var element = e.target.id;
            $(".sec").hide();
            $("#" + element + "-sec").show();
            $('.nav-active').removeClass('nav-active');
            e.target.classList.add('nav-active');
            if (element == "food"){
                ReactDOM.render(
                    <Provider store={configureStore}>
                        <ChefMasterClassFilter/>
                    </Provider>, document.getElementById('filter-div'));
            } else if (element == "service"){
                ReactDOM.render(
                    <Provider store={configureStore}>
                        <ChefMasterClassFilter/>
                    </Provider>, document.getElementById('filter-div'));
            } else if (element == "e-master-class"){
                ReactDOM.render(
                    <Provider store={configureStore}>
                        <ChefMasterClassFilter/>
                    </Provider>, document.getElementById('filter-div'));
            }
        }

    }

    render() {
        return (
            <div className="shop-content">
                <ul className="switch-content">
                    <li onClick={this.active} className="nav-active" id="food">Food</li>
                    <li onClick={this.active} className="" id="service">Services</li>
                    <li onClick={this.active} className="" id="e-master-class">e-Masterclass</li>
                </ul>
                <div className="food sec active" id="food-sec">
                    {this.foods.map(function (item) {
                        return (
                            <div className="each_food">
                                <div className="head-container">
                                    <table>
                                        <thead>
                                            <th>Item</th>
                                            <th>QTY</th>
                                            <th>Price</th>
                                            <th>Amount</th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>item display name</td>
                                                <td>1 <span class="plus-icon">+</span></td>
                                                <td>$100</td>
                                                <td>$400</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="food-content">
                                    <div className="price-block">
                                        <div className="total-price">
                                            <h3><span>Total </span>$ 39.84</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom-block">
                                    <h5>2 days ago</h5>
                                    <div className="details-block">
                                        <h5>Details</h5>
                                        <img src={DownArrowIcon}></img>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="services sec" id="service-sec">
                    {this.services.map(function (item) {
                        return (
                            <div className="each_service">
                                <div className="head-container">
                                    <table>
                                        <thead>
                                            <th>Item</th>
                                            <th>QTY</th>
                                            <th>Price</th>
                                            <th>Amount</th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>item display name</td>
                                                <td>1 <span class="plus-icon">+</span></td>
                                                <td>$100</td>
                                                <td>$400</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="food-content">
                                    <div className="price-block">
                                        <div className="total-price">
                                            <h3><span>Total </span>$ 39.84</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="bottom-block">
                                    <h5>2 days ago</h5>
                                    <div className="details-block">
                                        <h5>Details</h5>
                                        <img src={DownArrowIcon}></img>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="eclasses sec" id="e-master-class-sec">
                    {this.services.map(function (item) {
                        return (
                            <div className="each_class">
                                <div className="head-container">
                                    <table>
                                        <thead>
                                            <th>Item</th>
                                            <th>QTY</th>
                                            <th>Price</th>
                                            <th>Amount</th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>item display name</td>
                                                <td>1 <span class="plus-icon">+</span></td>
                                                <td>$100</td>
                                                <td>$400</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="food-content">
                                    <div className="price-block">
                                        <div className="total-price">
                                            <h3><span>Total </span>$ 39.84</h3>
                                        </div>
                                    </div>
                                    <div className="url-block">
                                        Live Stream Link: www.youtube.com/pinchef
                                    </div>
                                </div>
                                <div className="bottom-block">
                                    <h5>2 days ago</h5>
                                    <div className="details-block">
                                        <h5>Details</h5>
                                        <img src={DownArrowIcon}></img>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}