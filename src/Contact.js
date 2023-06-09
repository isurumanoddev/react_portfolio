import React from 'react';
import Title from "./Title";
import "./Contact.css"
import {Box} from "@mui/material";

function Contact() {
    return (
        <div className="contact container" id={"contact"}>
            <Title title={"Contact Me"} subTitle={"Get in touch"}/>

            <Box
			component={"main"}
			display={"flex"}
			flexDirection={{ xs: "column", md: "row" }}
			alignItems={"center"}
			justifyContent={"center"}
			minHeight={"calc(100vh - 175px)"}
		>
			<h1 className='paragraph'>Contact Me</h1>
			<p className='paragraph'>Lets create something together!</p>
			<form

				method='POST'
				target='_blank'
			>
				<div>
					<input type='text' placeholder='Name' name='name' required />
				</div>
				<div>
					<input type='email' placeholder='Email' name='email' required />
				</div>
				<div>
					<textarea placeholder='Message' name='message' required />
				</div>
				<div>
					<button type='submit' >
						{" "}
						Send it!{" "}
					</button>
				</div>
			</form>
		</Box>
        </div>
    );
}

export default Contact;
