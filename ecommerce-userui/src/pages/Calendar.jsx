import React from 'react'
import { useState } from 'react';
import Calendar_ from 'react-calendar'; 
import TimePicker from 'react-time-picker';
const Calendar = () => {
  const [date, setDate] = useState(new Date())
  const presentDate = new Date();
  const [time, setTime] = useState('10:00');

  const onDateChange = (newDate) => {
    if (newDate < presentDate) {
      console.log("The date cannot be in the past");
    }
    else {
      setDate(newDate);
    console.log(newDate);
    }
}
  const schedule = [{
    sessionName: "Mental Therapy Session",
    scheduledDate: date,
    scheduledTime: time,
  }];

  return (
    <>
    <div>
        <Calendar_ onChange={onDateChange}
        value={date} />
        <TimePicker onChange={setTime} value={time} amPmAriaLabel={"Select AM/PM"}/>
    </div>
    <div> {date.toDateString()} + {time.toString()}</div>
    <div>{schedule.map((e)=>(<div>{e.sessionName + e.scheduledDate.toDateString() + e.scheduledTime.toString()}</div>))}</div>
    </>
  )
}

export default Calendar