import React, {useState} from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {OnOff} from "./OnOff_useState";

export default {
  title: 'OnOff stories',
  component: OnOff,
} as Meta;

export const On = () => <OnOff onValue={true} onClick={()=>{}} />
export const Off = () => <OnOff onValue={false}  onClick= {()=>{}}/>
export const OnOffChange = () => {
  const [value, setValue] = useState<boolean>(true)
  return <OnOff onValue={value} onClick= {()=>{setValue(!value)}}/>
}





