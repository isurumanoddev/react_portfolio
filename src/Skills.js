import React from 'react';
import "./Skills.css"
import Title from "./Title";
import Skill from "./Skill";
import {Fade, Zoom,Bounce} from "react-reveal";


function Skills() {
    return (
        <div className="skills container">
            <Title title={"skills"} subTitle={"my tech stacks"}/>


            <div className="skills__container">

                <div className="skills__container__row" id="skillsContainer">

                    <Bounce>
                        <Skill name={"React"}/>
                    </Bounce><Bounce>
                        <Skill name={"Python"}/>
                    </Bounce>
                    <Bounce>
                        <Skill name={"React"}/>
                    </Bounce><Bounce>
                        <Skill name={"Python"}/>
                    </Bounce>
                    <Bounce>
                        <Skill name={"Firebase"}/>
                    </Bounce><Bounce>
                        <Skill name={"AWS(RDS/S3)"}/>
                    </Bounce>
                    <Bounce>
                        <Skill name={"React"}/>
                    </Bounce><Bounce>
                        <Skill name={"Python"}/>
                    </Bounce>
                    <Bounce>
                        <Skill name={"React"}/>
                    </Bounce><Bounce>
                        <Skill name={"Python"}/>
                    </Bounce>
                    <Bounce>
                        <Skill name={"React"}/>
                    </Bounce><Bounce>
                        <Skill name={"Python"}/>
                    </Bounce>
                    <Bounce>
                        <Skill name={"React"}/>
                    </Bounce><Bounce>
                        <Skill name={"Python"}/>
                    </Bounce>


                </div>

            </div>


        </div>
    );
}

export default Skills;
