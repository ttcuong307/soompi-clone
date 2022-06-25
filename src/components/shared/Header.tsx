
import { NavLink } from "react-router-dom";
import { Logo, LogoWhite } from "../../assets/PicList";
import Menu from "../Menu/Menu";

import { useAppSelector } from "../../redux/store";

const Header = () => {

  const isDark = useAppSelector(state => state.generalStore.isDark)
  
  return (
    <>
      <div className="h-18 w-screen bg-white dark:bg-black flex flex-col">
        <div className="h-1.5 w-screen bg-gradient-to-r from-header1 via-header2 to-header3"/>
        <div className="h-16 w-screen bg-white dark:bg-black dark:text-white  flex justify-center ">
          <div className="h-16 w-1280 flex">
            <NavLink to={"/"} className=""><img className="ml-4 h-16 w-138" alt="Logo" src={isDark ? LogoWhite : Logo}/></NavLink>
            <Menu/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header;