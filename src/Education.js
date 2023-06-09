import React from 'react';
import "./Education.css"
import Title from "./Title";
import {Fade} from "react-reveal";
import {Button} from "@mui/material";
import College from "./College";

function Education() {
    return (
        <div className="education container" id={"education"} >
             <Title title={"Education"} subTitle={"My Journey"}/>

            <div className="education__container">
                <College/>
                <College/>
            </div>






        </div>
    );
}

export default Education;