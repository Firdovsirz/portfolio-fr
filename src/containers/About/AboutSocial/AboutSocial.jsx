import { useEffect } from 'react';
import React, { useState } from 'react';
import "../AboutSocial/AboutSocial.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FaceSnd from "../../../assets/About/face-about-snd.svg";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import StarIcon from "../../../assets/About/about-project-star.svg";

export default function AboutSocial() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const intervalTime = 5000 / 20; // Total time divided by total increments (5 seconds / 20 steps)

        const interval = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount < 20) {
                    return prevCount + 1;
                } else {
                    clearInterval(interval);
                    return prevCount;
                }
            });
        }, intervalTime);

        return () => clearInterval(interval); // Clean up on component unmount
    }, []);
    return (
        <div className='about-social'>
            <div className='about-social-projects'>
                <div className='about-completed-projects'>
                    <div className='about-comp-pro-number'>
                        <p>
                            {count}
                            <span> +</span>
                        </p>
                    </div>
                    <div className='about-comp-pro-txt'>
                        <img src={StarIcon} alt="star" />
                        <p>Completed Tasks</p>
                    </div>
                </div>
                <div className='about-social-pro-secondary'>
                    <div className='about-pro-snd-number'>
                        <p>
                            {count}
                            <span> +</span>
                        </p>
                    </div>
                    <div className='about-pro-snd-txt'>
                        <img src={FaceSnd} alt="face-emoji" />
                        <p>Completed Tasks</p>
                    </div>
                </div>
            </div>
            <div className='about-social-medias'>
                <div className='about-social-linkedin'>
                    <div className='about-social-icon-container'>
                        <LinkedInIcon style={{ color: "#fff" }} className='about-social-icon' />
                    </div>
                    <p>Firdovsi Rzaev</p>
                    <div className='about-social-arrow-container'>
                        <a href="#">
                            <ArrowOutwardIcon style={{ color: "#fff" }} className='about-social-arrow' />
                        </a>
                    </div>
                </div>
                <div className='about-social-github'>
                    <div className='about-social-icon-container'>
                        <GitHubIcon style={{ color: "#fff" }} className='about-social-icon' />
                    </div>
                    <p>Firdovsirz</p>
                    <div className='about-social-arrow-container'>
                        <a href="#">
                            <ArrowOutwardIcon style={{ color: "#fff" }} className='about-social-arrow' />
                        </a>
                    </div>
                </div>
                <div className='about-social-instagram'>
                    <div className='about-social-icon-container'>
                        <InstagramIcon style={{ color: "#fff" }} className='about-social-icon' />
                    </div>
                    <p>firdovsirz</p>
                    <div className='about-social-arrow-container'>
                        <a href="#">
                            <ArrowOutwardIcon style={{ color: "#fff" }} className='about-social-arrow' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
