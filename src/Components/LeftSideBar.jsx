import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as HomeIcon } from '../assets/icon-nav-home.svg';
import { ReactComponent as MovieIcon } from '../assets/icon-nav-movies.svg';
import { ReactComponent as SeriesIcon } from '../assets/icon-nav-tv-series.svg';
import UserPng from '../assets/user.png'
export default function LeftSideBar() {
  const [enableProfile, setEnableProfile] = useState(false)

  const handleProfileContainer = ()=>{
    setEnableProfile(!enableProfile)
  }
  return (
    <div className='left-side-main'>
        <div className='left-side-first sidebar-options'>
            <Link to='/'><Logo/></Link>
            <ul>
              <li className='sidebar-options'><NavLink to='/' activeClassName="active"><HomeIcon /></NavLink></li>
              <li className='sidebar-options'><NavLink to='/movies' activeClassName="active"><MovieIcon/></NavLink></li>
              <li className='sidebar-options'><NavLink to='/series' activeClassName="active"><SeriesIcon/></NavLink></li>
            </ul>
        </div>
        <div className='left-side-second'>
            <img src={UserPng} width={50} height={50} style={{cursor:'pointer'}} onClick={()=>handleProfileContainer()}/>
            {
              enableProfile &&
              <div className='profile-container'>
                  <Link to='/login'><button type='button' className='profile-btns'>Log In</button></Link>
                  <Link to='/register'><button type='button' className='profile-btns'>Sign Up</button></Link>
              </div>
            }
        </div>
        
    </div>
  )
}
