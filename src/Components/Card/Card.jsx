import React from 'react'
import '../Card/Card.css';

function Card({emoji, heading, detail}) {
  return (
    <div className="card">
        <img src={emoji} alt="" />
        <span>{heading}</span>
        <span>{detail}</span>
        <button className="c-button">EN SAVOIR PLUS</button>
    </div>
  )
}

export default Card;