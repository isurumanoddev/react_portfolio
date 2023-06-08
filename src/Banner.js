import React from 'react';
import "./Banner.css"
import {useCallback} from "react";
import Particles from "react-particles";
import {loadFull} from "tsparticles";
import {Slide, Fade} from 'react-reveal';

import {Button} from "@mui/material";
import {Download, Send} from "@mui/icons-material";
import Typist from 'react-typist';
import Typed from "react-typed"


function Banner() {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);


    return (

        <div className="banner">
            <Fade bottom>
                <div className="banner__container">
                    <div className="banner__container__info">
                        <div className="banner__container__subtitle">hello, my name is</div>

                        <div className="banner__container__title">Isuru Senanayake</div>


                        <div className="banner__container__title__2"><Typed
                            strings={[
                                "I'm a Full Stack Developer .",
                                "I am an Undergraduate Student . ",
                                "I build things for Web .",
                            ]}
                            typeSpeed={150}
                            backSpeed={20}
                            loop
                        /></div>
                        <p className="banner__container__title__description">I am a highly motivated and skilled
                            fullstack
                            developer student currently pursuing my BSc in Software Engineering. .I have experience
                            working
                            with
                            a variety of programming languages and frameworks</p>
                    </div>
                    <div className="banner__container__buttons">
                        <Button className="banner__container__button ">Reach out to me <Send
                            fontSize={"small"}/></Button>
                        <Button className="banner__container__button ">Download Cv <Download/></Button>
                    </div>
                </div>
            </Fade>


            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{

                    background: {
                        color: {
                            value: "",
                        },
                    }, fpsLimit: 120, interactivity: {
                        events: {
                            onClick: {
                                enable: true, mode: "push",
                            }, onHover: {
                                enable: true, mode: "repulse",
                            }, resize: true,
                        }, modes: {
                            push: {
                                quantity: 4,
                            }, repulse: {
                                distance: 200, duration: 0.4,
                            },
                        },
                    }, particles: {
                        color: {
                            value: "#99e2e6",
                        },

                        links: {
                            color: "#99e2e6", distance: 150, enable: false, opacity: 0.3, width: 1,
                        }, collisions: {
                            enable: true,
                        }, move: {
                            direction: "none", enable: true, outModes: {
                                default: "bounce",
                            }, random: false, speed: 1, straight: false,
                        }, number: {
                            density: {
                                enable: true, area: 1000,
                            }, value: 80,
                        }, opacity: {
                            value: 0.4,
                        }, shape: {
                            type: "circle",
                        }, size: {
                            value: {min: 1, max: 5},
                        },
                    }, detectRetina: true


                }}
            />
        </div>

    );
}

export default Banner;

