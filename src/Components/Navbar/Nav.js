import React , {useState , useEffect} from 'react';
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../../assets/logo.svg";

function Nav() {
    const [show, handleShow] = useState(false) 
    
    useEffect(() => {
      window.addEventListener("scroll", () => {
          if (window.scrollY > 100) { 
              handleShow(true);
          }else{
              handleShow(false);
          }
      });
      return () => {
          window.removeEventListener('scroll', () => {
              if (window.scrollY < 100) {
                handleShow(false);
              } else handleShow(true);
          });
        };
      });

    return (
        <div className={`navbar__container ${show && "navbar__transition"}`}>
                <div className="navbar__content">
                    <div className="navbar__logo">
                        <a href="/" ><img src={logo} alt=""/></a>
                    </div>

                    <div className="navbar__signin">
                        <Link to="/signin">
                            <button className="btn__navbar">SIGN IN</button> 
                        </Link>
                    </div>
                </div>
            </div>
    )
}

export default Nav
