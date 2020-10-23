import React, {useState} from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Accordion from "./Accordion";

export default {
  title: 'Accordion',
  component: Accordion,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const AccordionCollapsed = () => <Accordion titleValue={"Menu"} collapsed={true} onClick= {x=>x}/>
export const AccordionUncollapsed = () => <Accordion titleValue={"Songs"} collapsed={false} onClick= {x=>x}/>
export const AccordionChanged = () => {
  const [value, setValue] = useState<boolean>(true)
  return <Accordion titleValue={"Menu"} collapsed={value} onClick= {setValue}/>
}





