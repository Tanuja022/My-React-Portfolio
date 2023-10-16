import React from 'react'
import './Project.css';
import { FiGithub} from "react-icons/fi";
// import {FiLinkedin} from "react-icons/fi";
const Project = () => {
  return (
    <>
      <h1 className='p-heading'>My Projects</h1>
      <div className='project-content' id='projects'>
      
        <div className='pro-cards'>
          {/* <h1 className='p-heading'>Contact Us</h1> */}
         <div class="card">
            {/* <img src="img.jpg" alt="John" style="width:100%"> */}
            <h1>Portfolio</h1>
            
            <p className='p-desc'>In this portfolio project I simple apply some basic concept of Reactjs e.g., react
          router Dom, some react hooks, etc.</p>
          <p className='p-desc'>Technologies: React JS | Html | CSS | JavaScript | .</p>
          <div className='icons-project'>
          <span id='code'>code</span>
        <a href='https://github.com/Tanuja022/My-React-Portfolio'>
              <FiGithub id='github' size={30}/>
          </a>
          
        </div>
          
          </div>

          <div class="card">
            {/* <img src="img.jpg" alt="John" style="width:100%"> */}
            <h1>Tic Tac Toe</h1>
            <p className='p-desc'>To purpose of this project, make is to practice my skills. In this project I used Html, CSS, JavaScript</p>
          <p className='p-desc'>Technologies:  Html | CSS | JavaScript | .</p>
          <div className='icons-project'>
          <span id='code'>code</span>
        <a href='https://github.com/Tanuja022/Tic-Tac-Toe'>
              <FiGithub id='github' size={30}/>
          </a>
          
        </div>
          
          
          </div>


          <div class="card">
            {/* <img src="img.jpg" alt="John" style="width:100%"> */}
            <h1>Sports Website</h1>
            <p className='p-desc'>In this project I use web devlopment skill.</p>
          <p className='p-desc'>Technology Used: Html|CSS|Javascript.</p>
          <div className='icons-project'>
            <span id='code'>code</span>
        <a href='https://github.com/Tanuja022'>
              <FiGithub id='github' size={30}/>
          </a>
          
        </div>
          
          
          </div>

          </div>
      </div>
    </>
  )
}

export default Project