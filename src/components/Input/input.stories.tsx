import React, {ChangeEvent, useRef, useState} from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

export default {
  title: 'input',
  //component: ,
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

export const controlledInput = () => {
  const [value, setValue] = useState("")
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>)=>{setValue(e.currentTarget.value) }

  return <input value={value} onChange={onChangeInput}/>
}

export const controlledCheckBox = () => {
  const [value, setValue] = useState(true)
  const onChangeInput = (e: ChangeEvent<HTMLInputElement>)=>{setValue(e.currentTarget.checked) }

  return <input type= "checkBox" checked={true} onChange={onChangeInput}/>
}

export const controlledSelect = () => {

}
