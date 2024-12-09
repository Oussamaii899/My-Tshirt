
import Login from "./components/Login";
import Nav from "./components/Navbar"
import Register from "./components/Register";
import Auth from "./components/Authentification";
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/Authtification" element={<Auth/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
