import React from 'react';
import { Outlet } from 'react-router-dom';
import SearchBar from '../Components/SearchBar';
import LeftSideBar from '../Components/LeftSideBar';
export default function AppLayout() {
  console.log("applayout")
  return (
    <div className='app-layout'>
        <LeftSideBar/>
        <div className='main-layout'>
            <SearchBar/>
            <Outlet/>
        </div>
    </div>
  )
}
