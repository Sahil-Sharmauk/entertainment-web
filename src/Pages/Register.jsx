
import React from 'react'
import {Link} from 'react-router-dom'
export default function Register() {
  return (
    <div className='register-main-container'>
      <div className='register-container'>
        <h2 style={{fontWeight:"300"}}>Register an account</h2>
        <input className="register-inpt" placeholder='Email address' type='text'></input>
        <input className="register-inpt" placeholder='password' type='password'></input>
        <input className="register-inpt" placeholder='Repeat password' type='password'></input>
        <hr style={{width:"100%"}}/>
        <button className='register-btn'>Create an account</button>
        <Link to='/login' style={{textDecoration:'none', color:"white", cursor:'pointer'}}><p>Already have an account?<span style={{color:"orangered"}}>&ensp;Login</span></p></Link>
      </div>
    </div>
    
  )
}
