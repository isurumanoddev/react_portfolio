import React, {useState} from 'react';
import Title from "./Title";
import "./Contact.css"
import {Button, FormControl, Input, InputLabel, TextField} from "@mui/material";
import {Email, Phone, Send} from "@mui/icons-material";


function Contact() {
    const [labelColor, setLabelColor] = useState("");


    const handleInputFocus = (label) => {
        setLabelColor(label)
    }

    return (
        <div className="contact container" id={"contact"}>
            <Title title={"Contact Me"} subTitle={"Get in touch"}/>

            <div className="contact__container">
                <div className="contact__other">
                    <div className="contact__other__option">
                        <Email className={"contact__other__option__icon"} fontSize={"large"}/>
                        <div>
                            <h3 className="contact-title">Email </h3>
                            <span className="contact-subtitle">isurumanod99@gmail.com</span>
                        </div>
                    </div>
                    <div className="contact__other__option">
                          <Phone className={"contact__other__option__icon"} fontSize={"large"}/>
                        <div>
                            <h3 className="contact-title">Call Me</h3>
                            <span className="contact-subtitle">+94766668809</span>
                        </div>
                    </div>


                </div>

                <form className="contact__form">
                    <div className="contact__form__form__controll">
                        <label htmlFor="exampleInputEmail1" className={labelColor === "name" ? "contact__form__label__primary" : "contact__form__label" }>Enter Your Name</label>
                        <input onFocus={() => handleInputFocus("name")} type="text" className="contact__form__input"/>
                    </div>

                    <div className="contact__form__form__controll">
                        <label htmlFor="exampleInputEmail1" className={labelColor === "email" ? "contact__form__label__primary" : "contact__form__label" } >Enter Your Email</label>
                        <input onFocus={() => handleInputFocus("email")} type="email" className="contact__form__input"/>
                    </div>

                    <div className="contact__form__form__controll">
                        <label htmlFor="exampleInputEmail1" className={labelColor === "message" ? "contact__form__label__primary" : "contact__form__label" }>Message</label>
                        <textarea onFocus={() => handleInputFocus("message")} rows={4} className="contact__form__input"/>
                    </div>
                    <Button size="large" className={"button"}> Contact Me <Send/></Button>

                </form>
            </div>


        </div>
    );
}

export default Contact;
