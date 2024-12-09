/* eslint-disable jsx-a11y/alt-text */
import React, { useState,useRef } from "react";
import Notif from "./Notification";

export default function Login(){

    let usn = 'Username';
    let pws = 'Password';

    const ref = useRef(null);
    const[un,SetUn] = useState('');
    const[pw,SetPw] = useState('');
    const[f,SetF] = useState(false);
    const[ff,SetFF] = useState(false);

    const[notifi,SetNotif] = useState('lol');
    const[coli,SetCol] = useState('red');
    let usPI =  'Username or password is empty';

    un !== '' && !f ? usn = "" : usn = "Username";
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

    function login(e){
        if(un === '' || pw === '' ){
            e.preventDefault()
           /* alert('t'); */
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
            alert("done")
        }
    }
    return(

        <div className="rf">
            <div id="login"  className="log">
                <Notif notif={notifi} col={coli}></Notif>
            <h2 id="ml">Login</h2>
            <form>
                <div><label id="us">{usn}</label> <br></br> <input type="text" onFocus={() => SetF(true)} onBlur={() => SetF(false)}  ref={ref} onChange={(event)=>{SetUn(event.target.value)}}></input></div> <br></br> 
                <div id="LM"><label id="ps">{pws}</label> <br></br> <input type="password" onFocus={() => SetFF(true)} onBlur={() => SetFF(false)}  ref={ref}  onChange={(event)=>{SetPw(event.target.value)}}></input> </div> <br></br> 
                <div id="m">
                    <input type="checkbox"></input> <label id="rm">Remember me </label> <br></br>
                    <button onClick={login}>login</button>
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