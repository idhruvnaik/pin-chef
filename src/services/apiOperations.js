import axios from 'axios';
import {reactLocalStorage} from 'reactjs-localstorage';
import { useDispatch } from 'react-redux';
import { addToken, removeToken, signIn} from './actions';

const apiHost = "http://35.175.243.253:8080/api"
const registration_endpoint = "/auth/user"
const login_endpoint = "/auth/login"
const otp_endpoint = "/account/verify-otp"
const feeds_endpoint = "/chef/getAll"
const posts_endpoint = "/post"
const each_chef_endpoint = "/chef/getChefById"
const recipe_endpoint = "/recipe"
const e_class_endpoint = "/e-class"
const food_endpoint = "/food"
const service_endpoint = "/service"
const cart_endpoint = "/cart"
const order_endpoint = "/order"
const food_purchase_endpoint = "/cart/food"
const recipe_purchase_endpoint = "/cart/recipe"
const master_class_purchase_endpoint = "/cart/masterclass"
const followed_chef_endpoint = "/post-follow/user"
const follow_chef_endpoint = "/post-follow"
const like_post_endpoint = "/like"
const unlike_post_endpoint = "/unlike"
const like_recipe_endpoint = "/recipe-like"
const unlike_recipe_endpoint = "/recipe-unlike"
const like_food_endpoint = "/food/like"
const unlike_food_endpoint = "/food/unlike"
const like_service_endpoint = "/service/like"
const unlike_service_endpoint = "/service/unlike"
const post_by_id = "/post-comment/post"
const chef_posts_endpoint = "/post/chef"
const rate_review_endpoint = "/rate-review"
const like_comment_endpoint = "/post-comment/like"
const unlike_comment_endpoint = "/post-comment/unlike"
const recipe_by_chef_endpoint = "/recipe/chef"
const food_by_chef_endpoint = "/food/chef"
const service_by_chef_endpoint = "/service/chef"
const eclass_by_chef_endpoint = "/e-class/chef"
const comment_endpoint = "/post-comment"
const feed_image_endpoint = "/post-images"


async function make_rest_call(apiURL, method, body, headers){
    let res = await axios(
        {
            url:apiURL,
            method:method,
            headers: headers,
            data: body
        }
    )
    if(res.status == 200){
        return res.data;
    }else{
        return false;
    }
}

export const verifyLogin= async(username, password, remember)=>{
    let apiURL= apiHost + login_endpoint;
    var data = {
        "password": password,
        "user_name": username
    };
    try{
        let resp = await make_rest_call(apiURL, 'POST', data, {});
        return resp;
    } catch (error){
        return {
            status: false,
            message: error.message
        };
    }
}

export const addTokenToState=(token_details)=>{
    return dispatch =>{
        dispatch(addToken(token_details))
    }
}

export const registerUser= async(data)=>{
    let apiURL= apiHost + registration_endpoint;
    try{
        let resp = await make_rest_call(apiURL, 'POST', data, {});
        return resp;
    } catch (error){
        console.log(error);
    }
}

export const verifyOtp= async(username, otp, token)=>{
    let apiURL= apiHost + otp_endpoint;
    var headers = {
        "Authorization": "Bearer " + token
    };
    var data = {
        "otp": otp,
        "user_name": username
    };
    try{
        let resp = await make_rest_call(apiURL, 'POST', data, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const getAllChef = async(user_id, token)=>{
    let apiURL = apiHost + feeds_endpoint + "/" + user_id;
    var headers = {
        "Authorization": "Bearer " + token
    };
    try{
        let resp = await make_rest_call(apiURL, 'GET', {}, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const getAllPosts = async(user_id, token)=>{
    let apiURL = apiHost + posts_endpoint + "/" + user_id;
    var headers = {
        "Authorization": "Bearer " + token
    };
    try{
        let resp = await make_rest_call(apiURL, 'GET', {}, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const getAllRecipes = async(user_id, token)=>{
    let apiURL = apiHost + recipe_endpoint + "/" + user_id;
    var headers = {
        "Authorization": "Bearer " + token
    };
    try{
        let resp = await make_rest_call(apiURL, 'GET', {}, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const getAllRecipesByChef = async(user_id, token)=>{
    let apiURL = apiHost + recipe_by_chef_endpoint + "/" + user_id;
    var headers = {
        "Authorization": "Bearer " + token
    };
    try{
        let resp = await make_rest_call(apiURL, 'GET', {}, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const getAllMasterClasses = async(token)=>{
    let apiURL = apiHost + e_class_endpoint;
    var headers = {
        "Authorization": "Bearer " + token
    };
    try{
        let resp = await make_rest_call(apiURL, 'GET', {}, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const getAllMasterClassesByChef = async(user_id, token)=>{
    let apiURL = apiHost + eclass_by_chef_endpoint + "/" + user_id;
    var headers = {
        "Authorization": "Bearer " + token
    };
    try{
        let resp = await make_rest_call(apiURL, 'GET', {}, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const getAllFood = async(user_id, token)=>{
    let apiURL = apiHost + food_endpoint + "/" + user_id;
    var headers = {
        "Authorization": "Bearer " + token
    };
    try{
        let resp = await make_rest_call(apiURL, 'GET', {}, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const getAllFoodByFood = async(user_id, token)=>{
    let apiURL = apiHost + food_by_chef_endpoint + "/" + user_id;
    var headers = {
        "Authorization": "Bearer " + token
    };
    try{
        let resp = await make_rest_call(apiURL, 'GET', {}, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const getAllServices = async(user_id, token)=>{
    let apiURL = apiHost + service_endpoint + "/" + user_id;
    var headers = {
        "Authorization": "Bearer " + token
    };
    try{
        let resp = await make_rest_call(apiURL, 'GET', {}, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const getAllServicesByChef = async(user_id, token)=>{
    let apiURL = apiHost + service_by_chef_endpoint + "/" + user_id;
    var headers = {
        "Authorization": "Bearer " + token
    };
    try{
        let resp = await make_rest_call(apiURL, 'GET', {}, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const getAllFoodPurchases = async(user_id, token)=>{
    let apiURL = apiHost + food_purchase_endpoint + "/" + user_id;
    var headers = {
        "Authorization": "Bearer " + token
    };
    try{
        let resp = await make_rest_call(apiURL, 'GET', {}, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const getAllRecipePurchases = async(user_id, token)=>{
    let apiURL = apiHost + recipe_purchase_endpoint + "/" + user_id;
    var headers = {
        "Authorization": "Bearer " + token
    };
    try{
        let resp = await make_rest_call(apiURL, 'GET', {}, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const getAllMasterClassPurchases = async(user_id, token)=>{
    let apiURL = apiHost + master_class_purchase_endpoint + "/" + user_id;
    var headers = {
        "Authorization": "Bearer " + token
    };
    try{
        let resp = await make_rest_call(apiURL, 'GET', {}, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const getAllPurchases = async(user_id, token)=>{
    let apiURL = apiHost + order_endpoint + "/" + user_id;
    var headers = {
        "Authorization": "Bearer " + token
    };
    try{
        let resp = await make_rest_call(apiURL, 'GET', {}, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const getAllFollowedChef = async(user_id, token)=>{
    let apiURL = apiHost + followed_chef_endpoint + "/" + user_id;
    var headers = {
        "Authorization": "Bearer " + token
    };
    try{
        let resp = await make_rest_call(apiURL, 'GET', {}, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const getChefById = async(chef_id, token)=>{
    let apiURL = apiHost + each_chef_endpoint + '/' + chef_id;
    var headers = {
        "Authorization": "Bearer " + token
    };
    try{
        let resp = await make_rest_call(apiURL, 'GET', {}, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const likePost = async(user_id, post_id, token)=>{
    let apiURL = apiHost + like_post_endpoint;
    var headers = {
        "Authorization": "Bearer " + token
    };
    var data = {
        post_id: post_id,
        user_id: user_id
    }
    try{
        let resp = await make_rest_call(apiURL, 'POST', data, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const unlikePost = async(user_id, post_id, token)=>{
    let apiURL = apiHost + unlike_post_endpoint;
    var headers = {
        "Authorization": "Bearer " + token
    };
    var data = {
        post_id: post_id,
        user_id: user_id
    }
    try{
        let resp = await make_rest_call(apiURL, 'POST', data, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const likeRecipe = async(user_id, recipe_id, token)=>{
    let apiURL = apiHost + like_recipe_endpoint;
    var headers = {
        "Authorization": "Bearer " + token
    };
    var data = {
        recipe_id: recipe_id,
        user_id: user_id
    }
    try{
        let resp = await make_rest_call(apiURL, 'POST', data, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const unlikeRecipe = async(user_id, recipe_id, token)=>{
    let apiURL = apiHost + unlike_recipe_endpoint;
    var headers = {
        "Authorization": "Bearer " + token
    };
    var data = {
        recipe_id: recipe_id,
        user_id: user_id
    }
    try{
        let resp = await make_rest_call(apiURL, 'POST', data, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const likeFood = async(user_id, food_id, token)=>{
    let apiURL = apiHost + like_food_endpoint;
    var headers = {
        "Authorization": "Bearer " + token
    };
    var data = {
        food_id: food_id,
        user_id: user_id
    }
    try{
        let resp = await make_rest_call(apiURL, 'POST', data, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const unlikeFood = async(user_id, food_id, token)=>{
    let apiURL = apiHost + unlike_food_endpoint;
    var headers = {
        "Authorization": "Bearer " + token
    };
    var data = {
        food_id: food_id,
        user_id: user_id
    }
    try{
        let resp = await make_rest_call(apiURL, 'POST', data, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const likeService = async(user_id, service_id, token)=>{
    let apiURL = apiHost + like_service_endpoint;
    var headers = {
        "Authorization": "Bearer " + token
    };
    var data = {
        service_id: service_id,
        user_id: user_id
    }
    try{
        let resp = await make_rest_call(apiURL, 'POST', data, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const unlikeService = async(user_id, service_id, token)=>{
    let apiURL = apiHost + unlike_service_endpoint;
    var headers = {
        "Authorization": "Bearer " + token
    };
    var data = {
        service_id: service_id,
        user_id: user_id
    }
    try{
        let resp = await make_rest_call(apiURL, 'POST', data, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const followChef = async(user_id, chef_id, token)=>{
    let apiURL = apiHost + follow_chef_endpoint;
    var headers = {
        "Authorization": "Bearer " + token
    };
    var data = {
        chef_id: chef_id,
	    user_id: user_id
    }
    try{
        let resp = await make_rest_call(apiURL, 'POST', data, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const unfollowChef = async(user_id, chef_id, token)=>{
    let apiURL = apiHost + follow_chef_endpoint;
    var headers = {
        "Authorization": "Bearer " + token
    };
    var data = {
        chef_id: chef_id,
	    user_id: user_id
    }
    try{
        let resp = await make_rest_call(apiURL, 'DELETE', data, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const getCommentsByPostID = async(post_id, user_id, token)=>{
    let apiURL = apiHost + post_by_id + "/" + post_id + "/" + user_id;
    var headers = {
        "Authorization": "Bearer " + token
    };
    try{
        let resp = await make_rest_call(apiURL, 'GET', {}, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const getAllPostsByChefID = async(chef_id, token)=>{
    let apiURL = apiHost + chef_posts_endpoint + "/" + chef_id;
    var headers = {
        "Authorization": "Bearer " + token
    };
    try{
        let resp = await make_rest_call(apiURL, 'GET', {}, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const getRattingsChefID = async(chef_id, token)=>{
    let apiURL = apiHost + rate_review_endpoint + "/" + chef_id;
    var headers = {
        "Authorization": "Bearer " + token
    };
    try{
        let resp = await make_rest_call(apiURL, 'GET', {}, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const addLikeToComment = async(user_id, comment_id, token)=>{
    let apiURL = apiHost + like_comment_endpoint;
    var headers = {
        "Authorization": "Bearer " + token
    };
    var data = {
        comment_id: comment_id,
	    user_id: user_id
    }
    try{
        let resp = await make_rest_call(apiURL, 'POST', data, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const removeLikeToComment = async(user_id, comment_id, token)=>{
    let apiURL = apiHost + unlike_comment_endpoint;
    var headers = {
        "Authorization": "Bearer " + token
    };
    var data = {
        comment_id: comment_id,
	    user_id: user_id
    }
    try{
        let resp = await make_rest_call(apiURL, 'POST', data, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const addCommentToPost = async(post_id, commenter_id, comment, token)=>{
    let apiURL = apiHost + comment_endpoint;
    var headers = {
        "Authorization": "Bearer " + token
    };
    var data = {
        post_id: post_id,
	    commenter_id: commenter_id,
        comment: comment
    }
    try{
        let resp = await make_rest_call(apiURL, 'POST', data, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const AddPost = async(chef_id, description, location, token)=>{
    let apiURL = apiHost + posts_endpoint;
    var headers = {
        "Authorization": "Bearer " + token
    };
    var data = {
        chef_id: chef_id,
	    description: description,
        location: location
    }
    try{
        let resp = await make_rest_call(apiURL, 'POST', data, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const AddImageToPost = async(post_id, image, token)=>{
    let apiURL = apiHost + feed_image_endpoint + "/" + post_id;
    var headers = {
        "Authorization": "Bearer " + token
    };
    var bodyFormData = new FormData();
    bodyFormData.append('upload', image);
    try{
        let resp = await make_rest_call(apiURL, 'POST', bodyFormData, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}

export const DeleteMasterClass = async(class_id, token)=>{
    let apiURL = apiHost + e_class_endpoint + "/" + class_id;
    var headers = {
        "Authorization": "Bearer " + token
    };
    try{
        let resp = await make_rest_call(apiURL, 'DELETE', {}, headers);
        return resp;
    }
    catch(err){
        return {
            status: false,
            message: err.message
        }
    }
}