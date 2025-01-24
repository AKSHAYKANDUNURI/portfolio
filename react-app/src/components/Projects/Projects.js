import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import a from "../../Assets/Projects/crs.jpg";
import b from "../../Assets/Projects/wa.png";
import c from "../../Assets/Projects/dab.jpg";
import d from "../../Assets/Projects/ec.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={a}
              isBlog={false}
              title="Circular Repository System"
              ghLink="https://github.com/AKSHAYKANDUNURI/circularRepository-"
              demoLink="https://drive.google.com/file/d/1k96hDGMCOowOyd8JlNyaZvtDyemeoOBZ/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={b}
              isBlog={false}
              title="Workshop Automation"
              ghLink="https://github.com/AKSHAYKANDUNURI/workhopAutomation"
              demoLink="https://drive.google.com/file/d/1EIsa1clK8Lyg5Znk--evynfQ8VLkj2dz/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={c}
              isBlog={false}
              title="Doctor Appointment Automation"
              ghLink="https://github.com/AKSHAYKANDUNURI/Doctor-Appointment-Booking-System-Mini"
              demoLink="https://drive.google.com/file/d/1cE8K6m69p2SBlQ8AaYJlodSwODZh1-kv/view?usp=drive_link"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={d}
              isBlog={false}
              title="ECommerce"
              ghLink="https://github.com/AKSHAYKANDUNURI/eCommerce"
              demoLink="https://drive.google.com/file/d/1Nt5CsNSmHPiQ0axG5duBB-ua3s57enaF/view?usp=sharing"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
