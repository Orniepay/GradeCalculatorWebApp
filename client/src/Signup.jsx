import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', { name, email, password })
      .then(result => {
        console.log(result);
        navigate('/login');
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="sign-up">
      <form onSubmit={handleSubmit}>
        <h1>Create Account</h1>
        <div className="social-container">
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i className="fab fa-google-plus-g"></i></a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i className="fab fa-github"></i></a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i className="fab fa-twitter"></i></a>
        </div>
        <p>or use your email for registration</p>
        <input type="text" name="name" placeholder="Name" required 
          onChange={(e) => setName(e.target.value)} />
        <input type="email" name="email" placeholder="Email" required 
          onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" placeholder="Password" required 
          onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;

