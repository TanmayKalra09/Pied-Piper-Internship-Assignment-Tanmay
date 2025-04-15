import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Post from '../components/Post';
import PostForm from '../components/PostForm';
import { logout } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import { Route } from 'react-router-dom';

const HomePage = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="page-container">
      <header className="header">
        <h1>Mini Social Media Feed</h1>
        <button
        onClick={handleLogout}
        className="sign-out-button">

         Sign Out
        </button>
        <button
            onClick={() => navigate("/PostForm")}
            className="add-post-button">
             Add Post
        </button>
      </header>

      <main className="main-content">
        <div className="feed-container">
          <div className="posts-feed">
            {posts.length > 0 ? (
              posts.map((post) => <Post key={post.id} post={post} />)
            ) : (
              <p className="no-posts">No posts yet. Be the first to share something!</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;