import React, {useState} from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Accordion from "./Accordion";
import {action} from "@storybook/addon-actions";

export default {
  title: 'Accordion',
  component: Accordion,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const ItemCallBack = action("Item was clicked ")

export const AccordionCollapsed = () => <Accordion onClickItem={ItemCallBack } items={[{title:"Julia", value:1}, {title:"Serg", value:2}, {title: "Max", value:3}]}titleValue={"Menu"} collapsed={true} onClick= {x=>x}/>
export const AccordionUncollapsed = () => <Accordion onClickItem={ItemCallBack } items={[{title:"Julia", value:1}, {title:"Serg", value:2}, {title: "Max", value:3}]} titleValue={"Songs"} collapsed={false} onClick= {x=>x}/>
export const AccordionChanged = () => {
  const [value, setValue] = useState<boolean>(true)
  return <Accordion onClickItem={(id)=> {alert(`Users with id ${id} should be happy`)}} items={[{title:"Julia", value:1}, {title:"Serg", value:2}, {title: "Max", value:3}]}titleValue={"Users"} collapsed={value} onClick= {setValue}/>
}





