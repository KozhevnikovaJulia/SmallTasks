import React, {useState} from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import UnControlledRating from "../UncontrolledRating/UnControlledRating";

export default {
  title: 'UnControlledRating',
  component: UnControlledRating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const UnControlledRatingChanged = () => <UnControlledRating />




