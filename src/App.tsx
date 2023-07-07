import './App.css'
import {TodoTable} from "./TodoTable.tsx";
import {TodoCreationBar} from "./TodoCreationBar.tsx";
import {useState} from "react";
import {Footer} from "./Footer.tsx";

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
        <div className="flex flex-col items-center h-screen">
            <div className="grow flex flex-col items-center">
                <h1 className="text-4xl font-bold mt-5 mb-10">{"My ToDo list"}</h1>
                <TodoCreationBar onAdd={handleAddTodo}/>
                <TodoTable todos={todos} onTodoChange={handleTodoChange}></TodoTable>
            </div>
            <Footer/>
        </div>
    )
}

export default App

export interface Todo {
    done: boolean;
    text: string;
}

const defaultTodoList: Todo[] = [
    {done: true, text: "Buy groceries"},
    {done: false, text: "Go pick up Joe"},
    {done: true, text: "Bring the keys to Alice"}
]
