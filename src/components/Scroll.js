import React, {useState} from 'react';
import {ArrowUpward, KeyboardArrowUp} from "@mui/icons-material";
import {Button, IconButton} from "@mui/material";
import "../styles/Scroll.css"

function Scroll() {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        } else if (scrolled <= 300) {
            setVisible(false)
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour
               in place of 'smooth' */
        });
    };

    window.addEventListener('scroll', toggleVisible);


    return (
        <div className={"scroll"}>


            <IconButton  className={"scroll__button"}  onClick={scrollToTop}
            style={{display: visible ? 'inline' : 'none'}}>
                <KeyboardArrowUp className={"arrow"} fontSize={"large"}/>
            </IconButton>


        </div>
    );
}

export default Scroll;



