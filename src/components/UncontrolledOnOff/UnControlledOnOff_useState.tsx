import React, {useState} from "react";


 type onOffPropsType  = {

}

export function UncontrolledOnOff (props:onOffPropsType ) {
    let [on,setOn] = useState(false)
    const onStyle = {
        width:"30px",
        height:"20px",
        padding: "2px",
        border:"1px solid black",
        display:"inline-block",
        backgroundColor:on ? "green":"white"
    }
    const offStyle = {
        width:"30px",
        height:"20px",
        border:"1px solid black",
        display:"inline-block",
        backgroundColor:on ? "white":"red",
        marginLeft: "2px",
        padding: "2px"
    }
    const indicatorStyle = {
        width:"10px",
        height:"10px",
        borderRadius:"5px",
        border:"1px solid black",
        display:"inline-block",
        backgroundColor:on ? "green":"red",
        padding: "2px"
    }
  return (
      <div>
<div style={onStyle} onClick={ () => {setOn(true)}}>On</div>
<div style={offStyle} onClick={() => {setOn(false)}}>Off</div>
<div style={indicatorStyle}></div>
      </div>
        );
  } 
