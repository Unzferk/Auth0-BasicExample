import logo from "./logo.svg";
import "./App.css";

import Login from "./Login";
import Logout from "./Logout";
import Profile from "./Profile";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p />

        <Profile />

        <p />
        <div>
          <Login />
          <Logout />
        </div>
      </header>
    </div>
  );
}

export default App;
