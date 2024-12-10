import React from "react";
import './css/prof.css'

export default function Prof(){
    return(
        <form action="" className="account">
                <div className="aheader">
                    <h1 className="atitle">Account Setting</h1>
                    <div className="btnP">
                        <button className="cancel">Cancel</button>
                        <button className="save">Save</button>
                    </div>
                </div>
                <div className="edit">
                    <div className="input">
                        <div className=".div" htmlFor="">First Name</div>
                        <input className="inp1" type="text" placeholder="First Name"/>
                    </div>
                    <div className="input">
                        <div className=".div" htmlFor="">Last Name</div>
                        <input className="inp1" type="text" placeholder="Last Name"/>
                    </div>
                </div>
                <div className="edit">
                    <div className="input">
                        <div className=".div" htmlFor="">Photo</div>
                        <input className="inp1" type="file" placeholder="Email"/>
                    </div>
                    <div className="input">
                        <div className=".div"  htmlFor="">Password</div>
                        <input className="inp1" type="password" placeholder="Passord"/>
                    </div> 
                </div>
            </form>
    )
}