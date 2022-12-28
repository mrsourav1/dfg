import React, { useState, useEffect,
  useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Card from '../components/Card';

const Internships = () => {
      const settings = {
        dots: true,
        infinite: true,
        arrows:true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:1000
      };
  return (
      <div>
         <h2> Single Item</h2>
         <div>
         <Slider {...settings}>
         <Card
            img = "/images/computer.png" 
            name = "Engineering"
            />
            <Card
            img = "/images/computer.png" 
            name = "Engineering"
            />
            <Card
            img = "/images/computer.png" 
            name = "Engineering"
            />
            <Card
            img = "/images/computer.png" 
            name = "Engineering"
            />
            <Card
            img = "/images/computer.png" 
            name = "Engineering"
            />
         </Slider>
       </div>
       </div>
  )
}

export default Internships



// export default function Internships() {
//   const [defaultImage, setDefaultImage] = useState({});
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay:true,
//     autoplaySpeed:1
//   };
//   return (
//     <Slider {...settings}>
//       <div>
//         <h3>1</h3>
//       </div>
//       <div>
//         <h3>2</h3>
//       </div>
//       <div>
//         <h3>3</h3>
//       </div>
//       <div>
//         <h3>4</h3>
//       </div>
//       <div>
//         <h3>5</h3>
//       </div>
//       <div>
//         <h3>6</h3>
//       </div>
//     </Slider>
//   );
// }
