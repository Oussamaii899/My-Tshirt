import Register from "./Register";
import Login from "./Login";
import './css/Register.css'

export default function Auth(){
    return(

        <div>
            <Login></Login>
            <Register></Register>
        </div>
    )
}