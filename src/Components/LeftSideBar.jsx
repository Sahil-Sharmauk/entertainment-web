import React from 'react'
import { Link } from 'react-router-dom'
export default function LeftSideBar() {
  return (
    <div className='left-side-main'>
        <div className='left-side-first'>
            <img src='/assets/logo.svg'/>
            <ul>
                <li><Link to='/'><img src='/assets/icon-nav-home.svg' alt='not found'/></Link></li>
                <li><Link to='/movies'><img src='/assets/icon-nav-movies.svg' alt='not found'/></Link></li>
                <li><Link to='/series'><img src='/assets/icon-nav-tv-series.svg' alt='not found'/></Link></li>
            </ul>
        </div>
        <div className='left-side-second'>
            <img src='/assets/user.png' width={50} height={50}/>
        </div>
    </div>
  )
}
