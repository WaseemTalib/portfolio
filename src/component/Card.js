import React from 'react';
import { Link } from "react-router-dom"
import { Bounce } from "react-reveal"
const Card = (props) => {
  return (
    <Bounce left>
      <div className="card" style={{ backgroundImage: `url(${props.imageName})` }}>
      <div className="fon"></div>
      <div className="text1">
        <h2>
         {props.title}
      </h2>
        <p>
       {props.des}
      </p>
        <div className="triangle"></div>
      </div>
      <div className="btns">
        <Link className="btnLink" to={props.url} target="_blank">
          View
    </Link>
      </div>
    </div>
    </Bounce>
    
  )
}

export default Card