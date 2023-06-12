import React from 'react';
import "../styles/Education.css"
import Title from "./Title";
import {Fade} from "react-reveal";
import {Button} from "@mui/material";
import College from "./College";

function Education() {
    return (
        <div className="education container" id={"education"} >
             <Title title={"Education"} subTitle={"My Journey"}/>


            <div className="education__container">
                <College
                    name={"Bsc Software Engineering ( On Reading) May 2023- May 2024"}

                    college={"University : Cardiff Metropolitan University"}

                />
                <College
                      name={"Higher Diploma in Software Engineering February 2021- February 2023"}
                    college={"University : Cardiff Metropolitan University"}
                    module={"Modules : Object Oriented Programming, Data Structures & Algorithms, Databaseanagement Systems, Web Application Development, Service OrientedComputing ,Mobile Application Development , Project Management,Business Analytics"}

                />


            </div>






        </div>
    );
}

export default Education;