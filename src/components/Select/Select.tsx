import React, {useState} from "react";
import s from "./Select.module.css";

type ItemsType={
    title:string
    value:any
}
type SelectPropsType ={
value?: any
onChange:(value:any)=>void
items: ItemsType[]
}

function Select (props:SelectPropsType) {
    let [active, setActive] = useState(true)
    const selectItem = props.items.find(i=>i.value===props.value)
    const toggleItems = ()=> { setActive(!active)}
    const OnItemsClick = (value:any)=>{props.onChange(value);
        toggleItems() }
  return (
      <div>

          <span onClick = {toggleItems} className={s.select}>{selectItem && selectItem.title}</span>

          { active &&
          <div className={s.items} >
              <ul>
                  {props.items.map((i, index)=> <li onClick = {()=> {OnItemsClick(i.value) }} key={index}>{i.title}</li>)   }
              </ul>
          </div>}
         </div>
      );
}

export default Select;
