import React, { useState } from 'react';
import './Login.css'; // Check this is the correct path
import Login from './Login';
import Signup from './Signup';
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Router, Routes, Route


const App = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setIsRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setIsRightPanelActive(false);
  };

  return (
    <UserContextProvider>
        <Toaster position='bottom-right' toastOption={{duration: 2000}} />
        <div className={`container ${isRightPanelActive ? 'right-panel-active' : ''}`} id="main">
          <Signup />
          <Login />
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-left">
                <h1>Welcome Back!</h1>
                <p>Log in to access your grade calculator</p>
                <button className="ghost" id="signIn" onClick={handleSignInClick}>Sign In</button>
              </div>
              <div className="overlay-right">
                <h1>Get Started!</h1>
                <p>Create an account to start using your grade calculator</p>
                <button className="ghost" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
    </UserContextProvider> 
  );
};

export default App;