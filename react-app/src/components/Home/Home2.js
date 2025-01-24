import React from "react";
import { Container } from "react-bootstrap";

import girl from "../../Assets/Ak_profile.png";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from 'react-icons/md';

function Home2() {
  return (


    <>
    <Container fluid className="home-about-section" id="about">
        <div className="home2">
          <img src={girl} className="img-fluid2" alt="avatar" />
            <div>
              <h1>FIND ME ON</h1>
              <p>
               Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                  href="https://github.com/AKSHAYKANDUNURI"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  >
                  <AiFillGithub />
                  </a>
                  </li>
                  <li className="social-icons">
                  <a
                  href="https://www.linkedin.com/in/akshaykumarkandunuri/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  >
                  <FaLinkedinIn />
                  </a>
                  </li>
                  <li className="social-icons">
                  <a
                  href="mailto:Akshaykandunuri@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  >
                    <MdEmail />
                  </a>
                </li>
              </ul>
            </div>
        </div>

    </Container>
    
    </>
    // <Container fluid className="home-about-section" id="about">
    //   <Container>
    //     <Row>
    //       <Col md={4} className="myAvtar">
    //         <Tilt>
    //           <img src={girl} className="img-fluid2" alt="avatar" />
    //         </Tilt>
    //       </Col>
    //     </Row>
    //     <Row>
    //       <Col md={12} className="home-about-social">
    //         <h1>FIND ME ON</h1>
    //         <p>
    //           Feel free to <span className="purple">connect </span>with me
    //         </p>
    //         <ul className="home-about-social-links">
    //           <li className="social-icons">
    //             <a
    //               href="https://github.com/AKSHAYKANDUNURI"
    //               target="_blank"
    //               rel="noreferrer"
    //               className="icon-colour  home-social-icons"
    //             >
    //               <AiFillGithub />
    //             </a>
    //           </li>
    //           <li className="social-icons">
    //             <a
    //               href="https://www.linkedin.com/in/akshaykumarkandunuri/"
    //               target="_blank"
    //               rel="noreferrer"
    //               className="icon-colour  home-social-icons"
    //             >
    //               <FaLinkedinIn />
    //             </a>
    //           </li>
    //           <li className="social-icons">
    //             <a
    //               href="mailto:Akshaykandunuri@gmail.com"
    //               target="_blank"
    //               rel="noreferrer"
    //               className="icon-colour home-social-icons"
    //             >
    //               <MdEmail />
    //             </a>
    //           </li>
    //         </ul>
    //       </Col>
    //     </Row>
    //   </Container>
    // </Container>
  );
}
export default Home2;
