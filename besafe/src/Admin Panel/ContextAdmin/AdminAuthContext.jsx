import React from "react";

export const AuthContext =React.createContext();

function AdminAuthContext({children}) {
    const [isAdmin,setIsAdmin]=React.useState(false);

    const handleAuth=()=>{
        setIsAdmin(!isAdmin);
    }
    return(
        <AuthContext.Provider value={{isAdmin:isAdmin,handleAuth:handleAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AdminAuthContext;