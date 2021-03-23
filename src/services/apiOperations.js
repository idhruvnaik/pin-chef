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
const like_endpoint = "/like"
const recipe_endpoint = "/recipe"
const e_class_endpoint = "/e-class"
const food_endpoint = "/food"
const service_endpoint = "/service"


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

// export const abc=()=>{
//     return {
//         "id": "603ddda4df7c6f0d9c8cc882",
//         "user_name": "dhaval_123",
//         "auth_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJkaGF2YWxfMTIzIiwiaWF0IjoxNjE1Nzg5MjE2LCJleHAiOjE2NDczMjUyMTZ9.NdAC-KlUlhw01GwWRUCWu5BJmD8Jz5oAPRIqkGqXqko",
//         "roleID": 2,
//         "profile": false
//     }
// }

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
// export default function Dispatch_state(){
//     const dispatch = useDispatch();
//     dispatch(addToken());
// }

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

export const getAllChef = async(token)=>{
    let apiURL = apiHost + feeds_endpoint;
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

export const getAllPosts = async(token)=>{
    let apiURL = apiHost + posts_endpoint;
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

export const getAllRecipes = async(token)=>{
    let apiURL = apiHost + recipe_endpoint;
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

export const getAllFood = async(token)=>{
    let apiURL = apiHost + food_endpoint;
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

export const getAllServices = async(token)=>{
    let apiURL = apiHost + service_endpoint;
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

export const likePost = async(post_id, token)=>{
    let apiURL = apiHost + like_endpoint;
    var headers = {
        "Authorization": "Bearer " + token
    };
    var data = {
        post_id: post_id
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