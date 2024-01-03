import React from 'react'
import './Project.css';
import { FiGithub} from "react-icons/fi";
// import {FiLinkedin} from "react-icons/fi";
const Project = () => {
  return (
    <>
      
      <div className='project-content' id='projects'>
          <h3>Projects</h3>

          
      </div>
        <div className='pcontent'>
            <div className='pcards'>
            <h3><span style={{color:"red", fontSize:"30px"}} >Port</span>folio</h3>
                <p className='p'>Creating a dynamic and interactive personal Portfolio website using React js. In Portfolio website implement React hooks to manage state and handle Component lifecycle events efficiently.In Components there are Five sections that are Home, About, Skills, Project and Contact section. </p>
          <p className='p-descportfolio'><span>Technology Used:</span><br/> React JS | Html | CSS | JavaScript.</p>
          <div className='icons-project'>
          <span id='code'>code</span>
          <a href='https://github.com/Tanuja022/My-React-Portfolio'>
                <FiGithub id='github' size={30}/>
            </a>
          
        </div>
              </div>

              <div className='pcards'>
              <h3><span style={{color:"red", fontSize:"30px"}}>Tic</span> Tac Toe</h3>
                
                <p className='p'>Discover my Tic Tac Toe project—crafted using HTML, CSS, and JavaScript—exhibiting intuitive design
and interactive gameplay. Experience the classic game brought to life with clean, responsive design and
engaging user experience, emphasizing simplicity and functionality. <br/></p>
              <p className='p-desctic'><span>Technology Used:</span><br/> Html | CSS | JavaScript.</p>
              <div className='icons-project'>
              <span id='code'>code</span>
            <a href='https://github.com/Tanuja022/Tic-Tac-Toe'>
                  <FiGithub id='github' size={30}/>
              </a>
              
            </div>
              </div>

              <div className='pcards'>
              <h3><span style={{color:"red", fontSize:"30px"}}>Login</span> & registration</h3>
                
                
                <p className='p'>Creating a login and registration system using Node js, hbs(handlebars) template engine and MongoDB
database to practice my backend skills.</p>
              <p className='p-desclogin'><span>Technology Used:</span><br/> Node js | hbs | MongoDB Database.</p>
              <div className='icons-project'>
                <span id='code'>code</span>
            <a href='https://github.com/Tanuja022/Login-Register-Nodejs-project'>
                  <FiGithub id='github' size={30}/>
              </a>
              
            </div>
              </div>

              

              

        </div>

        <div className='pcontent'>
            <div className='pcards'>
            <h3><span style={{color:"red", fontSize:"30px"}}>Node.js</span> Employee API</h3>
                <p className='p'>The Node.js Employee API project utilizing MongoDB involves creating a REST API to manage employee
data.</p>
          <p className='p-descportfolio'><span>Technology Used:</span><br/> Node JS | MongoDB | REST API.</p>
          <div className='icons-project'>
          <span id='code'>code</span>
          <a href='https://github.com/Tanuja022/Nodejs_Emp_Api'>
                <FiGithub id='github' size={30}/>
            </a>
          
        </div>
              </div>

              

           

              

              

        </div>
         

       

      
         
    </>
  )
}

export default Project