import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Import Routes and Route
import PostForm from './components/PostForm';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* Default route to the home page */}
          <Route path="/" element={<App />} />
          
          {/* Route for PostForm page */}
          <Route path="/PostForm" element={<PostForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);