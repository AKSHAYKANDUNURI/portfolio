import React from 'react'
import { Container } from "react-bootstrap";
import dhruv from "../Assets/dhruv_soft_logo.jpeg"
import Particle from './Particle';


function Experience() {
  return (
    <div>
        <Container fluid className="project-section">
            <Particle/>
        <h1 className="project-heading">My <strong className="purple">Experience </strong></h1>

        <div className="expContainer">
            <img className='compimg' src={dhruv } alt='logo'></img>
            <div className='expData'>
                <p className='role' >Salesforce Developer Intern</p>
                <p className='comp '>Dhruvsoft Services Private Limited.</p>
                <p className='date'>Start date : 16-JAN-2025</p>
                <p className='date'>End date : Continuing</p>

            </div>
            
        </div>

        

        </Container>
    </div>
  )
}

export default Experience