import React, { useState } from 'react';
// import DateMomentUtils from '@date-io/moment'; // choose your lib
// import {
//     DatePicker,
//     TimePicker,
//     DateTimePicker,
//     MuiPickersUtilsProvider,
// } from '@material-ui/pickers';
// import DatePicker from 'react-date-picker';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function Calendar({ date, setDate }) {
    const [selectedDate, handleDateChange] = useState(null);

    return (
    // <MuiPickersUtilsProvider utils={DateMomentUtils} onChange={setDate} value={date}>
    //     {/* <DatePicker value={selectedDate} onChange={handleDateChange} />
    //     <TimePicker value={selectedDate} onChange={handleDateChange} /> */}
    //     <DateTimePicker value={selectedDate} onChange={handleDateChange}  style={{color: "green"}}/>
    // </MuiPickersUtilsProvider>
        <DatePicker onChange={setDate => handleDateChange(setDate)} selected={selectedDate}></DatePicker>
    )
}

export default Calendar;