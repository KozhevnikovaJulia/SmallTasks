import React, {useState,  useEffect} from "react";

export function Clock (){
   let [time, setTime] = useState(new Date())

  useEffect(() => {
      const SetIntervalID = setInterval(()=>{
      setTime(new Date())}, 1000);
      return ()=>{
        clearInterval(SetIntervalID)
      }   
  }, [])

  // const stringTime = new Date().toLocaleTimeString()
  const stringTime = time.toLocaleTimeString()

  return <div>
    {/* {time.getHours()}
    :
    {time.getMinutes()}
    :
    {time.getSeconds()} */}

    {stringTime}
  </div>  
}