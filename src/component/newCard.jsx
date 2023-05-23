import React, { Component } from "react";

class Card extends Component {
  state = {
    in: false
  };

  componentDidMount() {
    if (window.innerWidth <= 1000) {
      this.setState({ in: true })
    } else if (window.innerWidth > 1000) {
      this.setState({ in: false })
    }
  }
  render() {
    let { type, src } = this.props;
    return (
      <div
        onMouseEnter={() => {
          if (window.innerWidth > 1000) {
            this.setState({ in: true })
          }
        }}
        onMouseLeave={() => {
          if (window.innerWidth > 1000) {
            this.setState({ in: false })
          }
        }}
        style={{ ["--percentage"]: this.props.percentage }}
        className="cardCss"
      >
        <h4 className="title">{type.toUpperCase()}
          <img src={src} className="img" alt={type} />
        </h4>
        <div className="bar">
          <div className="emptybar"></div>
          <div style={{ ["--percentage"]: this.props.percentage }} className="filledbar"></div>
        </div>
        <div className="circle">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <circle style={{ ["--percentage"]: this.props.percentage }} className="stroke" cx="60" cy="60" r="50" />
          </svg>
        </div>
        {this.state.in ? <div className="white-text experiance">
          {this.props.percentage}%
        </div> : ""}
      </div>
    );
  }
}

export default Card;
