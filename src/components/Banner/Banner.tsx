
import {useLocation } from 'react-router-dom';


import { BannerPic } from '../../assets/PicList'

const Banner = () => {

  const location = useLocation();
  const path = location.pathname.split('/')[2];
  let title = '';

  switch(path) {
    case "quiz": {
      title = "QUIZZES";
      break;
    }
    case "video": {
      title = "VIDEO";
      break;
    }
    case "celeb": {
      title = "CELEB";
      break;
    }
    case "fashionbeauty": {
      title = "STYLE";
      break;
    }
    case "music": {
      title = "MUSIC";
      break;
    }
    case "features": {
      title = "FEATURES";
      break;
    }   
  }
  
  return (
    <>
      <div className="relative w-1280 px-2">
        <img className='relative w-full h-auto' alt="Banner" src={BannerPic}/>
        <div className='absolute top-0 w-500 h-full bg-gradient-to-r from-header1 via-header3 to-transparent opacity-70'></div>
        <div className='absolute top-40 left-12 text-white font-medium flex flex-col'>
          <span className='text-2xl'>Explore</span>
          <span className='text-3xl'>{title}</span>
          <span className='text-xl'>//////////////////</span>
        </div>
      </div>
    </>
  )
}

export default Banner