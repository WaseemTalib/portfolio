import React from 'react';
import imgDotted from '../img/dotted-shape.png'
import imgProfile from '../img/profile.jpeg'
import Footer from './Footer';
import About from './About';
import Navbar from './Navbar';
import Header from './Header';
import Work from './Work';
import Contact from './Contact';
import Skills from './Skills';

const Landing = () => {

    return (
        <div>
            <Navbar />
            <Header name={imgProfile} />
            <About name={imgDotted} />
            <Skills />
            <Work />
            <Contact />
            <Footer />
        </div>
    )
}
export default Landing;