import React from 'react';
import "./Banner.css"
import {useCallback} from "react";
import Particles from "react-particles";
import {loadFull} from "tsparticles";

import {Cursor, Typewriter, useTypewriter} from 'react-simple-typewriter'

import {Button, IconButton} from "@mui/material";
import {Download, GitHub, LinkedIn, Send, Twitter} from "@mui/icons-material";



function Banner() {
    const particlesInit = useCallback(async engine => {
        // console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);
    const downloadCV = () => {
        const downloadUrl = 'https://drive.google.com/file/d/1flr9WH7MANldPQxajPZ_NpKwEGe09McJ/view?usp=drive_link'; // Replace with the actual Google Drive file download link

        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = downloadUrl;

        // Set the file name for the download
        link.download = 'cv.pdf'; // Replace 'cv.pdf' with the desired file name

        // Simulate a click event to trigger the download
        link.click();
    }
        const [text, count] = useTypewriter({
        words: ["< I'm a Full Stack Developer />", "< I'm an Undergraduate Student />", "< I build things for Web />"],
        loop: true,
        delaySpeed: 2000,

    });


    return (


           <div className={" h-screen px-4 flex flex-col justify-center max-w-6xl md:mx-auto  "}>
            <div className="px-4 md:px-10 md:mx-auto mt-10 md:mt-0 flex flex-col justify-center items-start">
                <div className="flex flex-col gap-2 md:gap-1 relative z-20">

                    <div className="backdrop-blur-md w-fit text-[15px] md:text-[17px] lg:text-[20px] text-[#F33232FF] tracking-widest">hello, my
                        name is
                    </div>


                    <div className="pb-1 pt-1 text-[40px] md:text-[50px]  lg:text-[65px] tracking-widest  ">Isuru
                        Senanayake
                    </div>


                    <div className="h-auto md:h-[60px] text-[24px] md:text-[35px] lg:text-[42px]">
                        <p>
                            <span>{text}</span>
                            <Cursor curorColor={"#F33232FF"}/>
                        </p>

                    </div>

                    <p className="text-[14px] md:text-[16px] w-3/4  md:w-1/2 lg:w-2/5 pb-4 backdrop-blur-lg">I am a
                        highly motivated and
                        skilled<strong className="text-[#F33232FF]"> Fullstack Developer
                        </strong> currently pursuing <strong className="text-[#F33232FF]"> BSc in Software Engineering
                            .</strong>I have
                        experience
                        working with a variety of programming languages and frameworks
                    </p>

                </div>


                <div className="mt-3 flex flex-row gap-3 md:pt-6 z-20">
                    <a href={"#contact"}>
                        <Button className="button ">Reach out to me <Send
                            fontSize={"small"}/></Button>
                    </a>

                    {/*<Button id={"download__btn"} className="hidden lg:flex gap-3 text-xs bg-[#64FFDA] tracking-widest text-white border-none outline-none px-7 ">Download Cv <Download*/}
                    {/*    fontSize={"small"}/></Button>*/}
                </div>


                <div className="hidden lg:flex md:flex-col gap-4 absolute right-10 top-25 z-0 ">
                    <IconButton target="_blank" href={"https://github.com/isurumanoddev"}
                                className={"text-white hover:text-[#E76161] transition"}>
                        <GitHub fontSize={"large"}/>
                    </IconButton>
                    <IconButton href={"https://github.com/isurumanoddev"} target="_blank"
                                className={"text-white hover:text-[#E76161] transition"}>
                        <LinkedIn fontSize={"large"}/>
                    </IconButton>
                    <IconButton href={"https://github.com/isurumanoddev"} target="_blank"
                                className={"text-white hover:text-[#E76161] transition"}>
                        <Twitter fontSize={"large"}/>
                    </IconButton>

                </div>


            </div>

            {/*<Particles*/}
            {/*    id="tsparticles"*/}
            {/*    init={particlesInit}*/}
            {/*    loaded={particlesLoaded}*/}
            {/*    options={{*/}

            {/*        background: {*/}
            {/*            color: {*/}
            {/*                value: "",*/}
            {/*            },*/}
            {/*        }, fpsLimit: 120, interactivity: {*/}
            {/*            events: {*/}
            {/*                onClick: {*/}
            {/*                    enable: true, mode: "push",*/}
            {/*                }, onHover: {*/}
            {/*                    enable: true, mode: "repulse",*/}
            {/*                }, resize: true,*/}
            {/*            }, modes: {*/}
            {/*                push: {*/}
            {/*                    quantity: 4,*/}
            {/*                }, repulse: {*/}
            {/*                    distance: 200, duration: 0.4,*/}
            {/*                },*/}
            {/*            },*/}
            {/*        }, particles: {*/}
            {/*            color: {*/}
            {/*                value: "#F33232FF",*/}
            {/*            },*/}

            {/*            links: {*/}
            {/*                color: "#E76161", distance: 150, enable: true, opacity: 0.4, width: 1,*/}
            {/*            }, collisions: {*/}
            {/*                enable: true,*/}
            {/*            }, move: {*/}
            {/*                direction: "none", enable: true, outModes: {*/}
            {/*                    default: "bounce",*/}
            {/*                }, random: false, speed: 1, straight: false,*/}
            {/*            }, number: {*/}
            {/*                density: {*/}
            {/*                    enable: true, area: 1000,*/}
            {/*                }, value: 80,*/}
            {/*            }, opacity: {*/}
            {/*                value: 0.6,*/}
            {/*            }, shape: {*/}
            {/*                type: "circle",*/}
            {/*            }, size: {*/}
            {/*                value: {min: 1, max: 5},*/}
            {/*            },*/}
            {/*        }, detectRetina: true*/}


            {/*    }}*/}
            {/*/>*/}
        </div>

    );
}

export default Banner;

// #64FFDA

          // value: "#99e2e6",