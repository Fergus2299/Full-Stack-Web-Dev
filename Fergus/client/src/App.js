import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import Login from "./pages/Login";
import Registration from "./pages/Registration";





function App() {

  // in order to display an array we use the map function
  return (
    <div className='App'>
      <BrowserRouter>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href="/createpost">Create Post</a></li>
          <li><a href="/post/:id"></a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/registration">Registration</a></li>

        </ul>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/createpost" element={<CreatePost />}/>
          <Route path="/post/:id" element={<Post />}/>
          <Route path="/registration" element={<Registration />}/>
          <Route path="/login" element={<Login />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;