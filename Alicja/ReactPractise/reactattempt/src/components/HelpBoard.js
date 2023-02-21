import { Component } from "react";
import { Questions } from "./Qs";
import "./HelpBoardStyles.css";

class HelpBoard extends Component {
  render() {
    return (
      <div className="Board">
        <h1>Frequently Asked Questions</h1>
        <div className="q&a">
          {Questions.map((item, index) => {
            return (
              <div className="faq">
                <div className="q-par">
                  <p>{item.q}</p>
                </div>
                <div className="a-par">
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="contact">
          <h2>Contact us</h2>
          <div className="contact-info">
            <p>UCL Industry Exchange Network (UCL IXN)</p>
            <p>UCL Computer Science</p>
            <p>Gower Street</p>
            <p>London</p>
            <p>WC1E 6BT</p>
            <br />
            <p>ucl.ixn@ucl.ac.uk</p>
          </div>
        </div>
      </div>
    );
  }
}
export default HelpBoard;
