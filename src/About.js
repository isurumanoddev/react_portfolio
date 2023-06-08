import React from 'react';
import "./About.css"
import {Slide, Fade} from 'react-reveal';
import Title from "./Title";

function About() {
    return (


        <div className="about container">
           <Title title={"About"} subTitle={"My Introduction"}/>

            <div className="about-container">

                <Fade bottom>
                    <p className="about-description">Highly motivated, open-mined and detail-oriented undergraduate
                        software
                        engineer. An adaptable quick learner, a strong communicator and team player with a strong
                        foundation
                        in computer science principles and passion for problem-solving to make a meaningful
                        contribution at a forward-thinking company. Skilled in developing efficient and intuitive
                        solutions to complex problems, with experience in a variety of programming languages
                        such as Python , Javascript , Java and technologies such as Django, NoSQL databases.
                        Seeking to leverage my skills and knowledge to contribute to the success of a dynamic
                        software development team
                    </p>
                </Fade>
                <div className="about-info">
                    <div>
                        <span className="about-info-title">1+ Years</span>

                    </div>
                    <div>
                        <span className="about-info-title">5+</span>

                    </div>

                </div>
                <div className="about-button">
                    <button className="glass-button" onClick="downloadCV()">Download CV <i
                        className="uil uil-import"></i></button>
                </div>

            </div>
        </div>

    );
}

export default About;
