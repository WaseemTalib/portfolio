import React from 'react';

const Navbar = () => {
    return (

        <div className="container navbar">

            <header>
                <div className="logo">
                    <h1>WASEEM</h1>
                </div>

                <nav style={{padding:"10px 0"}}>
                    <input type="checkbox" id="chk" />
                    <label htmlFor="chk" className="show-menu-btn">
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </label>
                    <ul className="menu">
                        <li><a href="#about">about</a></li>
                        <li><a href="#skills">skills</a></li>
                        <li><a href="#work">my Projects</a></li>
                        <label htmlFor="chk" className="hide-menu-btn">
                            <i className="fa fa-times" aria-hidden="true"></i>
                        </label>
                    </ul>
                </nav>
            </header>


        </div>

    )
}
export default Navbar
