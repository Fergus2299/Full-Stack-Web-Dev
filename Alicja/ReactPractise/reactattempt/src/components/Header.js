import { Component } from "react";
import "./HeaderStyles.css";
import HeaderImg from "../assets/header.png";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-img">
          <img className="header-pic" alt="" src={HeaderImg} />
        </div>
      </header>
    );
  }
}

export default Header;
