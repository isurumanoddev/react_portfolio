
import {motion} from "framer-motion"
import {Button} from "@mui/material";
import {Download, Send} from "@mui/icons-material";

function About() {
        const downloadCV = () => {
        const downloadUrl = 'https://drive.google.com/file/d/1_qQKKZ92l5Vq637_nnA5NRcC6tjgyi14/view?usp=sharing'; // Replace with the actual Google Drive file download link

        // Create a temporary anchor element
        const link = document.createElement('a');
        link.href = downloadUrl;

        // Set the file name for the download
        link.download = 'cv.pdf'; // Replace 'cv.pdf' with the desired file name

        // Simulate a click event to trigger the download
        link.click();
    }
    return (
        <div
            className={"h-screen   mx-auto items-center relative flex flex-col text-center md:text-left md:flex-row max-w-5xl px-10 justify-evenly"}>
            <h3 className={"absolute  top-16 md:top-20 text-2xl uppercase text-center tracking-[20px]"}>About</h3>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,


                }}
                whileInView={{x: 0, opacity: 1}}
                viewport={{once: false}}
                transition={{duration: 1.2}}
                className={"mt-20 md:mt-0 -mb-20 md:mb-0 flex-shrink-0 w-[130px] h-[130px] md:w-60 md:h-60 rounded-full "}
                src="https://media.licdn.com/dms/image/D5603AQGjRU9HcYVkWg/profile-displayphoto-shrink_800_800/0/1686567442630?e=1693440000&v=beta&t=rE5BJeXkVoZZNG08r8mrLKcNYBQy3ljYqUZry52XLwQ"
                alt=""/>

            <motion.div
                initial={{
                    x: +200,
                    opacity: 0,


                }}
                whileInView={{x: 0, opacity: 1}}
                viewport={{once: false}}
                transition={{duration: 1.2}}
                className={"scroll-py-10 px-0 md:px-10 backdrop-blur-md"}
            >
                <h4 className={"text-2xl font-semibold pb-3 md:pb-4"}>Here is a little background</h4>
                <p className={'text-sm max-w-xl md:text-lg '}>

                    Greetings! 🌟 My name is Isuru  and I am a driven and enthusiastic Full Stack Software Developer 🚀.
                    Currently, I am pursuing my Third year of Software Engineering offered from Cardiff
                    Metropolitan University ( Associated with ICBT ). With extensive experience in building Web applications, I specialize in JavaScript / Reactjs / Nodejs / Next js / Django
                    and various other cool libraries and frameworks.
                    My passion lies in solving complex problems using programming and I am deeply interested in Software Engineering,
                    Web Development, Data Structures, and Algorithms
                    . I strongly believe in the power of teamwork and I am always eager
                    to collaborate with like-minded individuals. 🤝 So, feel free to reach out to me and let's work together to create some amazing projects! 🌟
                </p>
                <div className="mt-3 flex flex-row gap-3 md:pt-6">
                    <Button className="button " onClick={downloadCV}>Download Cv <Download/> </Button>
                    {/*<Button id={"download__btn"} className="hidden lg:flex gap-3 text-xs bg-[#64FFDA] tracking-widest text-white border-none outline-none px-7 ">Download Cv <Download*/}
                    {/*    fontSize={"small"}/></Button>*/}
                </div>


            </motion.div>

        </div>
    );
}

export default About;