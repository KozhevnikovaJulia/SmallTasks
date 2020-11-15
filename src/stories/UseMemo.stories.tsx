import React, {useState, useMemo} from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import {action} from "@storybook/addon-actions";

export default {
  title: 'useMemo',
 
 
} as Meta;



const Counter = (props: {count:number}) => {
  return <div > {props.count} </div>
}

export const LikeUseCallBack = () => {
  let [counter, setCounter] = useState(0)
  let [books, setBooks] = useState (["JS", "React", "HTML"])

  const addBook = ()=> { 
    let newBooks = [...books, "Oppa"]
    setBooks(newBooks)
  }

  const memoizedAddBook = useMemo(() => {
    return addBook
  }, [books])

  return <div>
    <button onClick={()=> setCounter(counter+1)}>+</button>
    <Counter count={counter} />
    <Books books={books} addBook={memoizedAddBook} />
  </div>

}

const BooksSecret = (props: {books: Array<string>, addBook:()=> void}) => {
  return <div >
      <button onClick={()=> props.addBook()}>add Book</button>
  </div>
}
const Books = React.memo(BooksSecret)
