import React from 'react';
import "./About.css"
import {Slide, Fade} from 'react-reveal';
import Title from "./Title";
import {Button} from "@mui/material";
import {Download, MilitaryTech, WorkOutline} from "@mui/icons-material";


function About() {
    const downloadCV = () => {
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


            <div className="about__container">


                <div className="about__me">
                    <div className="about__me-image">
                        <img alt="me"/>
                    </div>
                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <MilitaryTech fontSize={"large"} className="about__icon"/>
                            <h5>Experience</h5>
                            <small>1 year</small>
                        </article>
                        <article className="about__card">
                            <WorkOutline fontSize={"large"} className="about__icon"/>
                            <h5>Projects</h5>
                            <small>20+ Completed Projects</small>
                        </article>
                    </div>
                    <p>I’ve spent the last several months in a remote environment, working with HTML, CSS,
                        JavaScript, building everything from landing pages to APIs. My experience as a teacher
                        in an international school helped me collaborate with fellow developers from all over
                        the world. Additionally, working with kids isn’t an easy task, however, it has helped me
                        become efficient, productive, and fast even in a very stressful environment, which is an
                        important skill in the tech industry.</p>
                    <Button href="" className="button">Download CV <Download/> </Button>
                </div>


            </div>


        </div>

    );
}

export default About;
