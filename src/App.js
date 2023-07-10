
import Banner from "./home/Banner";
import About from "./components/About";




import Skills from "./components/Skills";


import Projects from "./components/Projects";
import Header from "./header/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {


    return (
        <div
            className={"h-screen  snap-y scroll-smooth snap-mandatory overflow-x-hidden overflow-y-scroll z-0 scrollbar-track-gray-400/20 scrollbar-thumb-red-700 scrollbar-thin"}>
            <Header/>
            <section id={"hero"} className={"snap-center"}>
                <Banner/>
            </section>
            <section id={"about"} className={"snap-center"}>
                <About/>
            </section>
            <section id={"skills"} className={"snap-center"}>
                <Skills   />
            </section>
            <section id={"projects"} className={"snap-center"}>
                <Projects  />
            </section>
            <section id={"contact"} className={"snap-center"}>
                <Contact/>
            </section>
            <Footer/>



        </div>
    );
}

export default App;


