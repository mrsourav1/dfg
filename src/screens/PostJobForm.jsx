import React, { useState } from 'react'
import "./PostJobForm.css"

const PostJobForm = () => {
  const [Worktype,setWorktype] = useState("")
  const [employementType,setEmployementType] = useState("")

  return (
    <div className='postJobForm_Section'>
        <div className='postJobform_container'>
            <form className='postJobform'>
              <input type="text" className='postjobform_text' placeholder='Job Title' />
              <input type="text" className='postjobform_text' placeholder='Company Name' />
              {/* workType */}
              <select value={Worktype} className='postjobform_text' onChange={((e)=>setWorktype(e.target.value))} name="WorkType">
                <option value="" selected disabled hidden>Workplace Type</option>
                <option value="Work From Home">Work From Home</option>
                <option value="Hybrid">Hybrid</option>
                <option value="OnSite">OnSite</option>
              </select>
              <input type="text" className='postjobform_text' placeholder='Job Location' />
              {/* employementType */}
              <select className='postjobform_text' value={employementType} onChange={((e)=>setEmployementType(e.target.value))} name="employmentType">
                <option value="" selected disabled hidden>Employement Type</option>
                <option value="Full Time">Full Time</option>
                <option value="Part Time">Part Time</option>
                <option value="Contract">Contract</option>
                <option value="Temporary">Temporary</option>
                <option value="Volunter">Volunter</option>
                <option value="Internship">Internship</option>
              </select>
              <input style={{backgroundColor:"rgb(14, 47, 234)",border:'none',color:'white'}} className='postjobform_text' type="submit" value="Post Job" />
            </form>
        </div>
    </div>
  )
}

export default PostJobForm