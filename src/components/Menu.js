import React from "react";
import "./css/prof.css";
import {Link, useNavigate } from "react-router-dom";

export default function Menu(props){
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
    return(
          <div className="profile">
                <div className="header">
                    <img src={user.photo} alt="" className="img"/>
                    <div className="text">
                        <h1 className="title"> {user.username} </h1>
                        <p className="email"> {user.email} </p>
                    </div>
                </div>
                <div className="menu">
                    <Link className="link" style={{color:props.cl,background:props.bg}} to="/profil/Account"><i className="fa fa-user-circle-o menu-icon"></i>Account</Link>
                    <Link className="link" style={{color:props.cl1,background:props.bg1}}  to="/profil/commandes"><i className="fa fa-shopping-basket menu-icon"></i>Commandes</Link>
                    <Link className="link" style={{color:props.cl2,background:props.bg2}} to="/profil/setting"><i className="fa fa-gear menu-icon"></i>Setting</Link>
                    <Link className="link" onClick={()=>{
                        localStorage.removeItem("user");
                        window.location.reload()
                    }} style={{color:props.cl3,background:props.bg3}} to="/Authentification"><i className="fa fa-sign-out menu-icon"></i>Log Out</Link>
                </div>
            </div> 
    )
}