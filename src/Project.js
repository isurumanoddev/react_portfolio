import React from 'react';
import {Button} from "@mui/material";
import {GitHub, Web} from "@mui/icons-material";
import "./Project.css"
import {Fade} from "react-reveal";

function Project({name,description,github,image}) {
    return (
        <Fade cascade bottom>
            <div className="project">
                <div className="project__container">
                    <div className="project__container__image__container">
                        <img src={"https://drive.google.com/file/d/1RMnuJNKI16H_jmtSjCJbjmzv1dpbNl13/view?usp=sharing"} className="project__container__image"/>
                    </div>
                    <div className="project__container__info">
                        <div className="project__container__info__title">{name}</div>
                        <div className="project__container__info__des">{description}</div>
                        <div className="project__container__info__techs__container">
                            <p className="project____techs">Javascript</p>
                            <p className="project____techs">Python</p>
                            <p className="project____techs">Firebase</p><p className="project____techs">Javascript</p>
                            <p className="project____techs">Python</p>
                            <p className="project____techs">Firebase</p><p className="project____techs">Javascript</p>
                            <p className="project____techs">Python</p>
                            <p className="project____techs">Firebase</p><p className="project____techs">Javascript</p>


                        </div>
                        <div className="project__container__info__buttons">
                            <Button href={github} className="button button2">Github <GitHub/></Button>
                            <Button className="button button2">Live <Web/></Button>

                        </div>

                    </div>

                </div>
            </div>
        </Fade>
    );
}

export default Project;
