import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function CalendarUi() {
    const [date, setDate] = useState(new Date());
    const handleDateChange = (newDate) => {
        setDate(newDate);
    };
    return (
        <div className='calendar-ui-container'>
            <div>
                <h1>React Calendar</h1>
                <Calendar
                    onChange={handleDateChange}
                    value={date}
                />
                <p>Selected Date: {date.toDateString()}</p>
            </div>
        </div>
    )
}
