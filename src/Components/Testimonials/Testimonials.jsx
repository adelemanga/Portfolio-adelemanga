import React from 'react'
import './Testimonials.css'
import { Swiper , SwiperSlide} from 'swiper/react';
import profilePic1 from '../../img/profile1.jpg';
import profilePic2 from '../../img/profile2.jpg';
import profilePic3 from '../../img/profile3.jpg';
import profilePic4 from '../../img/profile4.jpg';
import { Pagination } from "swiper";
import 'swiper/css/pagination';
import 'swiper/css';



function Testimonials() {
  const  clients=[{
    img: profilePic1,
    review:
    "Superbe collaboratrice, je recommande fortement, assidue, motivée, elle aime son travail et est passionée et ca se voit",
},

{
    img: profilePic2,
    review:
    "Superbe collaboratrice, je recommande fortement, assidue, motivée, elle aime son travail et est passionée et ca se voit",
},

{
    img: profilePic3,
    review:
    "Superbe collaboratrice, je recommande fortement, assidue, motivée, elle aime son travail et est passionée et ca se voit",
},

{
    img: profilePic4,
    review:
    "Superbe collaboratrice, je recommande fortement, assidue, motivée, elle aime son travail et est passionée et ca se voit",
}]


  return (
    <div className="t-wrapper">
        <div className="t-heading">
            <span>Clients always get </span>
            <span>Execeptional work</span>
            <span>From me ...</span>
            <div className="blur t-blur1" style={{background:'var(--purple)'}}></div>
            <div className="blur t-blur2" style={{background:'skyblue'}}></div>
        </div>
        {/*slider  */}

        <Swiper
           
           modules={[Pagination]}
           slidesPerView={1}
           pagination={{clickable: true}}
        >

            {clients.map((client,index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                            <img src={client.img} alt="" />
                            <span>{client.review}</span>
                        </div>
                       
                    </SwiperSlide>
                )
            })}

        </Swiper>
    </div>
  )
}

export default Testimonials;