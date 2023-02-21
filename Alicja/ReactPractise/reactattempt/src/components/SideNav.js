import { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./SideNavStyles.css";
import ProjectsPic from "../assets/projects.jpeg";

class SideNav extends Component {
  render() {
    return (
      <div className="SideNav">
        <ul className="side-nav-menu">
          {MenuItems.map((item, index) => {
            if (item.title !== "Home Page") {
              return (
                <div className="side-div">
                  <div className="link-div">
                    <Link className={item.cName} to={item.url}>
                      {item.title}
                    </Link>
                  </div>
                  <div className="img-container">
                    <img className="side-img" alt="" src={ProjectsPic} />
                  </div>
                </div>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default SideNav;
