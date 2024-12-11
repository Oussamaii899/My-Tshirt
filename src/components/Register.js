import React, { useState,useRef,useEffect } from "react";
import axios from 'axios'
import Notif from "./Notification";


export default function Register(){

    let usn = 'Username';
    let eml = 'Email';
    let pws = 'Password';
    let Cpws = 'Confirm Password';

    const ref = useRef(null);
    const[un,SetUn] = useState('');
    const[email,Setemail] = useState('');
    const[pw,SetPw] = useState('');
    const[cpw,SetCpw] = useState('');
    const[f,SetF] = useState(false);
    const[ef,SetEf] = useState(false);
    const[ff,SetFf] = useState(false);
    const[fff,SetFff] = useState(false);

    const[notifi,SetNotif] = useState('');
    const[coli,SetCol] = useState('');
    const[ds,SetDs] = useState('none');
    const[anim,SetAnim] = useState('');
    const[fa,SetFa] = useState('fa fa-exclamation');



    un != '' && !f ? usn = "" : usn = "Username";
    pw != '' && !ff ? pws = "" : pws = "Password";
    cpw != '' && !fff ? Cpws = "" : Cpws = "Conifrm Password";
    email != '' && !ef ? eml = "" : eml = "Email";
    
    function REGA(){
        let regitser = document.getElementById('RegisterA');
        regitser.style.display='flex';
        regitser.style.animation='il 1s linear';
        
        setTimeout(() => {
            regitser.style.display='none'
        }, 1000);
        let login = document.getElementById('login');
        setTimeout(() => {
            login.style.animation='ill 1s linear';
        }, 1200);
        setTimeout(() => {
            login.style.display='flex';
        }, 1200);
    }
    async function send(e) {
        e.preventDefault();
        if (un.trim() !== '' && pw.trim() !=='' && cpw.trim() !== '' && email.trim() !=='' && pw === cpw) {
          try {
            const response = await axios.post('http://localhost:8000/register.php', {
              username: un,
              email:email,
              password:pw
            });
      
            const data = await response.data; 

            
            if (data.status === 'error') {
                SetNotif(data.message);
                SetCol('yellow');
                
            }
            if (data.status === 'success') {
                SetNotif(data.message);
                SetCol('lightgreen');
                SetFa('fa fa-check');
            }


            SetNotif(data.message);
            SetDs('flex')
            setTimeout(() => {
             SetAnim('mop 1s linear')
             
            }, 7000);
             setTimeout(() => {
                 SetDs('none')
                 SetNotif('');
                 SetCol();
             }, 7998);

            

            
                  
            
          } catch (error) {

            
          }
          
        }
      }
      
      
    

    return(
        <div className="rf">
        <div className="log RegisterA" id="RegisterA">
            <Notif notif={notifi} col={coli} ds={ds} anim={anim} fa={fa}></Notif>
            <h2 id="ml1">Register</h2>
            <form>
                <div><label id="us">{usn}</label> <br></br> <input type="text" onFocus={() => SetF(true)} onBlur={() => SetF(false)}  ref={ref} onChange={(event)=>{SetUn(event.target.value)}}></input></div> <br></br> 
                <div id="LM2"><label id="ps">{eml}</label> <br></br> <input type="text" onFocus={() => SetEf(true)} onBlur={() => SetEf(false)}  ref={ref} onChange={(event)=>{Setemail(event.target.value)}}></input></div> <br></br> 
                <div id="LM3"><label id="ps">{pws}</label> <br></br> <input type="password" onFocus={() => SetFf(true)} onBlur={() => SetFf(false)}  ref={ref}  onChange={(event)=>{SetPw(event.target.value)}}></input> </div> <br></br> 
                <div id="LM1"><label id="ps">{Cpws}</label> <br></br> <input type="password" onFocus={() => SetFff(true)} onBlur={() => SetFff(false)}  ref={ref}  onChange={(event)=>{SetCpw(event.target.value)}}></input> </div> <br></br> 
                <div id="m1">
                    <input type="checkbox"></input> <label id="rm">Remember me </label> <br></br>
                    <button onClick={send}>Register</button>
                </div>
            </form><br></br>
            <div id="lmp1">
                <hr></hr> <p>Or</p> <hr></hr>
            </div>
            <div id="lolo">
                Already Have an Account ? <br></br>
                <button onClick={REGA}>Login</button>
            </div>
        </div>
        </div>
    )


}