import React, {useState} from "react";


 type onOffPropsType  = {
    onClick:()=> void
     onValue:boolean

}

export function OnOff (props:onOffPropsType ) {

    const onStyle = {
        width:"30px",
        height:"20px",
        padding: "2px",
        border:"1px solid black",
        display:"inline-block",
        backgroundColor:props.onValue ? "green":"white"
    }
    const offStyle = {
        width:"30px",
        height:"20px",
        border:"1px solid black",
        display:"inline-block",
        backgroundColor:props.onValue ? "white":"red",
        marginLeft: "2px",
        padding: "2px"
    }
    const indicatorStyle = {
        width:"10px",
        height:"10px",
        borderRadius:"5px",
        border:"1px solid black",
        display:"inline-block",
        backgroundColor:props.onValue ? "green":"red",
        padding: "2px"
    }
  return (
      <div>
<div style={onStyle} onClick={ () => {props.onClick()}}>On</div>
<div style={offStyle} onClick={() => {props.onClick()}}>Off</div>
<div style={indicatorStyle}></div>
      </div>
        );
  } 
