import React, { useState } from 'react';
// import { withRouter } from 'react-router-dom';
// import { useSpring, animated } from "react-spring";
import { addTokenToState } from '../services/apiOperations';
import { connect } from "react-redux";
// import { addToken } from "../services/actions";
// import Popup from 'reactjs-popup';
// import {reactLocalStorage} from 'reactjs-localstorage';
// import './userReg.css';
// import Email from '../assets/png_icons/Email icon.png';
// import showPassword from '../assets/png_icons/Show password icon.png';
// import HidePassword from '../assets/png_icons/Hide password icon.png';
// import Password from '../assets/png_icons/Password icon.png'
import $ from 'jquery';
// import 'reactjs-popup/dist/index.css';


const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    addTokenToState:(token_details) => dispatch(addTokenToState(token_details))
})

export default class ade extends React.Component {
    constructor(props){
        super(props);
        this.get_token = this.get_token.bind(this);
        this.token_obj = new GetToken();
    }

    get_token(){
        console.log("from get token");
        console.log(this);
        this.token_obj.fetch_token();
    }
}

class GetToken extends React.Component {
    constructor(props){
        super(props);
        this.fetch_token = this.fetch_token.bind(this);
    }

    fetch_token(){
        console.log("from fetch token");
        console.log(this);
    }
}

connect(
    mapStateToProps, 
    mapDispatchToProps
)(GetToken);