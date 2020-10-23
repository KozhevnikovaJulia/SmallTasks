import React, {useDebugValue} from "react";


type AccordionPropsType ={
  titleValue:string
  collapsed:boolean
    onClick:(collapsed:boolean)=>void
  items: ItemsType[]
  onClickItem:(value:any)=>void
}

function Accordion (props:AccordionPropsType) {
  return (
      <div>
        <AccordionTitle title={props.titleValue} onClick={()=>{props.onClick(!props.collapsed)}}/>
        {props.collapsed && <AccordionBody onClickItem={props.onClickItem} items={[{title:"Julia", value:1}, {title:"Serg", value:2}, {title: "Max", value:3}]}/>}
      </div>
      );
}

type AccordionTitlePropsType ={
  title:string
    onClick:()=>void
}

function AccordionTitle (props: AccordionTitlePropsType){
return <div onClick={()=>{props.onClick()}}>{props.title}</div>
}

type ItemsType={
  title:string
  value:any
}
type AccordionBodyPropsType ={
items: ItemsType[]
  onClickItem: (value:any)=> void
}


function AccordionBody (props:AccordionBodyPropsType ){
  return (
  <div>
    <ul>
      {props.items.map((i, index)=> <li key={index} onClick={()=>{props.onClickItem(i.value)}}>{i.title}</li>)   }
    </ul>
  </div>
  );
}

export default Accordion;
