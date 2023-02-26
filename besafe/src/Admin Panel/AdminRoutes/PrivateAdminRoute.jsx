import React from "react";
import { AuthContext } from "../ContextAdmin/AdminAuthContext"
import AdminLogin from "../Login/AdminLogin";
// import { useToast,Box } from "@chakra-ui/react";


function PrivateAdminRoute({children}) {
    // const toast = useToast()
    const val=React.useContext(AuthContext);
    if(val.isAdmin===false){
        return <AdminLogin/>
    }
    else{
        return children;
    }
}

export default PrivateAdminRoute;