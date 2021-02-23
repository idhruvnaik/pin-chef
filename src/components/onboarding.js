import React from 'react';
// import {StyleSheet, Text, View, Image, Platform, Pressable} from 'react-native';
// import AppIntroSlider from 'react-native-app-intro-slider';
// import LinearGradient from 'react-native-linear-gradient';
// import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
// import Logo from '../../assets/svg/Logo';
// import OnboardingChef1 from '../../assets/svg/OnboardingChef1';
import OnboardingChef2 from '../assets/svg/OnboardingChef2';
import OnboardingChef3 from '../assets/svg/OnboardingChef3';
import OnboardingChef1 from '../assets/svg/OnboardingChef1'
import OnboardingChef4 from '../assets/svg/OnboardingChef4';
// import OnboardingUser1 from '../../assets/svg/OnboardingUser1';
// import OnboardingUser2 from '../../assets/svg/OnboardingUser2';
// import OnboardingUser3 from '../../assets/svg/OnboardingUser3';
// import OnboardingUser4 from '../../assets/svg/OnboardingUser4';
// import GlobalStyles from '../../Style/GlobalStyles';
import './onboarding.css'

const user = [
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

export default function Onboarding() {
  return (
    <div class="onboarding-portal">
      <div class="chef-portal" id="1">
        <OnboardingChef1 />
      </div>
      <div class="chef-portal">
        <OnboardingChef2 />
      </div>
      <div class="chef-portal">
        <OnboardingChef3 />
      </div>
      <div class="chef-portal">
        <OnboardingChef4 />
      </div>
    </div>
  );
}