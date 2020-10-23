import React, {useState} from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {UnControlledOnOff} from "./UnControlledOnOff_useState";

export default {
  title: 'UnControlledOnOff',
  component: UnControlledOnOff,
} as Meta;

export const OnOffChanged  = () => <UnControlledOnOff  />





