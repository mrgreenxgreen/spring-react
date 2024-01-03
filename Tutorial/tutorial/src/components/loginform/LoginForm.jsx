import Login from "./LoginForm.module.css"
import UserContext from "../../context/UserContext.jsx";
import {useContext} from "react";

export default function LoginForm(){

    const {User, SetUser} = useContext(UserContext)
        console.log(User)
        console.log(SetUser)

    function handleLogin(e){
        e.preventDefault()
        console.log("working")
        SetUser("Yes")
    }

    return (
        <>

            <form className={Login.form}>
                <input type="text"/>
                <input type="text"/>
                <button onClick={handleLogin}>Logina
                </button>
            </form>
            <h1>value:{User} </h1>
        </>
    )
}