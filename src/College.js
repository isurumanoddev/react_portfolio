import React from 'react';
import "./College.css"
import {Fade} from "react-reveal";

function College() {
    return (
        <Fade bottom cascade>


            <div className="college">
                <div className="college__image">
                    <img src="https://sist.ac.ma/storage/2022/10/cmu-logo-retina-1-1.webp" alt=""/>
                </div>
                <div className="college__info">
                    <h3 className="college__info__title">Bsc Software Engineering (Reading) May 2023- May 2024</h3>
                    <h4 className="college__info__subtitle">University : Cardiff Metropolitan University</h4>
                    <p className="college__info__des">Modules : Object Oriented Programming, Data Structures &
                        Algorithms, Data base management Systems, Web Application Development, Service OrientedComputing
                        ,Mobile Application Development , Project Management,Business Analytics</p>
                </div>
            </div>
        </Fade>
    );
}

export default College;