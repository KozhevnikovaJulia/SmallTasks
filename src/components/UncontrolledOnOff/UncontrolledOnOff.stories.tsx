import React, {useState} from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {UncontrolledOnOff} from "./UncontrolledOnOff_useState";

export default {
  title: 'UncontrolledOnOff',
  component: UncontrolledOnOff,
} as Meta;

export const OnOffChanged  = () => <UncontrolledOnOff  />





