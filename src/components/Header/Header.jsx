import "../Header/Header.css";
import React, { useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import AzeFlag from "../../assets/Header/azerbaijan.png";
import BritainFlag from "../../assets/Header/english.png";
import RussianFlag from "../../assets/Header/russia-flag.png";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import HeaderMyWorkIcon from "../../assets/Header/header-my-work-icon.svg";
import HeaderProfileIcon from "../../assets/Header/header-profile-icon.svg";
import HeaderServicesIcon from "../../assets/Header/header-services-icon.svg";

export default function Header() {
    const [currentLang, setCurrentLang] = useState("En");
    const [currentFlag, setCurrentFlag] = useState(BritainFlag);
    const [langChange, setLangChange] = useState(false);
    const flags = [AzeFlag, RussianFlag, BritainFlag];
    const handleLangAz = () => {
        setCurrentLang("Az");
        setCurrentFlag(AzeFlag);
    }
    const handleLangEn = () => {
        setCurrentLang("En");
        setCurrentFlag(BritainFlag);
    }
    const handleLangRu = () => {
        setCurrentLang("Ru");
        setCurrentFlag(RussianFlag);
    }
    const handleOpenLang = () => {
        setLangChange(!langChange);
    }
    const availableLang = ["Русский язык", "Azərbaycan dili"];
    return (
        <header>
            <nav>
                <div className='nav-pages'>
                    <div className='header-about-me'>
                        <img src={HeaderProfileIcon} alt="about" />
                        About Me
                    </div>
                    <div className='header-my-work'>
                        <img src={HeaderMyWorkIcon} alt="my-work" />
                        My Work
                    </div>
                    <div className='header-services'>
                        <img src={HeaderServicesIcon} alt="services" />
                        Services
                    </div>
                </div>
                <div className='nav-additional'>
                    <div className='header-download-cv'>
                        <a href="#">
                            <DownloadIcon style={{ color: "#fff", marginRight: 10 }} />
                            Download CV
                        </a>
                    </div>
                    <div className='header-languages'>
                        <div onClick={handleOpenLang} className='current-lang' style={{ display: "flex", alignItems: "center", width: "120px", padding: "14px" }}>
                            <img src={currentFlag} alt="flag" style={{ width: 35, height: 35, marginRight: 20 }} />
                            <p style={{ fontSize: 20 }}>{currentLang}</p>
                            <ArrowDropDownIcon style={{ color: "#fff" }} />
                        </div>
                        {langChange ?
                            <div className="lang-choice" onClick={handleOpenLang}>
                                {currentLang === "En" ? null :
                                    <div onClick={handleLangEn} className="lang-en" style={{ display: "flex", alignItems: "center", width: 170, cursor: "pointer", marginBlock: 10 }}>
                                        <img src={flags[2]} alt="flag" style={{ width: 35, height: 35, marginRight: 20 }} />
                                        <p style={{ cursor: "pointer", fontSize: 17 }}>English</p>
                                    </div>}
                                {currentLang === "Az" ? null :
                                    <div onClick={handleLangAz} className="lang-az" style={{ display: "flex", alignItems: "center", width: 170, cursor: "pointer", marginBlock: 10 }}>
                                        <img src={flags[0]} alt="flag" style={{ width: 35, height: 35, marginRight: 20 }} />
                                        <p style={{ cursor: "pointer", fontSize: 17 }}>Azərbaycan dili</p>
                                    </div>}
                                {currentLang === "Ru" ? null :
                                    <div onClick={handleLangRu} className="lang-ru" style={{ display: "flex", alignItems: "center", width: 170, cursor: "pointer", marginBlock: 10 }}>
                                        <img src={flags[1]} alt="flag" style={{ width: 35, height: 35, marginRight: 20 }} />
                                        <p style={{ cursor: "pointer", fontSize: 17 }}>Русский язык</p>
                                    </div>}
                            </div> : null}
                    </div>
                </div>
            </nav>
        </header>
    )
}
