import React, { Component } from "react";
import ReactStars from "react-rating-stars-component";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import ReactDOM, { render } from 'react-dom';
import { Provider } from "react-redux";
import configureStore from "../../store";

import NoFeeds from '../../assets/svg/NoFeedPost';
import NoPostsByChef from '../../assets/svg/NoPostsByChef'
import NoRecipes from '../../assets/svg/NoRecipesPosts';
import NoClasses from '../../assets/svg/NoMasterClassPost';
import UserPhoto from "../../assets/images/photo2.png";
import UserPost from "../../assets/images/bannerFeed2.png";
import PostMenu from "../../assets/png_icons/Post menu icon@2x.png";
import CommentIcon from '../../assets/svg/Comment icon.svg';
import EmptyHeart from '../../assets/svg/Like button empty.svg';
import FullHeart from '../../assets/svg/Like button full.svg';
import PostShare from '../../assets/svg/Post Share count.svg';
import Time from '../../assets/svg/time-2.svg';
import Recipe_time from '../../assets/svg/recipe-time.svg';
import Food from '../../assets/png_icons/mexicanFood.png';
import LocationIcon from '../../assets/svg/Location.svg';

import MasterShare from "../../assets/png_icons/Masterclass Share btn@2x.png";
import BookClass from "../../assets/png_icons/Book Masterclass icon.png";
import MasterclassTime from "../../assets/png_icons/Masterclass Time icon.png";
import MasterclassClockIcon from "../../assets/png_icons/Masterclass clock icon.png";

import ShoppingCart from "../../assets/images/shoping-cart-icon.png";
import PlusIcon from "../../assets/images/plus-button.png";
import PostIcon from "../../assets/images/post-icon.png";
import GalleryIcon from "../../assets/images/gallery-icon.png";
import DescriptionIcon from "../../assets/images/description-icon.png";
import ImageUploadIcon from "../../assets/images/image-upload.png";
import LocationPlusIcon from "../../assets/images/location-plus-icon.png";

import { getAllChef, getAllPosts, likePost, getAllPostsByChefID, getChefById, getAllRecipes, getAllMasterClasses, unlikePost, unlikeRecipe, likeRecipe, getCommentsByPostID } from '../../services/apiOperations';
import $ from "jquery";
import { Button } from "rsuite";

export default class home extends Component {
  constructor(props) {
    super(props);
    this.token = this.props.token;
    this.user_id = this.props.user_id;
    this.onDrop = this.onDrop.bind(this);
    this.initialize_feeds = this.initialize_feeds.bind(this);
    this.initialize_my_feeds = this.initialize_my_feeds.bind(this);
    this.initialize_chefs = this.initialize_chefs.bind(this);
    this.showTime = this.showTime.bind(this);
    this.like_unlike_post = this.like_unlike_post.bind(this);
    this.state = {
      isPaneOpenLeft: false,
      pictures: [],
      feeds: []
    }

    this.feeds = [
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
        post_content:
          "It was great night as we were at catering for a wedding. Thank you all of the staff that helped us to make event such a wonderful and delicious.",
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
        post_content:
          "It was great night as we were at catering for a wedding. Thank you all of the staff that helped us to make event such a wonderful and delicious.",
      },
    ];

    this.recipes = [
      {
        id: 1,
        desktop_icon: UserPhoto,
        user_name: "Jenah Stephonson",
        user_description: "Home chef",
        post: UserPost,
        recipe_name: "Beef Taco",
        recipe_type: "Mexican",
        likes: 0,
        comments: 0,
        share: 0,
        location: "Miami, FL",
        time: "45 min ago",
        post_content:
          "It was great night as we were at catering for a wedding. Thank you all of the staff that helped us to make event such a wonderful and delicious.",
      },
      {
        id: 2,
        desktop_icon: UserPhoto,
        user_name: "Jenah Stephonson",
        user_description: "Home chef",
        post: UserPost,
        recipe_name: "Beef Taco",
        recipe_type: "Mexican",
        likes: 0,
        comments: 0,
        share: 0,
        location: "Miami, FL",
        time: "45 min ago",
        post_content:
          "It was great night as we were at catering for a wedding. Thank you all of the staff that helped us to make event such a wonderful and delicious.",
      },
    ];

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
        post_content:
          "It was great night as we were at catering for a wedding. Thank you all of the staff that helped us to make event such a wonderful and delicious.",
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
        post_content:
          "It was great night as we were at catering for a wedding. Thank you all of the staff that helped us to make event such a wonderful and delicious.",
      },
    ];

    this.emaster_classes = [
      {
        recipe_name: "PIZZA",
        recipe_image: Food,
        recipe_type: "Italian",
        recipe_diet: "Vegan",
        chef_name: "Jenah Stephanson",
        chef_desktop_icon: UserPhoto,
        ingredients: "pepper, flour, orange juice",
        recipe_description:
          "Come and enjoy cooking the yummiest Pizza you have ever seen.",
        price: "25",
        date: "Feb 20 - UTC",
        time: "12:30",
        remaining_time: "2:30",
        available_tickets: "34",
      },
      {
        recipe_name: "PIZZA",
        recipe_image: Food,
        recipe_type: "Italian",
        recipe_diet: "Vegan",
        chef_name: "Jenah Stephanson",
        chef_desktop_icon: UserPhoto,
        ingredients: "pepper, flour, orange juice",
        recipe_description:
          "Come and enjoy cooking the yummiest Pizza you have ever seen.",
        price: "25",
        date: "Feb 20 - UTC",
        time: "12:30",
        remaining_time: "2:30",
        available_tickets: "34",
      },
    ];

    this.ratingChanged = (newRating) => {
      document.querySelector(
        ".each_service .primary-details .rattings .given_rattings"
      ).innerHTML = newRating;
    };

    this.isFeedPopup = false;

    this.toggleFeedPopup = () => {
      this.setState({ isPaneOpenLeft: true });
    };

    this.toggleRecipePopup = () => {
      this.setState({ isRecipePopup: true });
    };

    this.active = (e) => {
      var element = e.target.id;
      if (element == "feed") {
        $('.feed-filters').css("display", "block");
      }
      else {
        $('.feed-filters').css("display", "none");
      }
      $(".sec").hide();
      $("#" + element + "-sec").show();
      $(".nav-active").removeClass("nav-active");
      e.target.classList.add("nav-active");
    };

    this.active_posts = (e) => {
      if (e.target.innerHTML == "My Posts"){
        this.initialize_my_feeds();
      } else{
        this.initialize_feeds();
      }
      $(".post-active").removeClass("post-active");
      e.target.classList.add("post-active");
    };
  }

  onDrop(pictureFiles, pictureDataURLs) {
    this.setState({
      pictures: this.state.pictures.concat(pictureFiles)
    });
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

  async initialize_my_feeds() {
    if (this.token) {
      let post_result = await getAllPostsByChefID(this.user_id, this.token);
      let chef_result = await getChefById(this.user_id, this.token);
      if (chef_result.status && chef_result.status == false) {
        ReactDOM.render(
          <Provider store={configureStore}>
            <h1>Could not get details of chef.</h1>
          </Provider>, document.getElementById('feed-sec'));
      } else {
        if (post_result.length > 0) {
          if (post_result.status == false) {
            ReactDOM.render(
              <Provider store={configureStore}>
                <NoPostsByChef />
              </Provider>, document.getElementById('feed-sec'));
          } else {
            post_result.map((item) => {
              item.chef = chef_result.chef;
              item.createdAt = this.showTime(item.createdAt);
            })
            this.setState({
              feeds: post_result
            });
          }
        } else {
          ReactDOM.render(
            <Provider store={configureStore}>
              <NoPostsByChef />
            </Provider>, document.getElementById('feed-sec'));
        }
      }
    }
  }

  componentDidMount() {
    this.initialize_feeds();
    // this.initialize_recipes();
    // this.initialize_e_master_class();
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

  render() {
    return (
      <div className="home-content">
        <div className="feed-filters">
          <button type="button" className="post-active" onClick={this.active_posts}>ALL</button>
          <button type="button" className="" onClick={this.active_posts}>My Posts</button>
        </div>
        <ul className="switch-content">
          <li onClick={this.active} className="nav-active" id="feed">
            Feeds
          </li>
          <li onClick={this.active} className="" id="recipe">
            Recipes
          </li>
          <li onClick={this.active} className="" id="food">
            Food
          </li>
          <li onClick={this.active} className="" id="services">
            Services
          </li>
          <li onClick={this.active} className="" id="e-master-class">
            e-Masterclass
          </li>
        </ul>
        <div className="feeds sec active" id="feed-sec">
          {this.state.feeds.map((item) => {
            return (
              <div className="feed">
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
                  <div className="post-option">
                    <img src={PostMenu}></img>
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
                      <img src={CommentIcon}></img>
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
            );
          })}
          <div className="btn-container">
            <Button onClick={this.toggleFeedPopup}>
              <img className="create-feed-btn" src={PlusIcon}></img>
            </Button>
          </div>
          <SlidingPane
            className="pop-up-feeds"
            overlayClassName="some-custom-overlay-class"
            isOpen={this.state.isPaneOpenLeft}
            from={"bottom"}
            title="Create a Post"
            subtitle=""
            width="100%"
            onRequestClose={() => {
              this.setState({ isPaneOpenLeft: false });
            }}
            onAfterOpen={() => {
              $('.slide-pane__header').css("background-color", "#5B5353");
              $('.slide-pane__header').css("color", "white");
              $('.slide-pane__header').css("border-radius", "15px");
              $('.slide-pane__header').css("border-bottom-left-radius", "0px");
            }}
          >
            <div className="pop-up-feed">
              <div className="pop-up-pad">
                <div className="popup-content">
                  <div className="icon-bar">
                    <img src={GalleryIcon}></img>
                    <img src={DescriptionIcon}></img>
                    <img src={LocationIcon}></img>
                  </div>
                  <div className="form-container">
                    <div className="form-group img-field">
                      <div class="image-upload">
                        <label for="file-input">
                          <img src={ImageUploadIcon} />
                        </label>
                        <input id="file-input" type="file" className="description-field" />
                      </div>
                    </div>
                    <div className="form-group">
                      <input placeholder="Write post description" className="description-field" type="textarea" />
                    </div>
                    <div className="form-group location">
                      <img src={LocationPlusIcon} className="location-img"></img>
                      <input placeholder="Write post description" type="text" />
                    </div>
                  </div>
                  <div className="popup-footer">
                    <button className="footer-btn light">Cancel</button>
                    <button className="footer-btn dark">Post</button>
                  </div>
                </div>
              </div>
            </div>
          </SlidingPane>
        </div>
        <div className="recipes sec" id="recipe-sec">
          {this.recipes.map(function (item) {
            return (
              <div className="recipe">
                <div className="primary-details">
                  <div className="l-div">
                    <div className="profile-img-container">
                      <img src={item.desktop_icon}></img>
                    </div>
                    <div className="user-detail-container">
                      <h3>{item.user_name}</h3>
                      <h5>{item.user_description}</h5>
                    </div>
                  </div>
                  <div style={{ paddingRight: "4px" }}>
                    <div
                      style={{ textAlignLast: "right" }}
                      className="post-option"
                    >
                      <img src={PostMenu}></img>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div className="recipe_rattings">5</div>
                      <ReactStars
                        count={5}
                        onChange={null}
                        isHalf={true}
                        activeColor="#ffd700"
                      />
                    </div>
                  </div>
                </div>
                <img className="userpost" src={item.post}></img>
                <div className="post-activity">
                  <div className="recipe_details">
                    <div>
                      <h4>{item.recipe_name}</h4>
                      <h5>({item.recipe_type})</h5>
                    </div>
                    <div className="time">
                      <img src={Recipe_time}></img>
                      <span>{item.time}</span>
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
                      <img src={EmptyHeart}></img>
                      <p>{item.likes}</p>
                    </div>
                  </div>
                </div>
                <div className="post-content">
                  <h4 style={{ color: "green" }}>Ingredients</h4>
                  <p>{item.post_content}</p>
                </div>
              </div>
            );
          })}
          <div className="btn-container">
            <Button onClick={this.toggleRecipePopup}>
              <img className="create-feed-btn" src={PlusIcon}></img>
            </Button>
            <SlidingPane
              className="pop-up-recipes"
              overlayClassName="some-custom-overlay-class"
              isOpen={this.state.isRecipePopup}
              from={"bottom"}
              title="Create a Recipe"
              subtitle=""
              width="100%"
              onRequestClose={() => {
                this.setState({ isRecipePopup: false });
              }}
              onAfterOpen={() => {
                $('.slide-pane__header').css("background-color", "#5B5353");
                $('.slide-pane__header').css("color", "white");
                $('.slide-pane__header').css("border-radius", "15px");
                $('.slide-pane__header').css("border-bottom-left-radius", "0px");
              }}
            >
              <div className="pop-up-feed">
                <div className="pop-up-pad">
                  <div className="popup-content">
                    <div className="form-container">
                      <div className="form-group height img-field">
                        <div class="image-upload">
                          <label for="file-input">

                            <img src={ImageUploadIcon} />
                          </label>
                          <input id="file-input" type="file" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Food Name <sup>*</sup></label>
                        <input placeholder="Enter Food title" type="text" />
                      </div>
                      <div className="form-group">
                        <label>Food Name <sup>*</sup></label>
                        <select>
                          <option>Indian</option>
                          <option>South Indian</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Number of Servings <sup>*</sup></label>
                        <input placeholder="Enter Number of Servings" type="number" />
                      </div>
                      <div className="form-group">
                        <label>Prep Time <sup>*</sup></label>
                        <input placeholder="Enter Number of Servings" type="number" />
                      </div>
                      <div className="form-group">
                        <label>Cooking time <sup>*</sup></label>
                        <input placeholder="Enter Number of Servings" type="number" />
                      </div>
                      <div className="form-group">
                        <label>Ingredients <sup>*</sup></label>
                        <input placeholder="Write post description" className="description-field" type="textarea" />
                      </div>
                      <div className="form-group">
                        <label>Instructions <sup>*</sup></label>
                        <input placeholder="Write post description" className="description-field" type="textarea" />
                      </div>
                      <div className="form-group">
                        <label>Instructions <sup>*</sup></label>
                        <input placeholder="Write post description" className="description-field" type="textarea" />
                      </div>
                      <div className="form-group">
                        <label>Required tools (optional)</label>
                        <input placeholder="Write post description" className="description-field" type="textarea" />
                      </div>
                      <div className="form-group radio-group">
                        <label>Dates</label>
                        <ul>
                          <li><input type="radio" name="level" />Easy</li>
                          <li><input type="radio" name="level" />Medium</li>
                          <li><input type="radio" name="level" />Hard</li>
                        </ul>
                      </div>
                    </div>
                    <div className="popup-footer">
                      <button className="footer-btn light">Cancel</button>
                      <button className="footer-btn dark">Post</button>
                    </div>
                  </div>
                </div>
              </div>
            </SlidingPane>
          </div>
        </div>
        <div className="food sec" id="food-sec">
          {this.foods.map(function (item) {
            return (
              <div className="each_food">
                <div className="primary-details">
                  <div className="l-div">
                    <div className="profile-img-container">
                      <img src={item.desktop_icon}></img>
                    </div>
                    <div className="user-detail-container">
                      <h3>{item.user_name}</h3>
                      <h5>{item.user_description}</h5>
                    </div>
                  </div>
                  <div style={{ paddingRight: "4px" }}>
                    <div
                      style={{ textAlignLast: "right" }}
                      className="post-option"
                    >
                      <img src={PostMenu}></img>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div className="recipe_rattings">5</div>
                      <ReactStars
                        count={5}
                        onChange={null}
                        isHalf={true}
                        activeColor="#ffd700"
                      />
                    </div>
                  </div>
                </div>
                <div className="user-post-container">
                  <img className="userpost" src={item.post}></img>
                  <img className="shopping-cart" src={ShoppingCart}></img>
                </div>

                <div className="food-price">
                  <b>Vegan Soft Tacos - $25</b>
                </div>
                <div className="post-activity">
                  <div className="l-div">
                    <div className="activity">
                      <img style={{ marginRight: "5px" }} src={Location}></img>
                      <p>{item.location}</p>
                    </div>
                    <div className="activity">
                      <p>2 Miles Away</p>
                    </div>
                  </div>
                  <div className="r-div">
                    <div className="activity">
                      <img src={EmptyHeart}></img>
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
                  <p>{item.post_content}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="services sec" id="services-sec">
          {this.foods.map(function (item) {
            return (
              <div className="each_food">
                <div className="primary-details">
                  <div className="l-div">
                    <div className="profile-img-container">
                      <img src={item.desktop_icon}></img>
                    </div>
                    <div className="user-detail-container">
                      <h3>{item.user_name}</h3>
                      <h5>{item.user_description}</h5>
                    </div>
                  </div>
                  <div style={{ paddingRight: "4px" }}>
                    <div
                      style={{ textAlignLast: "right" }}
                      className="post-option"
                    >
                      <img src={PostMenu}></img>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div className="recipe_rattings">5</div>
                      <ReactStars
                        count={5}
                        onChange={null}
                        isHalf={true}
                        activeColor="#ffd700"
                      />
                    </div>
                  </div>
                </div>
                <div className="user-post-container">
                  <img className="userpost" src={item.post}></img>
                </div>

                <div className="food-price">
                  <b>Vegan Soft Tacos - $25</b>
                </div>
                <div className="post-activity">
                  <div className="l-div">
                    <div className="activity">
                      <img style={{ marginRight: "5px" }} src={Location}></img>
                      <p>{item.location}</p>
                    </div>
                    <div className="activity">
                      <p>2 Miles Away</p>
                    </div>
                  </div>
                  <div className="r-div">
                    <div className="activity">
                      <img src={EmptyHeart}></img>
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
                  <p>{item.post_content}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="e-masterclass sec" id="e-master-class-sec">
          {this.emaster_classes.map(function (item) {
            return (
              <div className="order">
                <div className="order-details">
                  <h3>{item.recipe_name}</h3>
                  <div className="img-container">
                    <img className="recipe-image" src={item.recipe_image}></img>
                    <img className="share-btn" src={MasterShare}></img>
                  </div>
                  <div className="recipe-type">
                    <span className="cuisine-name">{item.recipe_type}</span>
                    <span>{item.recipe_diet}</span>
                  </div>
                </div>
                <div className="order_content">
                  <div className="user_details">
                    <img src={BookClass}></img>
                    <h4>{item.chef_name}</h4>
                    <img src={item.chef_desktop_icon}></img>
                  </div>
                  <div className="order_description">
                    <p>{item.recipe_description}</p>
                    <p>
                      <b>Ingredients:</b> {item.ingredients}
                    </p>
                  </div>
                  <div className="other_details">
                    <div className="price-detail">
                      <span>$ </span>
                      <span className="price">{item.price}</span>
                    </div>
                    <div className="class_date_time">
                      <img src={MasterclassTime}></img>
                      <span>{item.date} -</span>
                      <div className="time">{item.time}</div>
                    </div>
                    <div className="remaining_time">
                      <img src={MasterclassClockIcon}></img>
                      <div>{item.remaining_time}</div>
                    </div>
                  </div>
                  <div className="ticket_status">
                    Available Tickets <b>{item.available_tickets}</b>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
