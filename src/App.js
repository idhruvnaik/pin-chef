// import logo from './logo.svg';
import './App.css';
import Onboarding from './components/onboarding'
import { BrowserRouter as Router, Switch, Route, /*Link*/ } from 'react-router-dom';
import UserFeeds from './components/userFeeds'
import UserReg from './components/userReg'
import VerifyOtp from './components/otpVerify'
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
              <Route path='/VerifyOTP' component={VerifyOtp} />
              <Route path='/User' component={UserReg} />
              <Route path='/Homepage' component={UserFeeds} />
              <Route path='/' component={Onboarding} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
