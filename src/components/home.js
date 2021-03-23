import React, { Component } from 'react';
import ReactStars from "react-rating-stars-component";
import UserPhoto from '../assets/images/photo2.png';
import UserPost from '../assets/images/bannerFeed2.png';
import PostMenu from '../assets/png_icons/Post menu icon@2x.png';
import CommentIcon from '../assets/png_icons/Comment icon@2x.png';
import EmptyHeart from '../assets/png_icons/Empty heart@2x.png';
import FullHeart from '../assets/png_icons/likeIcon.png'
import PostShare from '../assets/png_icons/Post Share count@2x.png';
import Time from '../assets/png_icons/time recipe@2x.png';
import Recipe_time from '../assets/png_icons/time recipe.png';
import Food from '../assets/png_icons/mexicanFood.png'

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
        this.initialize_feeds = this.initialize_feeds.bind(this);
        this.initialize_recipes = this.initialize_recipes.bind(this);
        this.like_post = this.like_post.bind(this);
        this.render = this.render.bind(this);
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
                post_content: "It was great night as we were at catering for a wedding. Thank you all of the staff that helped us to make event such a wonderful and delicious."
            },
            {
                images: [
                    "http://52.87.176.237:8080/public?path=C:/Users/Administrator/Desktop/pinChef_Backend/uploads/6052f02cf58dd11d9c888c8b/images/post/6052f524f58dd11d9c888c8f-1616049452640.png"
                ],
                likes: 4,
                _id: "6052f524f58dd11d9c888c8f",
                chef_id: "6052f02cf58dd11d9c888c8b",
                description: "hello 123",
                location: "surat",
                createdAt: "2021-03-18T06:37:24.989Z",
                updatedAt: "2021-03-18T06:38:54.166Z",
                __v: 1
            }
        ]
        this.state = {
            feeds: [],
            recipes: []
        }
        

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
                post_content: "It was great night as we were at catering for a wedding. Thank you all of the staff that helped us to make event such a wonderful and delicious."
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
                post_content: "It was great night as we were at catering for a wedding. Thank you all of the staff that helped us to make event such a wonderful and delicious."
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

    async initialize_feeds(){
        let post_result = await getAllPosts(this.token);
        let chef_result = await getAllChef(this.token);
        if(chef_result){
            if(chef_result.status == false){
                console.log(chef_result.message);
            }
        }
        if(post_result){
            if(post_result.status == false){
                console.log(post_result.message);
            }else{
                post_result.map(function (item) {
                    let chef_details = chef_result.find(chef => chef._id == item.chef_id);
                    item.chef = chef_details;
                })
            }
        }
        // this.feede = post_result;
        console.log(post_result);
        this.setState({
            feeds: [post_result[13]]});
    }

    async initialize_recipes(){
        let recipe_result = await getAllRecipes(this.token);
        let chef_result = await getAllChef(this.token);
        if(chef_result){
            if(chef_result.status == false){
                console.log(chef_result.message);
            }
        }
        if(recipe_result){
            if(recipe_result.status == false){
                console.log(recipe_result.message);
            }else{
                recipe_result.map(function (item) {
                    let chef_details = chef_result.find(chef => chef._id == item.chef_id);
                    item.chef = chef_details;
                })
            }
        }
        this.setState({
            recipes: [recipe_result[13]]});
    }

    async initialize_e_master_class(){
        let master_class_result = await getAllMasterClasses(this.token);
        let chef_result = await getAllChef(this.token);
        if(chef_result){
            if(chef_result.status == false){
                console.log(chef_result.message);
            }
        }
        if(master_class_result){
            if(master_class_result.status == false){
                console.log(master_class_result.message);
            }else{
                master_class_result.map(function (item) {
                    let chef_details = chef_result.find(chef => chef._id == item.chef_id);
                    item.chef = chef_details;
                })
            }
        }
        this.setState({
            recipes: [master_class_result[13]]});
    }

    componentDidMount() {
        this.initialize_feeds();
        this.initialize_recipes();
    }
    like_post(e){
        console.log(e.target.id);
        likePost(e.target.id, this.token);
        this.initialize_feeds();
    }
    render() {
        return (
            // 
            <div></div>
        );
    }
}