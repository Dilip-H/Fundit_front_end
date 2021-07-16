import React from 'react';
import "./Info.css";
import banner_info from "../../assets/banner-info.png";
import Accordion from "../Accordion/Accordion2";

function Info() {
    return (
        <div className="info">
            <div className="bgimage" style={{backgroundImage: banner_info}}>
                <div className="info__contents">
                <Accordion />
                </div>
            </div>
        </div>
    )
}

export default Info
