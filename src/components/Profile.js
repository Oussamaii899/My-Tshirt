import React from "react";
import "./css/prof.css";
import Menu from "./Menu";
import Prof from "./Prof";
import { Routes, Route } from "react-router-dom";

export default function Profile() {
    return(
        <div className="bodyP">
        <div className="containerP">
            <Menu></Menu>
            <Routes>
            </Routes>
        </div>
        </div>
    )
}