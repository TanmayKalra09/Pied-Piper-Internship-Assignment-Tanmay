import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/userSlice';
import './LoginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'Tanmay' && password === '1234') {
      dispatch(login({ username }));
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <>
      <h2 className="welcome-message">Welcome to Mini Social Media Feed</h2>
      <form onSubmit={handleLogin} className="form-container">
        <input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="input-field" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="input-field" />
        <button type="submit" className="button">Login</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </>
  );
};

export default LoginForm;