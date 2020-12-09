import React, {useState,  useEffect} from "react";
import {AnalogClock} from "./AnalogClock";

export function Clock (props: {mode: "analog" | "digital"}){
   let [time, setTime] = useState(new Date())

  useEffect(() => {
      const SetIntervalID = setInterval(()=>{
      setTime(new Date())}, 1000);
      return ()=>{
        clearInterval(SetIntervalID)
      }   
  }, [])

  let view

  switch(props.mode) {
    case 'analog':  
    if (props.mode === 'analog')
     view = <AnalogClock date={new Date()}/>
    break
  
    case 'digital': 
    default:
     if (props.mode === 'digital')
      // view = {stringTime}        
      view = time.toLocaleTimeString()
  }

  return <div> {view}</div>  
}