import React from "react";
import { AuthContext } from "../../Context/AuthContextProvider"

import { Navigate, NavLink, useNavigate } from "react-router-dom";

import { useToast,Box } from "@chakra-ui/react";
import Login from "../../Components/Login/Login";


function PrivateRoute({children}) {
    const nav =  useNavigate()
    const toast = useToast()
    const val=React.useContext(AuthContext);
    // console.log('val.isAuth:', val.isAuth)
    // {val.isAuth ? NavLink}
    if(val.isAuth===false){
        toast({
            title: "Not Valid",
            description: "You have to Login First",
            variant: "subtle",
            status:'error',
            position: 'top-right',
            duration: 3000,
            isClosable: true,
        })
        return <Navigate to="/"/>
            

        
    }
    else{
        return children;
    }
    
}

export default PrivateRoute;