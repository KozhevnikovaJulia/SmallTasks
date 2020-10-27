import React, {useReducer, useState} from "react";

type UncontrolledAccordionProps = {
    titleValue: string
    }
type ActionType = {
    type: string
}
type StateType = {
    collapsed: boolean
}
// Функция reducer, в которой state- объект // черех switch, case
const reducer = (state: StateType, action: ActionType):StateType => {
    switch (action.type ) {
        case "TOGGLE-COLLAPSED":
            let stateCopy = {...state}
            stateCopy.collapsed = !stateCopy.collapsed
             return stateCopy
               
        default: throw new Error ("Bad action type")
       }
    return state
}

// Функция reducer, в которой state- объект // черех if, else
// const reducer = (state: StateType, action: ActionType):StateType => { 
//     if (action.type === "TOGGLE-COLLAPSED") {
       
//         let stateCopy = {...state}
//         stateCopy.collapsed = !stateCopy.collapsed
//          return stateCopy
//     }
//     return state
// }

// Функция reducer, в которой state- примитив
// const reducer = (state: boolean, action: ActionType) => {
//     if (action.type === "TOGGLE-COLLAPSED") {
//         return !state
//     }
//     return state
// }

function UncontrolledAccordion_useReducer (props: UncontrolledAccordionProps) {
    let [state, dispatch] = useReducer (reducer, {collapsed: false})
    // let [collapsed, dispatch] = useReducer (reducer, false)
    return (
        <div>
             <AccordionTitle title={props.titleValue} onClick={()=> {dispatch({type:"TOGGLE-COLLAPSED" })}}/>
             {/* <AccordionTitle title={props.titleValue} setCollapsed={()=>{dispatch({type:"TOGGLE-COLLAPSED" })}}/> */}
            {!state.collapsed && <AccordionBody />}
        </div>
);
}

type AccordionTitlePropsType = {
    title: string
    onClick:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return <div onClick={()=>{props.onClick()}}>{props.title}</div>
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
}

export default UncontrolledAccordion_useReducer;
