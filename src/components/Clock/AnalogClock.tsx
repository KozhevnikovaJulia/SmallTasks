import React from "react";
import s from "./AnalogClock.module.css"


export function AnalogClock(props:{date: any}) {
  const secondsStyle = {
    transform: `rotate(${props.date.getSeconds() * 6}deg)`
  };
  const minutesStyle = {
    transform: `rotate(${props.date.getMinutes() * 6}deg)`
  };
  const hoursStyle = {
    transform: `rotate(${props.date.getHours() * 30}deg)`
  };
  return <div className={s.clock}>
    <div className={s.analogClock}>
      <div className={s.dialSeconds} style={secondsStyle}/>
      <div className={s.dialMinutes} style={minutesStyle}/>
      <div className={s.dialHours} style={hoursStyle}/>
    </div>
  </div>
  
}

