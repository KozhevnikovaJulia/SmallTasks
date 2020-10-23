import React, {useState} from "react";

type UncontrolledAccordionProps = {
    titleValue: string
}

function UnControlledAccordion(props: UncontrolledAccordionProps) {
    let [collapsed, setCollapsed] =useState(false)
    return (
        <div>
            <AccordionTitle title={props.titleValue} setCollapsed={()=>{setCollapsed(!collapsed)}}/>
            {collapsed && <AccordionBody />}
        </div>
);
}

type AccordionTitlePropsType = {
    title: string
    setCollapsed:()=>void
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return <div onClick={()=>{props.setCollapsed()}}>{props.title}</div>
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

export default UnControlledAccordion;
