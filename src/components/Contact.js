
import {motion} from "framer-motion"
import {LocationCity, Mail, Map, Phone, Send} from "@mui/icons-material";
import {Button} from "@mui/material";

import React, {useRef, useState} from "react";
import emailjs from "@emailjs/browser";

function Contact() {

    const [labelColor, setLabelColor] = useState("");

    const [showAlert, setShowAlert] = useState(false);


    const handleInputFocus = (label) => {
        setLabelColor(label)
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 3000);

        emailjs.sendForm('service_0meezte', 'template_pumrrnp', form.current, 'xueCcnh0uSjEti5Ow')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };


    return (
        <motion.div
            initial={{y: 50, opacity: 0}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            viewport={{once: false}}

            className={"h-screen   mx-auto items-center relative flex flex-col text-center md:text-left  max-w-5xl px-10 justify-evenly"}>
            <h3 className={"absolute top-16 text-2xl uppercase text-center tracking-[20px]"}>Contact Me</h3>

            <motion.div
                initial={{y: 50, opacity: 0}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.8}}
                viewport={{once: false}}


                className={"flex flex-col space-y-8 lg:w-[500px]  "}>
                <h4 className={'text-xl font-semibold text-center'}>I have got just what you need <span
                    className="decoration-[#E76161]/50 underline">Lets Talk.</span></h4>

                <div className={"space-y-10 "}>
                    <div className={"flex items-center space-x-5 justify-center"}>
                        <Phone className={"text-[#E76161]"}/>
                        <p className={"text-[16px]"}>+94766668809</p>
                    </div>
                    <div className={"flex items-center space-x-5 justify-center"}>
                        <Mail className={"text-[#E76161]"}/>
                        <p className={"text-[16px]"}>isurumanod99@gmail.com</p>
                    </div>
                    <div className={"flex items-center space-x-5 justify-center"}>
                        <Map className={"text-[#E76161]"}/>
                        <p className={"text-[16px]"}>Colombo</p>
                    </div>
                </div>

                <form ref={form} onSubmit={sendEmail} className={"flex flex-col  space-y-3  "}>
                    <div className={"flex space-x-2 w-full"}>
                        <input name={"name"} onFocus={() => handleInputFocus("name")} placeholder={"Name"} className={"contactInput"} type="text"/>
                        <input name={"email"} onFocus={() => handleInputFocus("email")}  placeholder={"Email"} className={"contactInput"} type="text"/>
                    </div>
                    <input name={"email"} onFocus={() => handleInputFocus("email")} placeholder={"Subject"} className={"contactInput"} type="text"/>
                    <textarea name={"message"} onFocus={() => handleInputFocus("message")} placeholder={"Message"} className={"contactInput"}/>
                     <Button type={"submit"} className={"button2"}>Submit</Button>
                </form>
            </motion.div>


        </motion.div>
    );
}

export default Contact;