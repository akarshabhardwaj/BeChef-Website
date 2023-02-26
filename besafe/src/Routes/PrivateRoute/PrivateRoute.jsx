import React from "react";
import { AuthContext } from "../../Context/AuthContextProvider"
import { Navigate, useNavigate } from "react-router-dom";
import { useToast,Box } from "@chakra-ui/react";
import Login from "../../Components/Login/Login";


function PrivateRoute({children}) {
    const nav =  useNavigate()
    const toast = useToast()
    const val=React.useContext(AuthContext);
    if(val.isAuth===false){
        return toast({
            render: () => (
              nav("/")
            ),
        })
    }
    else{
        return children;
    }
    
}

export default PrivateRoute;