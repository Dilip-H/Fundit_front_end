import React from 'react';
import "./Landing.css";
import Banner1 from "../../assets/banner1.png";
import Banner2 from "../../assets/banner2.png";
import Banner3 from "../../assets/banner3.png";
import Navbar from "../Navbar/Nav";
import Accordion from "../Accordion/Accordion";
import Footer from "../Footer/Footer";

function Landing() {
    return (
        <div className="landing">
            <Navbar />
        <div className="bgimage" style={{ backgroundImage: Banner1 }}>
        <h1>TODAY'S STARTUP CAN BE</h1>
        <h1>TOMORROW'S EMPIRE</h1>
        <h3>Click on the below button to create your profile</h3>
        <br></br>
        <br></br>

        <button
                    className="button"
                    type="submit"
                    onClick=""
                    size="lg"
                    >
                        GET STARTED
        </button>
        
        </div>
        <div className="bgimage_1" style={{ backgroundImage: Banner2 }}></div>
        <div className="accordion">
            <br></br>
            <h1>Frequently Asked Questions</h1>
            <br></br>
            <Accordion />
            <br></br>
            <br></br>
        </div>

        <div className="bgimage_2" style={{ backgroundImage: Banner3 }}>
        <h3>Click on the below button to create your profile</h3>
        <br></br>
        <br></br>

        <button
                    className="button"
                    type="submit"
                    onClick=""
                    size="lg"
                    >
                        GET STARTED
        </button>
        </div>

        <br></br>
        <br></br>

        <div className="footer">
        <Footer />
        </div>

        <br></br>
        <br></br>

        </div>
        
    )
}

export default Landing


