import React from 'react';
import "../styles/Skill.css"
function Skill({img,name}) {
    return (
        <div className="skill">
             <div className="skills__container__row__bar">
                            <div className="skills__container__row__bar__info">
                                <img className="skills__container__row__bar__info__image" src={img}
                                     alt="skill"/>
                                <span className="skills__container__row__bar__info__image-title">{name}</span>
                            </div>
                        </div>
        </div>
    );
}

export default Skill;
