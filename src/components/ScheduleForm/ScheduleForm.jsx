import React from 'react';
import dayjs from "dayjs";
import "../ScheduleForm/ScheduleForm.css";
import CalendarIcon from "../../assets/About/about-calendar.svg";

export default function ScheduleForm() {
    const currentDate = dayjs().format('DD/MM/YYYY');
    return (
        <div className='schedule-form'>
            <div className='sch-form-container'>
                <form action="">
                    <div className='name-input'>
                        <input type="text" required />
                        <label htmlFor="name" className='name-placeholder placeholder'>Name</label>
                    </div>
                    <div className='lastname-input'>
                        <input type="text" required />
                        <label htmlFor="lastname" className='lastname-placeholder placeholder'>Last Name</label>
                    </div>
                    <div className='email-input'>
                        <input type="email" required />
                        <label htmlFor="email" className='email-placeholder placeholder'>Email</label>
                    </div>
                    <div className='phone-input'>
                        <input type="phone" required />
                        <label htmlFor="phone" className='phone-placeholder placeholder'>Phone Number</label>
                    </div>
                    <div className='calendar-container'>
                        <div>
                            <input type="text" value={currentDate}/>
                            <img src={CalendarIcon} alt="calendar" style={{ cursor: "pointer" }} />
                        </div>
                    </div>
                    <button className='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}
