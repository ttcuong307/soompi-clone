
import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

import store from "../../redux/store";

import { fetchUser } from "../../redux/slices/userSlice/asyncThunk";
import { TypedDispatch, useTypedSelector } from "../../redux/store";

function Layout() {

  const [isDark, setIsDark] = useState(false);
  const dispatch = useDispatch<TypedDispatch>();
  const userInfo = useTypedSelector((state)=> state.stateUser?.currentUser);

  useEffect(() => {
    if(userInfo && userInfo.id === 0){
      dispatch(fetchUser(1));
    }
  });

  return (
    <>
      <div className={`flex flex-col justify-center items-center ${isDark && "dark"}`}>
        <div className="sticky top-0 z-50 drop-shadow-lg">
          <Header setDarkMode={() => setIsDark(!isDark)}/>
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
