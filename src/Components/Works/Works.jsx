import React from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import Amazon from "../../img/amazon.png";
import { motion } from "framer-motion";
import socializus from '../../img/SocialIzus.png'


function Works() {
  const transition = { duration: 3.5, type: "spring" };

  return (
    <div className="works">
      {/* left side */}

      <div className="awesome">
        <span>J'apprends très vite!</span>
        <span>SocialIzus</span>
        <spane>
          <br />
          J'ai appris les bases de react-native avec l'entreprise
          <br />
          afin de participer au projet de développement de l'application
          <br />
          de rencontre amicale sur Paris.
        </spane>
        <img className="socializus" src={socializus} alt="" />

        {/* <button className="button s-button">Hire me</button> */}

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* {right side} */}
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={transition}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>

          <div className="w-secondCircle">
            <img src={Fiverr} alt="" />
          </div>

          <div className="w-secondCircle">
            <img src={Amazon} alt="" />
          </div>
          {""}
          <div className="w-secondCircle">
            <img src={Shopify} alt="" />
          </div>

          <div className="w-secondCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>

        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
}

export default Works;
