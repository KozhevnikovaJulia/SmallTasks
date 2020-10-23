import React, {useState} from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import UnControlledAccordion from "./UnControlledAccordion";

export default {
  title: 'UnControlledAccordion',
  component: UnControlledAccordion,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const UncontrolledAccordionChanged= () => <UnControlledAccordion titleValue={"Menu"} />





