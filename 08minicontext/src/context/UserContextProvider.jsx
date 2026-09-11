import { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    // global state maintaing here so that we can use it anywhere when need
    const [user,setUser] = useState(null)
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider