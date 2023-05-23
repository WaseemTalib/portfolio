import React from 'react';
import htmlImg from '../img/html.png'
import cssImg from '../img/css.png'
import bootstrapImg from '../img/bootstrap.png'
import materializeImg from '../img/materialize.png'
import jsImg from '../img/js.png'
import reactImg from '../img/react.png'
import firebaseImg from '../img/firebase.png'
import NewCard from '../component/newCard';

const Skills = () => {
    const skills = [
        {
            type: 'css',
            percentage: 80,
            src: cssImg
        },
        {
            type: 'bootstrap',
            percentage: 75,
            src: bootstrapImg
        },
        {
            type: 'materialize',
            percentage: 70,
            src: materializeImg
        },
        {
            type: 'js',
            percentage: 75,
            src: jsImg
        },
        {
            type: 'react',
            percentage: 65,
            src: reactImg
        },
        {
            type: 'firebase',
            percentage: 75,
            src: firebaseImg
        },
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
                <NewCard type="html" percentage={90} index={40} src={htmlImg} />
                {skills?.map((skill, ind) => (
                    <NewCard type={skill.type} key={`key-${ind}`} percentage={skill.percentage} src={skill.src} />
                ))}
            </div>
        </div>
    )
}
export default Skills

