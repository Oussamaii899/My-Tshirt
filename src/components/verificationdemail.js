import React from "react";
import "./css/verif.css";
export default function Verifi() {
    return(
        <div className="body">
            <div className="containerV">
                <form action="">
                    <h1>Verification de email</h1><br /><br />
                    <label htmlFor="">Email Verifi :</label><br /><br />
                    <input className="in" type="text" placeholder="Enter email verifi"/><br /><br />
                    <label htmlFor="">Code de Verification :</label><br /><br />
                    <input className="in" type="text" placeholder="Code Vérifi"/><br /><br />
                    <button className="btnV">Verification</button>
                </form>
            </div>
        </div>

    )
}