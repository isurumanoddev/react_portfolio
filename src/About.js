import React from 'react';
import "./About.css"
import {Slide, Fade} from 'react-reveal';
import Title from "./Title";
import {Button} from "@mui/material";
import {Download} from "@mui/icons-material";


function About() {
    const downloadCV = () =>  {
            const downloadUrl = 'https://drive.google.com/uc?export=download&id=11FzI5kMjslizgvJmRgdGuonbMGF-_UBq'; // Replace with the actual Google Drive file download link

            // Create a temporary anchor element
            const link = document.createElement('a');
            link.href = downloadUrl;

            // Set the file name for the download
            link.download = 'cv.pdf'; // Replace 'cv.pdf' with the desired file name

            // Simulate a click event to trigger the download
            link.click();
        }

    return (
        <div className="about container" id={"about"}>
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

                    <div className="about-info">
                        <div>
                            <span className="about-info-title">1+ Years</span>

                        </div>
                        <div>
                            <span className="about-info-title">5+</span>

                        </div>

                    </div>
                    <div className="about-button">
                        <Button  className="button" onClick={downloadCV} type={"submit"} >Download CV
                            <Download/></Button>
                    </div>
                </Fade>

            </div>


        </div>

    );
}

export default About;
