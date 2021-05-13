import React , {useState , useEffect} from 'react';
import { Link } from "react-router-dom";
import "./Nav2.css";
import logo from "../../assets/logo.svg";

function Nav2() {
    const [show, handleShow] = useState(false) 
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
              handleShow(true);
            } else handleShow(false);
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
        <div className={`nav2 ${show && "navbar__black"}`}>
            <header className="header__logo">
                <Link to="/">
                <img 
                src={logo} alt="logo"
                />
                </Link>
            </header>
        </div>
    )
}

export default Nav2;
