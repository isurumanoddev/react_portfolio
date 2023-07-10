import './styles/App.css';
import Banner from "./home/Banner";
import About from "./components/About";



import Contact from "./Contact";
import Skills from "./components/Skills";


import Projects from "./comp/Projects";
import Header from "./header/Header";


function App() {


    return (
        <div
            className={"h-screen  snap-y scroll-smooth snap-mandatory overflow-x-hidden overflow-y-scroll z-0 scrollbar-track-gray-400/20 scrollbar-thumb-red-700 scrollbar-thin"}>
            <Header/>
            <section id={"hero"} className={""}>
                <Banner/>
            </section>
            <section id={"about"} className={""}>
                <About/>
            </section>
            <section id={"skills"} className={""}>
                <Skills   />
            </section>
            <section id={"projects"} className={""}>
                <Projects  />
            </section>
            <section id={"contact"} className={""}>
                <Contact/>
            </section>



        </div>
    );
}

export default App;


