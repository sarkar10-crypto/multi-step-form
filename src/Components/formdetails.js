import React from 'react'

const Formdetails = (props) => {
    const {formData} = props;
  return (
    <div className='Data'>
          <h1> Success !</h1>
          <hr className='line' />
        <div className='contents'>
          <span>Name : {formData.name}</span>
          <br />
          <span>Email : {formData.email}</span>
          <br />
          <span>DOB : {formData.DOB}</span>
          <br />
          <span>Password : {formData.password}</span>
          <br />
          </div>
          
        </div>
  )
}

export default Formdetails
