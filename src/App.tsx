import './App.css'
import {TodoTable} from "./TodoTable.tsx";
import {TodoCreationBar} from "./TodoCreationBar.tsx";
import {useState} from "react";

function App() {
    const [todos, setTodos] = useState(defaultTodoList)
    const handleAddTodo = (todo: Todo) => {
        const newTodos = [...todos, todo]
        setTodos(newTodos)
    }
    const handleTodoChange = (value: string) => {
        const newTodos = [...todos]
        const changedIndex = newTodos.findIndex((todo) => todo.text === value);
        if (changedIndex !== -1) {
            newTodos[changedIndex].done = !newTodos[changedIndex].done
        }
        setTodos(newTodos)
    }
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold mt-5 mb-10">{"My ToDo list"}</h1>
            <TodoCreationBar onAdd={handleAddTodo}/>
            <TodoTable todos={todos} onTodoChange={handleTodoChange}></TodoTable>
        </div>
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
