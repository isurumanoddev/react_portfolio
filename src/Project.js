import React from 'react';
import {Button} from "@mui/material";
import {GitHub, Web} from "@mui/icons-material";
import "./Project.css"
import {Fade} from "react-reveal";

function Project() {
    return (
        <Fade cascade bottom>
            <div className="project">
                <div className="project__container">
                    <div className="project__container__image__container">
                        <img src="https://www.avneesh.tech/_next/image?url=%2Fprojects%2Fthirdweb.png&w=640&q=75" alt=""
                             className="project__container__image"/>
                    </div>
                    <div className="project__container__info">
                        <div className="project__container__info__title">Thirdweb</div>
                        <div className="project__container__info__des">Build web3 apps easily with thirdweb's powerful
                            SDKs,
                            audited smart contracts, and developer tools—for Ethereum, Polygon, Solana, & more.
                        </div>
                        <div className="project__container__info__techs__container">
                            <p className="project____techs">Javascript</p>
                            <p className="project____techs">Python</p>
                            <p className="project____techs">Firebase</p><p className="project____techs">Javascript</p>
                            <p className="project____techs">Python</p>
                            <p className="project____techs">Firebase</p><p className="project____techs">Javascript</p>
                            <p className="project____techs">Python</p>
                            <p className="project____techs">Firebase</p><p className="project____techs">Javascript</p>


                        </div>
                        <div className="project__container__info__buttons">
                            <Button className="button button2">Github <GitHub/></Button>
                            <Button className="button button2">Live <Web/></Button>

                        </div>

                    </div>

                </div>
            </div>
        </Fade>
    );
}

export default Project;
