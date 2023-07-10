
import {motion} from "framer-motion"
import React from "react";



function Projects({projects}) {


    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 1.5}}

            className={"min-h-screen mx-auto items-center relative flex flex-col text-center md:text-left md:flex-row max-w-full px-2 justify-evenly z-10"}>
            <h3 className={"absolute uppercase top-14 text-2xl text-center tracking-[20px]"}>Projects</h3>


            <div
                className={"w-full space-x-5 flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#E76161] scrollbar-thin p-10 "}>

                {
                     projects?.map((project) => (
                        <ProjectCard
                            key={project?._id}
                            name={project?.title}
                            description={project?.summary}
                            image={project?.image}
                            github={project?.github}
                            live={project?.live}
                            tech={project?.tech}/>
                    ))
                }
            </div>

        </motion.div>
    );
}

export default Projects;