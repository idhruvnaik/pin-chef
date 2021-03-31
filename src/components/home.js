import React, { Component } from 'react';
import ReactStars from "react-rating-stars-component";
import ReactDOM, { render } from 'react-dom';
import { Provider } from "react-redux";
import CommentsBlock from 'simple-react-comments';
import CommentExampleComment from './comments'
import configureStore from "../store";

import NoFeeds from '../assets/svg/NoFeedPost';
import NoRecipes from '../assets/svg/NoRecipesPosts';
import NoClasses from '../assets/svg/NoMasterClassPost';
import PostMenu from '../assets/png_icons/Post menu icon@2x.png';
import CommentIcon from '../assets/svg/Comment icon.svg';
import EmptyHeart from '../assets/svg/Like button empty.svg';
import FullHeart from '../assets/svg/Like button full.svg';
import PostShare from '../assets/svg/Post Share count.svg';
import Time from '../assets/svg/time-2.svg';
import Recipe_time from '../assets/svg/recipe-time.svg';
import Food from '../assets/png_icons/mexicanFood.png';
import LocationIcon from '../assets/svg/Location.svg';
import LeftBack from '../assets/png_icons/Green back arrow.png';
import ReplyComment from '../assets/svg/reply_comment.svg';
import FullHeartComment from '../assets/svg/full-heart-comment.svg'
import AddComment from '../assets/svg/Send btn.svg'
import Sticker from '../assets/svg/Sticker btn.svg'

import MasterShare from '../assets/png_icons/Masterclass Share btn@2x.png'
import BookClass from '../assets/svg/Book masterclass.svg'
import MasterclassTime from '../assets/png_icons/Masterclass Time icon.png'
import MasterclassClockIcon from '../assets/png_icons/Masterclass clock icon.png'

import { getAllChef, getAllPosts, likePost, getAllRecipes, getAllMasterClasses, unlikePost, unlikeRecipe, likeRecipe, getCommentsByPostID } from '../services/apiOperations';

import $ from 'jquery';

export default class home extends Component {

    constructor(props) {
        super(props);
        this.token = this.props.token;
        this.user_id = this.props.user_id;
        this.initialize_chefs = this.initialize_chefs.bind(this);
        this.initialize_feeds = this.initialize_feeds.bind(this);
        this.initialize_recipes = this.initialize_recipes.bind(this);
        this.initialize_e_master_class = this.initialize_e_master_class.bind(this);
        this.like_unlike_post = this.like_unlike_post.bind(this);
        this.like_unlike_recipe = this.like_unlike_recipe.bind(this);
        this.showTime = this.showTime.bind(this);
        this.makeTimer = this.makeTimer.bind(this);
        this.open_comments = this.open_comments.bind(this);
        this.render = this.render.bind(this);
        this.state = {
            chefs: [],
            feeds: [],
            recipes: [],
            master_classes: [],
            comments: [],
            comment: {}
        }
        this.makeTimer();
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

    async initialize_feeds() {
        if (this.token) {
            let post_result = await getAllPosts(this.user_id, this.token);
            let chef_result = await this.initialize_chefs();
            if (chef_result.length > 0) {
                if (post_result.length > 0) {
                    if (post_result.status == false) {
                        console.log(post_result.message);
                        ReactDOM.render(
                            <Provider store={configureStore}>
                                <NoFeeds />
                            </Provider>, document.getElementById('feed-sec'));
                    } else {
                        post_result.map((item) => {
                            let chef_details = chef_result.find(chef => chef._id == item.chef_id);
                            item.chef = chef_details;
                            item.createdAt = this.showTime(item.createdAt);
                        })
                    }
                }

                this.setState({
                    feeds: post_result
                });
            } else {
                ReactDOM.render(
                    <Provider store={configureStore}>
                        <NoFeeds />
                    </Provider>, document.getElementById('feed-sec'));
            }
        }
    }

    async initialize_recipes() {
        if (this.token) {
            let recipe_result = await getAllRecipes(this.user_id, this.token);
            let chef_result = await this.initialize_chefs();
            if (chef_result.length > 0) {
                if (recipe_result.length > 0) {
                    if (recipe_result.status == false) {
                        console.log(recipe_result.message);
                        ReactDOM.render(
                            <Provider store={configureStore}>
                                <NoRecipes />
                            </Provider>, document.getElementById('recipe-sec'));
                        $("#recipe-sec").css("padding-top", "50px");
                    } else {
                        recipe_result.map(function (item) {
                            let chef_details = chef_result.find(chef => chef._id == item.chef_id);
                            item.chef = chef_details;
                        })
                    }
                }

                this.setState({
                    recipes: recipe_result
                });
            } else {
                ReactDOM.render(
                    <Provider store={configureStore}>
                        <NoRecipes />
                    </Provider>, document.getElementById('recipe-sec'));
                $("#recipe-sec").css("padding-top", "50px");
            }
        }
    }

    async initialize_e_master_class() {
        if (this.token) {
            let master_class_result = await getAllMasterClasses(this.token);
            let chef_result = await this.initialize_chefs();
            if (chef_result.length > 0) {
                if (master_class_result.length > 0) {
                    if (master_class_result.status == false) {
                        console.log(master_class_result.message);
                        ReactDOM.render(
                            <Provider store={configureStore}>
                                <NoClasses />
                            </Provider>, document.getElementById('e-master-class-sec'));
                    } else {
                        master_class_result.map(function (item) {
                            let chef_details = chef_result.find(chef => chef._id == item.chef_id);
                            item.chef = chef_details;
                        })
                    }
                }
                this.setState({
                    master_classes: master_class_result
                });
            } else {
                ReactDOM.render(
                    <Provider store={configureStore}>
                        <NoClasses />
                    </Provider>, document.getElementById('e-master-class-sec'));
            }
        }
    }

    async open_comments(section, parent_section, data) {
        console.log(section);
        console.log("comments loaded");
        var item_siblings = $('#' + section).siblings();
        item_siblings.each(function () {
            $(this).css('display', 'none');
        })
        $('#' + section).css("display", "block");
        let comments = await getCommentsByPostID(data._id, this.token);
        this.setState({
            comment: data
        })
        this.setState({
            comments: comments
        })
    }

    componentDidMount() {
        this.initialize_chefs();
        this.initialize_feeds();
        this.initialize_recipes();
        this.initialize_e_master_class();
    }

    async like_unlike_post(e) {
        if (e.target.className == "false") {
            let result = await likePost(this.user_id, e.target.id, this.token);
            if (result.status && result.status == false) {
                console.log(result.message);
            } else {
                let feeds = [...this.state.feeds];
                feeds.map((feed) => {
                    if (feed._id == e.target.id) {
                        feed.likes = feed.likes + 1;
                        feed.is_like = true;
                    }
                })
                this.setState({
                    feeds: feeds
                })
            }
        } else {
            let result = await unlikePost(this.user_id, e.target.id, this.token);
            if (result.status && result.status == false) {
                console.log(result.message);
            } else {
                let feeds = [...this.state.feeds];
                feeds.map((feed) => {
                    if (feed._id == e.target.id) {
                        feed.likes = feed.likes - 1;
                        feed.is_like = false;
                    }
                })
                this.setState({
                    feeds: feeds
                })
            }
        }
    }

    async like_unlike_recipe(e) {
        if (e.target.className == "false") {
            let result = await likeRecipe(this.user_id, e.target.id, this.token);
            if (result.status && result.status == false) {
                console.log(result.message);
            } else {
                let recipes = [...this.state.recipes];
                recipes.map((recipe) => {
                    if (recipe._id == e.target.id) {
                        recipe.likes = recipe.likes + 1;
                        recipe.is_like = true;
                    }
                })
                this.setState({
                    recipes: recipes
                })
            }
        } else {
            let result = await unlikeRecipe(this.user_id, e.target.id, this.token);
            if (result.status && result.status == false) {
                console.log(result.message);
            } else {
                let recipes = [...this.state.recipes];
                recipes.map((recipe) => {
                    if (recipe._id == e.target.id) {
                        recipe.likes = recipe.likes - 1;
                        recipe.is_like = false;
                    }
                })
                this.setState({
                    recipes: recipes
                })
            }
        }
    }

    makeTimer() {
        setInterval(() => {
            this.initialize_feeds();
        }, 60000)
    }

    showTime(datetime) {
        var date1 = new Date(datetime);
        var date2 = new Date();
        var diffInMs = Math.abs(date2 - date1);
        if ((diffInMs / (1000 * 60 * 60 * 24)) > 0) {
            return (diffInMs / (1000 * 60 * 60 * 24)).toFixed(1) + " days ago";
        } else if ((diffInMs / (1000 * 60 * 60)) > 0) {
            return (diffInMs / (1000 * 60 * 60)).toFixed(1) + " hours ago";
        } else if ((diffInMs / (1000 * 60)) > 0) {
            return (diffInMs / (1000 * 60)).toFixed(1) + " mins ago";
        } else {
            return (diffInMs / 1000).toFixed(2) + " seconds ago ";
        }
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
                                    <div style={{ paddingRight: "4px" }}>
                                        <div className="post-option" style={{ textAlignLast: "right" }}><img src={PostMenu}></img></div>
                                        {/* <div style={{ display: "flex" }}>
                                            <div className="feed_rattings">{item.rate}</div>
                                            <ReactStars
                                                count={5}
                                                value={item.rate}
                                                onChange={null}
                                                isHalf={true}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                        </div> */}
                                    </div>
                                </div>
                                <div className="post-image">
                                    <img className="userpost" src={item.post_content && item.post_content}></img>
                                </div>
                                <div className="post-activity">
                                    <div className="l-div">
                                        <div className="activity">
                                            <img src={item.is_like ? FullHeart : EmptyHeart} id={item._id} className={item.is_like.toString()} onClick={this.like_unlike_post}></img>
                                            <span>{item.likes}</span>
                                        </div>
                                        <div className="activity">
                                            <img src={CommentIcon} onClick={() => this.open_comments("comment-sec", "feed-sec", item)}></img>
                                            <span>{item.comments}</span>
                                        </div>
                                        <div className="activity">
                                            <img src={PostShare}></img>
                                            <span>{item.share}</span>
                                        </div>
                                        <div className="activity">
                                            <div>
                                                <img src={LocationIcon}></img>
                                            </div>
                                            <div>
                                                <span>{item.location}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="r-div">
                                        <div className="activity">
                                            <div>
                                                <img src={Time}></img>
                                            </div>
                                            <div>
                                                <span>{item.createdAt}</span>
                                            </div>
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
                                            <div className="recipe_rattings">{item.rate}</div>
                                            <ReactStars
                                                count={5}
                                                value={item.rate}
                                                onChange={null}
                                                isHalf={true}
                                                edit={false}
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
                                            <img src={item.is_like ? FullHeart : EmptyHeart} id={item._id} className={item.is_like.toString()} onClick={this.like_unlike_recipe}></img>
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
                <div className="comment sec" id="comment-sec">
                    {console.log(this.state)}
                    <div className="switch-content">
                        <div>
                            <img src={LeftBack}></img>
                        </div>
                        <div>
                            <h2>COMMENTS</h2>
                        </div>
                    </div>
                    <div className="feed" id={this.state.comment._id}>
                        <div className="primary-details">
                            <div className="l-div">
                                <div className="profile-img-container">
                                    <img src={this.state.comment.chef && this.state.comment.chef.profile_image}></img>
                                </div>
                                <div className="user-detail-container">
                                    <h3>{this.state.comment.chef && this.state.comment.chef.user_name}</h3>
                                    <h5>{this.state.comment.chef && this.state.comment.chef.chef_details.position}</h5>
                                </div>
                            </div>
                            <div style={{ paddingRight: "4px" }}>
                                <div className="post-option" style={{ textAlignLast: "right" }}><img src={PostMenu}></img></div>
                                {/* <div style={{ display: "flex" }}>
                                            <div className="feed_rattings">{item.rate}</div>
                                            <ReactStars
                                                count={5}
                                                value={item.rate}
                                                onChange={null}
                                                isHalf={true}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                        </div> */}
                            </div>
                        </div>
                        <div className="post-image">

                            <img className="userpost" src={this.state.comment.post_content && this.state.comment.post_content}></img>
                        </div>
                        <div className="comments-on-post">
                            {this.state.comments.length > 0 && this.state.comments.map((item) => {
                                return (
                                    <div className="comments">
                                        <div className="user-details">
                                            <div className="user-detail-container">
                                                <h5>{item.commenter_name}</h5>
                                            </div>
                                            <div className="profile-img-container">
                                                <img src={item.commenter_profile}></img>
                                            </div>
                                        </div>
                                        <div className="actual-comment">
                                            {item.comment}
                                        </div>
                                        <div className="comment-details">
                                            <div>2 hrs ago</div>
                                            <div className="reply-comment">
                                                <img src={ReplyComment}></img>
                                            </div>
                                            <div className="likes-on-comment">
                                                <span>10 likes </span>
                                                <img src={FullHeartComment}></img>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="add-comment">
                            <div className="write-comment">
                                <input type="text" placeholder="Enter comment"></input>
                                <img src={Sticker}></img>
                            </div>
                            <img src={AddComment}></img>
                        </div>
                        {/* <CommentsBlock
                            comments={this.state.comments}
                            signinUrl={'/User'}
                            // comments={[
                            //     {
                            //         authorUrl: CommentIcon,
                            //         avatarUrl: "http://35.175.243.253:8080/public?path=C:/Users/Administrator/Desktop/pinChef_Backend/uploads/605725bffc5a6814d0155004/profile/banner/605725bffc5a6814d0155004-1616324367377.jpg",
                            //         createdAt: new Date(),
                            //         fullName: 'test_1',
                            //         text: "abcvf",
                            //     },
                            // ]}
                            isLoggedIn={true}
                            onSubmit={text => {
                                console.log(text);
                                this.setState({
                                    comments: [
                                        ...this.state.comments,
                                        {
                                            authorUrl: CommentIcon,
                                            avatarUrl: "http://35.175.243.253:8080/public?path=C:/Users/Administrator/Desktop/pinChef_Backend/uploads/605725bffc5a6814d0155004/profile/banner/605725bffc5a6814d0155004-1616324367377.jpg",
                                            createdAt: new Date(),
                                            fullName: 'BhagDKBose',
                                            text: text,
                                        },
                                    ],
                                });
                            }}
                        // styles={[
                        //         comment: () => ({
                        //           border: "none",
                        //           textAlign: "left"
                        //         }),
                        //     ]}
                        // reactRouter={true} // set to true if you are using react-router
                        // onSubmit={text => {
                        //     if (text.length > 0) {
                        //         this.setState({
                        //             comments: [
                        //                 ...this.state.comments,
                        //                 {
                        //                     authorUrl: '#',
                        //                     avatarUrl: '#avatarUrl',
                        //                     createdAt: new Date(),
                        //                     fullName: 'Name',
                        //                     text,
                        //                 },
                        //             ],
                        //         });
                        //         console.log('submit:', text);
                        //     }
                        // }}

                        /> */}
                        {/* <CommentExampleComment /> */}
                    </div>
                </div>
            </div>
        );
    }
}