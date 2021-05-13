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
        <div className={`navbar ${show && "navbar__transition"}`}>
            <header className="header__logo">
                <Link to="/">
                <img 
                src={logo} alt="logo"
                />
                </Link>
              
                <div className="nav__right">
                <Link to="/signin">
                <button className="btn__sign">SIGN IN</button>
                </Link>    
                </div>
            </header>
        </div>
    )
}

export default Nav
