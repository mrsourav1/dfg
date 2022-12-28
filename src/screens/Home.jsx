import React from "react";
import "./Home.css";
import { FcSearch } from "react-icons/fc";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import CompaniesCard from "../components/CompaniesCard";
import { settings1 } from "../homeCarousel";
import { setting2 } from "../categoryCarousel";

const Home = () => {
  const settings = {
        // dots: true,
        infinite: true,
        arrows:true,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 1,
        // autoplay:true,
        // autoplaySpeed:1000,
        // arrows:false,
      
      responsive:[
      {
        breakpoint: 1135,
        settings: {
          slidesToShow: 7.3,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
          // autoplay:true,
          // autoplaySpeed:1000
        }
      },
      {
        breakpoint:957,
        settings:{
          slidesToShow:6.3,
          slidesToScroll:1,
          infinite: true,
          // autoplay:true,
          // autoplaySpeed:1000,
          // arrows:false

        }
      },
      {
        breakpoint:782,
        settings:{
          slidesToShow:4.3,
          slidesToScroll:1.3,
          infinite: true,
          // autoplay:true,
          // autoplaySpeed:1000,
          // arrows:false

        }
      },
      {
        breakpoint:519,
        settings:{
          slidesToShow:3.3,
          slidesToScroll:1,
          infinite: true,
          // autoplay:true,
          // autoplaySpeed:1000,
          // arrows:false


        }
      },
      {
        breakpoint:489,
        settings:{
          slidesToShow:2.2,
          slidesToScroll:1,
          infinite:false,
          // autoplay:true,
          // autoplaySpeed:1000,
          // arrows:false


        }
      }
    ]
  };

  return (
    <>
    <div className="home">
      {/* seach box start */}
      <div className="search_box">
        <input className="search_area" type="text" placeholder="Search ?"  />
          <button className="icon_button">
            <FcSearch className="search_icon" />
          </button>
      </div>
        {/* search box end */}
          {/* carousel start */}
        <Slider {...settings1} style={{zIndex:"-1000"}}>
          <div className='home_carousel'>
            <img className='carousel_image' src="/images/employeelogin.png" alt="logo" />
          </div>
          <div className='home_carousel'>
            <img className='carousel_image' src="/images/employeelogin.png" alt="logo" />
          </div>
          <div className='home_carousel'>
            <img className='carousel_image' src="/images/employeelogin.png" alt="logo" />
          </div>        
        </Slider>
      {/* carousel end */}
   
      <div className="job_heading">
        <h2>Jobs</h2>
        <p>Getting Job is Easy now</p>
      </div>
      <div className="company_box">
        <div className="companyBox_heading">
          <h3 style={{ textAlign: "center", fontWeight: "bold", fontSize: "1.3rem",margin:"50px" }}>
            Popular Employers
          </h3>
        </div>
          <div className="company_carousel">
          <Slider {...settings}>
            <div className="company_carouselBox">
              <CompaniesCard img = "/images/amazonImg.png" />
            </div>
            <div className="company_carouselBox">
              <CompaniesCard img = "/images/amazonImg.png" />
            </div>
            <div className="company_carouselBox">
              <CompaniesCard img = "/images/amazonImg.png" />
            </div>
            <div className="company_carouselBox">
              <CompaniesCard img = "/images/amazonImg.png" />
            </div>
            <div className="company_carouselBox">
              <CompaniesCard img = "/images/amazonImg.png" />
            </div>
            <div className="company_carouselBox">
              <CompaniesCard img = "/images/amazonImg.png" />
            </div>
            <div className="company_carouselBox">
              <CompaniesCard img = "/images/amazonImg.png" />
            </div>
            <div className="company_carouselBox">
              <CompaniesCard img = "/images/amazonImg.png" />
            </div>
            <div className="company_carouselBox">
              <CompaniesCard img = "/images/amazonImg.png" />
            </div>
          </Slider>
        </div>
      </div>
      {/* company carousel box end */}

      {/* popular category icon start */}
      <div className="category_heading">
        <h3 style={{ textAlign: "center", fontWeight: "bold", fontSize: "1.3rem",margin:"50px" }}>
          Popular Category
        </h3>
      </div>
      <div className="category_card">
        <Slider {...setting2}>          
          <div className="category_cardBox">
            <div className="category_img">
                <img className="companies_img" src="/images/dataScience.png" alt="category_list" />
            </div>
            <div className="category_name" style={{textAlign:"center"}}>
                <p>Data Science</p>
            </div>
          </div>
          <div className="category_cardBox">
            <div className="category_img">
                <img className="companies_img" src="/images/finance.png" alt="category_list" />
            </div>
            <div className="category_name" style={{textAlign:"center"}}>
                <p>Finance</p>
            </div>
          </div>
          <div className="category_cardBox">
            <div className="category_img">
                <img className="companies_img" src="/images/hr.png" alt="category_list" />
            </div>
            <div className="category_name" style={{textAlign:"center"}}>
                <p>HR</p>
            </div>
          </div>
          <div className="category_cardBox">
            <div className="category_img">
                <img className="companies_img" src="/images/dataScience.png" alt="category_list" />
            </div>
            <div className="category_name" style={{textAlign:"center"}}>
                <p>Data Science</p>
            </div>
          </div>
          <div className="category_cardBox">
            <div className="category_img">
                <img className="companies_img" src="/images/dataScience.png" alt="category_list" />
            </div>
            <div className="category_name" style={{textAlign:"center"}}>
                <p>Data Science</p>
            </div>
          </div>
          <div className="category_cardBox">
            <div className="category_img">
                <img className="companies_img" src="/images/dataScience.png" alt="category_list" />
            </div>
            <div className="category_name" style={{textAlign:"center"}}>
                <p>Data Science</p>
            </div>
          </div>
          <div className="category_cardBox">
            <div className="category_img">
                <img className="companies_img" src="/images/dataScience.png" alt="category_list" />
            </div>
            <div className="category_name" style={{textAlign:"center"}}>
                <p>Data Science</p>
            </div>
          </div>
          <div className="category_cardBox">
            <div className="category_img">
                <img className="companies_img" src="/images/dataScience.png" alt="category_list" />
            </div>
            <div className="category_name" style={{textAlign:"center"}}>
                <p>Data Science</p>
            </div>
          </div>
          <div className="category_cardBox">
            <div className="category_img">
                <img className="companies_img" src="/images/dataScience.png" alt="category_list" />
            </div>
            <div className="category_name" style={{textAlign:"center"}}>
                <p>Data Science</p>
            </div>
          </div>



          {/* <Card img = "/images/dataScience.png" name = "Data Science" /> */}
          {/* <Card img = "/images/finance.png" name = "Finance" /> */}
          {/* <Card img = "/images/marketing.png" name = "Marketing" /> */}
          {/* <Card img = "/images/computer.png" name = "Engineering" /> */}
          {/* <Card img = "/images/contentWriting.png" name = "Content Writing" /> */}
        </Slider>
      </div>
    </div>
  </>
  )
}

export default Home
