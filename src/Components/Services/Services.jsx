import React from "react";
import "../../Components/Services/Servives.css";
import HearEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./resume.pdf";
import { motion } from "framer-motion";

function Services() {
  const transition = { duration: 3, type: "spring" };
  return (
    <div className="services" id="Services">
      {/* left side */}

      <div className="awesome">
        <span>Mes </span> <span>services</span>
        <spane>
          Développeuse Fullstack recherchant un contrat en alternace. Je possède
          des connaissance
          <br />
          en Javascript, Html, Css, Mysql, Node.js, Yarn, SAAS, Postmann.
        </spane>
        <a href={Resume} télécharger>
          <button className="button s-button">Télécharger CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right side */}
      <div className="div cards">
        <motion.div
          initial={{ left: "25%" }}
          whileInView={{ left: "25rem" }}
          transition={transition}
          style={{ bottom: "10rem", left: "19rem" }}
        >
          <Card
            className='card1'
            emoji={HearEmoji}
            heading={"Design"}
            detail={"Figma, Adobe, Canva"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Front-end"}
            detail={"Html, Css, Saas, Javascript, React"}
          />
          <br />
          <br />
          {/* 3rd card */}
          <motion.div
            initial={{ left: "10%" }}
            whileInView={{ left: "10rem" }}
            transition={transition}
            style={{ top: "19rem", left: "1rem" }}
          >
            <Card
              emoji={Humble}
              heading={"Back-end"}
              detail={"Express, MySQL, Node.js, Yarn, Postman "}
            />
          </motion.div>

          <div
            className="blur s-blur2"
            style={{ background: "var(--purple)" }}
          ></div>
        </motion.div>
      </div>
    </div>
  );
}

export default Services;
