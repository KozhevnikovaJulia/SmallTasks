import React, {useState, useMemo} from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";

export default {
  title: 'useState', 
} as Meta;

//с помощью useMemo 1 вариант
function generatData () {
  console.log("generateData")
  return 12345678
}
let initValue = useMemo(generatData, [])
export const Counter = () => {
  console.log(Counter)
  let [counter, setCounter] = useState(initValue)

  return <div>
    <button onClick={()=> setCounter(counter+1)}>+</button>
    {counter}  
  </div>
}

//с помощью useState 2 вариант. В инициализационное значение передаем не конкретное значение,
//а функцию которая его возвращает 
function generatData2 () {
  console.log("generateData2")
  return 12345678
}
export const Counter2 = () => {
  console.log(Counter2)
  let [counter, setCounter] = useState(generatData2)

  return <div>
    <button onClick={()=> setCounter(counter+1)}>+</button>
    {counter}  
  </div>
}

// 3 вариант. В setCounter мы также можем засунуть не конкрктное значение,а функцию которая его возвращает 
function generatData3 () {
  console.log("generateData2")
  return 12345678
}
export const Counter3 = () => {
  console.log(Counter3)
  let [counter, setCounter] = useState(generatData3)

  let changer = (state: number)=> state+1

  return <div>
    <button onClick={()=> setCounter(changer)}>+</button>
    {counter}  
  </div>
}