import React, { useState } from 'react'
import './EmployerLogin.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ServiceCard from '../components/ServiceCard';
import { TiTickOutline } from 'react-icons/ti'
import { Link } from 'react-router-dom';

const EmployerLogin = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const loginUser = async (e)=>{
    e.preventDefault()
    const response = await fetch("http://localhost:5000/auth/login",{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify({
        email,
        password
      })
    })
    const data = await response.json()
    console.log(data)

    if(data.user){
      // localStorage.setItem('token')
      alert("Login successful")
      window.location.href = '/'
    }else{
      alert("Invalid Inforamtion")
    }
  }


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:1500
  };
  return (
    <div className='employee_login'>
      {/* carosel start */}
      <Slider {...settings} style={{zIndex:"-1000"}}>
        <div className='employee_img'>
          <img className='employeeImage' src="/images/employeelogin.png" alt="logo" />
        </div>
        <div className='employee_img'>
          <img className='employeeImage' src="/images/employeelogin.png" alt="logo" />
        </div>
        <div className='employee_img'>
          <img className='employeeImage' src="/images/employeelogin.png" alt="logo" />
        </div>        
      </Slider>
      {/* carousel end */}

      {/* heading start */}
      <div className='job_headingSection'>
          <div className='header_section'>
            <h1>Our Service</h1>
          </div>
          <div className='about_section'>
            <p>For employers who need great people. Find Better, Faster.</p>
          </div>
      </div>
      {/* heading end */}
      {/* cards section start */}
      <div className='job_cardSection'>
        
        <ServiceCard 
        img = "/images/resume_database.png"
        header = "Resume Database Access"
        para = "Find your next hire with all new RDA powered by Semantic Search technology that makes it easy and quick to find the talent matching your requirements."
        />
        <ServiceCard 
        img = "/images/job_search.jpeg"
        header = "Job Posting"
        para = "Reach your next hire faster. Get relevant responses to your job ads with our new age technology."
        />
        <ServiceCard 
        img ="/images/social_media.jpg"
        header = "Social Job Ads"
        para = "Use the power of Social Job Ads to take your job posting to a large pool of active and passive job seekers on social media & beyond. Find Better, Faster"
        />
      </div>
      {/* cards section end */}

      {/* login Section start */}
      <div className='login_section'>
        <div className='loginSection_main'>
          <div className='left_setion'>
            <div className='leftSection_headers'>
              <h3 className='leftSection_para'><TiTickOutline style={{fontSize:"1.5rem"}} /> Attract the Best Talent</h3>
              <h3 className='leftSection_para' ><TiTickOutline /> Find Relevant Profiles</h3>
              <h3 className='leftSection_para' ><TiTickOutline /> Hire Fast, Hire Right</h3>
              <h3 className='leftSection_para' ><TiTickOutline /> Quick & Easy to Use</h3>
            </div>
          </div>
          <div className='right_section'>
            <div className='rightSection_login'>
              <form className='employeeLogin_form' onSubmit={loginUser}>
                <div className='googleSignIn'>
                  <input className='googleSignInButton' type="submit" value="SignIn with Google" />
                </div>
                <hr />
                <div>
                  <p>---or---</p>
                </div>
                <div className='employeeEmail_section'>
                  <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className='employeepassword_section'>
                  <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <div>
                  <input className='employeeLoginButton' type="submit" value="Login" />
                </div>
                <div style={{margin:"5px",fontSize:"0.8rem"}}>
                  <p>Forget Password?<a href="#">Forget password</a></p>
                  <p>New User?<a href="#">SignUp</a></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Login section end */}
      {/* footer section start */}
      <div className='employeeLogin_footerSection'>
        <div className='employeeLoginFooter'>
          {/* footer left section */}
          <div className='Footer_leftSection'>
            <div className='footerLogo_section'>
              <img className='footer_image' src="/images/logo.png" alt="" />
            </div>
          </div>
          <div className="vertical"></div>
          {/* footer right section */}
          <div className='Footer_rightSection'>
            <div className='footerRightSection_category'>
              <div className='footerSection_para'>
                <Link style={{fontSize:"0.8rem",color:"Black"}} to="/">Home</Link>
              </div>
              <div className='footerSection_para'>
                <Link style={{fontSize:"0.8rem",color:"Black"}} to="/Job">Looking For Job?</Link>
              </div>
              <div className='footerSection_para'>
                <Link style={{fontSize:"0.8rem",color:"Black"}} to="/internships">Looking For Internship?</Link>
              </div>
              <div className='footerSection_para'>
                <Link style={{fontSize:"0.8rem",color:"Black"}} to="/">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployerLogin
