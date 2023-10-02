import React from 'react';
import './Works.css';
import Upwork from '../../img/Upwork.png';
import Fiverr from '../../img/fiverr.png';
import Shopify from '../../img/Shopify.png';
import Facebook from '../../img/Facebook.png';
import Amazon from '../../img/amazon.png';

function Works() {
  return (
    <div className="works">
            {/* left side */}

        <div className="awesome">
            <span>Works for All these</span>
            <span>Brands & Clients</span>
            <spane>Fullstack developer with high level of experience in web   <br /> 
            desingning and development, producting the Quality work
            <br />desingning and development, producting the Quality work
            <br />desingning and development, producting the Quality work
            </spane> 
            
            <button className='button s-button'>Hire me</button>
   
            
            <div className='blur s-blur1' style={{background:'#ABF1FF94'}}></div> 
        </div>
        {/* {right side} */}
        <div className="w-right">
            <div className="w-mainCircle">
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
            </div>

            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>



    </div>
  )
}

export default Works;