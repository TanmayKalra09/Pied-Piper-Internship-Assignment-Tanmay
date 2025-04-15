import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../redux/postSlice';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import './PostForm.css';

const PostForm = () => {
  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  const user = useSelector((state) => state.user.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;

    const newPost = {
      id: uuidv4(),
      username: user.username,
      profilePic: `https://i.pravatar.cc/150?u=${user.username}`,
      content: text,
      image,
      likes: 0,
      liked: false,
      timestamp: new Date().toISOString(),
    };

    dispatch(addPost(newPost));
    setText('');
    setImage('');
    navigate('/');
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      className="form-container"
    >
      <textarea
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="textarea"
        rows={4}
      />
      <input
        type="text"
        placeholder="Add an image URL (optional)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="input"
      />
      <button
        type="submit"
        className="button"
      >
        Post
      </button>
      <hr className="hr" />
    </form>
  );
};

export default PostForm;