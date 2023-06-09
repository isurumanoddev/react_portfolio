import React from 'react';
import Title from "./Title";
import "./Contact.css"
import {Button, FormControl, Input, InputLabel, TextField} from "@mui/material";
import {Email, Phone, Send} from "@mui/icons-material";


function Contact() {
    return (
        <div className="contact container" id={"contact"}>
            <Title title={"Contact Me"} subTitle={"Get in touch"}/>

            <div className="contact__container">
                <div className="contact__other">
                    <div className="contact__other__option">
                        <Email className={"contact__other__option__icon"} fontSize={"large"}/>
                    </div>
                    <div className="contact__other__option">
                          <Phone className={"contact__other__option__icon"} fontSize={"large"}/>
                    </div>


                </div>

                <form className="contact__form">
                    <div className="contact__form__form__controll">
                        <label htmlFor="exampleInputEmail1" className="contact__form__label">Enter Your Name</label>
                        <input type="text" className="contact__form__input"/>
                    </div>

                    <div className="contact__form__form__controll">
                        <label htmlFor="exampleInputEmail1" className="contact__form__label">Enter Your Email</label>
                        <input type="email" className="contact__form__input"/>
                    </div>

                    <div className="contact__form__form__controll">
                        <label htmlFor="exampleInputEmail1" className="contact__form__label">Message</label>
                        <textarea rows={5} className="contact__form__input"/>
                    </div>
                    <Button size="large" className={"button"}> Contact Me <Send/></Button>

                </form>
            </div>


        </div>
    );
}

export default Contact;
