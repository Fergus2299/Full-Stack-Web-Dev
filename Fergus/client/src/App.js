import './App.css';
import {BrowserRouter, Route, Routes, Link, NavLink} from 'react-router-dom';
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";




function App() {

  // in order to display an array we use the map function
  return (
    <div className='App'>
      <BrowserRouter>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href="/createpost">Create Post</a></li>
          <li><a href="/post/:id"></a></li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/createpost" element={<CreatePost />}/>
          <Route path="/post/:id" element={<Post />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;