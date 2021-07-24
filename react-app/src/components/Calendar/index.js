import React, { useState } from 'react';
import DateMomentUtils from '@date-io/moment'; // choose your lib
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
// import DatePicker from 'react-date-picker';
// import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './Calender.css'

function Calendar({ reservation_datetime, setReservationDateTime }) {
    const [selectedDate, handleDateChange] = useState(null);

    return (
        <MuiPickersUtilsProvider utils={DateMomentUtils} onChange={setReservationDateTime} value={DateMomentUtils} date={DateMomentUtils}>
        {/* <DatePicker value={selectedDate} onChange={handleDateChange} />
        <TimePicker value={selectedDate} onChange={handleDateChange} /> */}
            <DateTimePicker date={DateMomentUtils} value={reservation_datetime} onChange={setReservationDateTime}  style={{color: "green"}}/>
    </MuiPickersUtilsProvider>
        // <DatePicker  selected={date} onSelect={setDate} onChange={setDate}></DatePicker>
    )
}

export default Calendar;