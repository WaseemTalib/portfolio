import React from 'react';

const Contact = () => {
    return (
        <div className="container contact" id="contact">
            <h1>Contact</h1>
           <div className="contact-info">
            <ul className="ul">
                <li className="li">
                    <a href="https://www.facebook.com/waseem.talib.796/" target="_blank">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fa fa-facebook"></span>
                    </a>
                </li>
                <li className="li">
                    <a href="https://www.instagram.com/talib.waseem/" target="_blank">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fa fa-instagram"></span>
                    </a>
                </li>
                <li className="li">
                    <a href="https://github.com/WaseemTalib" target="_blank">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fa fa-github"></span>
                    </a>
                </li>
                <li className="li">
                    <a href="https://twitter.com/waseemtalib14"  target="_blank">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span className="fa fa-twitter"></span>
                    </a>
                </li>
                <li className="li">
                    <a  href="https://www.fiverr.com/digital_code" target="_blank">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    <span><img width="30px" src="data:image/png;base64,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" /></span>
                    </a>
                </li>
               

            </ul>
            </div>
        </div>
    )
}
export default Contact;