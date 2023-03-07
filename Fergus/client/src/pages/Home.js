import React from 'react'
import axios from "axios";
// hooks: use effect allows a func to be called when the page rerenders
// hooks: use state is a list of all the posts from api request
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);

  let navigate = useNavigate()
  useEffect(() => {
    
    // we want to get the posts from the database as the page renders
    // since this makes a promise we use a callback function
    axios.get("http://localhost:3001/posts").then((response) => {
    // view the data  
    setListOfPosts(response.data);
    });
  }, []);

  return (
    <div className='post-div'>
      {listOfPosts.map((value, key) => {
        return (
          // each post will take us to it's post page
          <div className="post" onClick={() => {
            navigate(`/post/${value.id}`);
          }}>
            <div className="post-top-left">
              <div className="title">{value.title}</div>
              <div className="username">{value.username}</div>
              <div className='date'>{value.createdAt}</div>
            </div>
            <div className="body">{value.postText}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
