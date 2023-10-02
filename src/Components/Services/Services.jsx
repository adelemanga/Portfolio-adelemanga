import React from 'react'
import '../../Components/Services/Servives.css';
import HearEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './resume.pdf';

function Services() {
  return (
    <div className="services">
        {/* left side */}

        <div className="awesome">
            <span>My awesome</span>
            <span>services</span>
            <spane>Fullstack developer with high level of experience in web   <br /> 
            desingning and development, producting the Quality work</spane> 
            <a href={Resume} télécharger>
              <button className='button s-button'>Télécharger CV</button>
            </a>
            
            <div className='blur s-blur1' style={{background:'#ABF1FF94'}}></div> 
        </div>
        {/* right side */}
        <div className="div cards">
            <div style={{bottom:'10rem',left:'19rem'}}>
                <Card
                emoji = {HearEmoji}
                heading ={'Design'}
                detail ={"Figma, Adobe, Canva"}
                />
            </div>
            {/* second card */}
            <div style={{top:'12rem', left:'-4rem'}}>
              <Card
              emoji={Glasses}
              heading={"Front-end"}
              detail={"Html, Css, Saas, Javascript, React"}
              />
              <br />
              <br />
              {/* 3rd card */}
              <div style={{top:"19rem", left:"1rem"}}>
                <Card
                emoji={Humble}
                heading={"Back-end"}
                detail={"Express, MySQL, Node.js, Yarn, Postman "}
                />
              </div>

              <div className="blur s-blur2" style={{background:'var(--purple)'}}></div>

            </div>
        </div >

    </div>
  )
}

export default Services;