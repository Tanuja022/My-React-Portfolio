import React from 'react'
import './About.css';
import { FaUniversity } from "react-icons/fa";
// import devloper from './devloper.jpg';
const About = () => {
  return (
    <>
      <div className='a-content' id='about'>
        {/* <div className='a-left'>
          <img src={devloper} className='img-dev' alt='Internet Error' />
        </div> */}

        <div className='a-right'>
            <h3>About Me</h3>
            <p className='a-paragraph'> I am <span>Tanuja Kavilkar</span> . I am Passionated Bsc IT Graduate with strong interest in ReactJs devlopment, JavaScript devlopment and Web devlopment.
            Eager to contribute technical proficiency and a passion for continuous learning to a dynamic team, faster growth and delivering impactful solutions in the field of IT.</p>
            
            <div className='aboutimg'>
            <FaUniversity size={30} className='uni-icon'/> <span id='uni'>Pillai college of Arts, Commerce and Science, New panvel CGPA 7.28. </span>
            </div>
        </div>
      </div>
    </>
  )
}

export default About