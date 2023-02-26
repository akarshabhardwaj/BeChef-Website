import React from "react";
import { AuthContext } from "../../Context/AuthContextProvider"
import { useToast,Box } from "@chakra-ui/react";


function PrivateRoute({children}) {
    const toast = useToast()
    const val=React.useContext(AuthContext);
    if(val.isAuth===false){
        return toast({
            position: 'bottom-left',
            render: () => (
              <Box color='white' p={3} bg='blue.500'>
                Hello World
              </Box>
            ),
          })
    }
    else{
        return children;
    }
}

export default PrivateRoute;