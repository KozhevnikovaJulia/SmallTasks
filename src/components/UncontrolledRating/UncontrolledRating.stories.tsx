import React, {useState} from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import UncontrolledRating from "./UncontrolledRating";

export default {
  title: 'UnControlledRating',
  component: UncontrolledRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const UncontrolledRatingChanged = () => <UncontrolledRating />




