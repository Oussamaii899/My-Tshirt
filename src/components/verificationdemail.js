import React from "react";
import "./css/Register.css";
import { useState,useRef} from "react";
import axios from "axios";
import Notif from "./Notification";

export default function Verifi() {

    let usn = 'email';
    let pws = 'Password';

    const ref = useRef(null);
    const[un,SetUn] = useState('');
    const[pw,SetPw] = useState('');
    const[f,SetF] = useState(false);
    const[ff,SetFF] = useState(false);

    const[notifi,SetNotif] = useState('');
    const[coli,SetCol] = useState('yellow');
    const[ds,SetDs] = useState('none');
    const[fa,SetFa] = useState('fa fa-exclamation');

    const[anim,SetAnim] = useState('');

    un !== '' && !f ? usn = "" : usn = "email";
    pw !== '' && !ff ? pws = "" : pws = "code";
    
    let usPI =  'email or code is empty';

    async function verif(e) {
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
        e.preventDefault();
        if (un.trim() !== '' && pw.trim() !=='') {

          try {
            const response = await axios.post('http://localhost:8000/email-verification.php', {
              email:un,
              verification_code:pw
            });
      
            const data = await response.data; 
            if (data.status === 'success') {
                SetNotif(data.message);
                SetCol('lightgreen');
                SetFa('fa fa-check');
            }
           
            if (data.status === 'error') {
                SetNotif(data.message);
                SetFa('fa fa-exclamation');
                SetCol('yellow');
                
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
            console.error('Error:', error);
            
          }
          
        }
      }
    return(
        <div id="rff">
        <div className="rf">
            <div id="login"  className="log">
            <Notif notif={notifi} col={coli} ds={ds} fa={fa}></Notif>
            <h2 id="ml">Verifie Your email</h2>
            <hr style={{width:'70%',position:'absolute',top:'22%',margin:'0'}}></hr>
            <form>
                <div><label id="us">{usn}</label> <br></br> <input type="text" onFocus={() => SetF(true)} onBlur={() => SetF(false)}  ref={ref} onChange={(event)=>{SetUn(event.target.value)}}></input></div> <br></br> 
                <div id="LM"><label id="ps">{pws}</label> <br></br> <input type="password" onFocus={() => SetFF(true)} onBlur={() => SetFF(false)}  ref={ref}  onChange={(event)=>{SetPw(event.target.value)}}></input> </div> <br></br> 
                <div id="m" style={{display:"flex",justifyContent:"center"}}>
                    <button style={{marginLeft:'3em'}} onClick={verif}>Verifier</button><br></br> <br></br>
                </div>
            </form><br></br>
            <div id="lmp">

            </div>
            
            </div>
        </div>
        </div>

    )
}