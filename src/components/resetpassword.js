import React, { useState } from 'react';
import './css/App.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Notif from './Notification';

const Resetpw = () => {
  const [pw, setpw] = useState('');
  const [pw1, setpw1] = useState('');
  const [em, setem] = useState('');
  const [cd, setcd] = useState('');
  const navigate = useNavigate();

    const[notifi,SetNotif] = useState('');
    const[coli,SetCol] = useState('');
    const[anim,SetAnim] = useState('');
    const[ds,SetDs] = useState('none');
    const[fa,SetFa] = useState('fa fa-exclamation');


  const handleEmailChange = (e) => {
    setpw(e.target.value);
    
  };
  const handleEmailChange1 = (e) => {
    setpw1(e.target.value);
    
  };
  const handleEmailChange3 = (e) => {
    setem(e.target.value);
    
  };
  const handleEmailChange4 = (e) => {
    setcd(e.target.value);
    
  };

  async function session(e){
    e.preventDefault()
    if( pw === pw1 ){
      try {
        const response = await axios.post('http://localhost:8000/forgetPass.php', {
          action:'reset_password',
          email:em,
          reset_code:cd,
          new_password:pw

    });
        const data = await response.data; 
        if (data.status === 'error') {
          SetNotif(data.message);
          SetCol('yellow');
          SetFa('fa fa-exclamation')
      }


        if(data.status === "success"){
            SetNotif(data.message);
            SetCol('lightgreen');
            SetFa('fa fa-check');
            setTimeout(()=>{
              localStorage.removeItem("emailForgoten");
              navigate('/Authentification');
              window.location.reload();
            },2000)
        }
        SetDs('flex')
        setTimeout(() => {
         SetAnim('mop 1s linear')
         
        }, 7000);
         setTimeout(() => {
             SetDs('none')
             SetNotif('');
             SetCol();
         }, 7998);

}
    catch(error){

    }
    }
    else{
        SetNotif('confirm password must be like new password');
        SetCol('yellow');
        SetFa('fa fa-exclamation');
    }
}
  return (
    <div className="container">
      <form  className="form">
      <Notif notif={notifi} col={coli} ds={ds} fa={fa}></Notif>
        <h1>Reset a New Password</h1><br />
        <hr style={{width:'80%'}}></hr><br></br>
        <span style={{display:'flex',marginBottom:'0.6em'}}>
          <span style={{marginRight:'0.9em'}}>
              <label className='label'>Enter Your Email and code of reset</label><br></br>
              <input
                type="text"
                id="email"
                value={em}
                onChange={handleEmailChange3}
                placeholder="Enter email"
                required
              /><br></br><br></br>
              <input
                type="text"
                id="email"
                value={cd}
                onChange={handleEmailChange4}
                placeholder="Enter code of reset"
                required
              /><br></br>
          </span><br></br>
          <span>
              <label htmlFor="email" className="label">Enter New Password:</label><br></br>
              <input
                type="text"
                id="email"
                value={pw}
                onChange={handleEmailChange}
                placeholder="Enter new password"
                required
              /><br></br><br></br>
              <input
                type="text"
                id="email"
                value={pw1}
                onChange={handleEmailChange1}
                placeholder="confirm new password"
                required
              /><br></br>
            </span>
        </span>
        

        <button onClick={session} className="button">Done</button>
      </form>
    </div>
  );
};

export default Resetpw;
