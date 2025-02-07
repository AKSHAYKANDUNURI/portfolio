import React from "react";
import { Col, Row } from "react-bootstrap";
import { 
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiCode,
} from "react-icons/di";
import { SiBootstrap, SiOpencv } from "react-icons/si";
import { SiFlask, SiMysql } from "react-icons/si";
import { FaBrain } from "react-icons/fa"; // Placeholder icon for Scikit-Learn
import { FaRobot } from "react-icons/fa";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiCode /> C
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava /> Java
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> React
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /> Node.js
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /> MongoDB
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> JavaScript
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql /> SQL
      </Col>
    </Row>
  );
}

export default Techstack;
