import './styles/App.css';
import Banner from "./home/Banner";
import About from "./components/About";
import Header from "./header/Header";

import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Contact from "./Contact";
import Skills from "./components/Skills";
import Scroll from "./components/Scroll";

import Projects from "./comp/Projects";


function App() {


    return (
        <div className="app">

            <Header/>
           <Projects/>
            <Banner/>
            <About/>
            <Skills/>


            <Portfolio/>

            <Contact/>

            <Scroll/>
            <Footer/>



        </div>
    );
}

export default App;


