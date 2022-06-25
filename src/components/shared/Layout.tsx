
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from 'react-router-dom';

import Footer from './Footer';
import Header from './Header';

import { fetchUser } from "../../redux/slices/userSlice/asyncThunk";
import { TypedDispatch, useAppSelector, useTypedSelector } from "../../redux/store";

function Layout() {

  const dispatch = useDispatch<TypedDispatch>();
  const userInfo = useTypedSelector((state)=> state.stateUser?.currentUser);
  const isDark = useAppSelector(state => state.generalStore.isDark)

  useEffect(() => {
    if(userInfo && userInfo.id === 0){
      dispatch(fetchUser(1));
    }
  });

  return (
    <>
      <div className={`flex flex-col justify-center items-center ${isDark ? "dark" : ""}`}>
        <div className="sticky top-0 z-50 drop-shadow-lg">
          <Header/>
        </div>
        <main className='relative'>
          <Outlet/>
        </main>
        <Footer/>
      </div>
    </>
  )
};

export default Layout
