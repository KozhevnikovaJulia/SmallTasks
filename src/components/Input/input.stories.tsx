import React, {ChangeEvent, useRef, useState} from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';


export default {
  title: 'input',
 /* component: Accordion,*/
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const UncontrolledInput= () => <input />

export const TtackValueOfUncontrolledInput= () =>{
  const [value, setValue] = useState("")
  return <><input onChange={(e)=> { setValue(e.currentTarget.value )}} /> - {value}</>
}

export const GetValueUncontrolledInputByButtonPress = () => {
  const [value, setValue] = useState("")
  const inputValueRef = useRef<HTMLInputElement>(null)

  const save = ()=> {
    const el = inputValueRef.current as HTMLInputElement
    return setValue(el.value)
  }
  return  <><input ref={inputValueRef}/><button onClick={save}>save</button>- {value}</>
}

/*export const controlledInput = () => {
  const [value, setValue] = useState("")
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>)=>{setValue(e.currentTarget.value) }

  return <input value={value} onChange={onChangeInput}/>
}*/

export const ControlledCheckBox = () => {
  const [value, setValue] = useState(true)
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>)=>{setValue(e.currentTarget.checked) }

  return <input type= "checkBox" checked={value} onChange={onChangeInput}/>
}

/*
export const controlledSelect = () => {
  const [value, setValue] = useState("2")
  const onChangeSelect = (e: ChangeEvent<HTMLSelectElement>)=>{setValue(e.currentTarget.value)}

return <select value={value} onChange={onChangeSelect }>
  <option value="1">Moscow</option>
  <option value="2">London</option>
  <option value="3">Paris</option>
       </select>
}
*/
