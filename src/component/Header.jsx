import React from 'react';

const Header = (props) => {
    return (
        <div className="container main-info-section">
            <div className="text">
                <h1>
                    <span>H</span>
                    <span className="m-left">i</span>
                    <span className="m-left">,</span>
                    <br />
                    <span>I</span>
                    <span className="m-left">'</span>
                    <span className="m-left" style={{marginRight:"10px"}}>m</span>
                    <span className="name">W</span>
                    <span className="name m-left">a</span>
                    <span className="name m-left">s</span>
                    <span className="name m-left">e</span>
                    <span className="name m-left">e</span>
                    <span className="name m-left">m</span>
                    <span className="m-left">,</span>
                    <br />
                    <span>W</span>
                    <span className="m-left">e</span>
                    <span className="m-left" style={{marginRight:"10px"}}>b</span>
                    <span>D</span>
                    <span className="m-left">e</span>
                    <span className="m-left">s</span>
                    <span className="m-left">i</span>
                    <span className="m-left">g</span>
                    <span className="m-left">n</span>
                    <span className="m-left">e</span>
                    <span className="m-left">r</span>
                    <span className="m-left">۔</span>
                </h1>

                <p>CSS / javaScript / React</p>
                <a href="#contact">Contact Me</a>
            </div>
            <div className="profile-img">
                <img src={props.name} alt="Waseem Talib"/>
            </div>
        </div>
    )
}
export default Header
