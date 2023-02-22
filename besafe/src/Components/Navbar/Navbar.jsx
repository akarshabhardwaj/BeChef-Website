import React from 'react'
import style from "./Navbar.module.css"
import { Link } from "react-router-dom"
import logo from "../Assets/logo.webp"
import  NavbarDrawer from "./NavbarDrawer"
import Login from "../Login/Login"
import Signup from '../Signup/Signup'

const Navbar = () => {

  // FUSE
  const handleFuse = () => {
    setOnthemenu(false);
    setMealkits(false);
    setWinebundles(false);
    setPantry(false);
    setKitchentools(false);
  }

  // ON THE MENU
  const [onthemenu, setOnthemenu] = React.useState(false);
  const handleonthemenu = () => {
    handleFuse();
    setOnthemenu(true)
  }

  // MEAL KITS
  const [mealkits, setMealkits] = React.useState(false);
  const handlemealkits = () => {
    handleFuse();
    setMealkits(true)
  }

  // WINE BUNDLES
  const [winebundles, setWinebundles] = React.useState(false);
  const handlewinebundles = () => {
    handleFuse();
    setWinebundles(true)
  }

  // PANTRY
  const [pantry, setPantry] = React.useState(false);
  const handlepantry = () => {
    handleFuse();
    setPantry(true)
  }

  // KITCHEN TOOLS
  const [kitchentools, setKitchentools] = React.useState(false);
  const handlekitchentools = () => {
    handleFuse();
    setKitchentools(true)
  }

  return (
    <>
      <div className={style.wholeComponent}>
        <div className={style.logo} onClick={handleFuse}>
          <Link to={"/"}>
            <img src={logo} alt="Logo" style={{ width: "5rem" }} />
          </Link>
        </div>
        <div className={style.navbarText}>
          <Link to={"/"} style={{ margin: "auto" }}>
            <button className={style.navbarText1} style={(onthemenu ? ({ color: "#0F346C", textDecoration: "underline" }) : ({ color: "black" }))} onClick={handleonthemenu}>
              ON THE MENU
            </button>
          </Link>
          <Link to={"/"} style={{ margin: "auto" }}>
            <button className={style.navbarText2} style={(mealkits ? ({ color: "#0F346C", textDecoration: "underline" }) : ({ color: "black" }))} onClick={handlemealkits}>
              MEAL KITS
            </button>
          </Link>
          <Link to={"/"} style={{ margin: "auto" }}>
            <button className={style.navbarText3} style={(winebundles ? ({ color: "#0F346C", textDecoration: "underline" }) : ({ color: "black" }))} onClick={handlewinebundles}>
              WINE BUNDLES
            </button>
          </Link>
          <Link to={"/"} style={{ margin: "auto" }}>
            <button className={style.navbarText4} style={(pantry ? ({ color: "#0F346C", textDecoration: "underline" }) : ({ color: "black" }))} onClick={handlepantry}>
              PANTRY
            </button>
          </Link>
          <Link to={"/"} style={{ margin: "auto" }}>
            <button className={style.navbarText5} style={(kitchentools ? ({ color: "#0F346C", textDecoration: "underline" }) : ({ color: "black" }))} onClick={handlekitchentools}>
              KITCHEN TOOLS
            </button>
          </Link>
        </div>
        <div className={style.navbarText1}>
          <Login/>
          <Signup/>
        </div>
        <div className={style.navbarDrawer}>
          <NavbarDrawer/>
        </div>
      </div>
      <div style={{marginTop:"0.5rem"}}>
        <hr />
        <hr />
      </div>
    </>
  )
}

export default Navbar