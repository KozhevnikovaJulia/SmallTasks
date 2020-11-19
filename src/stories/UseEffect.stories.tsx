import React, {useState,  useEffect} from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";

export default {
  title: 'useEffect', 
} as Meta;

export const Counter = () => {
  console.log("Counter")
  let [counter, setCounter] = useState(1)

  useEffect(() => {
    console.log("UseEffect")
    document.title = counter.toString()
  }, [])

  return <div>
    <button onClick={()=> setCounter(counter+1)}>+</button>
    {counter}  
  </div>
}

export const CounterSetTimeout= () => {
  console.log("CounterSetTimeout")
  let [counter, setCounter] = useState(1)

  useEffect(() => {
    console.log("UseEffect")
    setTimeout(()=>{
      console.log("SetTimeout")
      document.title = counter.toString()},1000)
  }, [counter])

  return <div>
    <button onClick={()=> setCounter(counter+1)}>+</button>
    {counter}  
  </div>
}

export const CounterSetInterval= () => {
  console.log("CounterSetInterval")
  let [counter, setCounter] = useState(1)

  useEffect(() => {
    console.log("UseEffect")
    setInterval(()=>{
      setCounter ((state)=>state+1) //(counter+1) - не подойдет. В setCounter нужно передавать не конкретное значение, тк setInterval
                             //все время будет брать егоБ а функцию, которая будет возвращать нужное значение
    }, 1000)    
  }, [])

  return <div>
   Counter:  {counter}  
  </div>
}