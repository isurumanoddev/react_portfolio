import React, {useEffect, useState} from 'react';
import "./Portfolio.css"
import Title from "./Title";
import Project from "./Project";
import {collection, getDocs} from "firebase/firestore";
import {db} from "./firebase";


function Portfolio() {

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

    console.log("projects ",projects[0]?.data.image)


    return (

        <div className="portfolio container" id={"portfolio"}>
            <Title title={"Portfolio"} subTitle={"My Recent Work"}/>
            <div className="portfolio__container">
                {projects?.map(project => (
                    <Project name={project.data.name} description={project.data.description} github={project.data.github}/>

                ))}
                <Project/>



            </div>
        </div>
    );
}

export default Portfolio;
