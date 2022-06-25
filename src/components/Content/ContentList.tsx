
import ContentItem from "./ContentItem";
import Sort from "./Sort";

import { ContentItemType } from "../../types/type";

import { ContentDummyData } from "../../Data/ContentDummy";
import { useEffect, useState } from "react";

const ContentList = () => {

  const [ page, setPage ]  = useState(1);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ displayList, setDisplayList] = useState<ContentItemType[]>([]);

  useEffect(()=>{
    let displayItems:ContentItemType[] = ContentDummyData.slice(0, (page*9));
    setDisplayList(displayItems);
  },[page]);

  return (
    <> 
      <div className="w-1280 h-1878">
        <Sort/>
        <div className="w-full px-2 flex flex-wrap">
          {
            displayList.map((item, index) => 
              <ContentItem key={index} data={item}/>
            )
          }
        </div>
        <div className="my-6">
          <div className={`p-1 mx-auto relative w-3/5 h-12 text-lg font-medium ${isLoading ? "bg-gray-400" : "bg-gradient-to-br from-header1 via-header2 to-header3"} `}>
            <button className={`w-full h-10 ${isLoading ? "bg-gray-400" : "bg-white hover:bg-header1"}  `}
              disabled={isLoading ? true : false}
              onClick={()=>setPage(page+1)}
            >
              LOAD MORE
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContentList;