import React from 'react'
import '../screens/Home.css'

const Card = (props) => {
  return (
    <div className="category_cardBox">
          <div className="category_img">
              <img className="companies_img" src={props.img} alt="category_list" />
          </div>
          <div className="category_name" style={{textAlign:"center"}}>
              <p>{props.name}</p>
          </div>
      </div>
  )
}

export default Card