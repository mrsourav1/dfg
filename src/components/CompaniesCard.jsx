import React from 'react'
import '../screens/Home.css'

const CompaniesCard = (props) => {

  return (
        <img className="companies_img" style={{margin:"0px"}} src={props.img} alt="category_list" />
  )
}

export default CompaniesCard