import React, { useState } from 'react'
import './Contact.css';
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {
  const data={name:"",email:"",desc:""};
  const [InputData,setInputData]=useState(data);

  function handledata(e){
    setInputData({...InputData,[e.target.name]:e.target.value})
    console.log(InputData)
  }

  function handleSubmit(e){
    
      if(!InputData.name||!InputData.email){
        alert("Name and Email mandatory")
      }
      e.preventDefault();
      console.log("Submit Successful")
      
  }
  return (
    <div className='c-content' id='contact'>
        <h1 className='c-heading'>Contact Us</h1>
        <form className='c-form' method='post' onSubmit={handleSubmit}>
          <input type='text' name='name' placeholder='Enter your Name' value={InputData.name} onChange={handledata}></input>
          <input type='text' name='email' placeholder='Enter Your Email' value={InputData.email} onChange={handledata}></input>
          <input type='text' name='desc' placeholder='Enter your Description' value={InputData.desc} onChange={handledata}></input>
          <button className='btn' type='submit'>Submit </button>

          <div className='c-icons'>
              <BsTelephone size={25} /><span id='cnum'>+91 XXXXXXXXXX</span>
              <AiOutlineMail size={25}/><span id='ename'>tanujakavilkar</span>
          </div>
        </form>
      </div>
  )
}

export default Contact