
import { NavLink } from "react-router-dom";
import { Triangle } from "../../assets/PicList";

import { MENULIST, EXPLORE } from "./MenuList";
import Tools from "./Tools";

const Menu = () => {
  return (
    <>
      <div className="w-full pl-8 flex justify-between items-center">
        <div className="flex justify-start items-center gap-2 text-lg font-bold uppercase ">
          <div className="text-xl flex items-center gap-3 hover:text-header1 hover:cursor-pointer">
            <span className="">EXPLORE</span>
            <img className="h-2 w-2 mt-1" alt="Triangle" src={Triangle}/>
          </div>
          <div className="h-full w-9/12 flex justify-start items-center gap text-xl">
            {
              MENULIST.map((item, index) => (
                <NavLink className="mx-2 hover:text-header1 hover:cursor-pointer" to={item.path}>{item.title}</NavLink>
              ))
            }
          </div>
        </div>
        <Tools/>
      </div>
    </>
  )
}

export default Menu;