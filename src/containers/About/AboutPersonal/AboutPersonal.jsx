import React from 'react';
import "../AboutPersonal/AboutPersonal.css";
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function () {
    return (
        <div className='about-personal'>
            <div className='about-personal-info'>
                <div className='about-personal-info-img'>
                    {/* maybe will add a img */}
                    <div className='info-img-bg'></div>
                </div>
                <div className='about-personal-details'>
                    <div className='about-personal-available'>
                        <div className='available-breath-animation'>
                            <span></span>
                        </div>
                        <p>Available For Work</p>
                    </div>
                    <div className='about-personal-det'>
                        <h2 style={{ color: "var(--token-19f1c53e-7c09-41fa-b538-c02cd6e8e6d5, rgb(230, 230, 230))", marginBlock: 15 }}>Firdovsi Rzaev</h2>
                        <ul>
                            <li>
                                <a href="#">
                                    <MailIcon style={{ color: "#999999", marginRight: 20 }} />
                                    firdovsirz@gmail.com
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <LocationOnIcon style={{ color: "#999999", marginRight: 20 }} />
                                    Baku, Azerbaijan
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='about-personal-txt'>
                <h2>About Me</h2>
                <p>
                    Experienced Front-end developer,
                    creating interactive user expriences,
                    with a keen eye for design and deep
                    understanding of web technologies.
                </p>
            </div>
        </div>
    )
}
