import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <nav className='navbar'>
        <Link to="/"><img className="logo" src="/images/logo.png" alt="Logo_png" /></Link>

        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
        <Link to='/postJob' className='job'>
            <li style={{fontSize:"1.3rem",fontWeight:"bolder"}}>Post Job</li>
          </Link>
          <Link to='/jobs' className='job'>
            <li style={{fontSize:"1.3rem",fontWeight:"bolder"}}>Jobs</li>
          </Link>
          <Link to='/internships' className='internship'>
            <li style={{fontSize:"1.3rem",fontWeight:"bold"}}>Internships</li>
          </Link>
          <Link to='/login' className='login'>
            <li id="login_text"><CgProfile className={Mobile?"":"profileIcon"} />Login</li>
          </Link>
          <Link to='/employer-login' className='employer_login'>
            <li>Employer Login</li>
          </Link>
          
        </ul>
        {/* 
        whenever we click on button = setMobile(!Mobile) ==  is mobile oppsite to setMobile 
        */}
        <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
          {Mobile ? <ImCross /> : <FaBars />}
        </button>
      </nav>
    </>
  )
}
export default Navbar