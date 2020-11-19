import React, {useState,  useEffect} from "react";

export function Clock (){
   let [time, setTime] = useState(new Date())

  useEffect(() => {
      setInterval(()=>{
      setTime(new Date())}, 1000)   
  }, [])

  const stringTime = new Date().toLocaleTimeString()

  return <div>
    {stringTime}
  </div>  
}