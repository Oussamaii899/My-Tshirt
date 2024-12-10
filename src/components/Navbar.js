import React from "react";
import { Link } from "react-router-dom";
import './css/Nav.css'

export default function Nav() {
    return(
        <>
        <header>
            <nav>
                <div className="logo"><span style={{color:"lightblue"}}>t-</span>shurt</div>
                    <ul>
                        <li id="searchli"><input id="search-bar" type="text" placeholder="Cherchez un short" name="" /><button type="submit"><i className="fa fa-search"></i></button></li>
                        <Link to="/Authentification"><li><div className="lien"> <i className="fa fa-user"></i></div></li></Link>
                        <li><div className="lien"><i className="fa fa-shopping-cart"></i>
                        </div></li>
                    </ul>
            </nav>
        </header>
        </>
    )
}