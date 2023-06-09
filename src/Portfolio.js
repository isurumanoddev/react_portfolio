import React from 'react';
import "./Portfolio.css"
import Title from "./Title";
import Project from "./Project";
import {Carousel} from 'react-responsive-carousel';

function Portfolio() {
    return (

        <div className="portfolio container" id={"portfolio"}>
            <Title title={"Portfolio"} subTitle={"My Recent Work"}/>
            <div className="portfolio__container">
                <Carousel>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                    <Project/>
                </Carousel>


            </div>
        </div>
    );
}

export default Portfolio;
