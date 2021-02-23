// import React from 'react';
// // import {StyleSheet, Text, View, Image, Platform, Pressable} from 'react-native';
// // import AppIntroSlider from 'react-native-app-intro-slider';
// // import LinearGradient from 'react-native-linear-gradient';
// import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
// import Logo from '../assets/svg/Logo';
// import OnboardingChef1 from '../assets/svg/OnboardingChef1';
// import OnboardingChef2 from '../assets/svg/OnboardingChef2';
// import OnboardingChef3 from '../assets/svg/OnboardingChef3';
// import OnboardingChef4 from '../assets/svg/OnboardingChef4';

// // import OnboardingUser1 from '../assets/svg/OnboardingUser1';
// // import OnboardingUser2 from '../assets/svg/OnboardingUser2';
// // import OnboardingUser3 from '../assets/svg/OnboardingUser3';
// // import OnboardingUser4 from '../assets/svg/OnboardingUser4';
// import GlobalStyles from '../Style/GlobalStyles';

// const user = [
//   {
//     title: 'Title 1',
//     text:
//       'Always busy with something? Can’t eat anything healthy and fresh? Find a chef close to you and get fresh & yummy food with a couple clicks.',
//     bg: ['#D9D9D9', '#464040'],
//   },
//   {
//     title: 'Title 2',
//     text:
//       'If you want to impress or surprise your loved ones with uniqe food, our Chefs are there to help you with their various services such us; cook at your place, pick up, or cook live with chef and more.',
//     bg: ['#D9D9D9', '#464040'],
//   },
//   {
//     title: 'Title 3',
//     text:
//       'Search for Chefs or directly the cuisine or service you want nearby you or any other location. You can follow or save your favorite chefs and food for easy access.',
//     bg: ['#D9D9D9', '#464040'],
//   },
//   {
//     title: 'Title 4',
//     text:
//       'Find the item you want, add to cart, choose the options and securely pay the chef. If you have any questions or doubts, just chat with the Chef.',
//     bg: ['#D9D9D9', '#464040'],
//   },
// ];

// const chef = [
//   {
//     title: 'Title 1',
//     text:
//       'You can be a professional Chef or home Chef that has many years experience and everyone loves your food. You can all make money.',
//     bg: ['#D9D9D9', '#464040'],
//   },
//   {
//     title: 'Title 2',
//     text:
//       'Create your chef profile and then enter all accurate info about yourself and what services you provide.',
//     bg: ['#D9D9D9', '#464040'],
//   },
//   {
//     title: 'Title 3',
//     text:
//       'Add any pictures to showcase who you are in your profile & daily posts. Add the services & the food you will be selling with all the details and prices. ',
//     bg: ['#D9D9D9', '#464040'],
//   },
//   {
//     title: 'Title 4',
//     text:
//       'You also can create and sell e-masterclasses with tickets. No commissions or hidden fees, get paid directly to your bank account.',
//     bg: ['#D9D9D9', '#464040'],
//   },
// ];

// export default class Onboarding extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       showRealApp: false,
//       user_type: 'chef',
//     };
//   }

//   _renderItem = ({item}) => {
//     return (
//       <lineargradient
//         style={[
//           styles.mainContent,
//           {
//             flex: 1,
//           },
//         ]}
//         colors={item.bg}
//         start={{x: 0, y: 0.1}}
//         end={{x: 0.1, y: 1}}>
//         {item.title === 'Title 1' ? (
//           <view style={styles.image}>
//             <view
//               style={{
//                 paddingVertical: RFValue(50),
//                 alignItems: 'center',
//               }}>
//               <Logo />
//             </view>
//             {this.state.user_type == 'user' ? (
//               <OnboardingUser1 />
//             ) : (
//               <OnboardingChef1 />
//             )}
//             <text style={styles.text}>{item.text}</text>
//           </view>
//         ) : item.title === 'Title 2' ? (
//           <view style={styles.image}>
//             <view
//               style={{
//                 paddingVertical: RFValue(50),
//                 alignItems: 'center',
//               }}>
//               <Logo />
//             </view>
//             {this.state.user_type == 'user' ? (
//               <OnboardingUser2 />
//             ) : (
//               <OnboardingChef2 />
//             )}
//             <text style={styles.text}>{item.text}</text>
//           </view>
//         ) : item.title === 'Title 3' ? (
//           <view style={styles.image}>
//             <view
//               style={{
//                 paddingVertical: RFValue(50),
//                 alignItems: 'center',
//               }}>
//               <Logo />
//             </view>
//             {this.state.user_type == 'user' ? (
//               <OnboardingUser3 />
//             ) : (
//               <OnboardingChef3 />
//             )}
//             <text style={styles.text}>{item.text}</text>
//           </view>
//         ) : item.title === 'Title 4' ? (
//           <view style={styles.image}>
//             <view
//               style={{
//                 paddingVertical: RFValue(50),
//                 alignItems: 'center',
//               }}>
//               <Logo />
//             </view>
//             {this.state.user_type == 'user' ? (
//               <OnboardingUser4 />
//             ) : (
//               <OnboardingChef4 />
//             )}
//             <text style={styles.text}>{item.text}</text>
//           </view>
//         ) : null}
//       </lineargradient>
//     );
//   };

//   _renderDoneButton = () => {
//     return (
//       <pressable onPress = {()=> this.props.navigation.navigate('ChefMain')}>
//         <text style={styles.buttonText}>Start</text>
//       </pressable>
//     );
//   };

//   _renderNextButton = () => {
//     return <text style={styles.buttonText}>Next</text>;
//   };

//   _renderSkipButton = () => {
//     return (
//       <text
//         style={{
//           marginTop: RFValue(10),
//           fontFamily: GlobalStyles.font.fontFamilyBold,
//           fontSize: RFValue(18),
//           color: GlobalStyles.color.white,
//           fontWeight: platform.OS === 'android' ? 'bold' : '100',
//         }}>
//         Skip
//       </text>
//     );
//   };

//   render() {
//     return (
//       <view style={{flex: 1}}>
//         {/* <AppIntroSlider
//           keyExtractor={(item) => item.title}
//           renderItem={this._renderItem}
//           data={this.state.user_type == 'user' ? user : chef}
//           renderSkipButton={this._renderSkipButton}
//           renderNextButton={this._renderNextButton}
//           renderDoneButton={this._renderDoneButton}
//           showSkipButton
//         /> */}
//       </view>
//     );
//   }
// }

// const styles = styleSheet.create({
//   mainContent: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   image: {
//     width: 320,
//     height: 320,
//   },
//   text: {
//     color: 'rgba(255, 255, 255, 0.8)',
//     backgroundColor: 'transparent',
//     textAlign: 'center',
//     paddingVertical: RFPercentage(5),
//     fontSize: RFValue(15),
//     fontFamily: GlobalStyles.font.fontFamilyBold,
//     fontWeight: platform.OS === 'android' ? 'bold' : '100',
//   },
//   title: {
//     color: 'white',
//     backgroundColor: 'transparent',
//     textAlign: 'center',
//   },
//   buttonText: {
//     marginTop: RFValue(10),
//     fontFamily: GlobalStyles.font.fontFamilyBold,
//     fontSize: RFValue(18),
//     color: GlobalStyles.color.yellow,
//     fontWeight: platform.OS === 'android' ? 'bold' : '100',
//   },
// });
