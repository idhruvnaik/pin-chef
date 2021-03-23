import React, { Component } from "react";
import ReactStars from "react-rating-stars-component";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

import UserPhoto from "../../assets/images/photo2.png";
import UserPost from "../../assets/images/bannerFeed2.png";
import PostMenu from "../../assets/png_icons/Post menu icon@2x.png";
import CommentIcon from "../../assets/png_icons/Comment icon@2x.png";
import EmptyHeart from "../../assets/png_icons/Empty heart@2x.png";
import PostShare from "../../assets/png_icons/Post Share count@2x.png";
import Time from "../../assets/png_icons/time recipe@2x.png";
import Recipe_time from "../../assets/png_icons/time recipe.png";
import Food from "../../assets/png_icons/mexicanFood.png";

import MasterShare from "../../assets/png_icons/Masterclass Share btn@2x.png";
import BookClass from "../../assets/png_icons/Book Masterclass icon.png";
import MasterclassTime from "../../assets/png_icons/Masterclass Time icon.png";
import MasterclassClockIcon from "../../assets/png_icons/Masterclass clock icon.png";

import ShoppingCart from "../../assets/images/shoping-cart-icon.png";
import PlusIcon from "../../assets/images/plus-button.png";
import PostIcon from "../../assets/images/post-icon.png";
import GalleryIcon from "../../assets/images/gallery-icon.png";
import DescriptionIcon from "../../assets/images/description-icon.png";
import LocationIcon from "../../assets/images/location-icon.png";
import ImageUploadIcon from "../../assets/images/image-upload.png";
import LocationPlusIcon from "../../assets/images/location-plus-icon.png";

import $ from "jquery";
import { Button } from "rsuite";

export default class home extends Component {
  constructor(props) {
    super(props);

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
      this.isFeedPopup = !this.isFeedPopup;
      console.log(this.isFeedPopup);
    };

    this.active = (e) => {
      var element = e.target.id;
      $(".sec").hide();
      $("#" + element + "-sec").show();
      $(".nav-active").removeClass("nav-active");
      e.target.classList.add("nav-active");
    };
  }

  render() {
    return (
      <div className="home-content">
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
          {this.feeds.map(function (item) {
            return (
              <div className="feed">
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
                  <div className="post-option">
                    <img src={PostMenu}></img>
                  </div>
                </div>
                <div className="post-image">
                  <img className="userpost" src={item.post}></img>
                </div>
                <div className="post-activity">
                  <div className="l-div">
                    <div className="activity">
                      <img src={EmptyHeart}></img>
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
                      <img src={Location}></img>
                      <span>{item.location}</span>
                    </div>
                    <div className="activity">
                      <img src={Time}></img>
                      <span>{item.time}</span>
                    </div>
                  </div>
                </div>
                <div className="post-content">{item.post_content}</div>
              </div>
            );
          })}
          <div className="btn-container">
            <Button onClick={this.toggleFeedPopup}>
              <img className="create-feed-btn" src={PlusIcon}></img>
            </Button>
          </div>
          <SlidingPane
            className="some-custom-class"
            overlayClassName="some-custom-overlay-class"
            isOpen={this.isFeedPopup}
            title="Hey, it is optional pane title.  I can be React component too."
            subtitle="Optional subtitle."
            onRequestClose={() => {
              return this.toggleFeedPopup;
            }}
          >
            <div>And I am pane content. BTW, what rocks?</div>
            <br /> */}
          </SlidingPane>
          {/* <div className="pop-up">
            <div className="pop-up-pad">
              <div className="popup-header">
                <div className="header-pad">
                  <h3>Create a Post</h3>
                  <img className="post-img" src={PostIcon}></img>
                </div>
              </div>
              <div className="popup-content">
                <div className="icon-bar">
                  <img src={GalleryIcon}></img>
                  <img src={DescriptionIcon}></img>
                  <img src={LocationIcon}></img>
                </div>
                <div className="form-container">
                  <div className="form-group height img-field">
                    <div class="image-upload">
                      <label for="file-input">
                        <img src={ImageUploadIcon} />
                      </label>
                      <input id="file-input" type="file" />
                    </div>
                  </div>
                  <div className="form-group height">
                     <input placeholder="Write post description" type="textarea" />
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
          </div> */}
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
