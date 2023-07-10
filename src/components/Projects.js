import {motion} from "framer-motion"

import React, {useEffect, useState} from 'react';


import ProjectCard from "./ProjectCard";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase";


function Projects() {

    const [projects, setProjects] = useState([])

    const projectCollection = collection(db, "projects")
    // const roomDoc = doc(roomsCollection, roomId ? roomId : "");
    // const messageCollection = collection(roomDoc, "messages")
    // const messageDoc = doc(messageCollection);

    useEffect(() => {
        getDocs(projectCollection)
            .then(snapshot => {
                setProjects(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            })
    }, [])


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
                            key={project.data.id}
                            name={project.data.name}
                            description={project.data.description}
                            image={project.data.image}
                            github={project.data.github}
                            live={project.data.live}
                            tech={project.data.tech}/>
                    ))
                }
            </div>

        </motion.div>
    );
}

export default Projects;