import React, { Component } from 'react';
import Card from './Card.jsx';
import booking from '../img/booking.png';
import natours from '../img/natours.png';
import trillo from '../img/trillo.png';
import budgety from '../img/budgety.png';
import dice from '../img/dice.png';
import drum from '../img/drum.png';
import smash from '../img/smash.png';
import simon from '../img/simon.png';
import trackhero from '../img/trackhero.png';
import ecomwise from '../img/ecomwise.png';

class Work extends Component {
    state = {
        cardsData: [
            {
                title: 'Project Transfers',
                imageName: booking,
                url: 'http://waseem-transfers.web.app/',
                des: 'This is a project about Bus Reservation.'
            },
            {
                title: 'Project Ecomwise',
                imageName: ecomwise,
                url: 'https://ecomwise.ph/',
                des: 'This is a project about Bus Reservation.'
            },
            {
                title: 'Project Trackhero',
                imageName: trackhero,
                url: 'https://trackhero.com/',
                des: 'This is a project about Bus Reservation.'
            },
            {
                title: 'Project Natours',
                imageName: natours,
                url: 'https://waseemtalib.github.io/natours/',
                des: 'This project is all about Tours which contain classic hover effects.'
            },
            {
                title: 'Project Dice-Game',
                imageName: dice,
                url: 'https://waseemtalib.github.io/dice-game/',
                des: 'This is a project of displaying something like books, movies or any other category.'
            },
            {
                title: 'Project Budgety',
                imageName: budgety,
                url: 'https://waseemtalib.github.io/Budgety/',
                des: 'This is a project of displaying something like books, movies or any other category.'
            },
            {
                title: 'Project Drum-Kit',
                imageName: drum,
                url: 'https://waseemtalib.github.io/drum-kit/',
                des: 'This is a project of displaying something like books, movies or any other category.'
            },
            {
                title: 'Project Trillo',
                imageName: trillo,
                url: 'https://waseemtalib.github.io/Trillo/',
                des: 'This project uses flexBox which makes it creative and attractive with its look.'
            },
            {
                title: 'Project Simon-Game',
                imageName: simon,
                url: 'https://waseemtalib.github.io/simon-game/',
                des: 'This project uses flexBox which makes it creative and attractive with its look.'
            },
            {
                title: 'Project Smash Codes',
                imageName: smash,
                url: 'http://smash-codes.web.app/',
                des: 'This project uses flexBox which makes it creative and attractive with its look.'
            },
        ]
    }
    render() {
        const { cardsData } = this.state;
        return (
            <div className="container work" id="work">
                <h1>Projects</h1>
                <div className={`category-animation showCategory`}>
                    {cardsData?.map((card, ind) => (
                        <Card
                            key={`key-${ind}`}
                            title={card.title}
                            imageName={card.imageName}
                            url={card.url}
                            des={card.des}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Work;
