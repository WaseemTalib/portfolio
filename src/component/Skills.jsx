import React from 'react';
// import Bar from './Bar';
import htmlImg from '../img/html.png'
import cssImg from '../img/css.png'
import bootstrapImg from '../img/bootstrap.png'
import materializeImg from '../img/materialize.png'
import jsImg from '../img/js.png'
import reactImg from '../img/react.png'
import firebaseImg from '../img/firebase.png'
import NewCard from '../component/newCard';

const Skills = () => {
    return (
        <div className="container skills" id="skills">
            <h1>Skills</h1>
            {/* <p className="skills-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis similique dolorem quibusdam nam placeat provident necessitatibus distinctio. Nostrum, minus dolorem facere nemo facilis dolores laboriosam, animi cupiditate ex error quas?</p> */}
            <div className="containerCard react-reveal" style={{
                animationFillMode: "both",
                animationDuration: "1000ms",
                animationDelay: "0ms",
                animationIterationCount: 1,
                opacity: 1,
                animationName: "react-reveal - 842603144430929 - 1"
            }}>
                <NewCard type="html" percentage={90} index={40} src={htmlImg} />
                <NewCard type="css"percentage={80}  src={cssImg} />
                <NewCard type="bootstrap" percentage={75}  src={bootstrapImg} />
                <NewCard type="materialize" percentage={70}  src={materializeImg} />
                <NewCard type="js" percentage={75}  src={jsImg} />
                <NewCard type="react" percentage={65}  src={reactImg} />
                <NewCard type="firebase" percentage={75}  src={firebaseImg} />
            </div>


            {/* <Bar name="HTML" percentage={30} />
        <Bar name="CSS" percentage={60} />
        <Bar name="JS" percentage={50} />
        <Bar name="ReactJs" percentage={87} />
        <Bar name="Firebase" percentage={78} /> */}
        </div>

    )
}
export default Skills

