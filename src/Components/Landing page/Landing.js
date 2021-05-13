import React from 'react';
import "./Landing.css";
import { Link } from "react-router-dom";
import Banner1 from "../../assets/banner-1.png";
import Banner2 from "../../assets/banner-2.png";
import Banner3 from "../../assets/banner-3.png";
import Banner4 from "../../assets/banner-4.png";
import Banner5 from "../../assets/banner-5.png";
import Accordion from "../Accordion/Accordion";
import Footer from "../Footer/Footer";

function Landing() {
    return (
        <div className="landing">
        <div className="bgimage__1" style={{ backgroundImage: Banner1 }}>
        <h1>TODAY'S STARTUP CAN BE</h1>
        <h1>TOMORROW'S EMPIRE.</h1>
        <h4>Click on the below button to create your profile</h4>
        <br></br>
        <br></br>

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

        <br></br>

        <div className="bgimage__2" style={{ backgroundImage: Banner2 }}>
            <div className="profile__left">
            <h1>TODAY'S IDEA CAN BE</h1>
             <h1>TOMORROW'S EMPIRE.</h1>
            <br></br>

            <h4>We have something amazing for both startups</h4>
            <h4>as well as Investors. Click here to know more</h4>
            </div>
        
             <br></br>
            <div className="profile__right">
            <h4>So, Who are you?</h4>
            <br></br>
            <Link to="/signup">
                  <button
                  className="button"
                  type="submit"
                  size="lg"
                  >STARTUP
                  </button>
            </Link>
          
            <h4 style={{marginRight: "85px"}}>OR</h4>
            <Link to="/signup">
                  <button
                  className="button" 
                  type="submit"
                  size="lg"
                  >INVESTOR
                  </button> 
                </Link>
            </div>
        </div>
        
        <br></br>
        <div className="bgimage__3" style={{ backgroundImage: Banner3 }}>
        <h3>“Ideas are easy. Implementation is hard.”</h3>
        <h3> –Guy Kawasaki, Alltop Co-Founder and Entrepreneur</h3>
        <br></br>
        <br></br>

        <Link to="/profile">
        <button
                    className="button"
                    type="submit"
                    onClick=""
                    size="lg"
                    >
                        GET STARTED
        </button>
        </Link>
        </div>

        <br></br>

        <div className="accordion">
            <Accordion />
        </div>
        <br></br>

        <div className="bgimage__4" style={{ backgroundImage: Banner4 }}>
        <h3> “Any time is a good time to start a company.” </h3>
        <h3> –Ron Conway, Noted Startup Investor, SV Angel</h3>
        <br></br>
        <br></br>

        <Link to="/profile">
        <button
                    className="button"
                    type="submit"
                    onClick=""
                    size="lg"
                    >
                        GET STARTED
        </button>
        </Link>
        </div>
        <br></br>

        <div className="bgimage__5" style={{ backgroundImage: Banner5 }}>
        <h3>“An entrepreneur is someone who has a vision </h3>
        <h3> for something and a want to create.</h3>
        <h3>– David Karp, Tumblr founder and CEO</h3>
        <br></br>
        <br></br>

        <Link to="/profile">
        <button
                    className="button"
                    type="submit"
                    onClick=""
                    size="lg"
                    >
                        GET STARTED
        </button>
        </Link>
        </div>
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


