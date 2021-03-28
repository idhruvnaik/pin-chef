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
    let apiURL = apiHost + cart_endpoint + "/" + user_id;
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