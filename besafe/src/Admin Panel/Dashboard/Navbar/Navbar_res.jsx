import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom"
// import style from "./NavbarDrawer.module.css"
import {AuthContext} from '../../ContextAdmin/AdminAuthContext';

const Navbar_res = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const val=React.useContext(AuthContext)
    const logout=(()=>{
        val.handleAuth();
    })
    return (
        <>
            <Button ref={btnRef} style={{ color: "#0F346C" }} onClick={onOpen}>
                <HamburgerIcon />
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader></DrawerHeader>

                    <DrawerBody style={{ marginTop: "3rem" }}>
                        <Link to={"/add"} >
                            <div >
                                <button >
                                   ADD ITEM
                                </button>
                            </div>
                        </Link>
                        <hr />
                        <hr />
                        <Link to={"/update"} >
                            <div >
                                <button >
                                UPDATE ITEM
                                </button>
                            </div>
                        </Link>
                        <hr />
                        <hr />
                        <Link to={"/delete"} >
                            <div >
                                <button >
                                DELETE ITEMS
                                </button>
                            </div>
                        </Link>
                        
                        
                    </DrawerBody>

                    <DrawerFooter>
                       
                        <Button style={{ backgroundColor: "#0F346C", color: "white" }} onClick={logout}>LOGOUT</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default Navbar_res