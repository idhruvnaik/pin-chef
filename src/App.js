// import logo from './logo.svg';
import './App.css';
// import onboarding from './screens/authscreens/onboarding';
import Onboarding from './components/onboarding'
// import Onboarding from "./components/OnboardingChef"

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
      <div className="wrapper">
        <h1>onboarding page</h1>
        <Onboarding />
      </div>
    </div>
  );
}

export default App;
