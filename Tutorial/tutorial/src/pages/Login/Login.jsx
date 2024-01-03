import Header from "../../division/Header.jsx";
import {NavLink} from "react-router-dom";
import LoginForm from "../../components/loginform/LoginForm.jsx";
import UserContext from "../../context/UserContext.jsx";
import {useState} from "react";

export default function Login(){
const [User, SetUser] = useState("")
    return(
        <>
            <UserContext.Provider value={{User, SetUser}}>
                <h1>Welcome to Login page</h1>
                <NavLink to={"/tutorials"}>Home</NavLink>
                <Header/>
                <LoginForm/>
            </UserContext.Provider>

        </>
    )
}