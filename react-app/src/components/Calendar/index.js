import React from 'react';
import DateMomentUtils from '@date-io/moment'; // choose your lib
import {
    DateTimePicker, MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import 'react-datepicker/dist/react-datepicker.css'
import './Calender.css'

function Calendar({ reservation_datetime, setReservationDateTime }) {
    return (
        <MuiPickersUtilsProvider utils={DateMomentUtils}
            onChange={setReservationDateTime}
            value={DateMomentUtils}
            date={DateMomentUtils}>
            <DateTimePicker id='calender'
                date={DateMomentUtils}
                value={reservation_datetime}
                onChange={setReservationDateTime}
                style={{ color: "green" }} />
        </MuiPickersUtilsProvider>
    )
}

export default Calendar;
