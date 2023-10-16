import React from 'react'
import './Footer.css'
import { FiGithub} from "react-icons/fi";
import {FiLinkedin} from "react-icons/fi";
const Footer = () => {
  return (
    <div className='F-content'>
      <p className='f-para'>&copy; Tanuja Kavilkar's Portfolio</p>
      <div className='icons-footer'>
        <a href='https://github.com/Tanuja022'>
              <FiGithub id='github1' size={30}/>
          </a>
          <a href='https://www.linkedin.com/in/tanuja-kavilkar-20699a22b'>
              <FiLinkedin id='link1' size={30}/>
          </a>
        </div>
    </div>
  )
}

export default Footer