import './App.css';
import Banner from "./Banner";
import About from "./About";
import Header from "./Header";
import Education from "./Education";
import Portfolio from "./Portfolio";
import Footer from "./Footer";

function App() {
    return (
        <div className="app">
            <Header/>
            <Banner/>
            <About/>
            <Education/>
            <Portfolio/>
            <Footer/>


        </div>
    );
}

export default App;
