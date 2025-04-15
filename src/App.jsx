import React from 'react';
import { useSelector } from 'react-redux';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import { Route } from 'react-router-dom';

const App = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user);

  return (
    <>
      {user ? <HomePage /> : <LoginPage />}
    </>
  );
};

export default App;