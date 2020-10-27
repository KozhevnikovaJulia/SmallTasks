import React, {useState} from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Rating, {RatingPropsType} from "./Rating";
import {RatingValueType} from "../UncontrolledRating/UncontrolledRating";

export default {
  title: 'Rating stories',
  component: Rating,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

export const EmptyRating = () => <Rating value={0} onClick= {x=>x}/>
export const Rating1 = () => <Rating value={1} onClick= {x=>x}/>
export const Rating2 = () => <Rating value={2} onClick= {x=>x}/>
export const Rating3 = () => <Rating value={3} onClick= {x=>x}/>
export const Rating4 = () => <Rating value={4} onClick= {x=>x}/>
export const Rating5 = () => <Rating value={5} onClick= {x=>x}/>
export const RatingChange = () => {
  const [ratinValue, setRatingValue] = useState<RatingValueType>(1)
  return <Rating value={ratinValue} onClick= {setRatingValue}/>
}





