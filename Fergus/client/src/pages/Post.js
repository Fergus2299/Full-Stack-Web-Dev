import React, {useEffect, useState} from "react";
// allows us to get the id of the post
import {useParams} from "react-router-dom";
import axios from 'axios';
import './Post.css';

function Post() {
    // getting the postId
    let { id } = useParams();
    const [postObject, setPostObject] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const initialValues = {
        commentBody:"",
        PostId:id
      };
    useEffect(() => {
        // send via the id and this links up to the primary key of the table
        axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
            // view the data  
            setPostObject(response.data);
        });
        axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
            // view the data  
            setComments(response.data);
        });
    }, []);
    const onComment = (data) => {
        axios.post("http://localhost:3001/comments/", {
            commentBody: newComment, 
            PostId:id
        }).then((response) => {
            const commentToAdd = {commentBody:newComment}
            // ... is the destructuring method in javascript
          setComments([...comments,commentToAdd]);
          // newComment becomes empty string to ensure it returns to this after comment
          // otherwise uploaded comment would stay in box 
          setNewComment('');
        });
      };
    return (
        
        <div className='post-body'>
            <div className="posts-section">
                <div className="post">
                    <div className="post-top-left">
                        <div className="title">{postObject.title}</div>
                        <div className="username">{postObject.username}</div>
                        <div className='date'>{postObject.createdAt}</div>
                    </div>
                    <div className="body">{postObject.postText}</div>
                </div>
            </div>

            <div className="comments-section">
                <div className="add-comment">
                    <input type="text" placeholder="Comment..." value={newComment}
                        onChange={(event) => {setNewComment(event.target.value)}}>
                        
                    </input>
                    {/* only submit if the comment actually has text */}
                    <button onClick={newComment ? onComment : null}> Add Comment</button>
                </div>
                <div className="comment-list">
                    {comments.map((comment, key) => {
                        return <div className="comment">{comment.commentBody}</div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Post;
