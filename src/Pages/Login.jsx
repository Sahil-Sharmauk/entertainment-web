import React from 'react'
import { Link } from 'react-router-dom'
export default function Login() {
  return (
    <div className='login-main-container'>
      <div className='login-container'>
        <h2 style={{fontWeight:"300"}}>Log In</h2>
        <input className="login-inpt" placeholder='Email address' type='text'></input>
        <input className="login-inpt" placeholder='password' type='password'></input>
        <button className='login-btn'>Login to your 
        account</button>
        <Link to='/register' style={{textDecoration:'none', color:"white", cursor:'pointer'}}><p>Don't have an account?<span style={{color:"orangered"}}>&ensp;Register</span></p></Link>
      </div>
    </div>
  )
}
