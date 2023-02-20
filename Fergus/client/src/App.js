import './App.css';
import {BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom';
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";



function App() {

  // in order to display an array we use the map function
  return (
    <div className='App'>
      <BrowserRouter>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href="/createpost">Create Post</a></li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/createpost" element={<CreatePost />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;