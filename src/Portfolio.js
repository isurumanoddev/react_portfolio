import React from 'react';
import "./Portfolio.css"
import Title from "./Title";
function Portfolio() {
    return (

        <div className="portfolio container" id={"portfolio"}>
               <Title title={"Portfolio"} subTitle={"My Recent Work"}/>
            <div className="portfolio__container">

            </div>
        </div>
    );
}

export default Portfolio;
