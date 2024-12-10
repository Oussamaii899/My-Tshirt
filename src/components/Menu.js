import React from "react";
import "./css/prof.css";
import {Link } from "react-router-dom";

export default function Menu(props){
    return(
          <div className="profile">
                <div className="header">
                    <img src="/img/p.png" alt="" className="img"/>
                    <div className="text">
                        <h1 className="title">Achraf Chadli</h1>
                        <p className="email">achraf@gmail.com</p>
                    </div>
                </div>
                <div className="menu">
                    <Link className="link" style={{color:props.cl,background:props.bg}} to="/profil/Account"><i className="fa fa-user-circle-o menu-icon"></i>Account</Link>
                    <Link className="link" style={{color:props.cl1,background:props.bg1}}  to="/profil/commandes"><i className="fa fa-shopping-basket menu-icon"></i>Commandes</Link>
                    <Link className="link" style={{color:props.cl2,background:props.bg2}} to="/profil/setting"><i className="fa fa-gear menu-icon"></i>Setting</Link>
                    <Link className="link" style={{color:props.cl3,background:props.bg3}} to='/profil/log-out'><i className="fa fa-sign-out menu-icon"></i>Log Out</Link>
                </div>
            </div> 
    )
}