import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleLike } from '../redux/postSlice';
import './Post.css';

const Post = ({ post }) => {
  const [comments, setComments] = useState(post.comments || []);
  const [newComment, setNewComment] = useState('');
  const dispatch = useDispatch();

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="post-container">
      <div className="profile">
        <img alt="Profile Picture" src={`https://i.pravatar.cc/150?u=${post.username}`} />
        <h4>{post.username}</h4>
      </div>

      <div className="content">
        {post.content}
      </div>

      {post.image && (
        <div className="post-image">
          <img
            src={post.image}
            alt="Post media"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "https://via.placeholder.com/300x200?text=Image+Not+Found";
            }}
          />
        </div>
      )}

      <div className="like-button" onClick={() => dispatch(toggleLike(post.id))}>
        <span>{post.liked ? '❤️' : '🤍'}</span>
        <span className="likes-count">{post.likes} Likes</span>
      </div>
      <div className="post-timestamp">
  <div><strong>Date:</strong> {new Date(post.timestamp).toLocaleDateString()}</div>
  <div><strong>Time:</strong> {new Date(post.timestamp).toLocaleTimeString()}</div>
</div>

      <div className="comments">
        <h5>Comments</h5>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment}</li>
          ))}
        </ul>

        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="comment-input"
          />
          <button type="submit" className="comment-button">Post Comment</button>
        </form>
      </div>

      <hr className="hr" />
    </div>
  );
};

export default Post;