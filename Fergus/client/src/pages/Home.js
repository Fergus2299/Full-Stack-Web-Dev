import React from 'react'
import axios from "axios";
// hooks: use effect allows a func to be called when the page rerenders
// hooks: use state is a list of all the posts from api request
import {useEffect, useState} from "react";

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);
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
          <div className="post">
            <div className="post-top-left">
              <div className="title">{value.title}</div>
              <div className="username">{value.username}</div>
              <div className="date">{value.createdAt}</div>
            </div>
            {/* <div className="username">{value.username}</div> */}
            {/* <div className="date">{value.createdAt}</div> */}
            <div className="body">{value.postText}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
