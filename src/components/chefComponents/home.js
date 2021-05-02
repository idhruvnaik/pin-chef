import React, { Component } from "react";
import ReactStars from "react-rating-stars-component";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import ReactDOM, { render } from 'react-dom';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { Provider } from "react-redux";
import configureStore from "../../store";
import ReactCrop from 'react-image-crop';
import Popup from 'reactjs-popup';
import TimePicker from 'react-time-picker';
import 'react-image-crop/dist/ReactCrop.css';
import SelectSearch from "react-dropdown-select";
import CropImage from '../cropImages';

import NoFeeds from '../../assets/svg/NoFeedPost';
import NoPostsByChef from '../../assets/svg/NoPostsByChef'
import NoRecipesByChef from '../../assets/svg/NoRecipesByChef'
import NoFoodByChef from '../../assets/svg/NoFoodByChef'
import NoServicesByChef from '../../assets/svg/NoServicesByChef'
import NoMasterClassByChef from '../../assets/svg/NoMasterclassByChef';
import UserPhoto from "../../assets/images/photo2.png";
import UserPost from "../../assets/images/bannerFeed2.png";
import PostMenu from "../../assets/png_icons/Post menu icon@2x.png";
import CommentIcon from '../../assets/svg/Comment icon.svg';
import RoleChangeIcon from '../../assets/svg/role-change-icon.svg'
import EmptyHeart from '../../assets/svg/Like button empty.svg';
import FullHeart from '../../assets/svg/Like button full.svg';
import PostShare from '../../assets/svg/Post Share count.svg';
import LeftBack from '../../assets/png_icons/Green back arrow.png'
import Time from '../../assets/svg/time-2.svg';
import Recipe_time from '../../assets/svg/recipe-time.svg';
import Food from '../../assets/png_icons/mexicanFood.png';
import LocationIcon from '../../assets/svg/Location.svg';
import BackRecipe from '../../assets/svg/Back btn recipe.svg'
import ServingIcon from '../../assets/svg/Serving icon.svg'
import ScreeningInfo from '../../assets/svg/My screenings info.svg'
import OrderTime from '../../assets/svg/Icon ionic-ios-timer.svg'
import ClassStartTime from '../../assets/svg/Masterclass starts in.svg'
import DurationIcon from '../../assets/svg/sand-clock.svg'
import CancleMasterClass from '../../assets/svg/Cancel masterclass.svg'
import TicketPriceIcon from '../../assets/svg/Ticket price icon.svg'
import MasterClassLink from '../../assets/svg/Go to masterclass link icon.svg'
import TicketIcon from '../../assets/svg/ticket icon.svg'
import SetNotification from '../../assets/svg/Set notification btn.svg'
import CancelNotification from '../../assets/svg/Cancel notification btn.svg'
import TurnOffNotifications from '../../assets/svg/tunr off notification modal icon.svg'
import SetNotificationIcon from '../../assets/svg/modal TIme icon.svg'

import MasterShare from "../../assets/svg/Icon awesome-share.svg";
import BookClass from '../../assets/svg/Book masterclass.svg'
import MasterclassTime from "../../assets/png_icons/Masterclass Time icon.png";
import MasterclassClockIcon from "../../assets/png_icons/Masterclass clock icon.png";

import ShoppingCart from "../../assets/images/shoping-cart-icon.png";
import PlusIcon from "../../assets/images/plus-button.png";
import PostIcon from "../../assets/images/post-icon.png";
import GalleryIcon from "../../assets/images/gallery-icon.png";
import DescriptionIcon from "../../assets/images/description-icon.png";
import ImageUploadIcon from "../../assets/images/image-upload.png";
import LocationPlusIcon from "../../assets/images/location-plus-icon.png";
import UploadImage from "../../assets/images/upload-option.png";

import { getAllChef, getAllPosts, likePost, AddPost, AddImageToPost, AddRecipe, AddImageToRecipe, getAllPostsByChefID, getChefById, getAllRecipesByChef, getAllFoodByFood, getAllMasterClasses, unlikePost, unlikeRecipe, likeRecipe, getAllServicesByChef, unlikeFood, likeFood, unlikeService, likeService, getAllMasterClassesByChef, DeleteMasterClass } from '../../services/apiOperations';
import $ from "jquery";
import { Button } from "rsuite";

// const [value, onChange] = useState('10:00');

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

const diet = [
  {
      username: 'Gluten Free'
  },
  {
      username: 'Vegan'
  },
  {
      username: 'Organic'
  },
  {
      username: 'Vegetarian'
  },
  {
      username: 'Halal'
  },
  {
      username: 'Kosher'
  },
  {
      username: 'Nut Free'
  },
  {
      username: 'Shellfish Free'
  },
  {
      username: 'Dairy Free'
  },
]

export default class home extends Component {
  constructor(props) {
    super(props);
    this.token = this.props.token;
    this.user_id = this.props.user_id;
    this.onDrop = this.onDrop.bind(this);
    this.initialize_feeds = this.initialize_feeds.bind(this);
    this.initialize_recipes = this.initialize_recipes.bind(this);
    this.initialize_my_feeds = this.initialize_my_feeds.bind(this);
    this.initialize_services = this.initialize_services.bind(this);
    this.initialize_chefs = this.initialize_chefs.bind(this);
    this.showTime = this.showTime.bind(this);
    this.like_unlike_post = this.like_unlike_post.bind(this);
    this.like_unlike_recipe = this.like_unlike_recipe.bind(this);
    this.like_unlike_food = this.like_unlike_food.bind(this);
    this.like_unlike_service = this.like_unlike_service.bind(this);
    this.get_preview = this.get_preview.bind(this);
    this.makeClientCrop = this.makeClientCrop.bind(this);
    this.getCroppedImg = this.getCroppedImg.bind(this);
    this.onImageLoaded = this.onImageLoaded.bind(this);
    this.onCropChange = this.onCropChange.bind(this);
    this.onCropComplete = this.onCropComplete.bind(this);
    this.CreateFeed = this.CreateFeed.bind(this);
    this.open_menu = this.open_menu.bind(this);
    this.open_recipe = this.open_recipe.bind(this);
    this.like_unlike_current_recipe = this.like_unlike_current_recipe.bind(this);
    this.cancel_master_class = this.cancel_master_class.bind(this);
    this.turn_on_off_notifications = this.turn_on_off_notifications.bind(this);
    this.recipe_upload = this.recipe_upload.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleFoodChange = this.handleFoodChange.bind(this);
    this.add_recipe = this.add_recipe.bind(this);
    this.initialize_current_chef = this.initialize_current_chef.bind(this);
    this.food_upload = this.food_upload.bind(this);
    this.add_food = this.add_food.bind(this);
    this.state = {
      source_image: null,
      food_source_image: null,
      recipe_crop_popup: false,
      food_crop_popup: false,
      isPaneOpenLeft: false,
      pictures: [],
      feeds: [],
      recipes: [],
      food: [],
      services: [],
      master_classes: [],
      current_chef: {},
      src: null,
      crop: {
        unit: 'px',
        height: 250,
        aspect: 16 / 9,
      },
      options: cusines,
      diets: diet,
      current_recipe: {},
      recipeCropUrl: {},
      foodCropUrl: {},
      selected_recipe_cusine: [],
      selected_recipe_diet: []
    }

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

    this.toggleFoodPopup = () => {
      this.setState({ isFoodPopup: true });
    };

    this.toggleServicedPopup = () => {
      this.setState({ isServicePopup: true });
    };

    this.toggleEmasterClassPopup = () => {
      this.setState({ isEmasterClassPopup: true });
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
      if (e.target.innerHTML == "My Posts") {
        this.initialize_my_feeds();
      } else {
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

  async add_recipe() {
    var difficulty = $('input[name="diff_level"]:checked').val();
    var selected_cusines = [];
    var selected_diet = [];
    this.state.selected_recipe_cusine.map((item) => {
      selected_cusines.push(item.username);
    });
    this.state.selected_recipe_diet.map((item) => {
      selected_diet.push(item.username);
    });
    var data = {
      chef_id: this.user_id,
      cuisine_type: selected_cusines,
      diet_type: selected_diet,
      food_name: $('#food_name')[0].value,
      number_of_servings: $('#no_of_serving')[0].value,
      prep_time: $('#prep_time')[0].value,
      cook_time: $('#cook_time')[0].value,
      instructions: $('#recipe_instruction')[0].value,
      ingredients: $('#recipe_ingredients')[0].value,
      required_tools: $('#recipe_required_tools')[0].value,
      difficulty_level: difficulty
    };
    if(difficulty && $('#food_name')[0].value.length > 0 && $('#no_of_serving')[0].value.length > 0 && $('#prep_time')[0].value.length > 0 && $('#cook_time')[0].value.length > 0 && $('#recipe_instruction')[0].value.length > 0 && $('#recipe_ingredients')[0].value.length > 0 && selected_cusines.length > 0){
      let result = await AddRecipe( data, this.token);
      console.log(result, "after added recipe")
      if (result.status && result.status == false) {
        console.log(result.message);
        NotificationManager.error(result.message, 'ERROR', 3000);
      } else {
        var recipe_id = result.recipe_id;
        let image_result = await AddImageToRecipe(recipe_id, this.state.recipeCropUrl, this.token);
        console.log(image_result, "image result after adding recipr");
        if (image_result.status && image_result.status == false) {
          console.log(image_result.message);
          NotificationManager.error(image_result.message, 'ERROR', 3000);
        } else {
          this.setState({ isRecipePopup: false });
        }
      }
    } else{
      NotificationManager.error('Fill up all required fields.', 'ERROR', 3000);
    }
  }

  async add_food() {
    var difficulty = $('input[name="diff_level"]:checked').val();
    var selected_cusines = [];
    var selected_diet = [];
    this.state.selected_food_cusine.map((item) => {
      selected_cusines.push(item.username);
    });
    this.state.selected_food_diet.map((item) => {
      selected_diet.push(item.username);
    });
    var data = {
      chef_id: this.user_id,
      cuisine_type: selected_cusines,
      diet_type: selected_diet,
      food_name: $('#food_item_name')[0].value,
      description: $('#food_description')[0].value,
      price: $('#food_price')[0].value,
      difficulty_level: difficulty
    };
    if($('#food_item_name')[0].value.length > 0 && selected_cusines.length > 0 && $('#food_price')[0].value.length > 0){
      let result = await AddRecipe( data, this.token);
      console.log(result, "after added recipe")
      if (result.status && result.status == false) {
        console.log(result.message);
        NotificationManager.error(result.message, 'ERROR', 3000);
      } else {
        var recipe_id = result.recipe_id;
        let image_result = await AddImageToRecipe(recipe_id, this.state.recipeCropUrl, this.token);
        console.log(image_result, "image result after adding recipr");
        if (image_result.status && image_result.status == false) {
          console.log(image_result.message);
          NotificationManager.error(image_result.message, 'ERROR', 3000);
        } else {
          this.setState({ isRecipePopup: false });
        }
      }
    } else{
      NotificationManager.error('Fill up all required fields.', 'ERROR', 3000);
    }
  }

  onImageLoaded(image) {
    this.imageRef = image;
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

  async initialize_current_chef() {
    let chef_result = await getChefById(this.user_id, this.token);
      if (chef_result.status && chef_result.status == false) {
        console.log(chef_result.message)
      } else {
        this.setState({
          current_chef: chef_result
        });
      }
  }

  async initialize_recipes() {
    if (this.token) {
      let recipe_result = await getAllRecipesByChef(this.user_id, this.token);
      let chef_result = await getChefById(this.user_id, this.token);
      if (chef_result.status && chef_result.status == false) {
        ReactDOM.render(
          <Provider store={configureStore}>
            <h1>Could not get details of chef.</h1>
          </Provider>, document.getElementById('recipe-sec'));
      } else {
        if (recipe_result.length > 0) {
          if (recipe_result.status == false) {
            ReactDOM.render(
              <Provider store={configureStore}>
                <NoRecipesByChef />
              </Provider>, document.getElementById('recipe-sec'));
          } else {
            recipe_result.map((item) => {
              item.chef = chef_result.chef;
            })
            this.setState({
              recipes: recipe_result
            });
          }
        } else {
          ReactDOM.render(
            <Provider store={configureStore}>
              <NoRecipesByChef />
            </Provider>, document.getElementById('recipe-sec'));
        }
      }
    }
  }

  async initialize_food() {
    if (this.token) {
      let food_result = await getAllFoodByFood(this.user_id, this.token);
      let chef_result = await getChefById(this.user_id, this.token);
      if (chef_result.status && chef_result.status == false) {
        ReactDOM.render(
          <Provider store={configureStore}>
            <h1>Could not get details of chef.</h1>
          </Provider>, document.getElementById('food-sec'));
      } else {
        if (food_result.length > 0) {
          if (food_result.status == false) {
            ReactDOM.render(
              <Provider store={configureStore}>
                <NoFoodByChef />
              </Provider>, document.getElementById('food-sec'));
          } else {
            food_result.map((item) => {
              item.chef = chef_result.chef;
            })
            this.setState({
              food: food_result
            });
          }
        } else {
          ReactDOM.render(
            <Provider store={configureStore}>
              <NoFoodByChef />
            </Provider>, document.getElementById('food-sec'));
        }
      }
    }
  }

  async initialize_services() {
    if (this.token) {
      let service_result = await getAllServicesByChef(this.user_id, this.token);
      let chef_result = await getChefById(this.user_id, this.token);
      if (chef_result.status && chef_result.status == false) {
        ReactDOM.render(
          <Provider store={configureStore}>
            <h1>Could not get details of chef.</h1>
          </Provider>, document.getElementById('services-sec'));
      } else {
        if (service_result.length > 0) {
          if (service_result.status == false) {
            ReactDOM.render(
              <Provider store={configureStore}>
                <NoServicesByChef />
              </Provider>, document.getElementById('services-sec'));
          } else {
            service_result.map((item) => {
              item.chef = chef_result.chef;
            })
            this.setState({
              services: service_result
            });
          }
        } else {
          ReactDOM.render(
            <Provider store={configureStore}>
              <NoServicesByChef />
            </Provider>, document.getElementById('services-sec'));
        }
      }
    }
  }

  async initialize_e_master_class() {
    if (this.token) {
      let master_class_result = await getAllMasterClassesByChef(this.user_id, this.token);
      let chef_result = await getChefById(this.user_id, this.token);
      if (chef_result.status && chef_result.status == false) {
        ReactDOM.render(
          <Provider store={configureStore}>
            <h1>Could not get details of chef.</h1>
          </Provider>, document.getElementById('e-master-class-sec'));
      } else {
        if (master_class_result.length > 0) {
          if (master_class_result.status == false) {
            ReactDOM.render(
              <Provider store={configureStore}>
                <NoMasterClassByChef />
              </Provider>, document.getElementById('e-master-class-sec'));
          } else {
            master_class_result.map((item) => {
              item.chef = chef_result.chef;
            })
            this.setState({
              master_classes: master_class_result
            });
          }
        } else {
          ReactDOM.render(
            <Provider store={configureStore}>
              <NoMasterClassByChef />
            </Provider>, document.getElementById('e-master-class-sec'));
        }
      }
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

  componentDidMount() {
    this.initialize_current_chef();
    this.initialize_feeds();
    this.initialize_recipes();
    this.initialize_food();
    this.initialize_services();
    this.initialize_e_master_class();
    // document.getElementById("file-input").addEventListener("change", this.get_preview);
  }

  showTime(datetime) {
    var date1 = new Date(datetime);
    var date2 = new Date();
    var diffInMs = Math.abs(date2 - date1);
    if ((diffInMs / 1000) < 60) {
      return (diffInMs / 1000).toFixed(0) + " secs ago ";
    } else if ((diffInMs / (1000 * 60)) < 60) {
      return (diffInMs / (1000 * 60)).toFixed(0) + " mins ago";
    } else if ((diffInMs / (1000 * 60 * 60)) < 24) {
      return (diffInMs / (1000 * 60 * 60)).toFixed(0) + " hours ago";
    } else {
      return (diffInMs / (1000 * 60 * 60 * 24)).toFixed(0) + " days ago";
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

  async like_unlike_current_recipe(e, recipe_id) {
    console.log(e, "like unlike current recipe");
    if (e == false) {
      let result = await likeRecipe(this.user_id, recipe_id, this.token);
      if (result.status && result.status == false) {
        console.log(result.message);
      } else {
        let current_recipe = this.state.current_recipe;
        // let recipes = [...this.state.recipes];
        current_recipe.likes = current_recipe.likes + 1;
        current_recipe.is_like = true;
        // recipes.map((recipe) => {
        //   if (recipe._id == recipe_id) {
        //     recipe.likes = recipe.likes + 1;
        //     recipe.is_like = true;
        //   }
        // })
        this.setState({
          current_recipe: current_recipe
        })
        // this.setState({
        //   recipes: recipes
        // })
      }
    } else {
      let result = await unlikeRecipe(this.user_id, recipe_id, this.token);
      if (result.status && result.status == false) {
        console.log(result.message);
      } else {
        // let recipes = [...this.state.recipes];
        let current_recipe = this.state.current_recipe;
        current_recipe.likes = current_recipe.likes - 1;
        current_recipe.is_like = false;
        // recipes.map((recipe) => {
        //   if (recipe._id == recipe_id) {
        //     recipe.likes = recipe.likes - 1;
        //     recipe.is_like = false;
        //   }
        // })
        // this.setState({
        //   recipes: recipes
        // })
        this.setState({
          current_recipe: current_recipe
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

  turn_on_off_notifications(notification_flag) {
    console.log(notification_flag);
  }

  get_preview(e) {
    console.log(e, "invoke thayu");
    console.log(document.getElementById('file-input').files[0]);
    var selectedFile = document.getElementById('file-input').files[0];
    var reader = new FileReader();
    // $('.image-preview img')[0].title = selectedFile.name;
    reader.onload = (event) => {
      // $('.image-preview img')[0].src = event.target.result;
      this.setState({ src: event.target.result })
    };
    reader.readAsDataURL(selectedFile);
    // $('.image-preview img')[0].src = e.target.value;//document.getElementById('file-input').files[0].name;
  }

  recipe_upload(e) {
    var selectedFile = e.target.files[0];
    var reader = new FileReader();
    // $('.image-preview img')[0].title = selectedFile.name;
    reader.onload = (event) => {
      // $('.image-preview img')[0].src = event.target.result;
      this.setState({
        source_image: event.target.result
      })
    };
    reader.readAsDataURL(selectedFile);
    this.setState({
      recipe_crop_popup: true
    });
  }

  food_upload(e) {
    var selectedFile = e.target.files[0];
    var reader = new FileReader();
    // $('.image-preview img')[0].title = selectedFile.name;
    reader.onload = (event) => {
      // $('.image-preview img')[0].src = event.target.result;
      this.setState({
        food_source_image: event.target.result
      })
    };
    reader.readAsDataURL(selectedFile);
    this.setState({
      food_crop_popup: true
    });
  }

  onCropComplete(crop) {
    this.makeClientCrop(crop);
  };

  onCropChange(crop, percentCrop) {
    // You could also use percentCrop:
    // this.setState({ crop: percentCrop });
    this.setState({ crop });
  };

  async CreateFeed() {
    var description = $('#feed-description')[0].value;
    var location = $('.location input')[0].value;
    var feed_image = $('#feed-crop')[0].src;
    let result = await AddPost(this.user_id, description, location, this.token);
    if (result.status && result.status == false) {
      console.log(result.message);
    } else {
      var post_id = result.post_id;
      let image_result = await AddImageToPost(post_id, this.state.croppedImageUrl, this.token);
      if (image_result.status && image_result.status == false) {
        console.log(image_result.message);
      } else {
        this.setState({ isPaneOpenLeft: false });
      }
    }
  }

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        'newFile.jpeg'
      );
      this.setState({ croppedImageUrl });
    }
  }

  async cancel_master_class(class_id, close_popup) {
    console.log(class_id);
    let result = await DeleteMasterClass(class_id, this.token);
    if (result.status && result.status == false) {
      console.log(result.message);
    } else {
      this.initialize_e_master_class();
      close_popup();
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error('Canvas is empty');
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        blob.uri = this.fileUrl;
        resolve(blob);
      }, 'image/jpeg');
    });
  }

  handleChange(otp) {
    this.setState({
      recipe_crop_popup: false
    });
    this.setState({ recipeCropUrl: otp });
    var reader = new FileReader();
    reader.onload = (event) => {
      // $('.image-preview img')[0].src = event.target.result;
      // this.setState({ src: event.target.result })
      $('#recipe-icon')[0].src = event.target.result;
    };
    $('#recipe-icon')[0].src = reader.readAsDataURL(otp);
  };

  handleFoodChange(otp) {
    this.setState({
      food_crop_popup: false
    });
    this.setState({ foodCropUrl: otp });
    var reader = new FileReader();
    reader.onload = (event) => {
      // $('.image-preview img')[0].src = event.target.result;
      // this.setState({ src: event.target.result })
      $('#food-icon')[0].src = event.target.result;
    };
    $('#food-icon')[0].src = reader.readAsDataURL(otp);
  };

  open_menu(section, header_flag) {
    var menu_siblings = $('.' + section).siblings();
    menu_siblings.each(function () {
      $(this).css('display', 'none');
    })
    $('.' + section).css('display', 'block');
    if (header_flag) {
      $('.home-content .switch-content').css("display", "flex");
    }
  }

  open_recipe(menu, current_recipe_id) {
    let recipe_details = this.state.recipes.find(recipe => recipe._id == current_recipe_id);
    recipe_details.createdAt = this.showTime(recipe_details.createdAt);
    this.setState({ current_recipe: recipe_details });
    this.open_menu(menu, false);
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
        <Popup
          open={this.state.recipe_crop_popup}
          position="center center"
          closeOnDocumentClick
          modal
          nested
        >
          {close => (
            <CropImage onOtpChange={this.handleChange} image_source={this.state.source_image} close_popup={close} crop_height={53}/>
          )}
        </Popup>
        <Popup
          open={this.state.food_crop_popup}
          position="center center"
          closeOnDocumentClick
          modal
          nested
        >
          {close => (
            <CropImage onOtpChange={this.handleFoodChange} image_source={this.state.food_source_image} close_popup={close} crop_height={53}/>
          )}
        </Popup>
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
              if (window.screen.width > 1100) {
                $('.pop-up-feeds').css('width', "50%");
              }
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
                        <input id="file-input" type="file" className="description-field" accept=".jpg,.png,.PNG,.jpeg" onChange={this.get_preview} />
                      </div>
                    </div>
                    {this.state.src && (
                      <ReactCrop
                        src={this.state.src}
                        crop={this.state.crop}
                        ruleOfThirds
                        onImageLoaded={this.onImageLoaded}
                        onComplete={this.onCropComplete}
                        onChange={this.onCropChange}
                        locked={true}
                      />
                    )}
                    {this.state.croppedImageUrl && (
                      <img alt="Crop" style={{ maxWidth: '100%' }} src={this.state.croppedImageUrl} style={{ display: "none" }} id="feed-crop" />
                    )}
                    {/* <div className="image-preview">
                      <img src={null}></img>
                    </div> */}
                    <div className="form-group">
                      <textarea id="feed-description" placeholder="Write post description"></textarea>
                    </div>
                    <div className="form-group location">
                      <img src={LocationPlusIcon} className="location-img"></img>
                      <input placeholder="Location" type="text" />
                    </div>
                  </div>
                  <div className="popup-footer">
                    <button className="footer-btn light">Cancel</button>
                    <button className="footer-btn dark" onClick={this.CreateFeed}>Post</button>
                  </div>
                </div>
              </div>
            </div>
          </SlidingPane>
        </div>
        <div className="recipes sec" id="recipe-sec">
          {this.state.recipes.map((item) => {
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
                  <div className="actual-ingredients">
                    <p>{item.ingredients} ertyuiodsfytryuiyioyoiytuiytryurefdyutryutrfgdfcdscxdfscxdsxzdsxzcdfszxcfdsxzcfdsxzcfdsxzcfdsxzfddsxzfddsdfdszxdredsxzredsx</p> &nbsp;&nbsp;&nbsp;
                    <img src={BackRecipe} onClick={() => this.open_recipe('each_recipe', item._id)}></img>
                  </div>
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
                if (window.screen.width > 1100) {
                  $('.pop-up-recipes').css('width', "50%");
                }
              }}
            >
              <div className="pop-up-feed">
                <div className="pop-up-pad">
                  <div className="popup-content">
                    <div className="form-container">
                      <div className="form-group height img-field">
                        <div class="image-upload">
                          <label for="file-input">

                            <img id="recipe-icon" src={ImageUploadIcon} />
                          </label>
                          <input id="file-input" type="file" accept=".jpg,.png,.PNG,.jpeg" onChange={this.recipe_upload} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Food Name <sup>*</sup></label>
                        <input id="food_name" placeholder="Enter Food title" type="text" />
                      </div>

                      <div className="form-group">
                        <label>Cuisine Type <sup>*</sup></label>
                        <SelectSearch options={this.state.options} labelField="username" searchable={true} searchBy="username" valueField="username" sortBy="username" color="green" placeholder="Select an option" onChange={(values) => this.setState({selected_recipe_cusine: values})} />
                      </div>
                      <div className="form-group">
                        <label>Diet Type</label>
                        <SelectSearch options={this.state.diets} labelField="username" searchable={true} searchBy="username" valueField="username" sortBy="username" color="green" placeholder="Select an option" onChange={(values) => this.setState({selected_recipe_diet: values})}/>
                      </div>
                      <div className="form-group">
                        <label>Number of Servings <sup>*</sup></label>
                        <input id="no_of_serving" placeholder="2" type="number" />
                      </div>
                      <div className="form-group">
                        <label>Prep Time <sup>*</sup></label>
                        <input id="prep_time" placeholder="10 mins" type="number" />
                      </div>
                      <div className="form-group">
                        <label>Cook Time <sup>*</sup></label>
                        <input id="cook_time" placeholder="40 mins" type="number" />
                      </div>
                      <div className="form-group">
                        <label>Ingredients <sup>*</sup></label>
                        <textarea id="recipe_ingredients" placeholder="Write all the ingredients"></textarea>
                      </div>
                      <div className="form-group">
                        <label>Instructions <sup>*</sup></label>
                        <textarea id="recipe_instruction" placeholder="Write step by step instructions as simple as possible"></textarea>
                      </div>
                      <div className="form-group">
                        <label>Required tools (optional)</label>
                        <textarea id="recipe_required_tools" placeholder="Write down the tools needed to make this food"></textarea>
                      </div>
                      <div className="form-group radio-group">
                        <label>Difficulty cooking level <sup>*</sup></label>
                        <ul>
                          <li><input type="radio" name="diff_level" id="diff_level" value="Easy" />Easy</li>
                          <li><input type="radio" name="diff_level" id="diff_level" value="Medium" />Medium</li>
                          <li><input type="radio" name="diff_level" id="diff_level" value="Advanced" />Advanced</li>
                        </ul>
                      </div>
                    </div>
                    <div className="popup-footer">
                      <button className="footer-btn light" onClick={() => this.setState({isRecipePopup: false})}>Cancel</button>
                      <button className="footer-btn dark" onClick={this.add_recipe}>Post</button>
                    </div>
                  </div>
                </div>
              </div>
            </SlidingPane>
          </div>
        </div>
        <div className="each_recipe">
          <div className="switch-content">
            <div>
              <img src={LeftBack} onClick={() => this.open_menu('recipes', true)}></img>
            </div>
            <div>
              <h2>{this.state.current_recipe.food_name}</h2>
            </div>
          </div>
          <div className="primary-details">
            <div className="l-div">
              <div className="profile-img-container">
                <img src={this.state.current_recipe.chef && this.state.current_recipe.chef.profile_image}></img>
              </div>
              <div className="user-detail-container">
                <h3>{this.state.current_recipe.chef && this.state.current_recipe.chef.user_name}</h3>
                <h5>{this.state.current_recipe.chef && this.state.current_recipe.chef.chef_details.position}</h5>
              </div>
            </div>
            <div style={{ paddingRight: "4px" }}>
              <div style={{ display: "flex" }}>
                <div className="feed_rattings">{this.state.current_recipe.rate}</div>
                <ReactStars
                  count={5}
                  value={this.state.current_recipe.rate}
                  onChange={null}
                  isHalf={true}
                  edit={false}
                  activeColor="#ffd700"
                />
              </div>
            </div>
          </div>
          <div className="post-image">
            <img className="userpost" src={this.state.current_recipe.recipe_content && this.state.current_recipe.recipe_content}></img>
          </div>
          <div className="post-activity">
            <div className="recipe_details">
              <div>
                <h4>{this.state.current_recipe.food_name}</h4>
                <h5>({this.state.current_recipe.cuisine_type && this.state.current_recipe.cuisine_type.join(", ")})</h5>
              </div>
              <div className="time">
                <img src={Recipe_time}></img>
                <span>Total: {this.state.current_recipe.total_time}</span>
              </div>
              <div className="time">
                <img src={Recipe_time}></img>
                <span>Prep: {this.state.current_recipe.prep_time}</span>
              </div>
              <div className="time">
                <img src={ServingIcon}></img>
                <span>Serving #- &nbsp; {this.state.current_recipe.total_time}</span>
              </div>
            </div>
            <div className="activities">
              <div className="activity">
                <img src={PostShare}></img>
                <p>{this.state.current_recipe.share}</p>
              </div>
              <div className="activity">
                <img src={CommentIcon}></img>
                <p>{this.state.current_recipe.comments}</p>
              </div>
              <div className="activity">
                <img src={this.state.current_recipe.is_like ? FullHeart : EmptyHeart} onClick={() => this.like_unlike_current_recipe(this.state.current_recipe.is_like, this.state.current_recipe._id)}></img>
                <p>{this.state.current_recipe.likes}</p>
              </div>
            </div>
          </div>
          <div className="post-content">
            <h4 style={{ color: "green" }}>Ingredients</h4>
            <div className="actual-ingredients">
              <p>{this.state.current_recipe.ingredients}</p>
            </div>
          </div>
          <div className="post-content">
            <h4 style={{ color: "green" }}>Instructions</h4>
            <div className="actual-ingredients">
              <p>{this.state.current_recipe.instructions}</p>
            </div>
          </div>
          <div className="post-content">
            <h4 style={{ color: "green" }}>Required Tools</h4>
            <div className="actual-ingredients">
              <p>{this.state.current_recipe.required_tools}</p>
            </div>
          </div>
        </div>
        <div className="food sec" id="food-sec">
          {console.log(this, "from food")}
          {this.state.food.map((item) => {
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
                    <div style={{ display: "flex", justifyContent: "flex-end" }}>
                      <div className="recipe_rattings">{item.rate}</div>
                      <ReactStars
                        count={5}
                        value={item.rate}
                        onChange={null}
                        edit={false}
                        isHalf={true}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <i>{item.available.delivery ? "Delivery" : ''} {item.available.pickup ? "+ Pick up/Takeaway" : ''}</i>
                    </div>
                  </div>
                </div>
                <div className="user-post-container">
                  <img className="userpost" src={item.food_content}></img>
                  <img className="shopping-cart" src={ShoppingCart}></img>
                </div>

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
            );
          })}
          <div className="btn-container">
            <Button onClick={this.toggleFoodPopup}>
              <img className="create-feed-btn" src={PlusIcon}></img>
            </Button>
            <SlidingPane
              className="pop-up-food"
              overlayClassName="some-custom-overlay-class"
              isOpen={this.state.isFoodPopup}
              from={"bottom"}
              title="Create a Food for sale"
              subtitle=""
              width="100%"
              onRequestClose={() => {
                this.setState({ isFoodPopup: false });
              }}
              onAfterOpen={() => {
                $('.slide-pane__header').css("background-color", "#5B5353");
                $('.slide-pane__header').css("color", "white");
                $('.slide-pane__header').css("border-radius", "15px");
                $('.slide-pane__header').css("border-bottom-left-radius", "0px");
                if (window.screen.width > 1100) {
                  $('.pop-up-food').css('width', "50%");
                }
              }}
            >
              <div className="pop-up-feed">
                <div className="pop-up-pad">
                  <div className="popup-content">
                    <div className="form-container">
                      <div className="form-group height img-field">
                        <div class="image-upload">
                          <label for="file-input">

                            <img src={ImageUploadIcon} id="food-icon"/>
                          </label>
                          <input id="file-input" type="file" accept=".jpg,.png,.PNG,.jpeg" onChange={this.food_upload}/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Food Item Name <sup>*</sup></label>
                        <input placeholder="Enter Food title" type="text" id="food_item_name"/>
                      </div>
                      <div className="form-group">
                        <label>Cuisine Type <sup>*</sup></label>
                        <SelectSearch options={this.state.options} labelField="username" searchable={true} searchBy="username" valueField="username" sortBy="username" color="green" placeholder="Select an option" onChange={(values) => this.setState({selected_food_cusine: values})} />
                      </div>
                      <div className="form-group">
                        <label>Diet type</label>
                        <SelectSearch options={this.state.diets} labelField="username" searchable={true} searchBy="username" valueField="username" sortBy="username" color="green" placeholder="Select an option" onChange={(values) => this.setState({selected_food_diet: values})}/>
                      </div>
                      <div className="form-group">
                        <label>Description & Ingredients</label>
                        <textarea id="food_description" placeholder="Write the description, Ingredients, portion size"></textarea>
                      </div>
                      <div className="form-group">
                        <label>Service Days and Hours</label>
                        <div className="days_hours">
                          Available days and hours
                          <img src={RoleChangeIcon}></img>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Price <sup>*</sup></label>
                        <div className="price-details">
                          <div>$</div>
                          <input type="number" id="food_price" className="field" placeholder="Enter Price"></input>
                        </div>
                      </div>
                      <div className="form-group radio-group">
                        <label>Available for Services <sup> *</sup></label>
                        <ul className="food-radio-group">
                          <li>
                            <div>
                              <input type="checkbox" name="level" />
                              <span className="label">Pick Up/Takeaway</span>
                            </div>
                          </li>
                          <li>
                            <div>
                              <input type="checkbox" name="level" />
                              <span>Delivery</span>
                            </div>
                            <div>
                              <span className="label">Fee: {this.state.current_chef.chef && this.state.current_chef.chef.chef_details.currency}</span>
                              <input type="number" className="form-control money-field" placeholder="Enter delivery fee"/>
                            </div>
                          </li>
                          <li>
                            <div>
                              <input type="checkbox" name="level" />
                              <span>Shipping</span>
                            </div>
                            <div>
                              <span className="label">Fee: {this.state.current_chef.chef && this.state.current_chef.chef.chef_details.currency}</span>
                              <input type="number" className="form-control money-field" placeholder="Enter shipping fee"/>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="popup-footer">
                      <button className="footer-btn light" onClick={() => this.setState({isFoodPopup: false})}>Cancel</button>
                      <button className="footer-btn dark" onClick={this.add_food}>Post</button>
                    </div>
                  </div>
                </div>
              </div>
            </SlidingPane>
          </div>
        </div>
        <div className="services sec" id="services-sec">
          {this.state.services.map((item) => {
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
                        edit={false}
                        isHalf={true}
                        activeColor="#ffd700"
                      />
                    </div>
                  </div>
                </div>
                <div className="user-post-container">
                  <img className="userpost" src={item.service_content}></img>
                </div>

                <div className="food-price">
                  <b>{item.service_type} - ${item.price}</b>
                </div>
                <div className="post-activity">
                  <div className="l-div">
                    <div className="activity">
                      <img style={{ marginRight: "5px" }} src={LocationIcon}></img>
                      <p>{item.location}</p>
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
            );
          })}
          <div className="btn-container">
            <Button onClick={this.toggleServicedPopup}>
              <img className="create-feed-btn" src={PlusIcon}></img>
            </Button>
            <SlidingPane
              className="pop-up-services"
              overlayClassName="some-custom-overlay-class"
              isOpen={this.state.isServicePopup}
              from={"bottom"}
              title="Create a Food for sale"
              subtitle=""
              width="100%"
              onRequestClose={() => {
                this.setState({ isServicePopup: false });
              }}
              onAfterOpen={() => {
                $('.slide-pane__header').css("background-color", "#5B5353");
                $('.slide-pane__header').css("color", "white");
                $('.slide-pane__header').css("border-radius", "15px");
                $('.slide-pane__header').css("border-bottom-left-radius", "0px");
                if (window.screen.width > 1100) {
                  $('.pop-up-services').css('width', "50%");
                }
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
                        <label>Service type <sup>*</sup></label>
                        <SelectSearch options={this.state.options} labelField="username" searchable={true} searchBy="username" />
                      </div>
                      <div className="form-group">
                        <label>Full Description about service</label>
                        <input placeholder="Write the description, Ingredients, portion size" className="description-field" type="textarea" />
                      </div>
                      <div className="form-group">
                        <label>Service Days and Hours</label>
                        <SelectSearch options={this.state.options} labelField="username" searchable={true} searchBy="username" />
                      </div>
                      <div className="form-group">
                        <label>Price <sup>*</sup></label>
                        <input placeholder="Enter Food title" type="number" />
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
        <div className="e-masterclass sec" id="e-master-class-sec">
          {this.state.master_classes.map((item) => {
            return (
              <div className="order">
                <div className="order-info">
                  <img src={ScreeningInfo}></img>
                  <div>
                    Posted On {new Date(item.createdAt).getDate()}/{new Date(item.createdAt).getMonth() + 1}/{new Date(item.createdAt).getFullYear()}&nbsp;{new Date(item.createdAt).getUTCHours()}:{new Date(item.createdAt).getUTCMinutes()}
                  </div>
                </div>
                <div className="order-details">
                  <div className="l-div">
                    <h3>{item.title}</h3>
                    <div className="img-container">
                      <img className="recipe-image" src={item.mclass_content}></img>
                    </div>
                  </div>
                  <div className="r-div">
                    <div className="each-content">
                      <img src={OrderTime}></img>
                      <div className="text-content">
                        2 h/ 49 m/ 20 sec left
                      </div>
                    </div>
                    <div className="each-content">
                      <img src={ClassStartTime}></img>
                      <div className="text-content">
                        {new Date(item.start_date).getDate()}.{new Date(item.start_date).getMonth()}.{new Date(item.start_date).getFullYear()}  -  {item.start_time}
                      </div>
                    </div>
                    <div className="each-content">
                      <img src={DurationIcon}></img>
                      <div className="text-content">
                        {item.duration}
                      </div>
                    </div>
                    <Popup
                      trigger={
                        <div style={{ cursor: "pointer" }} className="each-content">
                          <img src={CancleMasterClass}></img>
                          <div className="text-content">
                            <b>Cancel Masterclass</b>
                          </div>
                        </div>}
                      position="center center"
                      closeOnDocumentClick
                      modal
                      nested
                    >
                      {close => (
                        <div className="masterclass-popup">
                          <div className="confirmation">
                            <h3>Cancel Masterclass</h3>
                          </div>
                          <div className="question">
                            Explain your emergency and refund info to customers.
                          </div>
                          <div className="customer-message">
                            <input type="text" placeholder="Enter message to customers"></input>
                          </div>
                          <div className="actions">
                            <button type="button" onClick={() => this.cancel_master_class(item._id, close)}>Ok</button>
                          </div>
                        </div>
                      )}
                    </Popup>
                    <div className="each-content">
                      <img src={MasterShare}></img>
                      <div className="text-content">
                        <b>Share Post</b>
                      </div>
                    </div>
                    <div className="each-content">
                      <img src={TicketPriceIcon}></img>
                      <div className="text-content">
                        <b>Ticket price: ${item.price}</b>
                      </div>
                    </div>
                  </div>
                  <Popup
                    trigger={
                      <div className="final-div">
                        <img src={item.notification ? SetNotification : CancelNotification}></img>
                      </div>}
                    position="center center"
                    closeOnDocumentClick
                    modal
                    nested
                  >
                    {close => (
                      <div className="notification-popup">
                        <div className="confirmation" style={{ display: "flex", justifyContent: "space-between" }}>
                          <h3>{item.notification ? "Set notification time" : "Turn off Notification"}</h3>
                          <img src={item.notification ? SetNotificationIcon : TurnOffNotifications}></img>
                        </div>
                        <div className="question" style={{ padding: item.notification ? "5px" : "50px" }}>
                          {item.notification ? "" : "Are you sure you want to turn off your notification?"}
                        </div>
                        <div className="pick-time" style={{ display: item.notification ? "block" : "none" }}>
                          <TimePicker
                            // onChange={onChange}
                            value={"10:00"}
                            isOpen={true}
                            className="custom-time-picker"
                          />
                        </div>
                        <div className="actions">
                          <button type="button" onClick={close}>Cancle</button>
                          <button type="button" onClick={() => this.turn_on_off_notifications(item.notification)}>{item.notification ? "Ok" : "YES"}</button>
                        </div>
                      </div>
                    )}
                  </Popup>
                </div>
                <div className="ticket_content">
                  <div className="ticket-link">
                    <img src={MasterClassLink}></img>
                    <div>
                      pinchef/io/cookingplov.io
                    </div>
                  </div>
                  <div>
                    Bought Tickets
                  </div>
                  <div className="ticket-number">
                    <img src={TicketIcon}></img>
                    <div>
                      {item.ticket_group_number}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="btn-container">
            <Button onClick={this.toggleEmasterClassPopup}>
              <img className="create-feed-btn" src={PlusIcon}></img>
            </Button>
            <SlidingPane
              className="pop-up-services"
              overlayClassName="some-custom-overlay-class"
              isOpen={this.state.isEmasterClassPopup}
              from={"bottom"}
              title="Create a e-Masterclass"
              subtitle=""
              width="100%"
              onRequestClose={() => {
                this.setState({ isEmasterClassPopup: false });
              }}
              onAfterOpen={() => {
                $('.slide-pane__header').css("background-color", "#5B5353");
                $('.slide-pane__header').css("color", "white");
                $('.slide-pane__header').css("border-radius", "15px");
                $('.slide-pane__header').css("border-bottom-left-radius", "0px");
                if (window.screen.width > 1100) {
                  $('.pop-up-services').css('width', "50%");
                }
              }}
            >
              <div className="pop-up-feed e-master-class">
                <div className="pop-up-pad">
                  <div className="popup-content">
                    <div className="form-container">
                      <div className="form-group height">
                        <div className="image-field-container">
                          <div class="image-upload">
                            <label for="file-input">
                              <img src={UploadImage} />
                            </label>
                            <input id="file-input" type="file" />
                          </div>
                          <div className="name-field-container">
                            <div className="form-group">
                              <label>Masterclass Title <sup>*</sup></label>
                              <input placeholder="Enter Food title" type="text" />
                            </div>
                            <div className="form-group">
                              <label>Cuisine <sup>*</sup></label>
                              <SelectSearch options={this.state.options} labelField="username" searchable={true} searchBy="username" />
                            </div>
                            <div className="form-group">
                              <label>Dietary <sup>*</sup></label>
                              <SelectSearch options={this.state.options} labelField="username" searchable={true} searchBy="username" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Description <sup>*</sup></label>
                        <input placeholder="Write the description, Ingredients, portion size" className="description-field" type="textarea" />
                      </div>
                      <div className="form-group">
                        <label>Ingredients List <sup>*</sup></label>
                        <input placeholder="Write the description, Ingredients, portion size" className="description-field" type="textarea" />
                      </div>
                      <div className="form-group radio-group">
                        <label>Start Date <sup>*</sup></label>
                        <ul>
                          <li><input type="radio" name="date" />Select Date</li>
                          <li><input type="radio" name="date" />Upon request</li>
                        </ul>
                      </div>
                      <div className="form-group">
                        <label>Start Time <sup>*</sup></label>
                        <SelectSearch options={this.state.options} labelField="username" searchable={true} searchBy="username" />
                      </div>
                      <div className="form-group">
                        <label>Class Duration <sup>*</sup></label>
                        <SelectSearch options={this.state.options} labelField="username" searchable={true} searchBy="username" />
                      </div>
                      <div className="form-group">
                        <label>Masterclass Location <sup>*</sup></label>
                        <SelectSearch options={this.state.options} labelField="username" searchable={true} searchBy="username" />
                      </div>
                      <div className="form-group">
                        <label>Ticket/Group Number <sup>*</sup></label>
                        <SelectSearch options={this.state.options} labelField="username" searchable={true} searchBy="username" />
                      </div>
                      <div className="form-group">
                        <label>Price <sup>*</sup></label>
                        <input placeholder="Enter Food title" type="number" />
                      </div>
                      <div className="form-group radio-group">
                        <label>Class-Video Type <sup>*</sup></label>
                        <ul>
                          <li><input type="radio" name="video" />Pre recoded video</li>
                          <li><input type="radio" name="date" />Live stream</li>
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
        <NotificationContainer />
      </div>
    );
  }
}
