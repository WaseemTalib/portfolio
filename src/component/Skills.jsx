import React from 'react';
import cssImg from '../img/css.png'
import materializeImg from '../img/materialize.png'
import jsImg from '../img/js.png'
import reactImg from '../img/react.png'
import firebaseImg from '../img/firebase.png'
import NewCard from '../component/newCard';

const Skills = () => {
    const skills = [
        {
            type: 'css',
            percentage: 85,
            src: cssImg
        },
        {
            type: 'js',
            percentage: 80,
            src: jsImg
        },
        {
            type: 'material ui',
            percentage: 85,
            src: materializeImg
        },
        {
            type: 'react',
            percentage: 85,
            src: jsImg
        },
        {
            type: 'next js',
            percentage: 75,
            src: jsImg
        },
        {
            type: 'vue',
            percentage: 70,
            src: jsImg
        },
        {
            type: 'nuxt js',
            percentage: 70,
            src: reactImg
        },
        {
            type: 'node',
            percentage: 75,
            src: firebaseImg
        },
        {
            type: 'express',
            percentage: 70,
            src: firebaseImg
        },
        {
            type: 'mongo db',
            percentage: 75,
            src: firebaseImg
        }
    ];

    return (
        <div className="container skills" id="skills">
            <h1>Skills</h1>
            <div className="containerCard react-reveal" style={{
                animationFillMode: "both",
                animationDuration: "1000ms",
                animationDelay: "0ms",
                animationIterationCount: 1,
                opacity: 1,
                animationName: "react-reveal - 842603144430929 - 1"
            }}>
                {skills?.map((skill, ind) => (
                    <NewCard type={skill.type} key={`key-${ind}`} percentage={skill.percentage} src={skill.src} />
                ))}
            </div>
        </div>
    )
}
export default Skills

