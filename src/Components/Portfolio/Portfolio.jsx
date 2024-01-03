import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
//import Sidebar from "../../img/sidebar.png";
import artGalerie from "../../img/artGalerie.jpeg";
//import Ecommerce from "../../img/ecommerce.png";
import emmausConnect from "../../img/emmausConnect.jpeg";
// import HOC from "../../img/hoc.png";
import cvFictif from "../../img/cvFictif.png";
//import MusicApp from "../../img/musicapp.png";
import QuizzProject from "../../img/QuizzProject.jpeg";

import "swiper/css";

function Portfolio() {
  return (
    <div className="portfolio" id="Portfolio">
      {/* {heading} */}
      <span>Recent Projects</span>
      <span className="port">Portfolio</span>

      {/* {slider} */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={artGalerie} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={emmausConnect} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={QuizzProject} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={cvFictif} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Portfolio;
