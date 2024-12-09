import React from "react";
import "/css/Nav.css";

export default function Nav() {
    return(
        <>
        <header>
            <nav>
                <div className="logo"><span style={{color:"lightblue"}}>t-</span>shurt</div>
                    <ul>
                        <li><input type="text" placeholder="Cherchez un short" name="" id="" /><button type="submit">Search</button></li>
                        <li><div className="lien">compte</div></li>
                        <li><div className="lien">Panier</div></li>
                    </ul>
            </nav>
        </header>
        </>
    )
}