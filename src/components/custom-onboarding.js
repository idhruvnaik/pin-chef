import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BrowserRouter as Router, Switch, Route, /*Link*/ } from 'react-router-dom';
// import {Platform} from '../../node_modules/react-native';
// import AppIntroSlider from 'react-native-app-intro-slider';
// import LinearGradient from 'react-native-linear-gradient';
// import {RFValue} from './onboard';
// import Logo from '../../assets/svg/Logo';
import CommonComponents from './commonComponents'
import CommonHeader from './commonHeader'
import CommonFooter from './commonFooter'
import User1 from '../assets/svg/User onbaording 1 image.svg'
import User2 from '../assets/svg/user Onboarding 2 image.svg'
import User3 from '../assets/svg/user Onboarding 3 image.svg'
import User4 from '../assets/svg/User Onboarding 4 image.svg'
import chef1 from '../assets/svg/Chef Onboarding 1.svg'
import chef2 from '../assets/svg/Chef 2nd onboarding icon.svg'
import chef3 from '../assets/svg/Chef Onboarding 3.svg'
import chef4 from '../assets/svg/Chefs onboarding 4.svg'
import Carousel from 'react-elastic-carousel';

import $ from 'jquery';
import './customonboarding.scss'


const users = [
  {
    title: 'Title 1',
    text:
      'Always busy with something? Can’t eat anything healthy and fresh? Find a chef close to you and get fresh & yummy food with a couple clicks.',
    bg: ['#D9D9D9', '#464040'],
  },
  {
    title: 'Title 2',
    text:
      'If you want to impress or surprise your loved ones with uniqe food, our Chefs are there to help you with their various services such us; cook at your place, pick up, or cook live with chef and more.',
    bg: ['#D9D9D9', '#464040'],
  },
  {
    title: 'Title 3',
    text:
      'Search for Chefs or directly the cuisine or service you want nearby you or any other location. You can follow or save your favorite chefs and food for easy access.',
    bg: ['#D9D9D9', '#464040'],
  },
  {
    title: 'Title 4',
    text:
      'Find the item you want, add to cart, choose the options and securely pay the chef. If you have any questions or doubts, just chat with the Chef.',
    bg: ['#D9D9D9', '#464040'],
  },
];

const chef = [
  {
    title: 'Title 1',
    text:
      'You can be a professional Chef or home Chef that has many years experience and everyone loves your food. You can all make money.',
    bg: ['#D9D9D9', '#464040'],
  },
  {
    title: 'Title 2',
    text:
      'Create your chef profile and then enter all accurate info about yourself and what services you provide.',
    bg: ['#D9D9D9', '#464040'],
  },
  {
    title: 'Title 3',
    text:
      'Add any pictures to showcase who you are in your profile & daily posts. Add the services & the food you will be selling with all the details and prices. ',
    bg: ['#D9D9D9', '#464040'],
  },
  {
    title: 'Title 4',
    text:
      'You also can create and sell e-masterclasses with tickets. No commissions or hidden fees, get paid directly to your bank account.',
    bg: ['#D9D9D9', '#464040'],
  },
];

export default class CustomOnboarding extends Component {  
  constructor(props){
    super(props);
    this.state = {
        otp: '' 
    };
    this.start_flow = this.start_flow.bind(this);
    this.change_css = this.change_css.bind(this);
    this.change_wrapper = this.change_wrapper.bind(this);
    this.goto = this.goto.bind(this);
    this.breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 1024, itemsToShow: 2, itemsToScroll: 2 },
        { width: 1200, itemsToShow: 4, itemsToScroll: 2 }
    ];
  }
  start_flow() {
    if($('.start button')[0].innerHTML == "START"){
      this.props.history.push(
        {            
            pathname: "/Homepage"
        }
      );
    } else{
      this.goto();
    }
  };

  change_css(currentItem, pageIndex){
    var child_count = $('.rec-pagination')[0].childElementCount;
    if(pageIndex == (child_count - 1)){
      $('.start button')[0].innerHTML = "START";
    } else{
      $('.start button')[0].innerHTML = "SKIP";
    }
  }

  goto() {
    this.carousel.goTo(7);
  }

  change_wrapper(){
    $('.rec-item-wrapper').css("padding-top", "10px");
    $('.rec-item-wrapper').css("padding-bottom", "10px");
    $('.custom-onboard .custom-onboarding-portal .rec-carousel').css("height", "100%");
  }

  render() {
    return (
      <div className="outer-layout custom-onboard" style={{background: "linear-gradient( 184deg, white,#464040 92%)"}} onLoad={this.change_wrapper}>
        <CommonHeader />
        <Carousel ref={ref => (this.carousel = ref)}
          className="custom-onboarding-portal" 
          breakPoints={this.breakPoints} 
          showArrows={false} 
          initialActiveIndex={0} 
          enableMouseSwipe={true} 
          autoTabIndexVisibleItems={true} 
          focusOnSelect={true}
          pagination={true}
        //   itemsToShow={2}
          onChange={(currentItem, pageIndex) => this.change_css(currentItem, pageIndex)}
          // onResize={currentBreakPoint => console.log(currentBreakPoint, "current breakpoint")}
          onNextStart={(currentItem, nextItem) =>
            console.log(currentItem, nextItem, "from onnextstart of slider")
          }
        >
          <div className="chef-portal">
            <img src={User1}></img>
            <div className="content">
            {users.map(function(item) {
                if (item.title == "Title 1"){
                  return <strong>{item.text}</strong>;
                }
            })}
            </div>
          </div>
          <div className="chef-portal">
            <img src={User2}></img>
            <div className="content">
            {users.map(function(item) {
                if (item.title == "Title 2"){
                  return <strong>{item.text}</strong>;
                }
            })}
            </div>
          </div>
          <div className="chef-portal extra-large-content">
            <img src={User3}></img>
            <div className="content">
            {users.map(function(item) {
                if (item.title == "Title 3"){
                  return <strong>{item.text}</strong>;
                }
            })}
            </div>
          </div>
          <div className="chef-portal large-content">
            <img src={User4}></img>
            <div className="content">
            {users.map(function(item) {
                if (item.title == "Title 4"){
                  return <strong>{item.text}</strong>;
                }
            })}
            </div>
          </div>  

          <div className="chef-portal">
            <img src={chef1}></img>
            <div className="content">
            {chef.map(function(item) {
                if (item.title == "Title 1"){
                  return <strong>{item.text}</strong>;
                }
            })}
            </div>
          </div>
          <div className="chef-portal ">
            <img src={chef2}></img>
            <div className="content">
            {chef.map(function(item) {
                if (item.title == "Title 2"){
                  return <strong>{item.text}</strong>;
                }
            })}
            </div>
          </div>
          <div className="chef-portal">
            <img src={chef3}></img>
            <div className="content">
            {chef.map(function(item) {
                if (item.title == "Title 3"){
                  return <strong>{item.text}</strong>;
                }
            })}
            </div>
          </div>
          <div className="chef-portal extra-large-content">
            <img src={chef4}></img>
            <div className="content">
            {chef.map(function(item) {
                if (item.title == "Title 4"){
                  return <strong>{item.text}</strong>;
                }
            })}
            </div>
          </div>
        </Carousel>
        <div className="start">
          <button type="button" onClick={this.start_flow}>SKIP</button>
        </div>
      </div>
    );
  }
}