import React, {useState} from "react";
import {RatingValueType} from "../UncontrolledRating/UnControlledRating";
import style from "./Rating.module.css";

export type RatingPropsType = {
  value: RatingValueType
  onClick: (value:RatingValueType)=>void
}

function Rating (props:RatingPropsType ) {
     return (
      <div>
      <Star selected={props.value >0} onClick={props.onClick} value={1}/>
      <Star selected={props.value >1} onClick={props.onClick} value={2}/>
      <Star selected={props.value >2} onClick={props.onClick} value={3}/>
      <Star selected={props.value >3} onClick={props.onClick} value={4}/>
      <Star selected={props.value >4} onClick={props.onClick} value={5}/>
      </div>
        );
  }


type StarPropsType = {
  selected:boolean
    value:RatingValueType
  onClick:(value:RatingValueType)=>void
}
/*function Star(props: StarPropsType) {
    return <span className="Star" onClick={() => {props.onClick(props.value)}}>
    {props.selected ? <b>Star</b> : "Star"}</span>
}*/
function Star(props: StarPropsType) {
    return <div className={props.selected ? style.Star : style.EmptyStar} onClick={() => {props.onClick(props.value)}}>
    </div>
}

/*function Star(props: StarPropsType) {
    return <div className={style.EmptyStar}> </div>
}*/

export default Rating;
