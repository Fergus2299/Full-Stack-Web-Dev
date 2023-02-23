import React, {useEffect, useState} from "react";
// allows us to get the id of the post
import {useParams} from "react-router-dom";
import axios from 'axios';

function Post() {
    // getting the postId
    let { id } = useParams();
    const [postObject, setPostObject] = useState([]);
    useEffect(() => {
        // send via the id and this links up to the primary key of the table
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
            // view the data  
            setPostObject(response.data);
        });
    }, []);
    return (
        <div className='body'></div>
    );
}

export default Post;