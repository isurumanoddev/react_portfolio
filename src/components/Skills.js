import React, {useEffect, useState} from 'react';
import "../styles/Skills.css"
import Title from "./Title";
import Skill from "./Skill";
import {Fade, Zoom,Bounce} from "react-reveal";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase";


function Skills() {
    const [skills, setSkills] = useState([])

    const skiilsCollection = collection(db, "skills")
    // const roomDoc = doc(roomsCollection, roomId ? roomId : "");
    // const messageCollection = collection(roomDoc, "messages")
    // const messageDoc = doc(messageCollection);

    useEffect(() => {
        getDocs(skiilsCollection)
            .then(snapshot => {
                setSkills(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            })
    }, [])

    console.log("projects ",skills[0]?.data.image)


    return (
        <div className="skills container">
            <Title title={"skills"} subTitle={"my tech stacks"}/>


            <div className="skills__container">

                <div className="skills__container__row" id="skillsContainer">

                    {
                        skills.map(skills => (
                            <Skill name={skills.data.name} img={skills.data.image}/>
                        ))
                    }



                </div>

            </div>


        </div>
    );
}

export default Skills;
