import React from 'react'
import './Home.css'

import { FiGithub} from "react-icons/fi";
import {FiLinkedin} from "react-icons/fi";

const Home = () => {
return (
    <>
   
    <div className='container' id='home'>
        <div className='navdiv'>
            <nav className='navbar'>
                
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#skills'>Skills</a></li>
                <li><a href='#projects'>Project</a></li>
                <li><a href='#contact'>Contact</a></li>
            </nav>
        </div>

        <div className='Name-details'>
            <h1><span id='name'>Tanuja<span style={{color:"blue", fontSize:"70px"}}>{" "}Kavilkar</span> </span></h1>
            <h3>IT Graduate with a passion for technology eager to contribute skills in Web devlopment, Javascript devlopment, React js devlopment.</h3>
           
        </div>

        <div className='icons-apply'>
        <a href='https://github.com/Tanuja022'>
              <FiGithub id='github' size={30}/>
          </a>
          <a href='https://www.linkedin.com/in/tanuja-kavilkar-20699a22b'>
              <FiLinkedin id='link' size={30}/>
          </a>
        </div>

        

    </div>
    
</>
  )
}

export default Home;