import Navbar from "../components/Navbar.js";
import Welcome from "../components/Welcome";
import SideNav from "../components/SideNav";
import Header from "../components/Header";
import ProjectsBoard from "../components/ProjectsBoard";

function Projects() {
  return (
    <>
      <Header />
      <Navbar />
      <Welcome />
      <SideNav />
      <ProjectsBoard />
    </>
  );
}
export default Projects;
