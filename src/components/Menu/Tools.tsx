
import { useState } from "react";
import { Moon, Search, Person } from "../../assets/PicList"

import { useTypedSelector } from "../../redux/store";

const Tools = () => {
  
  const userInfo = useTypedSelector((state)=> state.stateUser?.currentUser);

  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <>
      <div className="flex justify-end items-center gap-3">
        <img className="w-5 h-5" alt="search" src={Search}/>
        <button className="hover:cursor-pointer"><img className="w-5 h-5" alt="moon" src={Moon}/></button>
        
        <div>
          <div className='flex h-5 w-5'>
            <button onClick={()=>setIsOpen(!isOpen)}>
              <img className="w-5 h-5" alt="person1" src={Person}/>
            </button>
          </div>

          <div className={isOpen ? "block" : "hidden"}>
            <div className="absolute right-48 top-16 w-64 h-60 bg-white shadow-md border-2 border-gray-400">
              <div className="ml-4 flex flex-col">
                <span>{userInfo?.name}</span>
                <span>{userInfo?.email}</span>
                <span>{userInfo?.company?.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tools