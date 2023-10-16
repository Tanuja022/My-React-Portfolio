import React, { useEffect } from 'react'
import './Home.css'
import Typed from 'typed.js';
import { FiGithub} from "react-icons/fi";
import {FiLinkedin} from "react-icons/fi";

const Home = () => {
  const el = React.useRef(null);

  useEffect(() => {
    // console.log("I'm in effect.")
    const typed = new Typed(el.current, {
      strings: ['<i>React Js</i> Devloper.', '<i>Javascript</i> Devloper.','<i>Web</i> Devloper.'],
      typeSpeed: 50,
      loop: {Infinity}
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      console.log("I'm in cleaner.")
      typed.destroy();
    };
  }, []);

  return (
    <>
    <div className='container' id='home'>

        <nav className='navbar'>
            
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#projects'>Project</a></li>
            <li><a href='#contact'>Contact</a></li>
        </nav>


        <div className='Name-details'>
            <h1><span id='name'>Tanuja Kavilkar</span></h1>
            <h3>I am a passionate IT fresher.</h3>

            <div className="App">
                 <span id='abc'>Interested In </span> 
                 <span ref={el} />
            </div>

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

export default Home