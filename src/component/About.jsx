import React from 'react';

const About = (props) => { 
    return (
        <div className="container about" id="about">
                <h1>About</h1>
                <div className="about-me-info">
                    <p>Hey there! My Name is <span> Muhammad Waseem Talib </span> and I'm a Front-End Developer &amp; Designer with an
                     experience of about 2 years in this field. I can build professional websites for you. Feel free to contact.
                    I will be your Front-End Designer / Developer.  Available 24/7.
                    </p>
                    <p style={{textAlign: "center"}}>
                        Contact Me at &ensp; <span className="fa fa-envelope"></span>&ensp;MUHAMMADWTALIB@GMAIL.COM
                    </p>
                </div>
                <img src={props.name} alt="" />
            </div>

    )
}
export default About

