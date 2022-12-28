import React from 'react'

const ServiceCard = (props) => {
  return (
    <div className='service_card'>
        <div className='Service_image'>
            <img className='service_img' src={props.img} alt="Resume_Database" />
        </div>
        <div className='service_header'>
            <h3>{props.header}</h3>
        </div>
        <div className='service_para'>
            <p>{props.para}</p>
        </div>
    </div>
  )
}

export default ServiceCard