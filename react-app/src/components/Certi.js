import React from "react"
import { Container } from "react-bootstrap";
import b from "../Assets/certi/simplilear_CPP.png";
import c from "../Assets/certi/thinqbator.png";
import d from "../Assets/certi/cyber.png";
import e from "../Assets/certi/ec_mern.png"
import f from "../Assets/certi/ai_linkedin.jpeg"
function Certi(){
        
    const openIn=(img)=>{
            window.open(img,'_blank')
        }
    return(
        <>
      

<Container fluid className="project-section">
        <h1 className="project-heading">My <strong className="purple">Certifications </strong></h1>

        <div className="certiContainer">
            <div className="certiContainer2">
            <img className="certiImg" src={b} alt="" onClick={()=>{openIn(b)}}/>
            </div>
            <h4 className="certiName" >CPP - Simpli Learn</h4>

            <div className="certiContainer2">
            <img className="certiImg" src={c} alt="" onClick={()=>{openIn(c)}}/>
            </div>
            <h4 className="certiName" >MERN Stack - thingQbator </h4>

            <div className="certiContainer2">
            <img className="certiImg" src={d} alt="" onClick={()=>{openIn(d)}}/>
            </div>
            <h4 className="certiName" >Cyber Suraksha - Tata Strive </h4>

            <div className="certiContainer2">
            <img className="certiImg" src={e} alt="" onClick={()=>{openIn(e)}}/>
            </div>
            <h4 className="certiName" >E-Commerce MERN - GreatStack </h4>

            <div className="certiContainer2">
            <img className="certiImg" src={f} alt="" onClick={()=>{openIn(f)}}/>
            </div>
            <h4 className="certiName" >Artificial Intelligence - LinkedIn </h4>
        </div>

        {/* <div className="certiContainer">
            <div>
            <img className="certiImg" src={b} onClick={()=>{openIn(b)}}/>
            <h4 className="certiName" >Linked in </h4>
            </div>
            <div>
            <img  className="certiImg" src={c} onClick={()=>{openIn(c)}}/>
            <h4 className="certiName" >Linked in </h4>
            </div>
            <div>
            <img  className="certiImg" src={d} onClick={()=>{openIn(d)}} />
            <h4 className="certiName" >Linked in </h4>
            </div>

        </div> */}

        </Container> 

</>

    );
}
export default Certi;