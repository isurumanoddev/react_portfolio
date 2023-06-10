import React, {useState, useRef} from 'react';
import Title from "./components/Title";
import "./styles/Contact.css"
import {Alert, Button} from "@mui/material";
import {Email, Phone, Send} from "@mui/icons-material";
import emailjs from '@emailjs/browser';
import {Fade} from "react-reveal";


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
        <div className="contact container" id={"contact"}>
            <Title title={"Contact Me"} subTitle={"Get in touch"}/>
            {showAlert && (
                <Alert className={"alert"} severity="success">Email sent successfully!</Alert>
            )}
            <Fade cascade bottom>
                <div className="contact__container">
                    <div className="contact__other">
                        <div className="contact__other__option">
                            <Email className={"contact__other__option__icon"} fontSize={"large"}/>
                            <div>
                                <h3 className="contact-title">Send Email </h3>
                                <span className="contact-subtitle">isurumanod99@gmail.com</span>
                                {/*<a href={"mailto:isurumanod99@gmail.com"} className="contact-subtitle">Send Email</a>*/}
                            </div>
                        </div>
                        <div className="contact__other__option">
                            <Phone className={"contact__other__option__icon"} fontSize={"large"}/>
                            <div>
                                <h3 className="contact-title">Send Message</h3>
                                <span className="contact-subtitle">+94766668809</span>
                                {/*<a href={"https://api.whatsapp.com/send?phone+94763222186"} className="contact-subtitle">Send Message</a>*/}
                            </div>
                        </div>


                    </div>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form__form__controll">
                            <label htmlFor="exampleInputEmail1"
                                   className={labelColor === "name" ? "contact__form__label__primary" : "contact__form__label"}>Enter
                                Your Name</label>
                            <input name={"name"} onFocus={() => handleInputFocus("name")} type="text"
                                   className="contact__form__input"/>
                        </div>

                        <div className="contact__form__form__controll">
                            <label htmlFor="exampleInputEmail1"
                                   className={labelColor === "email" ? "contact__form__label__primary" : "contact__form__label"}>Enter
                                Your Email</label>
                            <input name={"email"} onFocus={() => handleInputFocus("email")} type="email"
                                   className="contact__form__input"/>
                        </div>

                        <div className="contact__form__form__controll">
                            <label htmlFor="exampleInputEmail1"
                                   className={labelColor === "message" ? "contact__form__label__primary" : "contact__form__label"}>Message</label>
                            <textarea name={"message"} onFocus={() => handleInputFocus("message")} rows={4}
                                      className="contact__form__input"/>
                        </div>
                        <Button type="submit" size="large" className={"button"}> Contact Me <Send/></Button>

                    </form>
                </div>
            </Fade>

        </div>
    );
}

export default Contact;
