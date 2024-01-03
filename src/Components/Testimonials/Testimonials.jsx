import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";
// import {Swiper,  Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css";

function Testimonials() {
  const clients = [
    {
      img: profilePic1,
      review:
        "Superbe collaboratrice, je recommande fortement, assidue, motivée.",
    },

    {
      img: profilePic2,
      review: "Je recommande fortement, assidue, motivée, elle est passionée.",
    },

    {
      img: profilePic3,
      review: "Superbe collaboratrice, je recommande fortement. ",
    },

    {
      img: profilePic4,
      review: "je recommande fortement, assidue, aime son travail.",
    },
  ];

  return (
    <div className="t-wrapper" id="Témoignages">
      <div className="t-heading">
        <span>Les clients obtiennent toujours</span>
        <span>
          <br />
          Un travail exceptionnel{" "}
        </span>
        <span>De ma part ...</span>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        <div className="blur t-blur2" style={{ background: "skyblue" }}></div>
      </div>
      {/*slider  */}

      <Swiper
        // modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <button className="button s-button">Swipe</button>
    </div>
  );
}

export default Testimonials;
