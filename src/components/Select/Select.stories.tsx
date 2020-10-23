import React, {useState} from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Select from "./Select";
import {action} from "@storybook/addon-actions";

export default {
  title: 'Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const ItemCallBack = action("Item was clicked ")

export const SelectWithValue = () => {
  let [value, setValue] = useState("2")
  return <div>
    <Select onChange={setValue} value={value}
            items={[{title: "Julia", value: "1"}, {title: "Serg", value: "2"}, {title: "Max", value: "3"}]}/>
  </div>
}

export const SelectWithoutValue = () => {
  let [value, setValue] = useState("2")
  return <div>
    <Select onChange={ItemCallBack}
            items={[{title: "Julia", value: "1"}, {title: "Serg", value: "2"}, {title: "Max", value: "3"}]}/>
  </div>
}



