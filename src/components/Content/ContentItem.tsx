import type { FC } from 'react'

import { NavLink } from 'react-router-dom'

import type { ContentItemType } from '../../types/type'

type ContentItemtT = {
  data: ContentItemType
}

const ContentItem:FC<ContentItemtT> = ({data}) => {
  return (
    <>
      <div className="w-402 h-340 m-2">
        <NavLink to={`/article/quiz/${data.id}`} className="w-402 h-268"><img alt="thumbnail" src={data.thumbnail}/></NavLink>
        <div className="w-402 h-70 mt-2 flex justify-between">
          <NavLink to={`/article/quiz/${data.id}`} className="w-268 h-70">
            <span className='font-medium text-black dark:text-white hover:text-header1'>
              {data.title}
            </span>
          </NavLink>
          <div className="text-sm w-134 h-70 text-gray-400 dark:text-white text-right">{data.release}</div>
        </div>
      </div>
    </>
  )
}

export default ContentItem