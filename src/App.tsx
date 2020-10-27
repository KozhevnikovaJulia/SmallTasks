import React, {useState} from "react";
import Rating from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import {OnOff} from "./components/OnOff/OnOff_useState";
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import UncontrolledRating, {RatingValueType} from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff_useState";
import "./App.css";
import { ControlledCheckBox } from "./components/Input/input.stories";
import UncontrolledAccordion_useReducer  from "./components/UncontrolledAccordion_useReducer/UncontrolledAccordion_useReducer"


function App() {
    const onClickItem = ()=>{}
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setaccordionCollapsed] = useState<boolean>(true)
    let [on,setOn] = useState<boolean>(false)
  return (
      <div className="App">
          {/* <Accordion onClickItem={onClickItem} titleValue={"Users"} collapsed={accordionCollapsed} onClick={setaccordionCollapsed} items={[{title:"Julia", value:1}, {title:"Serg", value:2}, {title: "Max", value:3}]}/>
          <Rating value={ratingValue} onClick= {setRatingValue}/>
          <OnOff onValue={on} onClick={()=>{setOn(!on)}}/>
          <UncontrolledOnOff />
          <UncontrolledAccordion titleValue={"Menu"}/>
          <UncontrolledAccordion titleValue={"Users"}/>
          <UncontrolledRating />
          <ControlledCheckBox /> */}
          < UncontrolledAccordion_useReducer titleValue={"Users"} />
      </div>

  );
}


export default App;
