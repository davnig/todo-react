import './App.css'
import {TodoTable} from "./TodoTable.tsx";
import {TodoCreationBar} from "./TodoCreationBar.tsx";

function App() {
    return (
        <>
            <h1>{"My ToDo list"}</h1>
            <TodoCreationBar/>
            <TodoTable todos={todos}></TodoTable>
        </>
    )
}

export default App

const todos: Todo[] = [
    {id: 1, done: true, text: "Todo #1"},
    {id: 2, done: false, text: "Todo #2"},
    {id: 3, done: true, text: "Todo #3"},
    {id: 4, done: false, text: "Todo #4"},
    {id: 5, done: false, text: "Todo #5"}
]

export interface Todo {
    id: number;
    done: boolean;
    text: string;
}
