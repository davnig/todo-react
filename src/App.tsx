import './App.css'
import {TodoTable} from "./TodoTable.tsx";
import {TodoCreationBar} from "./TodoCreationBar.tsx";
import {useState} from "react";
import {Footer} from "./Footer.tsx";

export interface Todo {
    done: boolean;
    text: string;
}

const defaultTodoList: Todo[] = [
    {done: true, text: "Buy groceries"},
    {done: false, text: "Go pick up Joe"},
    {done: true, text: "Bring the keys to Alice"}
]

export function App() {
    const [todos, setTodos] = useState(defaultTodoList)
    return (
        <div className="flex flex-col items-center h-screen">
            <div className="grow flex flex-col items-center">
                <h1 className="text-4xl font-bold mt-5 mb-10">{"My ToDo list"}</h1>
                <TodoCreationBar onAdd={setTodos}/>
                <TodoTable todos={todos} onChange={setTodos}/>
            </div>
            <Footer/>
        </div>
    )
}
