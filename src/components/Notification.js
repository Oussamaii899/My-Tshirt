import React, {useState} from "react";

export default function Notif(props){


    return(
        <div className="notif" id="nf" style={{backgroundColor:props.col}}>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <img src="img/exclamation.png" style={{width:'1.6em'}}/> 
            </div>
            <p style={{marginLeft:'1px',fontSize:'25px'}}>|</p>
            <div>
                <p>{props.notif}</p>
            </div>
        </div>
    )
}