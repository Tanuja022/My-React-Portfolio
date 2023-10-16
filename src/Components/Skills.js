import React from 'react'
import './Skills.css';
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3 } from "react-icons/si";
import { SiJavascript} from "react-icons/si";
import { SiReact} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { DiJava } from "react-icons/di";
const Skills = () => {
  return (
    <>
      <div className='s-content' id='skills'>
        <div className='s-myskills'>
            <h3 id='s-heading'>My Skills</h3>

            <div className='s-box'>
              <div className='s-icon'>
                <AiFillHtml5 size={70} color='orangered'  id='icon1' />
                <SiCss3 size={70} color='blue'/>
                <SiJavascript size={70} color='yellow'/>
                <SiReact size={70} color='blue'/>
                <FaNodeJs size={70} color='green'/>
                <DiMongodb size={70} color='darkgreen'/>
                <DiJava size={70}/>
                </div>
            </div>
            
            
        </div>

      </div>



    </>
    
  )
}

export default Skills