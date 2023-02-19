import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";



function App() {

  // in order to display an array we use the map function
  return (
    <div className='App'>
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/createpost">Create a Post</Link>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/createpost" element={<CreatePost />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;