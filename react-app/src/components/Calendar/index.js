import React, { useState } from 'react';
import DateMomentUtils from '@date-io/moment'; // choose your lib
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import "./Calender.css"

function Calendar() {
    const [selectedDate, handleDateChange] = useState(new Date());

    return (
        <div className="calender">
            <MuiPickersUtilsProvider utils={DateMomentUtils}>
                {/* <DatePicker value={selectedDate} onChange={handleDateChange} />
                <TimePicker value={selectedDate} onChange={handleDateChange} /> */}
                <DateTimePicker value={selectedDate} onChange={handleDateChange}  style={{color: "green"}}/>
            </MuiPickersUtilsProvider>
        </div>
    )
}

export default Calendar;