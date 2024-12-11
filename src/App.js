
import Login from "./components/Login";
import Nav from "./components/Navbar"
import Register from "./components/Register";
import Auth from "./components/Authentification";
import {Routes, Route } from "react-router-dom";
import Profile from "./components/Pofile";
import Prof from "./components/Prof";
import Menu from "./components/Menu";
import Commande from "./components/Commande";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProtectedRoute from "./components/Protectroute";
import ProtectedRouteEmail from "./components/ProtectedRouteEmail";
import EmailInputPage from './components/EmailInputPage'
import CodeSentPage from "./components/CodeSentPage";
import Verifi from "./components/verificationdemail";
import Resetpw from "./components/resetpassword";
function App() {

  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/Authentification" element={<Auth/>}/>
        <Route
                path="/profil/Account"
                element={
                    <ProtectedRoute>
                      <div className="containerP">
                        <Menu cl="black" bg="lightblue"></Menu>
                        <Prof />
                      </div>
                    </ProtectedRoute>
                }
            />
        <Route path="/profil/Commandes" element={<ProtectedRoute><div className="containerP"><Menu cl1="black" bg1="lightblue" ></Menu> <Commande /> </div> </ProtectedRoute>}></Route>
        <Route path="/profil/Setting" element={<ProtectedRoute> <div className="containerP"><Menu cl2="black" bg2="lightblue"></Menu> <Prof /> </div> </ProtectedRoute>}></Route>
        <Route path="/ForgetPassword" element={<EmailInputPage />}></Route>
        <Route path="/resetPassword" element={<ProtectedRouteEmail><Resetpw /></ProtectedRouteEmail>}></Route>
        <Route path="/Forgetpassword-emailsend-successfuly" element={<ProtectedRouteEmail><CodeSentPage /></ProtectedRouteEmail>}></Route>
        <Route path="/verificationEmail" element={<Verifi></Verifi>}></Route>
      </Routes>
     
      
    </div>
  );
}

export default App;
