import React from 'react';
import './css/App.css';
import { Link } from 'react-router-dom';

const CodeSentPage = () => {

  const email = JSON.parse(localStorage.getItem("emailForgoten"));
  return (
    <div className="container">
      <div>
        <img style={{width:'19em'}} src='/imgs/Artboard 1.png'></img>
      </div>
      <hr></hr> <br></br>
      <p className="message">
        A mail has been sent to your email inbox ({email.email}) to reset your password . Please check your inbox (take the code that send to your email and go to the page below to reset your password).<br>
        </br>
        <Link to='/resetPassword'>Reset Password Page</Link>
      </p> <br></br>
    </div>
  );
};

export default CodeSentPage;

