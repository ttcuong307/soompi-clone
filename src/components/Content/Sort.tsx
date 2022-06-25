import { useState } from "react";
import { Triangle } from "../../assets/PicList";

const Sort = () => {

  const [ isOpen, setIsOpen ] = useState(false);
  const [ sortType, setSortType ] = useState('Latest');
  
  return (
    <>
      <div>
        <div className='flex h-16 w-72'>
          <button onClick={ () => setIsOpen(!isOpen)} className="group w-auto ml-1 flex justify-between items-center text-xl text-black text-left font-medium hover:text-header1
          ">
            <span className="">{sortType} </span>
            <img className="h-2 w-2 mt-2 ml-2" alt="Triangle" src={Triangle}/>
          </button>
        </div>

        <div className={isOpen ? "block" : "hidden"}>
          <ul className="absolute w-268 h-auto gap-2 bg-white">
            <li className="h-12 flex items-center ml-6 text-base uppercase hover:cursor-pointer hover:text-white hover:bg-gradient-to-r from-header1 via-header2 to-header3">
              <button onClick={()=>setSortType("Latest")} className="">LATEST</button>
            </li>
            <li className="h-12 flex items-center ml-6 text-base uppercase hover:cursor-pointer hover:text-white hover:bg-gradient-to-r from-header1 via-header2 to-header3">
              <button onClick={()=>setSortType("Popular")} className="">POPULAR</button>
            </li>
            <li className="h-12 flex items-center ml-6 text-base uppercase hover:cursor-pointer hover:text-white hover:bg-gradient-to-r from-header1 via-header2 to-header3">
              <button onClick={()=>setSortType("Trending")} className="">TRENDING</button>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sort;