import React from 'react'
import { IoMdArrowRoundBack } from "react-icons/io";

const Form = (props) => {
    const {forms,index,formData,handleClick,handleInputChange,handleBack,} = props;
  return (
    <form className='container'>
        {
          index > 0 && <a href='/' className='back-btn' onClick={handleBack}><IoMdArrowRoundBack/></a>
        }
          <label>{forms[index].label} </label>
          
          <input
              required
              value={formData[forms[index].id]}
              onChange={handleInputChange} 
              id={forms[index].id}
              type={forms[index].inputType}
              placeholder={forms[index].placeholder} />
          
          <button
              onClick={handleClick}>
              {forms[index].buttonName}
          </button>
          
      </form>
  )
}

export default Form
