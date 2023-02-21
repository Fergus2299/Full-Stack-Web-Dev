import "./styles.css";
import Navbar from "./components/Navbar.js";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Profile from "./routes/Profile";
import Help from "./routes/Help";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
}
