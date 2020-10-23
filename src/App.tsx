import React, {useState} from "react";
import Rating from './components/Rating/Rating';
import Accordion from './components/Accordion/Accordion';
import {OnOff} from "./components/OnOff/OnOff_useState";
import UnControlledAccordion from './components/UncontrolledAccordion/UnControlledAccordion';
import UnControlledRating, {RatingValueType} from "./components/UncontrolledRating/UnControlledRating";
import {UnControlledOnOff} from "./components/UncontrolledOnOff/UnControlledOnOff_useState";
import "./App.css";
import { ControlledCheckBox } from "./components/Input/input.stories";



function App() {
    const onClickItem = ()=>{}
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setaccordionCollapsed] = useState<boolean>(true)
    let [on,setOn] = useState<boolean>(false)
  return (
      <div className="App">
          <Accordion onClickItem={onClickItem} titleValue={"Users"} collapsed={accordionCollapsed} onClick={setaccordionCollapsed} items={[{title:"Julia", value:1}, {title:"Serg", value:2}, {title: "Max", value:3}]}/>
          <Rating value={ratingValue} onClick= {setRatingValue}/>
          <OnOff onValue={on} onClick={()=>{setOn(!on)}}/>
          <UnControlledOnOff />
          <UnControlledAccordion titleValue={"Menu"}/>
          <UnControlledAccordion titleValue={"Users"}/>
          <UnControlledRating />
          <ControlledCheckBox />

      </div>

  );
}


export default App;
