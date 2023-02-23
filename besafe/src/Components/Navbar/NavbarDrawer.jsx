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
    useDisclosure,
    Avatar,
    Divider
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { Link } from "react-router-dom"
import style from "./NavbarDrawer.module.css"
import Login from '../Login/Login'
import Signup from '../Signup/Signup'
import { HiShoppingCart } from 'react-icons/hi';
import { Icon } from '@chakra-ui/react'
import { AuthContext } from "../../Context/AuthContextProvider";


const NavbarDrawer = () => {
    const val = React.useContext(AuthContext);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [Username, setUsername] = React.useState("");
    React.useEffect(() => {
        setUsername(localStorage.getItem("userName"))
    })
    const handleSignout = () => {
        val.handleAuth();
        localStorage.removeItem("token")
        localStorage.removeItem("userName")
      }
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

                    <DrawerFooter style={{ display: "flex", gap: "1rem" }}>
                        {val.isAuth === true ? (
                            <div className={style.navbarText2}>
                                <div className={style.avatar}>
                                    <Avatar name={Username} />
                                    <h1 style={{ marginTop: "0.7rem" }}>{Username}</h1>
                                    <Divider orientation='vertical' />
                                </div>
                                <button onClick={handleSignout} className={style.logout}>LOGOUT</button>
                                <div className={style.cart}><Link to={"/"}><Icon as={HiShoppingCart} boxSize={10} /></Link></div>
                            </div>
                        ) : (
                            <div className={style.navbarText1}>
                                <Login />
                                <Signup />
                            </div>
                        )}
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default NavbarDrawer