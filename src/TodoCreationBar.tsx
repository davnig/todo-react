import {useState} from "react";
import {Todo} from "./App.tsx";
import {FiPlus} from "react-icons/fi";

export interface Props {
    onAdd: (todo: Todo) => void
}

export const TodoCreationBar = ({onAdd}: Props) => {
    const [todoText, setTodoText] = useState('')
    const handleOnClick = () => {
        setTodoText('')
        onAdd({done: false, text: todoText})
    }
    return (
        <div className="flex justify-center space-x-3 my-10">
            <input type="text"
                   className="p-2 text-lg rounded-lg text-slate-800"
                   placeholder="New todo..."
                   value={todoText}
                   onChange={(e) => {
                       setTodoText(e.target.value)
                   }}
            ></input>
            <button type="button" className="p-3 text-lg bg-slate-900 rounded-lg hover:bg-slate-800"
                    onClick={handleOnClick}><FiPlus/>
            </button>
        </div>
    )
}