
import Login from "./components/Login";
import Nav from "./components/Navbar"
import Register from "./components/Register";
import Auth from "./components/Authentification";
import {Routes, Route } from "react-router-dom";
import Profile from "./components/Pofile";
import Prof from "./components/Prof";
import Menu from "./components/Menu";
import Commande from "./components/Commande";

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/Authentification" element={<Auth/>}/>
        <Route path="/profil/Account" element={<div className="containerP"><Menu cl="black" bg="lightblue"></Menu> <Prof /> </div>}></Route>
        <Route path="/profil/Commandes" element={<div className="containerP"><Menu cl1="black" bg1="lightblue"></Menu> <Commande /> </div>}></Route>
        <Route path="/profil/Setting" element={<div className="containerP"><Menu cl2="black" bg2="lightblue"></Menu> <Prof /> </div>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
