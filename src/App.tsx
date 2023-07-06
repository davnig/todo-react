import './App.css'
import {TodoRow} from "./TodoRow.tsx";

function App() {
    return (
        <>
            {todo.map((todo) =>
                <TodoRow checked={todo.done}>{todo.text}</TodoRow>)}
        </>
    )
}

export default App

const todo = [
    {done: true, text: "Todo #1"},
    {done: false, text: "Todo #2"},
    {done: true, text: "Todo #3"},
    {done: false, text: "Todo #4"},
    {done: false, text: "Todo #5"}
]
