import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone , I am <span className="purple">Akshay Kumar Kandunuri </span>
            from <span className="purple"> Telangana, India.</span>
            <br />
            I am currently pursuing my graduation in Computer Science & Engineering at VNR VJIET .
            <br />
            <br />
          </p> 
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
