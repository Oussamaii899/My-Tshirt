import React, { useState,useRef } from "react";

export default function Register(){

    let usn = 'Username';
    let pws = 'Password';
    let Cpws = 'Confirm Password';

    const ref = useRef(null);
    const[un,SetUn] = useState('');
    const[pw,SetPw] = useState('');
    const[cpw,SetCpw] = useState('');
    const[f,SetF] = useState(false);
    const[ff,SetFf] = useState(false);
    const[fff,SetFff] = useState(false);

    un != '' && !f ? usn = "" : usn = "Username";
    pw != '' && !ff ? pws = "" : pws = "Password";
    cpw != '' && !fff ? Cpws = "" : Cpws = "Conifrm Password";
    
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

    return(
        <div className="rf">
        <div className="log RegisterA" id="RegisterA">
            <h2 id="ml1">Register</h2>
            <form>
                <div><label id="us">{usn}</label> <br></br> <input type="text" onFocus={() => SetF(true)} onBlur={() => SetF(false)}  ref={ref} onChange={(event)=>{SetUn(event.target.value)}}></input></div> <br></br> 
                <div id="LM"><label id="ps">{pws}</label> <br></br> <input type="password" onFocus={() => SetFf(true)} onBlur={() => SetFf(false)}  ref={ref}  onChange={(event)=>{SetPw(event.target.value)}}></input> </div> <br></br> 
                <div id="LM1"><label id="ps">{Cpws}</label> <br></br> <input type="password" onFocus={() => SetFff(true)} onBlur={() => SetFff(false)}  ref={ref}  onChange={(event)=>{SetCpw(event.target.value)}}></input> </div> <br></br> 
                <div id="m1">
                    <input type="checkbox"></input> <label id="rm">Remember me </label> <br></br>
                    <button>Register</button>
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