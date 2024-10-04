import "../Calendar/Calendar.css";
import Calendar from 'react-calendar';
import React from 'react';
import 'react-calendar/dist/Calendar.css';

export default function CalendarUi({ date, onDateChange }) {
    return (
        <div className='calendar-ui-container'>
            <div>
                <Calendar
                    onChange={onDateChange}
                    value={date}
                />
            </div>
        </div>
    );
}