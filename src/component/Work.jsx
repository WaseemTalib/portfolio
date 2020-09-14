import React, { Component } from 'react';
import Card from './Card';
import img1 from '../img/booking.png';
import img2 from '../img/natours.png';
import img3 from '../img/bookcon.png';
import img4 from '../img/trillo.png';
import img5 from '../img/budgety.png';
import img6 from '../img/dice.png';
import img7 from '../img/drum.png';
import img8 from '../img/psd.png';
import img9 from '../img/simon.png';
import img10 from '../img/social.png';
import img11 from '../img/geniversity.png';
import img12 from '../img/demo.png';
import img13 from '../img/sample-client.png';
import img14 from '../img/smash.png';
import img15 from '../img/venue.png';

class Work extends Component {
    state={
        show: 0
    }
    switchCard=show=>{
        this.setState({show})

    }
    render() {

        
        return (
            <div className="container work" id="work">
            <h1>Work</h1>
            {/* <div className="work-category">
                <button className={`${this.state.show === 0 ? "active" : ""}`} id="designing" onClick={()=>this.switchCard(0)} >Web Designing</button>
                <button className={`${this.state.show === 1 ? "active" : ""}`} id="animation" onClick={()=>this.switchCard(1)}>Web Animation</button>
                <button className={`${this.state.show === 2 ? "active" : ""}`} id="project" onClick={()=>this.switchCard(2)}>Web Projects</button>
            </div> */}

            {/* <div className={`category-animation ${this.state.show === 0 ? "showCategory" : 'hideCategory'}`}> */}
           
           
           
            <div className={`category-animation showCategory`}>
            <Card title="Project Transfers" imageName={img1} url={'/transfers'} des="This is a project about Bus Reservation."   />
            <Card title="Project Natours" imageName={img2} url={'/natours/'} des="This project is all about Tours which contain classic hover effects." />
            <Card title="Project Dice-Game" imageName={img6} url={'/dice-game/'} des="This is a project of displaying something like books, movies or any other category." />
            <Card title="Project BookCon" imageName={img3} url={'/bookcon/'} des="This is a project of displaying something like books, movies or any other category." />
            <Card title="Project Budgety" imageName={img5} url={'/budgety/'} des="This is a project of displaying something like books, movies or any other category." />
            <Card title="Project Geniversity" imageName={img11} url={'/geniversity/'} des="This is a project of displaying something like books, movies or any other category." />
            <Card title="Project Drum-Kit" imageName={img7} url={'/drum-kit/'} des="This is a project of displaying something like books, movies or any other category." />
            <Card title="Project Trillo" imageName={img4} url={'/trillo/'} des="This project uses flexBox which makes it creative and attractive with its look." />
            <Card title="Project Simon-Game" imageName={img9} url={'/simon-game/'} des="This is a project of displaying something like books, movies or any other category." />
            <Card title="Project PSD" imageName={img8} url={'/psd/'} des="This is a project of displaying something like books, movies or any other category." />
            <Card title="Project Social-Feed" imageName={img10} url={'/social-feed/'} des="This is a project of displaying something like books, movies or any other category." />
            <Card title="Project Demo Site" imageName={img12} url={'/demo/'} des="This is a project of displaying something like books, movies or any other category." />
            <Card title="Project Smash Codes" imageName={img14} url={'/smash/'} des="This is a project of displaying something like books, movies or any other category." />
            <Card title="Project For Client" imageName={img13} url={'/client/'} des="This is a project of displaying something like books, movies or any other category." />
            <Card title="Project Venue" imageName={img15} url={'/venue/'} des="This is a project of displaying something like books, movies or any other category." />
            </div>

            
            {/* <div className={`category-animation ${this.state.show === 1 ? "showCategory" : 'hideCategory'}`}>
            <Card name={img3}  />
            <Card name={img2}  />
            </div>
            <div className={`category-animation ${this.state.show === 2 ? "showCategory" : 'hideCategory'}`}>
            <Card name={img1}  />
            <Card name={img2}  />
            </div> */}


        </div>
        );
    }
}

export default Work;
