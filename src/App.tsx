import './App.css'
import {TodoTable} from "./TodoTable.tsx";
import {TodoCreationBar} from "./TodoCreationBar.tsx";
import {useState} from "react";

function App() {
    const [todos, setTodos] = useState(defaultTodoList)
    const handleAddTodo = (todo: Todo) => {
        console.log("new todo to add: " + todo.text)
        const newTodos = [...todos, todo]
        setTodos(newTodos)
    }
    return (
        <>
            <h1>{"My ToDo list"}</h1>
            <TodoCreationBar onAdd={handleAddTodo}/>
            <TodoTable todos={todos}></TodoTable>
        </>
    )
}

export default App

export interface Todo {
    done: boolean;
    text: string;
}

const defaultTodoList: Todo[] = [
    {done: true, text: "Todo #1"},
    {done: false, text: "Todo #2"},
    {done: true, text: "Todo #3"},
    {done: false, text: "Todo #4"},
    {done: false, text: "Todo #5"}
]
