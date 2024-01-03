import UserContext from "./UserContext.jsx";
import {useState} from "react";

const  UserContextProvider = ({children})=>{

    const [User, setUser] = useState(null)

    return(
        <UserContext.Provider value={{User, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;