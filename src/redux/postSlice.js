import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: JSON.parse(localStorage.getItem('posts')) || [],
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.unshift(action.payload);
      localStorage.setItem('posts', JSON.stringify(state.posts));
    },
    toggleLike: (state, action) => {
      const post = state.posts.find((p) => p.id === action.payload);
      if (post) {
        post.liked = !post.liked;
        post.likes += post.liked ? 1 : -1;
        localStorage.setItem('posts', JSON.stringify(state.posts));
      }
    },
  },
});

export const { addPost, toggleLike } = postSlice.actions;
export default postSlice.reducer;