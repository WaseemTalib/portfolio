import React from 'react';
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
          <a className="btnLink" href={props.url} target="_blank" rel="noopener noreferrer">
            View
          </a>
        </div>
      </div>
    </Bounce>

  )
}

export default Card