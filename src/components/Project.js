import React from 'react';
import {Button} from "@mui/material";
import {GitHub, Web} from "@mui/icons-material";
import "../styles/Project.css"
import {Fade} from "react-reveal";


function Project({name,description,github,image,live,tech}) {
    return (
        <Fade cascade bottom>
            <div className="project">
                <div className="project__container">
                    <div className="project__container__image__container">
                        <img src={image} className="project__container__image"/>
                    </div>
                    <div className="project__container__info">
                        <div className="project__container__info__title">{name}</div>
                        <div className="project__container__info__des">{description}</div>
                        <div className="project__container__info__techs__container">
                            {
                                tech?.map(item => (
                                     <p className="project____techs">{item}</p>
                                ))
                            }




                        </div>
                        <div className="project__container__info__buttons">
                            <Button target="_blank" href={github} className="button button2">Github <GitHub/></Button>
                            {live ? <Button href={live} target="_blank" className="button button2" >Live <Web/></Button> : ""}


                        </div>

                    </div>

                </div>
            </div>
        </Fade>
    );
}

export default Project;
