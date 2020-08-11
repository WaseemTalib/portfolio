import React, { Component } from 'react';
import Card from './Card';
// import img1 from '../img/transfers.png'
// import img2 from '../img/natours.png'
// import img3 from '../img/bookcon.PNG'
// import img4 from '../img/trillo.PNG'
// import img5 from '../img/budgety.png'
// import img6 from '../img/dice-game.png'
// import img7 from '../img/drum-kit.png'
// import img8 from '../img/psd.png'
// import img9 from '../img/simon-game.png'
// import img10 from '../img/social-feed.png'

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
           
           
           
            {/* <div className={`category-animation showCategory`}>
            <Card title="Project Transfers" imageName={img1} url={'/transfers'} des="This is a project about Bus Reservation."   />
            <Card title="Project Natours" imageName={img2} url={'/natours/'} des="This project is all about Tours which contain classic hover effects." />
            <Card title="Project BookCon" imageName={img3} url={'/bookcon/'} des="This is a project of displaying something like books, movies or any other category." />
            <Card title="Project Budgety" imageName={img5} url={'/budgety/'} des="This is a project of displaying something like books, movies or any other category." />
            <Card title="Project Dice-Game" imageName={img6} url={'/dice-game/'} des="This is a project of displaying something like books, movies or any other category." />
            <Card title="Project Drum-Kit" imageName={img7} url={'/drum-kit/'} des="This is a project of displaying something like books, movies or any other category." />
            <Card title="Project Trillo" imageName={img4} url={'/trillo/'} des="This project uses flexBox which makes it creative and attractive with its look." />
            <Card title="Project PSD" imageName={img8} url={'/psd/'} des="This is a project of displaying something like books, movies or any other category." />
            <Card title="Project Simon-Game" imageName={img9} url={'/simon-game/'} des="This is a project of displaying something like books, movies or any other category." />
            <Card title="Project Social-Feed" imageName={img10} url={'/social-feed/'} des="This is a project of displaying something like books, movies or any other category." />
            </div> */}

            
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
