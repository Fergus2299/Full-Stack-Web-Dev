import { Component } from "react";
import "./WelcomeStyles.css";

class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <div className="welcome-text">
          <p>Welcome to the IXN Management System</p>
          <button>Log out</button>
        </div>
      </div>
    );
  }
}

export default Welcome;
