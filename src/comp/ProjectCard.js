'use client'
import {motion} from "framer-motion"
import {Button} from "@mui/material";
import {Article, GitHub} from "@mui/icons-material";



function ProjectCard({name, description, live, github, image}) {


    return (
        <article
            className={"bg-[#131b30] backdrop-blur-md snap-center w-full md:w-[500px]  xl:w-[600px]   flex flex-col items-center space-y-4 flex-shrink-0"}>


                <motion.img
                    initial={{y: -150, opacity: 0}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 1.2}}
                    viewport={{once: false}}
                    className={"min-h-4/10 h-72 md:h-112 rounded-md  object-cover w-[300px] md:w-[350px] lg:w-[450px] p-1 "}
                    src={image ?  urlFor(image).url() : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzSc0E_-ezcw1juku7x_q9rIVtGDEFGDsZnA&usqp=CAU" }
                />

            <motion.div
                initial={{y: 60, opacity: 0}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                viewport={{once: false}}


                className={"px-1 md:px-10 flex flex-col gap-3 pb-3  text-center"}>
                <h4 className={"text-lg lg:text-[20px] tracking-[10px]"}>{name}</h4>

                <div className={" text-center text-[14px]   "}>
                    {description}

                </div>

                <div className={" flex-row flex-wrap gap-2 px-2 hidden md:flex"}>


                    <p className={"px-2 py-1 font-semibold text-[15px] bg-[#E76161]/80 text-white rounded-full w-fit"}>Next
                        js</p>
                    <p className={"px-2 py-1 font-semibold text-[15px] bg-[#E76161]/80 text-white rounded-full w-fit"}>Next
                        js</p>
                    <p className={"px-2 py-1 font-semibold text-[15px] bg-[#E76161]/80 text-white rounded-full w-fit"}>Next
                        js</p>
                    <p className={"px-2 py-1 font-semibold text-[15px] bg-[#E76161]/80 text-white rounded-full w-fit"}>Next
                        js</p>
                    <p className={"px-2 py-1 font-semibold text-[15px] bg-[#E76161]/80 text-white rounded-full w-fit"}>Next
                        js</p>
                    <p className={"px-2 py-1 font-semibold text-[15px] bg-[#E76161]/80 text-white rounded-full w-fit"}>Next
                        js</p>
                    <p className={"px-2 py-1 font-semibold text-[15px] bg-[#E76161]/80 text-white rounded-full w-fit"}>Next
                        js</p>
                    <p className={"px-2 py-1 font-semibold text-[15px] bg-[#E76161]/80 text-white rounded-full w-fit"}>Next
                        js</p>
                    <p className={"px-2 py-1 font-semibold text-[15px] bg-[#E76161]/80 text-white rounded-full w-fit"}>Next
                        js</p>
                    <p className={"px-2 py-1 font-semibold text-[15px] bg-[#E76161]/80 text-white rounded-full w-fit"}>Next
                        js</p>

                </div>
                <div className={"flex flex-row justify-center items-center gap-3 "}>
                    <Button
                        href={github} className={'button3'}>Github <GitHub/></Button>
                    <Button
                        href={live} className={'button3'}>Live <Article/></Button>
                </div>

            </motion.div>

        </article>
    );
}

export default ProjectCard;