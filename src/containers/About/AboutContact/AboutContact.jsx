import React from 'react';
import "../AboutContact/AboutContact.css";
import CursorIcon from "../../../assets/About/contact-cursor.svg"
import EmailIcon from "../../../assets/About/about-email.svg"
import ContactIcon from "../../../assets/About/about-contact.svg";
import CalendarIcon from "../../../assets/About/about-calendar.svg";

export default function AboutContact() {
    return (
        <div className='about-contact'>
            <div className='about-contact-main'>
                <img src={ContactIcon} alt="contact" />
                <div className='cursor'>
                    <img src={CursorIcon} alt="cursor" />
                    <div className='contact-txt'>
                        Contact Me
                    </div>
                </div>
            </div>
            <div className='about-contact-schedule'>
                <div className='about-call-sch'>
                    <img src={CalendarIcon} alt="calendar" />
                    <p>Schedule Call</p>
                </div>
                <div className='about-email-me'>
                    <img src={EmailIcon} alt="email" />
                    <p>Email Me</p>
                </div>
            </div>
        </div>
    )
}
