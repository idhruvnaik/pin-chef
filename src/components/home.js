import React, { Component } from 'react';
import ReactStars from "react-rating-stars-component";
import ReactDOM, { render } from 'react-dom';
import { Provider } from "react-redux";
import configureStore from "../store";

import NoFeeds from '../assets/svg/NoFeedPost';
import NoRecipes from '../assets/svg/NoRecipesPosts';
import NoClasses from '../assets/svg/NoMasterClassPost';
import UserPhoto from '../assets/images/photo2.png';
import UserPost from '../assets/images/bannerFeed2.png';
import PostMenu from '../assets/png_icons/Post menu icon@2x.png';
import CommentIcon from '../assets/png_icons/Comment icon@2x.png';
import EmptyHeart from '../assets/png_icons/Empty heart (2).png';
import FullHeart from '../assets/png_icons/Filled heart.png';
import PostShare from '../assets/png_icons/Post Share count@2x.png';
import Time from '../assets/png_icons/time recipe@2x.png';
import Recipe_time from '../assets/png_icons/time recipe.png';
import Food from '../assets/png_icons/mexicanFood.png';
import LocationIcon from '../assets/png_icons/Location outlined@2x.png';

import MasterShare from '../assets/png_icons/Masterclass Share btn@2x.png'
import BookClass from '../assets/png_icons/Book Masterclass icon.png'
import MasterclassTime from '../assets/png_icons/Masterclass Time icon.png'
import MasterclassClockIcon from '../assets/png_icons/Masterclass clock icon.png'

import { getAllChef, getAllPosts, likePost, getAllRecipes, getAllMasterClasses } from '../services/apiOperations';

import $ from 'jquery';

export default class home extends Component {

    constructor(props) {
        super(props);
        this.token = this.props.token;
        this.initialize_chefs = this.initialize_chefs.bind(this);
        this.initialize_feeds = this.initialize_feeds.bind(this);
        this.initialize_recipes = this.initialize_recipes.bind(this);
        this.initialize_e_master_class = this.initialize_e_master_class.bind(this);
        this.like_post = this.like_post.bind(this);
        this.render = this.render.bind(this);
        this.feeds = [
            {
                _id: 1,
                chef: {
                    profile_image: UserPhoto,
                    name: "Jenah Stephonson",
                    chef_details: {
                        position: "Home chef"
                    }
                },
                post_content: UserPost,
                likes: 2,
                comments: 0,
                share: 0,
                location: "Miami, FL",
                createdAt: "45 min ago",
                description: "It was great night as we were at catering for a wedding. Thank you all of the staff that helped us to make event such a wonderful and delicious."
            },
            {
                _id: 2,
                chef: {
                    profile_image: UserPhoto,
                    name: "Jenah Stephonson",
                    chef_details: {
                        position: "Home chef"
                    }
                },
                post_content: UserPost,
                likes: 0,
                comments: 0,
                share: 0,
                location: "Miami, FL",
                createdAt: "45 min ago",
                description: "It was great night as we were at catering for a wedding. Thank you all of the staff that helped us to make event such a wonderful and delicious."
            }
        ]
        this.state = {
            chefs: [],
            feeds: [],
            recipes: [],
            master_classes: []
        }
        

        this.recipes = [
            {
                id: 1,
                chef: {
                    profile_image: UserPhoto,
                    name: "Jenah Stephonson",
                    chef_details: {
                        position: "Home chef"
                    }
                },
                post: UserPost,
                food_name: "Beef Taco",
                cuisine_type: ["Mexican"],
                likes: 0,
                comments: 0,
                share: 0,
                location: "Miami, FL",
                total_time: "45 min ago",
                ingredients: "It was great night as we were at catering for a wedding. Thank you all of the staff that helped us to make event such a wonderful and delicious."
            },
            {
                id: 1,
                chef: {
                    profile_image: UserPhoto,
                    name: "Jenah Stephonson",
                    chef_details: {
                        position: "Home chef"
                    }
                },
                post: UserPost,
                food_name: "Beef Taco",
                cuisine_type: ["Mexican"],
                likes: 0,
                comments: 0,
                share: 0,
                location: "Miami, FL",
                total_time: "45 min ago",
                ingredients: "It was great night as we were at catering for a wedding. Thank you all of the staff that helped us to make event such a wonderful and delicious."
            }
        ]

        this.emaster_classes = [
            {
                recipe_name: "PIZZA",
                recipe_image: Food,
                recipe_type: "Italian",
                recipe_diet: "Vegan",
                chef_name: "Jenah Stephanson",
                chef_desktop_icon: UserPhoto,
                ingredients: "pepper, flour, orange juice",
                recipe_description: "Come and enjoy cooking the yummiest Pizza you have ever seen.",
                price: "25",
                date: "Feb 20 - UTC",
                time: "12:30",
                remaining_time: "2:30",
                available_tickets: "34"
            },
            {
                recipe_name: "PIZZA",
                recipe_image: Food,
                recipe_type: "Italian",
                recipe_diet: "Vegan",
                chef_name: "Jenah Stephanson",
                chef_desktop_icon: UserPhoto,
                ingredients: "pepper, flour, orange juice",
                recipe_description: "Come and enjoy cooking the yummiest Pizza you have ever seen.",
                price: "25",
                date: "Feb 20 - UTC",
                time: "12:30",
                remaining_time: "2:30",
                available_tickets: "34"
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
        }
        
    }

    async initialize_chefs(){
        let chef_result = await getAllChef(this.token);
        if(chef_result.length > 0){
            if(chef_result.status == false){
                // this.setState({
                //     chefs: []});
                return [];
            } else{
                // this.setState({
                //     chefs: chef_result});
                return chef_result;
            }
        }  else{
            // this.setState({
            //     chefs: []});
            return [];
        }
    }

    async initialize_feeds(){
        let post_result = await getAllPosts(this.token);
        let chef_result = await this.initialize_chefs();
        if(chef_result.length > 0){
            if(post_result.length > 0){
                if(post_result.status == false){
                    console.log(post_result.message);
                    ReactDOM.render(
                        <Provider store={configureStore}>
                            <NoFeeds />
                        </Provider>, document.getElementById('feed-sec'));
                    $("#feed-sec").css("padding-top", "50px");
                }else{
                    post_result.map(function (item) {
                        let chef_details = chef_result.find(chef => chef._id == item.chef_id);
                        item.chef = chef_details;
                    })
                }
            }

            this.setState({
                feeds: post_result});
        }  else{
            ReactDOM.render(
                <Provider store={configureStore}>
                    <NoFeeds />
                </Provider>, document.getElementById('feed-sec'));
            $("#feed-sec").css("padding-top", "50px");
        }
    }

    async initialize_recipes(){
        let recipe_result = await getAllRecipes(this.token);
        let chef_result = await this.initialize_chefs();
        if(chef_result.length > 0){
            if(recipe_result.length > 0){
                if(recipe_result.status == false){
                    console.log(recipe_result.message);
                    ReactDOM.render(
                        <Provider store={configureStore}>
                            <NoRecipes />
                        </Provider>, document.getElementById('recipe-sec'));
                    $("#recipe-sec").css("padding-top", "50px");
                }else{
                    recipe_result.map(function (item) {
                        let chef_details = chef_result.find(chef => chef._id == item.chef_id);
                        item.chef = chef_details;
                    })
                }
            }

            this.setState({
                recipes: recipe_result});
        } else {
            ReactDOM.render(
                <Provider store={configureStore}>
                    <NoRecipes />
                </Provider>, document.getElementById('recipe-sec'));
            $("#recipe-sec").css("padding-top", "50px");
        } 
    }

    async initialize_e_master_class(){
        let master_class_result = await getAllMasterClasses(this.token);
        let chef_result = await this.initialize_chefs();
        if(chef_result.length > 0){
            if(master_class_result.length > 0){
                if(master_class_result.status == false){
                    console.log(master_class_result.message);
                    ReactDOM.render(
                        <Provider store={configureStore}>
                            <NoClasses />
                        </Provider>, document.getElementById('e-master-class-sec'));
                }else{
                    master_class_result.map(function (item) {
                        let chef_details = chef_result.find(chef => chef._id == item.chef_id);
                        item.chef = chef_details;
                    })
                }
            }
            this.setState({
                master_classes: master_class_result});
        } else {
            ReactDOM.render(
                <Provider store={configureStore}>
                    <NoClasses />
                </Provider>, document.getElementById('e-master-class-sec'));
        }
    }

    componentDidMount() {
        this.initialize_chefs();
        this.initialize_feeds();
        this.initialize_recipes();
        this.initialize_e_master_class();
    }
    like_post(e){
        console.log(e.target.id);
        likePost(e.target.id, this.token);
        this.initialize_feeds();
    }
    render() {
        return (
            <div className="home-content" >
                <ul className="switch-content">
                    <li onClick={this.active} className="nav-active" id="feed">Feeds</li>
                    <li onClick={this.active} className="" id="recipe">Recipes</li>
                    <li onClick={this.active} className="" id="e-master-class">e-Masterclass</li>
                </ul>
                <div className="feeds sec active" id="feed-sec">
                    {this.state.feeds.length > 0 && this.state.feeds.map((item) => {
                        return (
                            <div className="feed" id={item._id}>
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
                                    <div className="post-option"><img src={PostMenu}></img></div>
                                </div>
                                <div className="post-image">
                                    <img className="userpost" src={item.post_content && item.post_content}></img>
                                </div>
                                <div className="post-activity">
                                    <div className="l-div">
                                        <div className="activity">
                                            <img src={item.is_like ? FullHeart : EmptyHeart} id={item._id} onClick={this.like_post.bind(this)} height="30"></img>
                                            <span>{item.likes}</span>
                                        </div>
                                        <div className="activity">
                                            <img src={CommentIcon}></img>
                                            <span>{item.comments}</span>
                                        </div>
                                        <div className="activity">
                                            <img src={PostShare}></img>
                                            <span>{item.share}</span>
                                        </div>
                                    </div>
                                    <div className="r-div">
                                        <div className="activity">
                                            <img src={LocationIcon}></img>
                                            <span>{item.location}</span>
                                        </div>
                                        <div className="activity">
                                            <img src={Time}></img>
                                            <span>{item.createdAt}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-content">{item.description}</div>
                            </div>
                        )
                    })}
                </div>
                <div className="recipes sec" id="recipe-sec">
                    {this.state.recipes.length > 0 && this.state.recipes.map((item) => {
                        return (
                            <div className="recipe">
                                <div className="primary-details">
                                    <div className="l-div">
                                        <div className="profile-img-container">
                                            <img src={item.chef && item.chef.profile_image}></img>
                                        </div>
                                        <div className="user-detail-container">
                                            <h3>{item.chef && item.chef.name}</h3>
                                            <h5>{item.chef && item.chef.chef_details.position}</h5>
                                        </div>
                                    </div>
                                    <div style={{ paddingRight: "4px" }}>
                                        <div style={{ textAlignLast: "right" }} className="post-option">
                                            <img src={PostMenu}></img>
                                        </div>
                                        <div style={{ display: "flex" }}>
                                            <div className="recipe_rattings">{item.rating}</div>
                                            <ReactStars
                                                count={5}
                                                value={item.rating}
                                                onChange={null}
                                                isHalf={true}
                                                activeColor="#ffd700"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <img className="userpost" src={item.recipe_content}></img>
                                <div className="post-activity">
                                    <div className="recipe_details">
                                        <div>
                                            <h4>{item.food_name}</h4>
                                            <h5>({item.cuisine_type.join(", ")})</h5>
                                        </div>
                                        <div className="time">
                                            <img src={Recipe_time}></img>
                                            <span>Total: {item.total_time}</span>
                                        </div>
                                    </div>
                                    <div className="activities">
                                        <div className="activity">
                                            <img src={PostShare}></img>
                                            <p>{item.share}</p>
                                        </div>
                                        <div className="activity">
                                            <img src={CommentIcon}></img>
                                            <p>{item.comments}</p>
                                        </div>
                                        <div className="activity">
                                            <img src={item.is_like ? FullHeart : EmptyHeart} height="30"></img>
                                            <p>{item.likes}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="post-content">
                                    <h4 style={{ color: "green" }}>Ingredients</h4>
                                    <p>{item.ingredients}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="e-masterclass sec" id="e-master-class-sec">
                    {this.state.master_classes.map((item) => {
                        return (
                            <div className="order">
                                <div className="order-details">
                                    <h3>{item.title}</h3>
                                    <div className="img-container">
                                        <img className="recipe-image" src={item.mclass_content}></img>
                                        <img className="share-btn" src={MasterShare}></img>
                                    </div>
                                    <div className="recipe-type">
                                        <span className="cuisine-name">{item.cuisine}</span>
                                        <span>{item.dietary}</span>
                                    </div>
                                </div>
                                <div className="order_content">
                                    <div className="user_details">
                                        <img src={BookClass}></img>
                                        <h4>{item.chef && item.chef.name}</h4>
                                        <img src={item.chef && item.chef.profile_image}></img>
                                    </div>
                                    <div className="order_description">
                                        <p>{item.description}</p>
                                        <p><b>Ingredients:</b> {item.ingredients}</p>
                                    </div>
                                    <div className="other_details">
                                        <div className="price-detail">
                                            <span>$ </span>
                                            <span className="price">{item.price}</span>
                                        </div>
                                        <div className="class_date_time">
                                            <img src={MasterclassTime}></img>
                                            <span>{item.start_date} -</span>
                                            <div className="time">{item.start_time}</div>
                                        </div>
                                        <div className="remaining_time">
                                            <img src={MasterclassClockIcon}></img>
                                            <div>{item.remaining_time}</div>
                                        </div>
                                    </div>
                                    <div className="ticket_status">
                                        Available Tickets <b>{item.ticket_group_number}</b>
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