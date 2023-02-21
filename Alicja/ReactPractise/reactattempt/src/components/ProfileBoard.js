import { Component } from "react";
import "./ProfileBoardStyles.css";

class ProfileBoard extends Component {
  render() {
    return (
      <div className="Board">
        <ul className="elements">
          <li className="elem">
            <h1>Your Personal Profile</h1>
            <div className="info-div">
              <div className="info">
                <label>Title</label>
                <input type="text" />
              </div>
              <div className="info">
                <label>Name</label>
                <input type="text" />
              </div>
              <div className="info">
                <label>Job Title</label>
                <input type="text" />
              </div>
              <div className="info">
                <label>Department</label>
                <input type="text" />
              </div>
              <div className="info">
                <label>Interests</label>
                <input type="text" className="wide-input" />
              </div>
              <button className="save-profile">Save</button>
            </div>
          </li>
          <li className="elem">
            <h1>Your Company Profile</h1>
            <div className="info-div">
              <div className="info">
                <label>Company Name</label>
                <input></input>
              </div>
              <div className="info">
                <label>Address</label>
                <input></input>
              </div>
              <div className="info">
                <label>Industry</label>
                <input></input>
              </div>
              <div className="info">
                <label>Company Overview</label>
                <input className="wide-input"></input>
              </div>
              <button className="save-profile">Save</button>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
export default ProfileBoard;
