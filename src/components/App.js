import '../styles/App.css';
import Banner from "../home/Banner";
import About from "./About";
import Header from "../header/Header";
import Education from "./Education";
import Portfolio from "./Portfolio";
import Footer from "./Footer";
import Contact from "../Contact";
import Skills from "./Skills";
import Scroll from "./Scroll";


function App() {


    return (
        <div className="app">

            <Header/>
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


