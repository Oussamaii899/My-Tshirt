import React, { useState } from 'react';
import './css/App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const EmailInputPage = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const [emailValid, setEmailValid] = useState(true);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailValid(e.target.value.includes('@gmail.com'));
  };

  
  async function session(e){
    e.preventDefault()
    try {
        const response = await axios.post('http://localhost:8000/forgetPass.php', {
          action:'request_reset',
          email:email
    });
        const data = await response.data; 

        

        if(data.status === "success"){
        
              localStorage.setItem("emailForgoten", JSON.stringify({
              email: email
            }));
              navigate('/Forgetpassword-emailsend-successfuly');
        }
}
    catch(error){

    }
}
  return (
    <div className="container">
      <form  className="form">
        <h1>Reset Your Password</h1><br />
        <hr style={{width:'80%'}}></hr><br></br>
        <label htmlFor="email" className="label">Enter your E-mail address:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          className={`input ${emailValid ? '' : 'invalid'}`}
          placeholder="Enter your email"
          required
        /><br></br>
        <button onClick={session} className="button">Save</button>
      </form>
      <p style={{marginTop:'2em'}}>Remembered it ? Return to <a onClick={()=>{ navigate('/Authentification') }}>Log in</a></p>
    </div>
  );
};

export default EmailInputPage;
