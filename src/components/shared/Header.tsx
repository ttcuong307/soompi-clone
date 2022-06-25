import type { FC } from "react";

import Menu from "../Menu/Menu";
import { Logo } from "../../assets/PicList";
import { NavLink } from "react-router-dom";

type HeaderType = {
  setDarkMode: () => void
}

const Header:FC<HeaderType> = ({setDarkMode}) => {
  return (
    <>
      <div className="h-18 w-screen bg-white dark:bg-black flex flex-col">
        <div className="h-1.5 w-screen bg-gradient-to-r from-header1 via-header2 to-header3"/>
        <div className="h-16 w-screen bg-white dark:bg-black flex justify-center ">
          <div className="h-16 w-1280 flex">
            <NavLink to={"/"} className=""><img className="ml-4 h-16 w-138" alt="Logo" src={Logo}/></NavLink>
            <Menu/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;