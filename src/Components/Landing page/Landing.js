import React from 'react';
import "./Landing.css";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import banner1 from "../../assets/hero-banner-1.svg";
import img1 from "../../assets/hero-banner-1-img.svg"
import banner2 from "../../assets/hero-banner-2.svg";
import img2 from "../../assets/hero-banner-2-img.svg"
import banner3 from "../../assets/hero-banner-3.svg";
import img3 from "../../assets/hero-banner-3-img.svg"
import banner4 from "../../assets/hero-banner-4.svg";
import banner5 from "../../assets/hero-banner-4.svg";
import Accordion from "../Accordion/Accordion";
import Footer from "../Footer/Footer";
import CarouselContainer from "../Carousel/CarouselContainer";

function Landing() {
    return (
        <div className="landing">
        {/* Section 1 */}  
        <div className="bgimage__1" style={{ backgroundImage: banner1 }}>
            <img className="img1" src={img1} alt=""/>
            <h1 style={{marginLeft:"60px"}}>TODAY'S STARTUP CAN BE</h1>
            <h1 style={{marginLeft:"60px"}}>TOMORROW'S EMPIRE.</h1>
            <h4 style={{marginLeft:"60px"}}>Click on the below button to create your profile</h4>
            <br></br>
             <br></br>
        <div>
        <Link to="/profile">
        <button
            className="button" style={{ marginLeft: "170px"}}
            type="submit"
            onClick=""
            size="lg"
        >
            GET STARTED
        </button>
        </Link>
        </div>
        </div>

        {/*  Section 2 */}
        <div className="bgimage__2" style={{ backgroundImage: banner2 }}>
            <img className="img2" src={img2} alt=""/>
            <h1 style={{marginRight:"90px"}}>HAVE A BUSINESS IDEA?</h1>
            <h3 style={{marginRight:"90px"}}>Let's connect and make it a reality!!</h3>
            <br></br>
            <br></br>
        <div>
        <Link to="/profile">
        <button  style={{marginRight:"200px"}}
            className="button"
            type="submit"
            onClick=""
            size="lg"
        >
            GET STARTED
        </button>
        </Link>
        </div>
        </div>

        {/* Sectiion 3 */}
        <div className="bgimage__3" style={{ backgroundImage: banner3 }}>
            <img className="img3" src={img3} alt=""/>
            <h1 style={{marginLeft:"60px"}}>LOOKING FOR AN INVESTOR</h1>
            <h1 style={{marginLeft:"60px"}}>FOR YOUR STARTUP?</h1>
            <h3 style={{marginLeft:"60px"}}>Well, you have come to the right place!!</h3>
            <br></br>
            <br></br>
        <div>
        <Link to="/profile">
        <button
            className="button" style={{marginLeft:"60px"}}
            type="submit"
            onClick=""
            size="lg"
        >
            GET STARTED
        </button>
        </Link>
        </div>
        </div>

        {/* Section 4 */}
        <div className="bgimage__4" style={{ backgroundImage: banner4 }}>
            <div className="profile__left">
            <h1 style={{marginLeft:"100px"}}>TODAY'S IDEA CAN BE</h1>
             <h1 style={{marginLeft:"100px"}}>TOMORROW'S EMPIRE.</h1>
            <br></br>

            <h4 style={{marginLeft:"100px"}}>We have something amazing for both startups</h4>
            <h4 style={{marginLeft:"100px"}}>as well as Investors. <i><Link to="/info"  style={{color: "white", textDecoration: "none"}}>Click here to know more</Link></i></h4>
            </div>
        
            <div className="profile__right">
            <h4 style={{marginRight:"90px"}}>So, Who are you?</h4>
           
            <Link to="/signup">
                  <button style={{marginRight:"90px"}}
                  className="button"
                  type="submit"
                  size="lg"
                  >STARTUP
                  </button>
            </Link>
          
            <h4 style={{marginRight: "175px"}}>OR</h4>
            <Link to="/signup">
                  <button style={{marginRight:"90px"}}
                  className="button" 
                  type="submit"
                  size="lg"
                  >INVESTOR
                  </button> 
                </Link>
            </div>
        </div>

        {/* Section 5 */}
        <div className="bgimage__5" style={{ backgroundImage: banner5 }}>
            <ReactPlayer controls url="https://youtu.be/u71QsZvObHs" />
        </div>
        
        <CarouselContainer />
       
        <div className="accordion">
            <Accordion />
        </div>

        <div className="footer-1">
        <Footer />
        </div>
        </div>
        
    )
}

export default Landing


