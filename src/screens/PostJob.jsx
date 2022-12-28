import React from 'react'
import { Link } from 'react-router-dom'
import "./PostJob.css"

const PostJob = () => {
    const user = true;
  return (
    <div className='postJobSection'>
        <div className='postJob'>
            <div className='postJob_image'>
                <img className='postJobImage' src="/images/postJobImage.png" alt="" />
                <div className='postJob_button'>
                    <Link to="/postJobform" style={{color:"white"}}>Post A Job</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostJob