import React from 'react';
import "./Footer.css"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import Bannerfooter from "../../assets/hero-banner-footer.svg";

function Footer() {
    return (
        <div className="footer"  style={{ backgroundImage: Bannerfooter }}>
             <div className="footer__content">
                <div className="footer__items">
                    <h2>Links</h2>
                    <div className="footer__border"></div>
                    <ul className="footer__lists"> 
                        <li><a href="/"> Home</a></li>
                        <li><a href="/signup"> Sign-up</a></li>
                        <li><a href="/signin"> Sign-in</a></li>
                        <li><a href="/info">About us</a></li>
                    </ul>
                </div>

                <div className="footer__items">
                    <h2>Our Address</h2>
                    <div className="footer__border"></div>
                    <ul className="footer__lists">
                        <li><LocationOnIcon /> City-pincode, <br />State, India</li> <br />
                        <li><PhoneIcon /> +91123456789 (India)</li> <br />
                        <li><MailOutlineIcon /> email-address (here)</li> <br />
                    </ul>
                </div>
                </div>
                
                <div className="social-media__icons">
                    <a href="_/face"> <i className="fab" aria-hidden="true"><FacebookIcon style={{color: "#c7caca"}} /></i></a>
                    <a href="_/twitter"> <i className="fab" aria-hidden="true"><TwitterIcon style={{color: "#1DA1F2"}} /></i></a>
                    <a href="_/linked"> <i className="fab" aria-hidden="true"><LinkedInIcon style={{color: "#c7caca"}} /></i></a>
                    <a href="_/insta"> <i className="fab" aria-hidden="true"><InstagramIcon style={{color: "red"}} /></i></a>
                </div>
            
                <br></br>
                 <div className="footer__bottom">
                    Copyright &copy; Fund It! 2021. All rights reserved.
                </div>
            </div>
         )
      }

export default Footer

{/*  
                             <ul>
                            <li>
                            <a href="_"> <i className="fab" aria-hidden="true"><FacebookIcon /></i></a>
                            </li>
                            <li>
                            <a href="_"> <i className="fab" aria-hidden="true"><TwitterIcon /></i></a>  
                            </li>
                            <li>
                            <a href="_"> <i className="fab" aria-hidden="true"><LinkedInIcon /></i></a>  
                            </li>
                            <li>
                            <a href="_"> <i className="fab" aria-hidden="true"><InstagramIcon /></i></a> 
                            </li>
                        </ul>
 */}

