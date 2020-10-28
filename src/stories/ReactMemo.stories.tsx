import React, {useState} from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";

export default {
  title: 'reactMemo',
 
 
} as Meta;

const UsersSecret = (props: {users: Array<string>}) => {
  return <div >
    {props.users.map((u, i) => <div key={i}> {u} </div>)}
  </div>
}

const Counter = (props: {count:number}) => {
  return <div > {props.count} </div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
  let [counter, setCounter] = useState(0)
  let [users, setUsers] = useState (["Julia", "Serg", "Max"])

  const addUser = ()=> { 
    let newUsers = [...users, "Sveta"]
    setUsers(newUsers)
  }

  return <div>
    <button onClick={()=> setCounter(counter+1)}>+</button>
    <button onClick={addUser}>add User</button>
    <Counter count={counter} />
    <Users users={users} />
  </div>

}





