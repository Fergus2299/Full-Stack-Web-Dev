import ProjectsImg from "../assets/projects.jpeg";
import ProfileImg from "../assets/profile.jpeg";
import HelpImg from "../assets/help.jpeg";

export const MenuItems = [
  {
    title: "Home Page",
    url: "/",
    cName: "nav-links"
  },
  {
    title: "Projects",
    url: "/projects",
    cName: "nav-links",
    image: { ProjectsImg },
    text: "Browse the projects you have submitted, or start a new project."
  },
  {
    title: "Profile",
    url: "/profile",
    cName: "nav-links",
    image: { ProfileImg },
    text: "View and edit your profile."
  },
  {
    title: "Help",
    url: "/help",
    cName: "nav-links",
    image: { HelpImg },
    text:
      "Get a detailed list of frequently asked questions and contact details."
  }
];
