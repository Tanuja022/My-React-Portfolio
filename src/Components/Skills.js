import React from 'react'
import './Skills.css';
// import { AiFillHtml5 } from "react-icons/ai";
// import { SiCss3 } from "react-icons/si";
// import { SiJavascript} from "react-icons/si";
// import { SiReact} from "react-icons/si";
// import { FaNodeJs } from "react-icons/fa";
// import { DiMongodb } from "react-icons/di";
// import { DiJava } from "react-icons/di";
const Skills = () => {
  return (
    <>
      <div className='s-content' id='skills'>
      </div>
        <div className='front'>
              <h1 id='skill'>Skills</h1>
        </div>

        <h4 style={{ margin:"2px 280px", fontSize:"17px", color:"black", fontWeight:"bold"}}>FrontEnd Technologies:</h4>
        <div className='col1'>
          {/* <h6>Front End</h6> */}
         
                  <button type="submit">Html</button>
                  <button type="submit">CSS</button>
                  <button type="submit">Javascript</button>
                  <button type="submit">React Js</button>
                  {/* <button type="submit">Node Js</button> */}

        </div>
        <h4 style={{margin:"100px 280px", fontSize:"17px", color:"black", fontWeight:"bold"}}>Backend Technologies:</h4>
        <div className='col2'>
       
                  <button type="submit" className='btn2'>Node Js</button>
                  <button type="submit" className='btn2'>MongoDB</button>
                  <button type="submit" className='btn2'>MySql</button>
                  <button type="submit" className='btn2'>Git&Github</button>
                  <button type="submit" className='btn2'>Java</button>
        </div>
        
        

        

     



    </>
    
  )
}

export default Skills