import { Component } from "react";
import { ProjectItems } from "./ProjectItems";
import "./ProjectsBoardStyles.css";

class ProjectsBoard extends Component {
  render() {
    return (
      <div className="Board">
        <h1>Your Projects</h1>
        <table>
          <tr>
            <th>Title</th>
            <th>Submitted</th>
            <th>Status</th>
          </tr>
          {ProjectItems.map((item, index) => {
            return (
              <tr className="project">
                <td>{item.title}</td>
                <td>{item.submitted}</td>
                <td>{item.status}</td>
              </tr>
            );
          })}
        </table>
        <button className="project-sub">Submit A New Project</button>
      </div>
    );
  }
}
export default ProjectsBoard;
