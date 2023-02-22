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
import style from "./NavbarDrawer.module.css"

const NavbarDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

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
                        <Link to={"/"} >
                            <div className={style.subDrawer1}>
                                <button className={style.drawerText}>
                                    ON THE MENU
                                </button>
                            </div>
                        </Link>
                        <hr />
                        <hr />
                        <Link to={"/"} >
                            <div className={style.subDrawer1}>
                                <button className={style.drawerText}>
                                MEAL KITS
                                </button>
                            </div>
                        </Link>
                        <hr />
                        <hr />
                        <Link to={"/"} >
                            <div className={style.subDrawer1}>
                                <button className={style.drawerText}>
                                WINE BUNDLES
                                </button>
                            </div>
                        </Link>
                        <hr />
                        <hr />
                        <Link to={"/"} >
                            <div className={style.subDrawer1}>
                                <button className={style.drawerText}>
                                PANTRY
                                </button>
                            </div>
                        </Link>
                        <hr />
                        <hr />
                        <Link to={"/"} >
                            <div className={style.subDrawer1}>
                                <button className={style.drawerText}>
                                KITCHEN TOOLS
                                </button>
                            </div>
                        </Link>
                    </DrawerBody>

                    <DrawerFooter>
                        <Button variant='outline' mr={3} style={{ color: "#0F346C" }}>
                            LOGIN
                        </Button>
                        <Button style={{ backgroundColor: "#0F346C", color: "white" }}>SIGNUP</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default NavbarDrawer