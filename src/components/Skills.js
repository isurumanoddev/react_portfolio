import React, {useEffect, useState} from 'react';


import Skill from "./Skill";
import {motion} from "framer-motion"
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
        // <div className="skills container">
        //     <Title title={"skills"} subTitle={"my tech stacks"}/>
        //
        //
        //     <div className="skills__container">
        //
        //         <div className="skills__container__row" id="skillsContainer">
        //
        //             {
        //                 skills.map(skills => (
        //                     <Skill name={skills.data.name} img={skills.data.image}/>
        //                 ))
        //             }
        //
        //
        //
        //         </div>
        //
        //     </div>
        //
        //
        // </div>
                <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 2.5}}


            className={"mx-auto px-10   relative flex flex-col text-center md:text-left min-h-screen max-w-6xl justify-center items-center"}>
            <h3 className={"absolute top-[100px] text-2xl uppercase text-center tracking-[20px]"}>Skills</h3>

            <div className={" grid grid-cols-4 gap-5 backdrop-blur-md "}>

                {

                    skills.map(skills => (
                            <Skill key={skills.data.id} name={skills.data.name} img={skills.data.image}/>
                        ))
                }

            </div>

        </motion.div>
    );
}

export default Skills;
