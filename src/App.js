// import logo from './logo.svg';
import './App.css';
import Onboarding from './components/onboarding'
import { BrowserRouter as Router, Switch, Route, /*Link*/ } from 'react-router-dom';
import UserFeeds from './components/userFeeds'
import UserReg from './components/userReg'
import VerifyOtp from './components/otpVerify'
import ChefComponents from './components/chefComponents/chefHome'
import ForgotPassword from './components/forgotPassword'
import ResetPassword from './components/resetPassword'
import UserProfile from './components/userProfile'
import ChefProfile from './components/chefComponents/chefProfile'
import GetLocation from './components/getLocation'
import CustomOnboarding from './components/custom-onboarding'
import CropImage from './components/cropImages'
import Terms from './components/termsPollicy'
import $ from 'jquery';
// import CommonComponents from './components/commonComponents'

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <div className="wrapper">
        <Onboarding />
      </div> */}
      <Router>
          <Switch>
              <Route path='/Chef/Createprofile' component={ChefProfile} />
              <Route path='/Chef/Home' component={ChefComponents} />
              <Route path='/VerifyOTP' component={VerifyOtp} />
              <Route path='/User/CreateProfile' component={UserProfile} />
              <Route path='/User/ResetPassword' component={ResetPassword} />
              <Route path='/User/ForgotPassword' component={ForgotPassword} />
              <Route path='/Location' component={GetLocation} />
              <Route path='/terms-policy' component={Terms} />
              <Route path='/User' component={UserReg} />
              <Route path='/Homepage' component={UserFeeds} />
              <Route path='/CustomOnboard' component={CustomOnboarding} />
              <Route path='/CropImage' component={CropImage} />
              <Route path='/' component={CustomOnboarding} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
