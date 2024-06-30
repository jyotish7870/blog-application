import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import './AuthStyles.css'; // Make sure this path matches where you store your CSS

const AuthSlideContainer = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between forms

  // Function to toggle the forms
  const toggleForms = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      <div className={`forms-container ${isLogin ? '' : 'shift'}`}>
        <Login toggleForms={toggleForms} />
        <Register toggleForms={toggleForms} />
      </div>
      <div className="buttons">
        <button onClick={toggleForms} className="toggle-button">
          {isLogin ? 'Go to Register' : 'Go to Login'}
        </button>
      </div>
    </div>
  );
};

export default AuthSlideContainer;
