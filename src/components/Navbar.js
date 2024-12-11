import React from "react";
import { Link } from "react-router-dom";
import './css/Nav.css'
import { useState,useEffect } from "react";

export default function Nav() {

        const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
        const[u,setu] = useState(null);
        const handleSearchClick = () => {
            const logo = document.getElementById("lg");
            const searchBar = document.getElementById("search-bar");
    
                if (isSearchBarVisible) {

                    logo.style.display = "flex";
                    searchBar.style.display = "none";
                } else {

                    if(window.innerWidth <=800){
                        logo.style.display = "none";
                    }
                    searchBar.style.display = "block";
                }
                setIsSearchBarVisible(!isSearchBarVisible);
            
        };
        useEffect(() => {
            const storedUser = JSON.parse(localStorage.getItem("user"));
            setu(storedUser);
        }, []);
    return(
        <>
        <header>
            <nav>
                <div className="logo">
                    <img style={{width:'6em'}} id="lg" src='/imgs/Artboard 1.png'>
                </img>
                </div>
                    <ul>
                        <li id="searchli"><input id="search-bar" type="text" placeholder="Cherchez un short" name="" /><button type="submit" onClick={handleSearchClick}><i className="fa fa-search"></i></button></li>
                        { !u ? <Link to="/Authentification"><li><div className="lien"> <i className="fa fa-user"></i></div></li></Link> : <Link to="/profil/Account"><li><div className="lien"> <i className="fa fa-user"></i></div></li></Link>
                        }
                        <li><div className="lien"><i className="fa fa-shopping-cart"></i>
                        </div></li>
                    </ul>
            </nav>
        </header>
        </>
    )
}