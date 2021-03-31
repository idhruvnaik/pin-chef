import React, { Component } from "react";
import ReactStars from "react-rating-stars-component";
import ReactDOM, { render } from 'react-dom';
import { Provider } from "react-redux";
import configureStore from "../store";

import UserPhoto from "../assets/images/photo2.png";
import PostMenu from "../assets/png_icons/Post menu icon@2x.png";
import CommentIcon from '../assets/svg/Comment icon.svg';
import EmptyHeart from '../assets/svg/Like button empty.svg';
import FullHeart from '../assets/svg/Like button full.svg';
import PostShare from '../assets/svg/Post Share count.svg';
import Time from '../assets/svg/time-2.svg';
import Recipe_time from "../assets/svg/recipe-time.svg";
import RefreshIcon from "../assets/png_icons/refresh-icon.png";
import RightArrowIcon from "../assets/png_icons/right-arrow-icon.png";
import DownArrowIcon from "../assets/png_icons/down-arrow-icon.png";
import CopyIcon from "../assets/png_icons/copy-icon.png";
import LeftBack from '../assets/png_icons/Green back arrow.png';
import LocationIcon from '../assets/svg/Location.svg';

import NoFeeds from '../assets/svg/NoFeedPost';
import NoRecipes from '../assets/svg/NoRecipesPosts';
import NoPurchases from '../assets/svg/NoPurchases';
import NoFoodService from '../assets/svg/NoFoodServices'
import { getAllChef, getAllPosts, likePost, getAllRecipes, getAllPurchases, getAllFood, getAllServices, unlikePost, unlikeRecipe, likeRecipe, likeFood, unlikeFood, likeService, unlikeService } from '../services/apiOperations';
import $ from "jquery";
import chef from "./chefComponents/chef";

export default class home extends Component {
  constructor(props) {
    super(props);
    this.open_purchase_details = this.open_purchase_details.bind(this);
    this.initialize_food_recipe_purchases = this.initialize_food_recipe_purchases.bind(this);
    this.initialize_chefs = this.initialize_chefs.bind(this);
    this.initialize_feeds = this.initialize_feeds.bind(this);
    this.initialize_recipes = this.initialize_recipes.bind(this);
    this.initialize_food_services = this.initialize_food_services.bind(this);
    this.like_unlike_post = this.like_unlike_post.bind(this);
    this.like_unlike_recipe = this.like_unlike_recipe.bind(this);
    this.like_unlike_food_service = this.like_unlike_food_service.bind(this);
    this.showTime = this.showTime.bind(this);
    this.makeTimer = this.makeTimer.bind(this);

    this.state = {
      food_services: [],
      feeds: [],
      recipes: [],
      food_recipe_purchases: [],
      master_class_purchases: [],
      all_purchases: [],
      master_purchase: {},
      food_recipe_purchase: {}
    }

    this.token = this.props.token;
    this.user_id = this.props.user_id;

    this.ratingChanged = (newRating) => {
      document.querySelector(
        ".each_service .primary-details .rattings .given_rattings"
      ).innerHTML = newRating;
    };

    this.active = (e) => {
      var element = e.target.id;
      $(".sec").hide();
      $("#" + element + "-sec").show();
      $(".nav-active").removeClass("nav-active");
      e.target.classList.add("nav-active");
    };
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
              </Provider>, document.getElementById('star-feed-sec'));
            $("#star-feed-sec").css("padding-top", "50px");
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
          </Provider>, document.getElementById('star-feed-sec'));
        $("#star-feed-sec").css("padding-top", "50px");
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
              </Provider>, document.getElementById('star-recipe-sec'));
            $("#star-recipe-sec").css("padding-top", "50px");
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
          </Provider>, document.getElementById('star-recipe-sec'));
        $("#star-recipe-sec").css("padding-top", "50px");
      }
    }
  }

  async initialize_food_recipe_purchases() {
    if (this.token) {
      let all_purchases = await getAllPurchases(this.user_id, this.token);
      let chef_result = await this.initialize_chefs();
      if (chef_result.length > 0) {
        if (all_purchases.status == false) {
          ReactDOM.render(
            <Provider store={configureStore}>
              <NoPurchases />
            </Provider>, document.getElementById('my-purchase-sec'));
        } else {
          if (!(all_purchases.status) && all_purchases.status != false) {
            all_purchases.map(function (purchase) {
              purchase.items.map(function (item) {
                let chef_details = chef_result.find(chef => chef._id == item.chef_id);
                item.chef = chef_details;
              })
            })
          }
        }
      } else {
        ReactDOM.render(
          <Provider store={configureStore}>
            <NoPurchases />
          </Provider>, document.getElementById('my-purchase-sec'));
      }
      this.setState({
        all_purchases: all_purchases
      });
    }
  }

  async initialize_food_services() {
    let food_result = await getAllFood(this.user_id, this.token);
    let service_result = await getAllServices(this.user_id, this.token);
    let chef_result = await this.initialize_chefs();
    var temp = [];
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
            item.item_type = "food";
          })
        }
      }

      temp = food_result;

      if (service_result.length > 0) {
        if (service_result.status == false) {
          console.log(service_result.message);
          ReactDOM.render(
            <Provider store={configureStore}>
              <h1>{service_result.message}</h1>
            </Provider>, document.getElementById('food-service-sec'));
          $("#food-service-sec").css("padding-top", "50px");
        } else {
          service_result.map(function (item) {
            let chef_details = chef_result.find(chef => chef._id == item.chef_id);
            item.chef = chef_details;
            item.item_type = "service";
          })
        }
      }
      console.log(temp, "temp from star");
      this.setState({
        food_services: temp.concat(service_result)
      });
    } else {
      ReactDOM.render(
        <Provider store={configureStore}>
          <NoFoodService />
        </Provider>, document.getElementById('food-service-sec'));
    }
  }

  componentDidMount() {
    this.initialize_feeds();
    this.initialize_recipes();
    this.initialize_food_recipe_purchases();
    this.initialize_food_services();
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

  async like_unlike_food_service(e) {
    if (e.target.name == "service") {
      if (e.target.className == "false") {
        let result = await likeService(this.user_id, e.target.id, this.token);
        if (result.status && result.status == false) {
          console.log(result.message);
        } else {
          let services = [...this.state.food_services];
          services.map((service) => {
            if (service._id == e.target.id) {
              service.likes = service.likes + 1;
              service.is_like = true;
            }
          })
          this.setState({
            food_services: services
          })
        }
      } else {
        let result = await unlikeService(this.user_id, e.target.id, this.token);
        if (result.status && result.status == false) {
          console.log(result.message);
        } else {
          let services = [...this.state.food_services];
          services.map((service) => {
            if (service._id == e.target.id) {
              service.likes = service.likes - 1;
              service.is_like = false;
            }
          })
          this.setState({
            food_services: services
          })
        }
      }
    } else {
      if (e.target.className == "false") {
        let result = await likeFood(this.user_id, e.target.id, this.token);
        if (result.status && result.status == false) {
          console.log(result.message);
        } else {
          let food = [...this.state.food_services];
          food.map((each_food) => {
            if (each_food._id == e.target.id) {
              each_food.likes = each_food.likes + 1;
              each_food.is_like = true;
            }
          })
          this.setState({
            food_services: food
          })
        }
      } else {
        let result = await unlikeFood(this.user_id, e.target.id, this.token);
        if (result.status && result.status == false) {
          console.log(result.message);
        } else {
          let food = [...this.state.food_services];
          food.map((each_food) => {
            if (each_food._id == e.target.id) {
              each_food.likes = each_food.likes - 1;
              each_food.is_like = false;
            }
          })
          this.setState({
            food_services: food
          })
        }
      }
    }
  }

  open_purchase_details(purchase_type, item, data) {
    if (purchase_type != null && purchase_type == "master_purchase") {
      this.setState({
        master_purchase: data
      })
    } else if (purchase_type != null && purchase_type == "food_recipe_purchase") {
      this.setState({
        food_recipe_purchase: data
      })
    }
    console.log(this.state, "from open purchase details");
    var item_siblings = $('.' + item).siblings();
    item_siblings.each(function () {
      $(this).css('display', 'none');
    })
    $('.' + item).css("display", "block");
    $('.' + item).animate({
      scrollTop: "0px"
    });
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
      <div className="star-content">
        <ul className="switch-content">
          <li onClick={this.active} className="nav-active" id="star-feed">
            Feeds
          </li>
          <li onClick={this.active} className="" id="star-recipe">
            Recipes
          </li>
          <li onClick={this.active} className="" id="food-service">
            Foods &amp; Services
          </li>
          <li onClick={this.active} className="" id="my-purchase">
            My Purchases
          </li>
        </ul>
        <div className="feeds_2 sec active" id="star-feed-sec">
          {this.state.feeds.length > 0 && this.state.feeds.map((item) => {
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
                  <div style={{ paddingRight: "4px" }}>
                    <div className="post-option" style={{ textAlignLast: "right" }}>
                      <img src={PostMenu}></img>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div className="feed_rattings">{item.rate}</div>
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
        </div>
        <div className="recipes_2 sec" id="star-recipe-sec">
          {this.state.recipes.length > 0 && this.state.recipes.map((item) => {
            return (
              <div className="recipe">
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
                    <div
                      style={{ textAlignLast: "right" }}
                      className="post-option"
                    >
                      <img src={PostMenu}></img>
                    </div>
                    <div style={{ display: "flex" }}>
                      <div className="recipe_rattings">{item.rate}</div>
                      <ReactStars
                        count={5}
                        value={item.rate}
                        edit={false}
                        onChange={null}
                        isHalf={true}
                        activeColor="#ffd700"
                      />
                    </div>
                  </div>
                </div>
                <img className="userpost" src={item.recipe_content}></img>
                <div className="post-activity" style={{ display: "flex" }}>
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
                      <img src={item.is_like ? FullHeart : EmptyHeart} id={item._id} onClick={this.like_unlike_recipe} className={item.is_like.toString()}></img>
                      <p>{item.likes}</p>
                    </div>
                  </div>
                </div>
                <div className="post-content">
                  <h4 style={{ color: "green" }}>Ingredients</h4>
                  <p>{item.ingredients}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="foodservices sec" id="food-service-sec">
          {this.state.food_services.length > 0 && this.state.food_services.map((item) => {
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
                    <div
                      style={{ textAlignLast: "right" }}
                      className="post-option"
                    >
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
                    <div>
                      <i>{item.available && item.available.delivery ? "Delivery" : ''} {item.available && item.available.pickup ? "+ Pick up/Takeaway" : ''}</i>
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
                      <img src={item.is_like ? FullHeart : EmptyHeart} className={item.is_like.toString()} name={item.item_type} id={item._id} onClick={this.like_unlike_food_service}></img>
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
            );
          })}
        </div>
        <div className="my_purchases sec" id="my-purchase-sec">
          {this.state.all_purchases.length > 0 && this.state.all_purchases.map((purchase) => {
            return (
              purchase.items.map((item) => {
                return (
                  <div className="item">
                    <div className="head-container">
                      <div className="l-div">
                        <div className="profile-img-container">
                          <img src={item.chef.profile_image}></img>
                        </div>
                        <div className="user-detail-container">
                          <h3>{item.chef.user_name}</h3>
                          <h5>{item.chef.chef_details.position}</h5>
                        </div>
                        <ReactStars
                          count={5}
                          onChange={null}
                          value={purchase.rate}
                          isHalf={true}
                          activeColor="#ffd700"
                          classNames="star-rating"
                        />
                      </div>
                      <div className="r-div">
                        <h3 onClick={() => this.open_purchase_details(purchase.order_type == "eclass" ? "master_purchase" : "food_recipe_purchase", purchase.order_type == "eclass" ? "purchase-detail" : "food-service-purchase-detail", item)}>{purchase.order_type == "eclass" ? "Masterclass" : "Food and Services"}</h3>
                        <img src={RefreshIcon}></img>
                      </div>
                    </div>
                    <div className="content">
                      <div className="price-block">
                        <div className="price-detail">
                          <h4>{item.title}</h4>
                          <div className="r-div">
                            <h5>{item.qty}</h5>
                            <h5>${item.price}</h5>
                            <h5>${item.amount}</h5>
                          </div>
                        </div>
                        <div className="total-price">
                          <h3><span>Total </span>$ {item.amount}</h3>
                        </div>
                      </div>
                      <div className="ticket-block">
                        <div className="url-block">
                          <h5>Class Link: www.pinchef.io/dough</h5>
                          <img src={RightArrowIcon}></img>
                        </div>
                        <div className="ticket-detail">
                          <h5>Ticket number: 38Kzw23</h5>
                          <img src={CopyIcon}></img>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-block">
                      <h4>2 days</h4>
                      <div className="details-block">
                        <h4>Details</h4>
                        <img src={DownArrowIcon}></img>
                      </div>
                    </div>
                  </div>
                )
              })
            )
          })}
          <div className="purchase-detail">
            <div className="switch-content">
              <div>
                <img src={LeftBack} onClick={() => this.open_purchase_details(null, 'item', null)}></img>
              </div>
              <div>
                <h2>PURCHASE DETAILS</h2>
              </div>
            </div>
            <div className="head-container">
              <h5 className="date">13 October, 2020- 1:24 PM</h5>
              <div className="l-div">
                <div className="profile-img-container">
                  <img src={UserPhoto}></img>
                </div>
                <div className="user-detail-container">
                  <h3>Matt Wilson</h3>
                  <h5>Executive Chef</h5>
                </div>
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
                      <td>$23.80</td>
                      <td>$23.80</td>
                    </tr>
                  </tbody>
                </table>
                <div className="total-detail">
                  <h4>Sub total <span>$ 23.00</span></h4>
                  <h4>Tax: <span>% 8</span></h4>
                  <h3>Total: $ 39.84</h3>
                </div>
                <div className="youtube-link">
                  <h5>Live Stream Link: www.youtube.com/pinchef</h5>
                  <img src={RightArrowIcon}></img>
                </div>
                <div className="details-section">
                  <h3>Instructions & Details</h3>
                  <textarea placeholder="Masterclass instructions autofilled"></textarea>
                </div>
                <div className="details-section">
                  <h3>Needed Ingredients</h3>
                  <textarea placeholder="Masterclass instructions autofilled"></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="food-service-purchase-detail">
            {console.log(this.state.food_recipe_purchase, "while loading food service purchase details")}
            <div className="switch-content">
              <div>
                <img src={LeftBack} onClick={() => this.open_purchase_details(null, 'item', null)}></img>
              </div>
              <div>
                <h2>PURCHASE DETAILS</h2>
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
                      <td>{this.state.food_recipe_purchase.title}</td>
                      <td>1 <span className="plus-icon">{this.state.food_recipe_purchase.qty > 1 ? "+" : ""}</span></td>
                      <td>${this.state.food_recipe_purchase.price}</td>
                      <td>${this.state.food_recipe_purchase.amount}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="total-detail">
                  <h4>Sub total <span>$ 23.00</span></h4>
                  <h4>Tax: <span>% 8</span></h4>
                  <h3>Total: $ 39.84</h3>
                </div>
                <div className="details-section">
                  <h3>Extra notes</h3>
                  <textarea placeholder="User address"></textarea>
                </div>
                <div className="details-section">
                  <h3>Payment Method</h3>
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
