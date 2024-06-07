// login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/login', { email, password }, { withCredentials: true })
          .then(result => {
            if (result.data.message === "Login Successful!") {
              toast.success('Login Successful. Welcome!');
              setTimeout(() => {
                window.location.href = 'http://localhost:8080'; // Navigate to the grade calculator page after 3 seconds
              }, 1000); // 1-second delay
            } else {
              toast.error(result.data);
            }
          })
          .catch(err => {
            console.log(err);
            toast.error('Incorrect Password! Try Again.');
            // toast.error('An error occurred. Please try again.');
          });
      };

    return (
        <div className="sign-in">
            <form onSubmit={handleSubmit}>
                <h1>Sign in</h1>
                <div className="social-container">
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i className="fab fa-facebook-f"></i></a>
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i className="fab fa-google-plus-g"></i></a>
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i className="fab fa-github"></i></a>
                  <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i className="fab fa-twitter"></i></a>
                </div>
                <p>or use your account</p>
                <input type="email" name="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
                <input type="password" name="password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
                <a href="https://www.youtube.com/watch?v=ikCa3Lr9pKU">Forgot your Password?</a>
                <button type="submit">Sign In</button>
            </form>
        </div>
    );
};

export default Login;

