import React from 'react';
import "../styles/College.css"
import {Fade} from "react-reveal";

function College({name,college,module}) {
    return (
        <Fade bottom cascade>


            <div className="college">
                <div className="college__image">
                    <img src="https://sist.ac.ma/storage/2022/10/cmu-logo-retina-1-1.webp" alt=""/>
                </div>
                <div className="college__info">
                    <h3 className="college__info__title">{name}</h3>
                    <h4 className="college__info__subtitle">{college}</h4>
                    <p className="college__info__subtitle">{module}</p>
                </div>
            </div>
        </Fade>
    );
}

export default College;