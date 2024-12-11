/* eslint-disable jsx-a11y/alt-text */
import React, { useState,useRef, useEffect } from "react";
import Notif from "./Notification";
import axios from "axios";
import { data, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Login(){

    let usn = 'email';
    let pws = 'Password';

    const ref = useRef(null);
    const[un,SetUn] = useState('');
    const[pw,SetPw] = useState('');
    const[f,SetF] = useState(false);
    const[ff,SetFF] = useState(false);

    const[notifi,SetNotif] = useState('');
    const[coli,SetCol] = useState('');
    const[ds,SetDs] = useState('none');
    const[fa,SetFa] = useState('fa fa-exclamation');

    const navigate = useNavigate()

    const[inf,SetInf] = useState();


    const[users,SetUsers] = useState([]);
    let usPI =  'email or password is empty';

    un !== '' && !f ? usn = "" : usn = "email";
    pw !== '' && !ff ? pws = "" : pws = "Password";
    

    function logA(){
        let login = document.getElementById('login');
        login.style.animation='il 1s linear'
        setTimeout(() => {
            login.style.display='none'
        }, 1000);
        let regitser = document.getElementById('RegisterA');
        setTimeout(() => {
            regitser.style.animation='ill 1s linear';
        }, 1200);
        setTimeout(() => {
            regitser.style.display='flex';
        }, 1200);
    }

    useEffect(
        ()=>{
            axios.get('http://localhost:8000/users.php')
            .then(data => SetUsers(data.data))
        }
    )
    function login(e){
        if(un === '' || pw === '' ){
            e.preventDefault()

           SetNotif(usPI);
           SetCol('yellow');

           document.getElementById('nf').style.display='flex';
           setTimeout(() => {
            document.getElementById('nf').style.animation='mop 1s linear';
            
           }, 7000);
            setTimeout(() => {
                document.getElementById('nf').style.display='none';
                SetNotif('');
                SetCol();
            }, 7998);
        }
        else{
            e.preventDefault()
            
            if(users.find( (u)=> u.email === un ) ) 
                {
                    
                    if(users.find( (u)=> u.password === pw && u.email === un)){
                        
                        async function session(un,pw){
                            try {
                                const response = await axios.post('http://localhost:8000/login.php', {
                                  email:un,
                                  password:pw
                            });
                                const data = await response.data; 
                                

                                if(data.success === "Login successful"){
                                    localStorage.setItem("user", JSON.stringify({
                                        email: un,
                                        id: data.id,
                                        username:data.username,
                                        photo:data.photo
                                    }));
                                }
                        }
                            
                            catch(error){
                            }
                        }
                        session(un,pw)
                       
                       


                        
                        setTimeout(()=>{
                            
                            navigate('/profil/Account');
                            window.location.reload()
                        },2000)                        
                    }
                    else{
             
                        SetNotif('password incorrect');
                        SetCol('red');
                        SetFa('fa fa-exclamation');
                    }
    
            }
            else{
                
                SetNotif("email n'existe pas ou invalid");
                SetCol('red');
                SetFa('fa fa-exclamation');
            }
        }
    }
    return(

        <div className="rf">
            <div id="login"  className="log">
                <Notif notif={notifi} col={coli} ds={ds} fa={fa}></Notif>
            <h2 id="ml">Login</h2>
            <form>
                <div><label id="us">{usn}</label> <br></br> <input type="text" onFocus={() => SetF(true)} onBlur={() => SetF(false)}  ref={ref} onChange={(event)=>{SetUn(event.target.value)}}></input></div> <br></br> 
                <div id="LM"><label id="ps">{pws}</label> <br></br> <input type="password" onFocus={() => SetFF(true)} onBlur={() => SetFF(false)}  ref={ref}  onChange={(event)=>{SetPw(event.target.value)}}></input> </div> <br></br> 
                <div id="m">
                    <input type="checkbox"></input> <label id="rm">Remember me </label> <br></br>
                    <button onClick={login}>Login</button><br></br> <br></br>

                    <a style={{marginTop:'1em'}} onClick={()=>{navigate("/ForgetPassword")}}>Forget Your password ? </a>
                </div>
            </form><br></br>
            <div id="lmp">
                <hr></hr> <p>Or</p> <hr></hr>
            </div>
            <div id="lolo">
                Create Account <br></br>
                <button onClick={logA}>Register</button>
            </div>
            </div>
        </div>
    )


}