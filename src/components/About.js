import React from 'react';
import "../styles/About.css"
import {Slide, Fade} from 'react-reveal';
import Title from "./Title";
import {Button} from "@mui/material";
import {Download, MilitaryTech, WorkOutline} from "@mui/icons-material";


function About() {
    const downloadCV = () => {
        const downloadUrl = 'https://drive.google.com/file/d/1flr9WH7MANldPQxajPZ_NpKwEGe09McJ/view?usp=drive_link'; // Replace with the actual Google Drive file download link

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

            <Fade bottom cascade>
                <div className="about__container">


                    <div className="about__me">
                        <div className="about__me-image">
                            <img className="about__me-image__" src={"https://firebasestorage.googleapis.com/v0/b/isuru-manod.appspot.com/o/photo_2023-06-10_14-06-44.jpg?alt=media&token=38ba270a-b0dd-4f31-b7e2-5f1d343cfec9"} alt="me"/>
                        </div>
                    </div>
                    <div className="about__content">
                        <div className="about__cards">
                            <article className="about__card">
                                <MilitaryTech fontSize={"large"} className="about__icon"/>
                                <h5>2+ Years</h5>
                                <small>Development Experience</small>
                            </article>
                            <article className="about__card">
                                <WorkOutline fontSize={"large"} className="about__icon"/>
                                <h5>Projects</h5>
                                <small>10+ Completed Projects</small>
                            </article>
                        </div>
                        <p>Highly motivated, open-mined and detail-oriented undergraduate software engineer. An
                            adaptable quick learner, a strong communicator and team player with a strong foundation in
                            computer science principles and passion for problem-solving to make a meaningful
                            contribution at a forward-thinking company. Skilled in developing efficient and intuitive
                            solutions to complex problems, with experience in a variety of programming languages such as
                            Python , Javascript and technologies such as React, Django, NoSQL databases. Seeking to
                            leverage my skills and knowledge to contribute to the success of a dynamic software
                            development team</p>
                        <Button onClick={downloadCV} className="button">Download CV <Download/> </Button>
                    </div>


                </div>

            </Fade>
        </div>

    );
}

export default About;
