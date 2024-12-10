import React, {useEffect, useState} from "react";
import axios from "axios";


export default function Notif(props){

    return(
        <div className="notif" id="nf" style={{backgroundColor:props.col,display:props.ds,animation:props.anim}}>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <i className={props.fa} style={{width:'1.6em'}}/> 
            </div>
            <p style={{marginLeft:'1px',fontSize:'25px'}}>|</p>
            <div>
                <p>{props.notif}</p>
            </div>
        </div>
    )
}