import React from 'react';
import { useState } from "react";
import { Link } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom"; 

function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login', {email, password})
    .then(result => {
      console.log(result)
      if(result.data == "Successful!"){
        navigate('/home')
      }
  }) 
    .catch(err=> console.log(err))
}
  return (
    <div className="sign-in">
      <form action="/users/login" method="POST">
        <h1>Sign in</h1>
        <div className="social-container">
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i className="fab fa-google-plus-g"></i></a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i className="fab fa-github"></i></a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><i className="fab fa-twitter"></i></a>
        </div>
        <p>or use your account</p>
        <input type="email" name="email" placeholder="Email" required 
        onChange={(e) => setEmail(e.target.value)} />
        <input type="password" name="password" placeholder="Password" required 
        onChange={(e) => setPassword(e.target.value)} />
        <a href="https://www.youtube.com/watch?v=ikCa3Lr9pKU">Forgot your Password?</a>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Login;
