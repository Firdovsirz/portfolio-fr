import React, { useState } from 'react';
import "../AboutAwards/AboutAwards.css";
import LanguageIcon from "../../../assets/About/language-icon.svg";
import AwardsIcon from "../../../assets/About/about-awards-icon.svg";
import EducationIcon from "../../../assets/About/about-education-icon.svg";

export default function AboutAwards() {
    const [currentAward, setCurrentAward] = useState("");
    return (
        <div className='about-awards'>
            <div className='about-education'>
                <div className='about-education-heading'>
                    <img src={EducationIcon} alt="education" />
                    <p>Education</p>
                </div>
                <div className='about-education-desc'>
                    <h4>Computer Science</h4>
                    <h5>Azerbaijan Techncical University</h5>
                    <p>2023 - 2027</p>
                </div>
            </div>
            <div className='about-awards-container'>
                <div className='about-awards-heading'>
                    <img src={AwardsIcon} alt="awards" />
                    <p>Awards</p>
                </div>
                <div className='about-awards-desc'>
                </div>
                <div className='about-award-dots'>
                    <div className='award-dot' />
                    <div className='award-dot' />
                    <div className='award-dot' />
                </div>
            </div>
            <div className='about-language-container'>
                <div className='about-languages'>
                    <div className='about-languages-heading'>
                        <img src={LanguageIcon} alt="language" />
                        <p>Languages</p>
                    </div>
                    <div className='about-language-desc'>
                        <div>English - C1</div>
                        <div>Azerbaijani - Native</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
