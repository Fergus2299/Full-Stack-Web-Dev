import { Component } from "react";
import "./BoardStyles.css";
import Chart1 from "../assets/chart1.png";
import Chart2 from "../assets/chart2.png";
import { ProjectItems } from "./ProjectItems";
import { Questions } from "./Qs";
import { Link } from "react-router-dom";

class Board extends Component {
  render() {
    return (
      <div className="Board">
        <ul className="elements">
          <li className="elem">
            <h1>Your Statistics</h1>
            <div clasName="charts">
              <img className="chart-img" alt="" src={Chart1} />
              <img className="chart-img" alt="" src={Chart2} />
            </div>
          </li>
          <li className="elem">
            <h1>Your Recent Projects</h1>
            <table>
              <tr>
                <th>Title</th>
                <th>Submitted</th>
                <th>Status</th>
              </tr>

              {ProjectItems.map((item, index) => {
                if (index < 3) {
                  return (
                    <tr className="project">
                      <td>{item.title}</td>
                      <td>{item.submitted}</td>
                      <td>{item.status}</td>
                    </tr>
                  );
                }
              })}
            </table>
          </li>
          <li className="elem">
            <h1>FAQ</h1>
            {Questions.map((item, index) => {
              if (index < 3) {
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
              }
            })}
          </li>
          <li>
            <p className="help-par">
              If you have further questions, please visit the
              <Link to="/help"> Help</Link> page.
            </p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Board;
