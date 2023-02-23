import React from "react";

export const AuthContext =React.createContext();

function AuthContextProvider({children}) {
    const [isAuth,setisAuth]=React.useState(false);

    const handleAuth=()=>{
        setisAuth(!isAuth);
    }
    return(
        <AuthContext.Provider value={{isAuth:isAuth,handleAuth:handleAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;