import React from 'react';
import {Fade} from "react-reveal";
import "./Tile.css"

function Title({title,subTitle}) {
    return (
        <Fade bottom cascade>
            <div className="title__container">
                <div className={"title__line"}>
                    <div className="title__container__title__line"></div>
                    <h2 className="title__container__title">{title}</h2>
                    <div className="title__container__title__line"></div>
                </div>
                <span className="title__container__subtitle">{subTitle}</span>
            </div>

        </Fade>
    );
}

export default Title;
