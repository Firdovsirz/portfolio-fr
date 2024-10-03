import React from 'react';
import "../AboutWorkExperience/AboutWorkExp.css";
import WorkIcon from "../../../assets/About/work-icon.svg";

export default function AboutWorkExp() {
    return (
        <div className='about-work-experience-container'>
            <div className='work-exp-heading'>
                <img src={WorkIcon} alt="work" />
                <p>Work Experience</p>
            </div>
            <div className='work-exp-desc'>
                <div className='work-exp-job-desc'>
                    <div className='job-desc-head'>
                        <h4>Front-End Developer</h4>
                        <p className='job-desc-date'>
                            Aug 2024 <span>To</span> Present
                        </p>
                    </div>
                    <p className='job-desc-txt'>
                        Developing a website for a startup
                    </p>
                </div>
                <div className='work-exp-desc-line'>
                    <div className='line' />
                    <div className='line-dot'>
                        <div className='line-dot-small' />
                    </div>
                </div>
                <div className='work-exp-comp-name'>
                    <h4>Front-End Developer</h4>
                    <p>ixtisasinfo.az</p>
                </div>
            </div>
        </div>
    )
}
