import React, { useState } from 'react'
import './Contact.css';
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const Contact = () => {

 const [contact,setContact]=useState({
  name:"",
  email:"",
  message:"",
 })

 const handlechange=((e)=>{
  const name=e.target.name;
  const value=e.target.value;
  setContact({...contact,[name]:value})
 })

 const handlesubmit=((e)=>{
    e.preventDefault();
    console.log(contact)
 })

 
  
  return (
    <div className='c-content' id='contact'>
        <h1 className='c-heading'>Contact Us</h1>
        <form className='c-form' method='post' onSubmit={handlesubmit}   >
           <label>Name</label>
           <input type='text' name='name' id='' placeholder='enter your name' onChange={handlechange} value={contact.name} required />

           <label>Email</label>
           <input type='email' name='email' id='' placeholder='enter your email'  onChange={handlechange} value={contact.email}  required />

           <label>Message</label>
          <textarea name='message' id='cmessage' placeholder='enter your Query'  onChange={handlechange} value={contact.message}  required />

          <button type='submit' id='sub'>submit</button>


          <div className='c-icons'>
              <BsTelephone size={25} /><span id='cnum'></span>
              <AiOutlineMail size={25}/><span id='ename'></span>
          </div>
        </form>
        console.log({contact.name},{contact.email},{contact.message})
      </div>
  )
}

export default Contact