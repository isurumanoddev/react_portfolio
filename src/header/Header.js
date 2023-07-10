

import {motion} from "framer-motion"

import {Home, Message, More, Psychology, Work} from "@mui/icons-material";

function Header() {
    return (
        <header className={"absolute w-full top-3 md:top-0  md:backdrop-blur-0   md:w-full h-[60px] flex flex-col justify-center items-center md:items-end my-auto md:fixed z-50  bg-transparent md:bg-[#0a1029] "}>

            <motion.div className={"flex flex-row gap-5 w-[300px] md:w-full max-w-6xl mx-auto backdrop-blur-md rounded-full md:rounded-none md:gap-10 items-center justify-center md:justify-end py-2 md:pr-10 "}

                // initial={{
                //     x: -500,
                //     opacity:0,
                //     scale: 0.5,
                //
                // }}
                // animate={{x: 0,opacity:1,scale:1}}
                // transition={{duration:1.5}}
            >

                <div className={"border-b-2 border-b-[#E76161]" }><a
                    className={" text-sm transition duration-150 hover:text-[#E76161]"} href="#hero"><p className={"text-[10px] sm:text-[15px]"}>Home </p>{/* <Home className={"flex sm:hidden"}/> */} </a></div>
                <div className={""}><a className={" text-sm transition duration-150 hover:text-[#E76161]"} href="#about"><p className={"text-[10px] sm:text-[15px]"}>About </p>{/* <More className={"flex sm:hidden"}/> */} </a></div>
                <div className={""}><a className={" text-sm transition duration-150 hover:text-[#E76161]"} href="#skills"><p className={"text-[10px] sm:text-[15px]"}>Skills </p>{/* <Psychology className={"flex sm:hidden"}/> */} </a></div>
                <div className={""}><a className={" text-sm transition duration-150 hover:text-[#E76161]"} href="#projects"><p className={"text-[10px] sm:text-[15px]"}>Projects </p>{/* <Work className={"flex sm:hidden"}/> */} </a>
                </div>
                <div className={""}><a className={" text-sm transition duration-150 hover:text-[#E76161]"} href="#contact"><p className={"text-[10px] sm:text-[15px]"}>Contact </p>{/* <Message className={"flex sm:hidden"}/> */} </a></div>

            </motion.div>
        </header>
    );
}

export default Header;